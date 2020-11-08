const router = require('express').Router();
let Group = require('../models/group.model');

router.route('/').get((req,res)=>{
  Group.find()
    .then(group => res.json(group))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addGroup').post((req, res) => {
  const group = req.body.group;

  const newGroup = new Group({group});

  newGroup.save()
      .then(()=> res.json('Group added!'))
      .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;