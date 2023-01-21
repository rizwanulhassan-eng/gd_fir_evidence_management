const {v4: uuidv4} = require("uuid");
const Test = require("../models/test.model");

//methods
const index = async (req, res) => {
    try {
        const tests = await Test.find();
        res.status(200).json(tests);
      } catch (error) {
        res.status(500).send(error.message);
      }
};

const create = async (req, res) => {
    try {
      const newTest = new Test({
        id: uuidv4(),
        name: req.body.name,
        age: Number(req.body.age)
      });
      await newTest.save();
      res.status(201).json(newTest);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

module.exports = {index, create};