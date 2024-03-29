import fs from 'fs';
import path from 'path';
import { RequestHandler } from 'express';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  // Create and Send email
  const msg = {
    to: 'alexwebjr@gmail.com',
    from: 'alexwebjr@gmail.com',
    subject: `${subject} from Alexwebjr`,
    text: `${name} | ${email}`,
    html: `<p>${message}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log('Correo electrónico enviado con éxito');
    })
    .catch((error) => {
      console.error('Error al enviar el correo electrónico:', error);
    });
};

export const getHome: RequestHandler = (req, res, next) => {
  const about = JSON.parse(
    fs.readFileSync(path.resolve(`${__dirname}`, '../data/about.json'), 'utf-8')
  );
  const education = JSON.parse(
    fs.readFileSync(
      path.resolve(`${__dirname}`, '../data/education.json'),
      'utf-8'
    )
  );
  const experience = JSON.parse(
    fs.readFileSync(
      path.resolve(`${__dirname}`, '../data/experience.json'),
      'utf-8'
    )
  );
  const skills = JSON.parse(
    fs.readFileSync(
      path.resolve(`${__dirname}`, '../data/skills.json'),
      'utf-8'
    )
  );
  const certificates = JSON.parse(
    fs.readFileSync(
      path.resolve(`${__dirname}`, '../data/certificates.json'),
      'utf-8'
    )
  );
  const blog = JSON.parse(
    fs.readFileSync(path.resolve(`${__dirname}`, '../data/blog.json'), 'utf-8')
  );
  const portfolio = JSON.parse(
    fs.readFileSync(
      path.resolve(`${__dirname}`, '../data/portfolio.json'),
      'utf-8'
    )
  );

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

export const getPortfolio: RequestHandler = (req, res, next) => {
  const { id } = req.params;

  const portfolios = JSON.parse(
    fs.readFileSync(
      path.resolve(`${__dirname}`, '../data/portfolio.json'),
      'utf-8'
    )
  );

  const portfolio = portfolios.find((x: any) => x.id == id);

  res.status(200).render('portfolio', { portfolio });
};

export const sentMessage: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    await sendEmail(name, email, subject, message);

    res.status(200).json({
      type: 'success',
      message: 'Contact form successfully submitted. Thank you, I will get',
    });
  } catch (error) {
    console.error('Se produjo el error:', error);

    res.status(500).json({
      type: 'danger',
      message: 'Some goes wrong',
    });
  }
};
