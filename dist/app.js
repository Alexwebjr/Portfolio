"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: './config.env' });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const homeRoutes_1 = __importDefault(require("./routes/homeRoutes"));
const app = (0, express_1.default)();
//-------------------------------------
//--------------- Parser
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: false }));
//::::::====== Cors ======::::::
app.use((0, cors_1.default)());
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
app.listen(process.env.PORT, () => {
    console.log(`App runing on port: http://localhost:${process.env.PORT}`);
});
