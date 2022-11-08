import AppDataSource from "../../data-source";
import { Comment } from "../../entities/Comment";
import { Vehicle } from "../../entities/Motor";
import { User } from "../../entities/User";
import { AppError } from "../../erros/AppError";
import { ICommentCreateRequest } from "../../interfaces/comment.interface";

const createCommentService = async ({user_comment, user_id, vehicle_id}:ICommentCreateRequest) => {

    const commentRepository = AppDataSource.getRepository(Comment)
    
    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    const userRepository = AppDataSource.getRepository(User)

    if ( !user_comment || !user_id || !vehicle_id) {
        throw new AppError("Illegal Arguments", 400) 
    }

    const vehicle = await vehicleRepository.findOneBy({ id: vehicle_id });

    if ( !vehicle ) {
        throw new AppError("Vehicle not found", 404);
    }

    const user = await userRepository.findOneBy({ id: user_id });

    if ( !user ) {
        throw new AppError("User not found", 404);
    }

    const comment = new Comment()
    comment.comment  = user_comment
    comment.vehicles = vehicle
    comment.user     = user

    commentRepository.create(comment)
    await commentRepository.save(comment)

    return comment

}