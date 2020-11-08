const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stageSchema = new Schema({
  stage:{type:String,required:true},
},{
  timestamps:true,
});

const Stage = mongoose.model('Stage',stageSchema);

module.exports=Stage;

