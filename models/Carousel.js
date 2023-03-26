import mongoose from "mongoose";

const CarouselSchema = new mongoose.Schema({
    image : { type: String , required : true},
    title : { type: String , required : true},
    subTitle : { type: String , required : true},
});

export const CarouselModel = mongoose.model("carousel", CarouselSchema);