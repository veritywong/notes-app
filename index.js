const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');

const model = new NotesModel();

model.addNote('my note');
const notes = model.getNotes();
console.log(notes);
const view = new NotesView();
view.displayNotes(notes)