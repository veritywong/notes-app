// const NotesModel = require('./NotesModel');

class NotesView {

    constructor(model) {
        this.model = model
        this.mainContainerEl = document.querySelector('#main-container');

        this.buttonEl = document.querySelector('#add-note-button');

        this.buttonEl.addEventListener('click', () => {
            this.displayNotes();
        });

        console.log(this.model);
    }


    displayNotes() {
        const inputNote = document.querySelector('#new-note').value;
        if (inputNote != '') {
            this.model.addNote(inputNote);
        }
     
        this.model.notes.forEach((note) => {
            const newNote = document.createElement('div');
            
            newNote.id = 'note-item';
            newNote.innerText = note;
            this.mainContainerEl.append(newNote);
        })    
    }
}

module.exports = NotesView;