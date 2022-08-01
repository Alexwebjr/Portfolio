"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const app = (0, express_1.default)();
//-------------------------------------
//--------------- Parser
app.use((0, body_parser_1.json)());
//::::::====== STATIC ======::::::
app.use(express_1.default.static(path_1.default.join(__dirname, 'public'))); //static HTML
//::::::====== VIEWS ======::::::
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
//::::::====== ROUTES ======::::::
app.use('/', homeRoutes_1.default);
//ERROR
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
//-------------------------------------
//------------- LISTEN ----------------
app.listen(3000);
