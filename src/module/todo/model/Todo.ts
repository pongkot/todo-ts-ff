import {
    DataTypes,
    Model,
} from 'sequelize';
import { Database } from '../../../common/Database';

class Todo extends Model {
}

Todo.init({
    id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.TEXT(),
    },
    isChecked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize: Database.simpleDb(),
    modelName: 'todo',
    createdAt: true,
    updatedAt: true,
    timestamps: true,
});

export { Todo }
