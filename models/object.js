import mongoose from 'mongoose';

const object = new mongoose.Schema(
    {
        Id: { type: String, required: true },
        Lable: { type: String, required: true },
        Image: { type: String, required: true },
        Logs: { type: Array }
    },
    { timestamps: true }
)

export const Object = mongoose.model('objects', object)