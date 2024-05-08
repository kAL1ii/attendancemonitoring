import Parent from '../models/parentsModel.js';

export const getAllParent = async(req, res) => {
    try {
        const parent = await Parent.findAll();
        response.json(parent);
    } catch (error) {
        res.status(500),json({msg: error.message});
    }
}

export const getParentById = async(res, req) => {
    try {
        const parent = await Parent.findByPk(req.params.id);
        if(!parent) {
            return res.status(404).json({msg: "Parent not found on the database"});
        }

        res.json(parent);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const saveParent = async(res, req) => {
    try {
        const createParent = await Parent.create(req.body);
        res.status(201).json(createParent);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateParent = async(res, req) => {
    try {
        const parent = await Parent.findByPk(req.params.id);

        if(!parent) {
            return res.status(404).json({msg: "Parent not found on the database"});
        }

        await Parent.update(req.body);
        res.json({msg: "Parent updated successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteParent = async(res, req) => {
    try {
        const parent = await Parent.findByPk(req.params.id);

        
        if(!parent) {
            return res.status(404).json({msg: "Parent not found on the database"});
        }

        await Parent.destroy();
        res.json({msg: "Parent deleted successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}