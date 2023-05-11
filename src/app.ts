import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRouter from "./routes/users.router";
import { errorHandler } from "./middlewares/handleError.middleware";
import loginRouter from "./routes/login.router";
import categoriesRouter from "./routes/categories.router";
import realEstateRouter from "./routes/realEstate.router";
import schedulesRouter from "./routes/schedules.router";

const app = express();
app.use(express.json());


app.use("/users",userRouter);
app.use("/login",loginRouter);
app.use("/categories",categoriesRouter);
app.use("/realEstate",realEstateRouter);
app.use("/schedules",schedulesRouter);
app.use(errorHandler);



export default app