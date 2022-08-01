import { RequestHandler } from 'express';

export const getHome: RequestHandler = (req, res, next) => {
  res.status(200).render('index');
};
