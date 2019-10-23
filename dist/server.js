"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const router = express();
// const {PORT = 3000} = process.env;
// const server = http.createServer(router);
// server.listen(PORT, () =>
//     console.log(`Server is running http://localhost:${PORT}...`)
// );
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.listen(3000, () => console.log('Server listening on port 3000!'));
//# sourceMappingURL=server.js.map