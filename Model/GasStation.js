import mongoose from 'mongoose';

const GasStationSchema = new mongoose.Schema({
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
        ref: 'users',
        required: true
    }, // Reference to a single manager
    location: {
        type: String,
        required: true
    }
});

export default mongoose.model('GasStation', GasStationSchema);