import mongoose from "mongoose";
const holdingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        qty: {
            type: Number,
            required: true,
        },
        avg: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        net: {
            type: String,
            required: true,
        },
        day: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Holding = mongoose.model("Holding", holdingSchema);

export default Holding;
