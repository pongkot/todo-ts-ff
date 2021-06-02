import { Todo } from '../model/Todo';
import { TodoMapping } from '../mapping/TodoMapping';

export class TodoRepository {
    private static Model = Todo;
    private static Mapping = TodoMapping;

    static async getAll(
        Model = TodoRepository.Model,
        toObject = TodoRepository.Mapping.toObject
    ): Promise<Array<any>> {
        const cursor = await Model.findAll({});
        return cursor.map((doc: Todo) => toObject(doc));
    }
}
