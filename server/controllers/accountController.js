import Accounts from "../models/accountModel.js";

export const getAllAccounts = async (req, res) => {

  try {
    const response = await Accounts.findAll();
    res.json(response);
  } catch(error) {
    res.status(500).json({
      message: error
    });
  }
};

export const getAccountById = async (req, res) => {
  try {
      const response = await Accounts.findOne({
          where: {
            accountID: req.params.accountID
          }
      });

      if (!response) {
          return res.status(404).json({ msg: "Account not found" });
      }

      res.json(response);
  } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const saveAccounts = async(req, res) => {

  const {
    account_firstName,
    account_lastName,
    account_email,
    account_type,
    account_isPresent
  } = req.body;

  const account_fullName = `${account_firstName} ${account_lastName}`;

  try {
    const createAccount = await Accounts.create({
      account_fullName,
      account_email,
      account_type,
      account_isPresent,
    });

    res.status(201).json({msg: "Successfully created accounts", account: createAccount});
    
  } catch(error) {
    res.status(500).json({
      message: error
    });
  }
}