const router = require('express').Router();
let Stage = require('../models/stage.model');

router.route('/').get((req,res) => {
  Stage.find()
    .then(stage => res.json(stage))
    .catch(err => res.status(400).json('Error:'+err));
});

router.route('/addStage').post((req,res) => {
  const stage = req.body.stage;


const newStage = new Stage({stage});

newStage.save()
  .then(()=>res.json('Stage Added!'))
  .catch(err => res.status(400).json('Error:'+err));
});
  module.exports = router;