const router = require('express').Router();

let Tournament = require('../models/tournament.model');

router.route('/').get((req,res) => {
  Tournament.find()
    .then(tournament => res.json(tournament))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const tournamentStage = req.body.tournamentStage;
  const startDate = Date.parse(req.body.startDate);
  const endDate = Date.parse(req.body.endDate);
  const isActive = Number(req.body.isActive);

  const newTournament = new Tournament({
    tournamentStage,
    startDate,
    endDate,
    isActive
  });

  newTournament.save()
    .then(() => res.json('Tournament Added !'))
    .catch(err => res.status(400).json('Error :' + err));
});



module.exports = router;