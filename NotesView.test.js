/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView');
const NotesModel = require('./NotesModel');
const NotesClient = require('./NotesClient');

jest.mock('./NotesClient');
jest.mock('./NotesModel');


describe('NotesView', () => {
    beforeEach(() => {
        NotesModel.mockClear();
        NotesClient.mockClear();
    });

    it('displays a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const mockNotesModel = new NotesModel();
        mockNotesModel.getNotes.mockImplementation(() => ['my notes'])
        const client = new NotesClient();

        const view = new NotesView(mockNotesModel, client);

        view.displayNotes()
        const notesElements = document.querySelectorAll('div.note-item');
        expect(notesElements.length).toBe(1);
        // expect(notesElements[0].innerText).toEqual('my notes');
    })

    xit('displays a new note when value inputted and button clicked', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();
        const client = new NotesClient();
        const view = new NotesView(model, client);


        const buttonEl = document.querySelector('#add-note-button');
        const inputEl = document.querySelector('#new-note');
        inputEl.value = 'My new note test';
        buttonEl.click();

        expect(document.querySelectorAll('#note-item')).not.toBeNull();
        expect(document.querySelector('#note-item').innerText).toEqual('My new note test');
    })
    
    xit('displays a new note when value inputted and button clicked', () => {
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

    it('displays notes from Api', () => {
        const model = new NotesModel();
        const client = new NotesClient();
        const notes = new NotesView(model, client);
        
        notes.displayNotesFromApi()
        expect(document.querySelector('#note-item')).toEqual('This note is coming from the server')
    })
})
