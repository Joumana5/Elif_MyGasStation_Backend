import mongoose from 'mongoose';
const GazStationSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true },
    disponible: { 
         type: Boolean,
         required: true },
    anneDeCreation: { 
         type: Number,
         required: true },
    adresse: { 
        type: String, 
        required: true },

        
        manager: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, // Référence à un seul manager
        clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }], // Liste de clients
});
 


export default mongoose.model('GazStation', GazStationSchema);