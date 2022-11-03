import express from 'express';
import "express-async-errors";
import "reflect-metadata";

import user from './routes/user.routes';
import login from './routes/login.routes';
import handleAppErrorMiddleware from './middlewares/handleAppErrors.middleware';
import category from './routes/category.routes';
import motor from './routes/motor.routes';
import login from './routes/login.routes';


const app = express();
app.use(express.json());

app.use("/users", user)
app.use("/categorie",category)
app.use("/vehicle", motor)

app.use("/login", login)

app.use(handleAppErrorMiddleware)

export default app;