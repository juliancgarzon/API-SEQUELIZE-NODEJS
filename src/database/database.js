import Sequelize from 'sequelize';

export const sequelize = new Sequelize ('database-api', 'postgres','1234',{
    host: 'node_db',
    dialect:'postgres',
    logging: false,
});
