// Application_Server/Model/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    userLastName: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ['client', 'manager'],
        required: true
    }
});

export default mongoose.model('users', userSchema);