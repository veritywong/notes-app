/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView');
const NotesModel = require('./NotesModel');


describe('NotesView', () => {
    it('displays a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
       
        const view = new NotesView({notes: ['my notes']});

        view.displayNotes()
        const notesElements = document.querySelectorAll('div.note-item');
        expect(notesElements.length).toBe(1);
        // expect(notesElements[0].innerText).toEqual('my notes');
    })

    it('displays a new note when value inputted and button clicked', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const view = new NotesView(model);


        const buttonEl = document.querySelector('#add-note-button');
        const inputEl = document.querySelector('#new-note');
        inputEl.value = 'My new note test';
        buttonEl.click();

        expect(document.querySelectorAll('#note-item')).not.toBeNull();
        expect(document.querySelector('#note-item').innerText).toEqual('My new note test');
    })
    
    it('displays a new note when value inputted and button clicked', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const view = new NotesView(model);


        const buttonEl = document.querySelector('#add-note-button');
        const inputEl = document.querySelector('#new-note');
        inputEl.value = 'My new note test';
        buttonEl.click();

        inputEl.value = 'Another new note test';
        buttonEl.click();

        expect(document.querySelectorAll('#note-item')).not.toBeNull();

        const notesElements = document.querySelectorAll('div.note-item');
        expect(notesElements.length).toBe(2);
    })
})
