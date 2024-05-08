import Guest from '../models/guestModel.js';

export const getAllGuest = async(req, res) => {
    try {
        const guest = await Guest.findAll();
        response.json(guest);
    } catch (error) {
        res.status(500),json({msg: error.message});
    }
}

export const getGuestById = async(res, req) => {
    try {
        const guest = await Guest.findByPk(req.params.id);
        if(!guest) {
            return res.status(404).json({msg: "Guest not found on the database"});
        }

        res.json(guest);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const saveGuest = async(res, req) => {
    try {
        const createGuest = await Guest.create(req.body);
        res.status(201).json(createGuest);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }

}

export const updateGuest = async(res, req) => {
    try {
        const guest = await Guest.findByPk(req.params.id);

        if(!guest) {
            return res.status(404).json({msg: "Guest not found on the database"});
        }

        await Guest.update(req.body);
        res.json({msg: "Guest updated successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteGuest = async(res, req) => {
    try {
        const guest = await Guest.findByPk(req.params.id);

        
        if(!guest) {
            return res.status(404).json({msg: "Guest not found on the database"});
        }

        await Guest.destroy();
        res.json({msg: "Guest deleted successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}