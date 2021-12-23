import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';

dotenv.config();
const indexRouter = require('./routes');
const app = express();
app.set('port', process.env.PORT || 8005);