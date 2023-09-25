/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./NotesView');
const NotesModel = require('./NotesModel');
const NotesClient = require('./NotesClient');

require('jest-fetch-mock').enableFetchMocks();

jest.mock('./NotesClient');
// jest.mock('./NotesModel');


describe('NotesView', () => {
    let model;
    let client;
    let view;
  
    beforeEach(() => {
      // line below this comment has to go before others!
      // Otherwise you can't put elements in the constructor methods
      document.body.innerHTML = fs.readFileSync('./index.html');
      model = new NotesModel();
      client = new NotesClient();
      view = new NotesView(model, client);
      NotesClient.mockClear();
    });
    // added from Will's
    it('constructs', () => {
        expect(view).toBeTruthy();
        expect(view).toHaveProperty('model', model);
        expect(view).toHaveProperty('client', client);
      });

    it('displays a new note', () => {
        model.addNote('Go to work');
        view.displayNotes()
        const notesElements = document.querySelectorAll('.note');
        expect(notesElements.length).toBe(1);
    })

    xit('displays a new note when value inputted and button clicked', () => {

        const buttonEl = document.querySelector('#add-note-button');
        const inputEl = document.querySelector('#new-note');
        inputEl.value = 'My new note test';
        buttonEl.click();

        expect(document.querySelectorAll('#note-item')).not.toBeNull();
        expect(document.querySelector('div.note-item').innerText).toEqual('My new note test');
    })
    
    xit('displays a new note when value inputted and button clicked', () => {
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

        // mock client methods first
        const mockData = ['mock api note'];
        // this replaces loadNotes with a new function that takes a callback
        // and returns a promise that is using the mockData in the
        // callback. So it's very similar to the real loadNotes, but it
        // skips the fetch to make the test deterministic.
        client.loadNotes.mockImplementation((callback) => {
            return Promise.resolve(callback(mockData));
        });
    
        return view.displayNotesFromApi()
            .then(() => {
                const notes = document.querySelectorAll('.note');
                expect(notes.length).toBe(1);
                expect(notes.item(0).innerText).toBe('mock api note');
            });
    })
})


