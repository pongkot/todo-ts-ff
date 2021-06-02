import { Model } from 'sequelize'

export class TodoMapping {
    static toObject(model: Model<any>) {
        return {
            id: model.getDataValue('id'),
            text: model.getDataValue('text'),
            createdAt: model.getDataValue('createdAt'),
            updatedAt: model.getDataValue('updatedAt'),
        }
    }
}
