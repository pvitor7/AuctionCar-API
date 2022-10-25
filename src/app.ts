import express from 'express';
import "express-async-errors"
import "reflect-metadata"

import user from './routes/user.routes';
import handleAppErrorMiddleware from './middlewares/handleAppErrors.middleware';


const app = express();
app.use(express.json());

app.use("/users", user)

app.use(handleAppErrorMiddleware)

export default app;