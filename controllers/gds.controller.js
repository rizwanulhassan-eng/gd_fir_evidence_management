const GD = require("../models/gd.model");
const Thana = require("../models/thana.model");
const GDType = require("../models/gdType.model");

//methods
const create = async (req, res) => {
    try {
        const thanas = await Thana.find();
        const gdTypes = await GDType.find();
        res.status(200).json({ thanas, gdTypes });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const store = async (req, res) => {
    try {
        const gd = await new GD({
            userId: req.body.userId,
            thanaId: req.body.station,
            gdType: req.body.offence,
            currentAddress: req.body.address,
            mediaGD: req.body.evidence,
            description: req.body.offenceDescription,
            status: "Submitted",
        });
        await gd.save();
        res.status(200).json({ gd });
    } catch (error) {
        res.status(500).send(error.message);
    }
};


/*
const store = async (req, res) => {
    try {
        //randomly assign investigation officer
        const investigationOfficers = await InvestigationOfficer.find({ thana: req.body.station });
        const randomInvestigationOfficer = investigationOfficers[Math.floor(Math.random() * investigationOfficers.length)];

        //randomly assign forensic officer
        const forensicOfficers = await ForensicOfficer.find();
        const randomForensicOfficer = forensicOfficers[Math.floor(Math.random() * forensicOfficers.length)];

        const fir = await new FIR({
            userId: req.body.userId,
            thanaId: req.body.station,
            firType: req.body.offence,
            currentAddress: req.body.address,
            description: req.body.offenceDescription,
            status: "Pending",
            assignedOfficer: randomInvestigationOfficer._id,
            forensicOfficer: randomForensicOfficer._id,
            suspectInfo: req.body.suspect,
            result: "No Result"
        });
        await fir.save();

        //upload all evidences
        // const storage = multer.diskStorage({
        //   destination: function (req, file, cb) {
        //     cb(null, './public/uploads/firEvidences');
        //   },
        //   filename: function (req, file, cb) {
        //     cb(null, Date.now() + '-' + file.originalname);
        //   }
        // });
        // const upload = multer({ storage: storage }).array('evidence', 10);
        // upload(req, res, async function (err) {
        //   if (err) {
        //     res.status(500).send(err.message);
        //   } else {
        //     //save all evidences
        //     const evidences = req.files;
        //     for (let i = 0; i < evidences.length; i++) {
        //       const evidence = await new FIREvidence({
        //         firId: fir._id,
        //         evidence: evidences[i].filename
        //       });
        //       await evidence.save();
        //     }
        //   }
        // });


        res.status(201).json(fir);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
*/

module.exports = { create, store };