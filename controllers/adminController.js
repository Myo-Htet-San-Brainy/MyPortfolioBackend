//packages
const { StatusCodes } = require("http-status-codes");

//imports
const Admin = require("../models/adminModel");
const customError = require("../errors");

const adminLogin = async (req, res) => {
  //
  const { password } = req.body;
  //
  const admins = await Admin.find({});
  const isMatch = await admins[0].comparePassword(password);
  if (!isMatch) {
    throw new customError.Unauthenticated("Incorrect Password");
  }
  //generate token
  const token = "token";
  //
  res.StatusCodes(StatusCodes.OK).json({
    success: true,
    token,
  });
};

module.exports = {
  adminLogin,
};
