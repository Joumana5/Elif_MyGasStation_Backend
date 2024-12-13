import GasStation from '../../Model/GasStation.js';

// Get manager's gas station
export async function getGasStation(req, res) {
    try {
        const gasStation = await GasStation.findOne({ manager: req.user.id }).populate('location');
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
        const newGasStation = new GasStation({ ...req.body, manager: req.user.id });
        const savedGasStation = await newGasStation.save();
        res.status(201).json(savedGasStation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Update gas station
export async function updateGasStation(req, res) {
    try {
        const updatedGasStation = await GasStation.findOneAndUpdate(
            { manager: req.user.id },
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

// Delete gas station
export async function deleteGasStation(req, res) {
    try {
        const deletedGasStation = await GasStation.findOneAndDelete({ manager: req.user.id });
        if (deletedGasStation) {
            res.status(200).json({ message: 'Gas station deleted' });
        } else {
            res.status(404).json({ message: 'Gas station not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}