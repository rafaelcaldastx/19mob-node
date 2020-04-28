const cryptoPassword = require('../cryptoPassword');

const mockData = '123456'

describe('cryptoPassword', () => {
    it('should return cypto password', () => {
        expect(cryptoPassword(mockData)).not.toBeNull();
    })

    it('should return cypto password', () => {
        expect(cryptoPassword(mockData))
            .toEqual('6ddd2acb2b28075435746f34c1dbddecf2c2056c2b52b1c9c9a7f128646e257e0368dc810caba30ee7eba1d40629af2fdc1cc100de352fcbe8df7a25ae8fc0bf');
    })

})