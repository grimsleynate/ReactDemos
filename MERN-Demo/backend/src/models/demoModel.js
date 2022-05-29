import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DonationSchema = new Schema({
    organizationName: {
        type: String,
        required: "Enter organization name"
    },
    dollarAmount: {
        type: Number,
        required: "Enter amount donated"
    },
    comment: {
        type: String
    },
    createDate: {
        type: Date,
        default: Date.now
    }
})
