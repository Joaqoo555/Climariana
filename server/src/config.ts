import dotenv from "dotenv";
import { Options } from "sequelize";
dotenv.config();


//Interface Configuration
interface IConfig extends Options {
  db_deploy?: string;
}

let config: IConfig;

if (process.env.NODE_ENV === "production") {
  config = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    //Las variables de entorno se toman como numeros, convierto a tipo numerico el Puertop en el q sera escuchado en el servidor de deploy
    port: Number(process.env.DB_PORT),
     db_deploy: process.env.DB_DEPLOY || `postgresql://postgres:nNWeMPRZ5RvzZ1yRUjLm@containers-us-west-36.railway.app:6296/railway`,
    dialect: "postgres",
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    native: false,
    logging: false,
  };
} else {
  config = {
    username: "postgres",
    password: "123",
    database: "climariana",
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    native: false,
    logging: false,
    
  };
}

export default config;
