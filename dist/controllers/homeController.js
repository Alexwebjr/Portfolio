"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getHome = (req, res, next) => {
    const about = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(`${__dirname}`, '../data/about.json'), 'utf-8'));
    const education = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(`${__dirname}`, '../data/education.json'), 'utf-8'));
    const experience = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(`${__dirname}`, '../data/experience.json'), 'utf-8'));
    const skills = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(`${__dirname}`, '../data/skills.json'), 'utf-8'));
    const certificates = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(`${__dirname}`, '../data/certificates.json'), 'utf-8'));
    const blog = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(`${__dirname}`, '../data/blog.json'), 'utf-8'));
    const portfolio = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(`${__dirname}`, '../data/portfolio.json'), 'utf-8'));
    res.status(200).render('index', {
        about,
        education,
        experience,
        skills,
        certificates,
        portfolio,
        blog,
    });
};
exports.getHome = getHome;
