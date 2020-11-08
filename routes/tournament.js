const router = require('express').Router();

let Tournament = require('../models/tournament.model');

router.route('/').get((req,res) => {
  Tournament.find()
    .then(tournament => res.json(tournament))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const startDate = Date.parse(req.body.startDate);
  const endDate = Date.parse(req.body.endDate);
  const newTournament = new Tournament({
    startDate,
    endDate,
  });

  newTournament.save()
    .then(() => res.json('Tournament Added !'))
    .catch(err => res.status(400).json('Error :' + err));
});



module.exports = router;