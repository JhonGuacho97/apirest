"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const post_1 = __importDefault(require("./routes/post"));
const cors_1 = __importDefault(require("cors"));
const server = new server_1.default();
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
server.app.use('/user', usuario_1.default);
server.app.use('/post', post_1.default);
mongoose_1.default.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/loginserver', (err) => {
    if (err)
        throw err;
    console.log('base de datos online');
});
server.start(() => {
    console.log(`servidor corriendo en puerto ${server.port}`);
});
