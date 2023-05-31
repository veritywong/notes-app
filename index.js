const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');

const model = new NotesModel();

// model.addNote('duly noted');
const view = new NotesView(model);

view.displayNotes()
