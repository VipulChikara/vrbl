const db = require("../models");
const Emails = db.email;
const HeadphoneCount = db.headphoneCount;

// Create and Save a new Emails
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Emails
  const emails = new Emails({
    email: req.body.email,
  });

  // Save Emails in the database
  emails
    .save(emails)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Emails."
      });
    });
};

// Retrieve all Emails from the database.
exports.findAll = (req, res) => {
  var condition =  {};

  Emails.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Emails."
      });
    });
};

//   
exports.updateHeadphone = (req,res)=>{
  let counter = req.params.id
  let query = {}
  update = { expire: new Date() },
  options = { upsert: true, new: true, setDefaultsOnInsert: true };
  
  // Find the document
  HeadphoneCount.findOneAndUpdate(query, update, options, function(error, result) {
      if (error) return;
  
      if (!result&& !result.length) {
        // Create it
        result = new HeadphoneCount();
      } else {
        console.log(result,counter)
        result['headphoneCount']=Number(result['headphoneCount'])+Number(counter)
      }
    // Save the document
    result.save(function(error) {
        if (!error) {
            // Do something with the document
            
      res.send(result)
        } else {
            throw error;
        }
    })
      // do something with the document
  });
}



