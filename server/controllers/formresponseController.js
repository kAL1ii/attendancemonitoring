import Guest from "../models/guestModel.js";
import Student from "../models/studentModel.js";
import Relative from "../models/relativeModel.js";

//Form Response
export const createFormResponse = async (req, res) => {
  try {
    const {
      Email_address,
      Type,
      firstName,
      lastName,
      studentNo,
      section,
      referredBy,
    } = req.body;

    const upperCaseSection = section.trim().toUpperCase();
    const fullName = `${firstName.trim().toUpperCase()} ${lastName.trim().toUpperCase()}`;
    const upperCasereferredBy = referredBy.trim().toUpperCase();
    try {
      if (Type === "Student") {
        await Student.create({
          studentEmail: Email_address,
          studentNo: studentNo,
          student_fullName: fullName,
          studentSection: upperCaseSection,
          Type: Type,
        });
      } else if (Type === "Invite") {
        await Relative.create({
          relativeEmail: Email_address,
          relativefullName: fullName,
          referredBy: upperCasereferredBy,
          Type: Type,
        });
      } else if (Type === "Guest") {
        await Guest.create({
          guestEmail: Email_address,
          guest_fullName: fullName,
          Type: Type,
        });
      }
      res.status(201).json("Form response saved");
    } catch (error) {
      console.error("Error saving form response:", error);
      res.status(500).json({ msg: error });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const getAccounts = async (req, res) => {

  try {
    const studentModel = await Student.findAll();
    const relativeModel = await Relative.findAll();
    const guestModel = await Guest.findAll();

    res.json({studentModel, relativeModel, guestModel});

  } catch (error) {
    console.log("failed getting account ", error);
  }
};
