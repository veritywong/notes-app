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
        const printedNotes = document.querySelectorAll('#note-item')
        printedNotes.forEach(note => note.remove());

        this.model.notes.forEach((note) => {
            const newNote = document.createElement('div');
            document.querySelector('#new-note').value = ''; // clears input from text box
            newNote.className = 'note-item';
            newNote.innerText = note;
            newNote.id = 'note-item';
            this.mainContainerEl.append(newNote);
        })

        // document.querySelector('div.note-item').remove();
       
    }
}

module.exports = NotesView;