"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentMessage = exports.getHome = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
const sendEmail = async (name, email, subject, message) => {
    // Create and Send email
    const msg = {
        to: 'alexwebjr@gmail.com',
        from: 'alexwebjr@gmail.com',
        subject: `${subject} from Alexwebjr`,
        text: `${name} | ${email}`,
        html: `<p>${message}</p>`,
    };
    mail_1.default
        .send(msg)
        .then(() => {
        console.log('Correo electrónico enviado con éxito');
    })
        .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
    });
};
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
const sentMessage = async (req, res, next) => {
    //name, email,subject,message
    try {
        const { name, email, subject, message } = req.body;
        await sendEmail(name, email, subject, message);
        res.status(200).json({
            type: 'success',
            message: 'Contact form successfully submitted. Thank you, I will get',
        });
    }
    catch (error) {
        console.error('Se produjo el error:', error);
        res.status(500).json({
            type: 'danger',
            message: 'Some goes wrong',
        });
    }
};
exports.sentMessage = sentMessage;
