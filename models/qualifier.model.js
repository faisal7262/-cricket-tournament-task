const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qualifierSchema = new Schema({
  stage:{type:String,required:true},
  teamName1:{type:String,required:true},
  groupA:{type:String,required:true},
  points1:{type:Number,required:true},
  team1Status:{type:String,required:true},
  teamName2:{type:String,required:true},
  groupB:{type:String,required:true},
  points2:{type:Number,required:true},
  matchDate:{type:Date,required:true},
  team2Status:{type:String,required:true},
  
},{
  timestamps:true,
});

const Qualifier = mongoose.model('Qualifier',qualifierSchema);

module.exports=Qualifier;