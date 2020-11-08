const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  group: {
    type:String, 
    required:true,
    unique:true,
    trim:true,
    minlength:1
  },
});

const Group = mongoose.model('Group',groupSchema);

module.exports = Group