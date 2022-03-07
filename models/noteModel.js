const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title:String,
  content:String,
});
const NoteCollection = mongoose.model('note',noteSchema);

module.exports = NoteCollection;
