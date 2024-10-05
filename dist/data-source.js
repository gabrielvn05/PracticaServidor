"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "ep-yellow-moon-a5c0pocz.us-east-2.aws.neon.tech",
    port: 5432,
    username: "ServidorW_owner",
    password: "PF2mbOCJBA6q",
    database: "ServidorW",
    synchronize: true,
    logging: false,
    ssl: {
        rejectUnauthorized: false
    },
    entities: [User_1.Pregunta, User_1.InsumoEvaluacion, User_1.Examen, User_1.Usuario],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map