"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log("El servidor esta andando como pedrada mi rey");
});
app.get("/hola", (_req, res) => {
    console.log("server ready");
    res.send("Adios mundo cruel");
});
