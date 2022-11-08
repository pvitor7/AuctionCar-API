import AppDataSource from "../../data-source";
import { Comment } from "../../entities/Comment";
import { Vehicle } from "../../entities/Motor";
import { User } from "../../entities/User";
import { AppError } from "../../erros/AppError";
import { ICommentCreateRequest, ICommentCreateResponse } from "../../interfaces/comment.interface";

const createCommentService = async ({comment, user_id, vehicle_id}:ICommentCreateRequest):Promise<ICommentCreateResponse> => {

    const commentRepository = AppDataSource.getRepository(Comment)
    
    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    const userRepository = AppDataSource.getRepository(User)
    console.log(vehicle_id)
    if ( !comment || !user_id || !vehicle_id) {
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

    const commentary = new Comment()
    commentary.comment  = comment
    commentary.user_name = user.name
    commentary.vehicles = vehicle
    commentary.user     = user

    commentRepository.create(commentary)
    await commentRepository.save(commentary)

    const commentResponse: ICommentCreateResponse = {
        id: commentary.id,
        comment,
        user_name: user.name,
        created_at: commentary.created_at,
        updated_at: commentary.updated_at
    }

    return commentResponse

}

export default createCommentService