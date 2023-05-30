// const NotesModel = require('./NotesModel');

class NotesView {

    constructor() {
        // this.notesModel = new NotesModel();
        this.mainContainerEl = document.querySelector('#main-container');
    
        // console.log(this.mainContainerEl);

    }

    displayNotes(notes) {
        // const notes = this.notesModel.getNotes();

        notes.forEach((note) => {
            const newNote = document.createElement('p');
            newNote.className = 'note-item';
            newNote.innerText = note;
            this.mainContainerEl.append(newNote);
        })    
    }

}

module.exports = NotesView;