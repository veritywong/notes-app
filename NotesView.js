// const NotesModel = require('./NotesModel');

class NotesView {

    constructor(model, client) {
        this.model = model
        this.client = client
        this.mainContainerEl = document.querySelector('#main-container');
        this.buttonEl = document.querySelector('#add-note-button');

        this.buttonEl.addEventListener('click', () => {
            const inputNote = document.querySelector('#new-note').value;
            this.addNoteToApi(inputNote);
        });
    }

    displayNotes() {
        const printedNotes = document.querySelectorAll('.note')
        printedNotes.forEach(item => item.remove());

        const notes = this.model.getNotes();
        notes.forEach((note) => {
            const newNote = document.createElement('div');
            document.querySelector('#new-note').value = ''; // clears input from text box
            newNote.className = 'note';
            newNote.textContent = note;
            this.mainContainerEl.append(newNote);
        })
       
    }

    addNote(inputNote) {
        this.model.addNote(inputNote);
        this.displayNotes()
    }

    addNoteToApi(inputNote) {
        this.client.createNote(inputNote)
          .then(() => {
            this.displayNotesFromApi()
          })
        
    }

    displayNotesFromApi() {
        return this.client.loadNotes((apiData) => {
            this.model.setNotes(apiData);
            this.displayNotes()
        }, (callback) => {
            callback(this.displayError())
        });
    }
    
    displayError() {
        const newNote = document.createElement('div');
        document.querySelector('#new-note').value = ''; // clears input from text box
        newNote.className = 'error';
        newNote.textContent = 'Oops, something went wrong!';
        this.mainContainerEl.append(newNote);
    }
}

module.exports = NotesView;