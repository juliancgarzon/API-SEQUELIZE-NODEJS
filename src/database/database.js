import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const DB_URL = process.env.DATABASE_URL || process.env.DB_URL; // 

export const sequelize = DB_URL
  ? new Sequelize(DB_URL, {
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false }, // 🔥 Importante para Render
      },
    })
  : new Sequelize(
      process.env.DB_NAME || 'database-api',
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || '1234',
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: false,
        port: process.env.DB_PORT || 5432,
      }
    );