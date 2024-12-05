import mongoose from 'mongoose';
import Localization from './Localization.js';

const GazStationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    yearOfCreation: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }, // Reference to a single manager
    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }], // List of clients
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Localization',
        required: true
    }
});

export default mongoose.model('GazStation', GazStationSchema);