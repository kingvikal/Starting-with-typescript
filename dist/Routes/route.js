"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Welcome_1 = require("../Controllers/Welcome");
const router = (0, express_1.Router)();
router.get("/", Welcome_1.Welcome);
router.get("/hi", Welcome_1.Hi);
exports.default = router;
