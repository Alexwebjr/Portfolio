import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express, { Request, Response, NextFunction } from 'express';
import ejs from 'ejs';
import { json } from 'body-parser';

import homeRoutes from './routes/homeRoutes';

const app = express();
//-------------------------------------
//--------------- Parser
app.use(json());

//::::::====== STATIC ======::::::
app.use(express.static(path.join(__dirname, 'public'))); //static HTML

//::::::====== VIEWS ======::::::
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//::::::====== ROUTES ======::::::
app.use('/', homeRoutes);

//ERROR
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
//-------------------------------------
//------------- LISTEN ----------------
app.listen(process.env.PORT, () => {
  console.log(`App runing on port: http://localhost:${process.env.PORT}`);
});
