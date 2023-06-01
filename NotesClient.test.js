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
});