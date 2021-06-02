import { Sequelize } from 'sequelize';
import { TDbOption } from './types';

export class Database {
    static createConnection(option: TDbOption): Sequelize {
        const {db, host, user, pass, dialect} = option;
        return new Sequelize(db, user, pass, {host, dialect});
    }

    static simpleDb(
        option: TDbOption = {
            host: 'localhost',
            user: 'root',
            pass: 'P@ssw0rd',
            db: 'simple',
            dialect: 'mysql',
        },
        createConnection = Database.createConnection,
    ): Sequelize {
        return createConnection(option);
    }
}
