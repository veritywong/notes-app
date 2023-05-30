const NotesModel = require('./NotesModel')

describe('NotesModel', () => {
    it('returns an empty array', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([])
    })

    it('returns an array with added note', () => {
        const model = new NotesModel();
        model.addNote('get milk')
        expect(model.getNotes()).toEqual(['get milk'])
    })
    
    it('returns an empty array when reset method called', () => {
        const model = new NotesModel();
        model.addNote('get milk')
        model.reset();
        expect(model.getNotes()).toEqual([])
    })
})