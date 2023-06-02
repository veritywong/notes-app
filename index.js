const NotesModel = require('./NotesModel');
const NotesView = require('./NotesView');
const NotesClient = require('./NotesClient');

const model = new NotesModel();
const client = new NotesClient();

// model.addNote('duly noted');
const view = new NotesView(model, client);

// view.displayNotes();
view.displayNotesFromApi();

client.deleteNote();
