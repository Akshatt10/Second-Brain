"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddlware = void 0;
const config_1 = require("../config");
const jsonwebtoken_1 = require("jsonwebtoken");
const userMiddlware = (req, res, nest) => {
    const header = req.headers["authorization"];
    const decoded = jsonwebtoken_1.jwt.verify(header, config_1.JWT_SECRET);
};
exports.userMiddlware = userMiddlware;
