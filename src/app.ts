import express from 'express';
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";

import user from './routes/user.routes';
import login from './routes/login.routes';
import handleAppErrorMiddleware from './middlewares/handleAppErrors.middleware';


const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", user)
app.use("/login", login)

app.use(handleAppErrorMiddleware)

export default app;