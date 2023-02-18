const User = require("../models/user.model");
const {readFileSync} = require('fs');

//methods
const index = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const newUser = new User({
      nidNumber: req.body.nidNumber,
      faceRecognition: req.body.faceRecognition,
      phoneNumber: req.body.phoneNumber,
      otp: req.body.otp,
      userStatus: req.body.userStatus,
      createdOn: Date.now()
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try{
    const user = await User.findOne({ _id: req.params.id });
    user.nidNumber = req.body.nidNumber,
    user.faceRecognition = req.body.faceRecognition,
    user.phoneNumber = req.body.phoneNumber,
    user.otp = req.body.otp,
    user.userStatus = req.body.userStatus,
    await user.save();
    res.status(200).json(user);
  }catch (error) {
    res.status(500).send(error.message);
  }
};

const destroy = async (req, res) => {
  try{
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json(true);
  }catch (error) {
    res.status(500).send(error.message);
  } 
};

const verify = async (req, res) => {
  try{
    citizens = JSON.parse(readFileSync(__dirname + '../../models/api/nid.json'));
    const user = citizens.find(citizen => citizen.nid === req.body.nidNumber && citizen.face_recognition === req.body.faceRecognition);
    if(user){
      const isExists = await User.findOne({ nidNumber: req.body.nidNumber });
      if(isExists){
        res.status(400).json({message: "User already exists"});
      }else{
      res.status(200).json(user);
      }
    }else{
      res.status(404).json({message: "Invalid NID or Face Recognition"});
    }
 
  }catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyPhoneNumber = async (req, res) => {
  try{
    const isExists = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if(!isExists){
    const newUser = new User({
      nidNumber: req.body.nidNumber,
      faceRecognition: req.body.faceRecognition,
      phoneNumber: req.body.phoneNumber,
      otp: Math.floor((Math.random() * 9999) + 1000),
      userStatus: "pending",
      createdOn: Date.now()
    });
    await newUser.save();
    res.status(201).json(newUser._id);
    }else{
      res.status(400).json({message: "Phone number already exists"});
    }
  }
  catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyOTP = async (req, res) => {
  try{
    const user = await User.findOne({ _id: req.body.userId });
    if(user.otp === req.body.otp){
      user.userStatus = "verified";
      user.otp = null;
      await user.save();
      res.status(200).json(true);
    }else{
      res.status(404).json({message: "Invalid OTP"});
    }
  }
  catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyLogin = async (req, res) => {
  try{
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber, userStatus: "verified", nidNumber: req.body.nidNumber });
    if(user){
      user.otp = Math.floor((Math.random() * 9999) + 1000);
      await user.save();
      res.status(200).json(user._id);
    }else{
      res.status(404).json({message: "Invalid Phone Number or NID"});
    }
  }
  catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyLoginOTP = async (req, res) => {
  try{
    const user = await User.findOne({ _id: req.body.userId });
    if(user){
      if(user.otp === req.body.otp){
        user.otp = null;
        await user.save();
        res.status(200).json(user._id);
      }
      else{
        res.status(404).json({message: "Invalid OTP"});
      }
    }else{
      res.status(404).json({message: "Invalid OTP"});
    }
  }
  catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {index, show, create, update, destroy, verify, verifyPhoneNumber, verifyOTP, verifyLogin, verifyLoginOTP};