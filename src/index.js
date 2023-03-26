import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { carouselRouter } from '../routes/carousel.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/carousel", carouselRouter);

mongoose.connect("mongodb+srv://chanuga:chanuga@carousel.vhdnm97.mongodb.net/carousel?retryWrites=true&w=majority");

app.listen(3600, () => console.log("Server Started "))