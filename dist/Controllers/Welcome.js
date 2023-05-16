"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hi = exports.Welcome = void 0;
const Welcome = (req, res) => {
    res.send("Welcome to the MainPage");
};
exports.Welcome = Welcome;
const Hi = (req, res) => {
    let greetedBy = "Alish Karki";
    res.send(`Welcome to our page. Greeting from ${greetedBy}`);
};
exports.Hi = Hi;
