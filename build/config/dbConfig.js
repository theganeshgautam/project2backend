"use strict";
//database configurations
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '', //mysql ko pw
    db: 'project2database', //mysql ko database name
    dialect: 'mysql',
    pool: {
        idle: 10000,
        max: 5,
        min: 0,
        acquire: 10000
    }
};
//so aba hamile mathiko dbConfig vanne object export garne
exports.default = dbConfig;
