import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

type DB = "mysql"

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as DB,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [`${process.cwd()}/src/entity/*.ts`],
  migrations: [`${process.cwd()}/src/migration/*.ts`],
  // @ts-ignore
  seeds: [`${process.cwd()}/src/seeds/*.ts`],
  // @ts-ignore
  factories: [`${process.cwd()}/src/factory/*.ts`],
});