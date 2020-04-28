const createToken = require('../createToken');

const mockData = { id: 1 }

describe('createToken', () => {
    it('should return token with defalt expires', () => {
        expect(createToken(mockData)).not.toBeNull();
    })

    it('should return token with param expires', () => {
        expect(createToken(mockData, '24h')).not.toBeNull();
    })

})


