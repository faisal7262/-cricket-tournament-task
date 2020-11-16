const router = require('express').Router();
let Qualifier = require('../models/qualifier.model');

router.route('/').get((req,res) => {
  Qualifier.find()
    .then(qualifier => res.json(qualifier))
    .catch(err => res.status(400).json('Error'+err));
});

router.route('/addQualifier').post((req,res) => {
  const stage = req.body.stage;
  const teamName1 = req.body.teamName1;
  const groupA = req.body.groupA;
  const points1 = Number(req.body.points1);
  const team1Status = req.body.team1Status;
  const teamName2 = req.body.teamName2;
  const groupB = req.body.groupB;
  const points2 = Number(req.body.points2);
  const team2Status = req.body.team2Status;
  const matchDate = Date.parse(req.body.matchDate);
  
  

  const newQualifier = new Qualifier({
    stage,
    teamName1,
    groupA,
    points1,
    team1Status,
    teamName2,
    groupB,
    points2,
    team2Status,
    matchDate,
    
  });

  newQualifier.save()
    .then(() => res.json('Qualifier Added !'))
    .catch(err => res.status(400).json('Error'+err));
});

router.route('/:id').get((req,res) =>{
  Qualifier.findById(req.params.id)
    .then(qualifier => res.json(qualifier))
    .catch(err => res.status(400).json('Error' +err));
});

router.route('/update/:id').post((req,res) => {
  Qualifier.findById(req.params.id)
    .then(qualifier => {
      qualifier.stage = req.body.stage;
      qualifier.teamName1 = req.body.teamName1;
      qualifier.groupA = req.body.groupA;
      qualifier.points1 = Number(req.body.points1);
      qualifier.team1Status = req.body.team1Status;
      qualifier.teamName2 = req.body.teamName2;
      qualifier.groupB = req.body.groupB;
      qualifier.points2 = Number(req.body.points2);
      qualifier.matchDate = Date.parse(req.body.matchDate);
      qualifier.team2Status = req.body.team2Status;

      qualifier.save()
        .then(() => res.json('qualifier Update !'))
        .catch(err => res.status(400).json('Error' +err));
    })
    .catch(err => res.status(400).json('Error' +err));

  });



module.exports = router;