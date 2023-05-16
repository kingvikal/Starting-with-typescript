"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./Routes/route"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("test", route_1.default);
app.get("/", (req, res) => {
    res.send("Hello from Express  typescript  typeorm");
});
app.get("/hi", (req, res) => {
    res.send("Hello from ALish");
});
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
