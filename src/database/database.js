import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'database-api',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '1234',
    {
    host: process.env.DB_HOST || 'database',
    dialect: 'postgres',
    logging: false,
    port: process.env.DB_PORT || 5432,
    }
);
