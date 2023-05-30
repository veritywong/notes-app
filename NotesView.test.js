/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView');
const NotesModel = require('./NotesModel');


describe('NotesView', () => {
    it('displays a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        
        // const model = new NotesModel();
        // model.addNote('my note')
        // const notes = model.getNotes();
        const view = new NotesView();

        view.displayNotes(['my notes'])
        const notesElements = document.querySelectorAll('div#main-container');
        // expect(document.querySelectorAll('#main-container').innerText).toEqual('my note');
        expect(notesElements.length).toBe(1);
    })
})