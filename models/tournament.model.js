const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  startDate:{type:Date,required:true},
  endDate:{type:Date,required:true},
},{
  timestamps:true,
});

const Tournament = mongoose.model('Tournament',tournamentSchema);

module.exports=Tournament;