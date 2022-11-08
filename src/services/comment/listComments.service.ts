import AppDataSource from "../../data-source";
import { Comment } from "../../entities/Comment";

const listCommentsService = async (): Promise<Comment[]> => {

    const commentRepository = AppDataSource.getRepository(Comment)

    const comments = commentRepository.query('select from * comment')

    return comments
}

export default listCommentsService