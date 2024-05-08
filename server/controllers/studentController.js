import Student from '../models/studentModel.js';

export const getAllStudent = async(req, res) => {
    try {
        const student = await Student.findAll();
        res.json(student);
    } catch (error) {
        res.status(500).json({msg: error.mesages});
    }
}

export const getStudentById = async(res, req) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if(!student) {
            return res.status(404).json({msg: "Student not found on the database"});
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const saveStudent = async(res, req) => {
    try {
        const createStudent = await Student.create(req.body);
        res.status(201).json(createStudent);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateStudent = async(res, req) => {
    try {
        const student = await Student.findByPk(req.params.id);

        if(!student) {
            return res.status(404).json({msg: "Student not found on the database"});
        }

        await Student.update(req.body);
        res.json({msg: "Student updated successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteStudent = async(res, req) => {
    try {
        const student = await Student.findByPk(req.params.id);

        
        if(!student) {
            return res.status(404).json({msg: "Student not found on the database"});
        }

        await Student.destroy();
        res.json({msg: "Student deleted successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}