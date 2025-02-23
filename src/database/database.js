import Sequelize from 'sequelize';

export const sequelize = new Sequelize ('database-api', 'postgres','1234',{
    host: 'localhost',
    dialect:'postgres',
    logging: false,
});
