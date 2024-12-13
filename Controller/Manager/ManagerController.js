import GasStation from '../../Model/GasStation.js';

// Get all gas stations
export async function getAllGasStations(req, res) {
    try {
        const gasStations = await GasStation.find().populate('location');
        res.status(200).json(gasStations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get gas station by ID
export async function getGasStation(req, res) {
    const { id } = req.params;
    try {
        const gasStation = await GasStation.findById(id).populate('location');
        if (gasStation) {
            res.status(200).json(gasStation);
        } else {
            res.status(404).json({ message: 'Gas station not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Create a new gas station
export async function createGasStation(req, res) {
    try {
        const newGasStation = new GasStation(req.body);
        const savedGasStation = await newGasStation.save();
        res.status(201).json(savedGasStation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Update gas station by ID
export async function updateGasStation(req, res) {
    const { id } = req.params;
    try {
        const updatedGasStation = await GasStation.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        ).populate('location');
        if (updatedGasStation) {
            res.status(200).json(updatedGasStation);
        } else {
            res.status(404).json({ message: 'Gas station not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Delete gas station by ID
export async function deleteGasStation(req, res) {
    const { id } = req.params;
    try {
        const deletedGasStation = await GasStation.findByIdAndDelete(id);
        if (deletedGasStation) {
            res.status(200).json({ message: 'Gas station deleted' });
        } else {
            res.status(404).json({ message: 'Gas station not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
