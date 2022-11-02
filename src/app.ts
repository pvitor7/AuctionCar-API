import express from 'express';
import "express-async-errors"
import "reflect-metadata"

import user from './routes/user.routes';
import handleAppErrorMiddleware from './middlewares/handleAppErrors.middleware';
import category from './routes/category.routes';


const app = express();
app.use(express.json());

app.use("/users", user)
app.use("/categorie",category)

app.use(handleAppErrorMiddleware)

export default app;