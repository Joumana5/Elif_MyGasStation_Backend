import mongoose from 'mongoose';

const LocalizationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Localization', LocalizationSchema);