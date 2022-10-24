import express from 'express';
import user from './routes/user.routes';

import "reflect-metadata"


const app = express();
app.use(express.json());

app.use("/users", user)

export default app;