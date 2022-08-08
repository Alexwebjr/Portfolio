import fs from 'fs';
import path from 'path';
import { RequestHandler } from 'express';

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
