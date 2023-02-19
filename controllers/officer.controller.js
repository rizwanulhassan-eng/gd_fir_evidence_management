const Officer = require("../models/investigationOfficer.model");
const FIR = require("../models/fir.model");
const { readFileSync } = require('fs');

// methods
const index = async (req, res) => {
  try {
    const officers = await Officer.find();
    res.status(200).json(officers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const officer = await Officer.findOne({ _id: req.params.id });
    res.status(200).json(officer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const officer = await Officer.findOne({ _id: req.params.id });
    officer.id = req.body.id;
    officer.phoneNumber = req.body.phoneNumber;
    officer.otp = req.body.otp;
    officer.officerStatus = req.body.officerStatus;
    officer.officerRank = req.body.officerRank;
    officer.officerPoint = req.body.officerPoint;
    officer.thana = req.body.thana;
    await officer.save();
    res.status(200).json(officer);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const destroy = async (req, res) => {
  try {
    await Officer.deleteOne({ _id: req.params.id });
    res.status(200).json(true);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyLogin = async (req, res) => {
  try {
    const officer = await Officer.findOne({ phoneNumber: req.body.phoneNumber, id: req.body.id });
    if (officer) {
      officer.otp = Math.floor((Math.random() * 9999) + 1000);
      await officer.save();
      res.status(200).json(officer._id);
    } else {
      res.status(404).json({ message: "Invalid Phone Number or ID" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyLoginOTP = async (req, res) => {
  try {
    const officer = await Officer.findOne({ _id: req.body.OfficerId });
    if (officer) {
      if (officer.otp === req.body.otp) {
        officer.otp = null;
        await officer.save();
        res.status(200).json(officer._id);
      }
      else {
        res.status(404).json({ message: "Invalid OTP" });
      }
    } else {
      res.status(404).json({ message: "Invalid Officer" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const assignedCases = async (req, res) => {
  try {
    const officer = await Officer.findOne({ _id: req.body.policeId });
    if (officer) {
      const firs = await FIR.find({ assignedOfficer: officer._id }).populate("userId")
        .populate("thanaId")
        .populate("firType")
        .populate("assignedOfficer")
        .populate("forensicOfficer")
        .populate("suspectInfo");
      res.status(200).json(firs);
    } else {
      res.status(404).json({ message: "Invalid Officer" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { index, show, update, destroy, verifyLogin, verifyLoginOTP, assignedCases };
