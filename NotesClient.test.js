const NotesClient = require('./NotesClient');

require('jest-fetch-mock').enableFetchMocks()

describe('NotesClient', () => {
    it('calls fetch and loads data', (done) => {
        const client = new NotesClient();

        fetch.mockResponseOnce(JSON.stringify({
   
            notes: 'This note is coming from the server'
        }));

        client.loadNotes((returnedData) => {
            expect(returnedData.notes).toBe('This note is coming from the server');

            done();
        });
    });

    it('sends a post request to the server', () => {
        const client = new NotesClient();
        const inputNote = 'test note'
        client.createNote(inputNote)

        expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3000/notes', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({content: inputNote}),
            }
        )

    });
});