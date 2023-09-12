"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const homeController_1 = require("../controllers/homeController");
const homeController_2 = require("../controllers/homeController");
const router = (0, express_1.Router)();
router.get('/', homeController_1.getHome);
router.post('/ContactMail', homeController_2.sentMessage);
exports.default = router;
