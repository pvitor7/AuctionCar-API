import express from 'express';
import "express-async-errors";
import "reflect-metadata";
import cors from "cors";

import user from './routes/user.routes';
import login from './routes/login.routes';
import handleAppErrorMiddleware from './middlewares/handleAppErrors.middleware';
import category from './routes/category.routes';
import motor from './routes/motor.routes';
import comment from './routes/comment.routes';
import gallery from './routes/gallery.routes';


const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", user)
app.use("/login", login)
app.use("/categorie",category)
app.use("/vehicle", motor)

app.use("/comment",comment)
app.use("/gallery",gallery)


app.use(handleAppErrorMiddleware)

export default app;