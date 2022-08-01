"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const getHome = (req, res, next) => {
    res.status(200).render('index');
};
exports.getHome = getHome;
