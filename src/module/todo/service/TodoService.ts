import { TodoRepository } from '../repository/TodoRepository';

export class TodoService {
    private static Repository = TodoRepository

    static async getTodo(
        getTodoList = TodoService.Repository.getAll()
    ) {
        const docs = await getTodoList
        return docs.map(doc => ({
            id: doc.id,
            text: doc.text,
            createdAt: doc.createdAt.toISOString(),
            updatedAt: doc.updatedAt.toISOString(),
            facet: Math.random() * 10 * 100
        }))
    }
}
