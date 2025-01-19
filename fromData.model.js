import mongoose from "mongoose";
const fromSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,

    },
    phone: {
        type: 'string',
        required: true,

    },

    details: {
        type: 'string',
        required: true,

    },

}, { timestamps: true });

export const FromData = mongoose.model('fromData', fromSchema);
