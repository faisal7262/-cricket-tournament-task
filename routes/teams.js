const router = require('express').Router();

let Team = require('../models/teams.model');

router.route('/').get((req,res) => {
  Team.find()
    .then(team => res.json(team))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/addTeam').post((req,res) => {
  const teamName = req.body.teamName;
  const Points = Number(req.body.Points);

  const teams = new Team({
    teamName,
    Points,
  });
  teams.save()
  .then(() => res.json('Teams Saved !'))
  .catch(err => res.status(400).json('Error :' + err));
});

module.exports = router;