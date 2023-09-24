//packages
const { StatusCodes } = require("http-status-codes");

//imports
const Admin = require("../models/adminModel");
const customError = require("../errors");
const { createJWT } = require("../utils/jwt");

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
  const token = createJWT();
  //
  res.status(StatusCodes.OK).json({
    success: true,
    data: token,
  });
};

const changePassword = async (req, res) => {
  //
  const { password } = req.body;
  //
  const admins = await Admin.find({});
  admins[0].password = password;
  admins[0].save();
  //
  res.status(StatusCodes.OK).json({
    success: true,
  });
};

//temp

const createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);
  res.json(admin);
};

module.exports = {
  adminLogin,
  createAdmin,
  changePassword,
};
