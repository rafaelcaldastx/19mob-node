const supertest = require('supertest');
const app = require('../../server');

jest.mock('../../utils/createToken', () => () => '19mob');

describe('/POST auth', () => {
    it('should be response with token', (done) => {
        supertest(app)
        .post('/auth')
        .send({ email: 'rafael.caldas@outlook.com', password: '123456'})
        .set('Accept', 'application/json')
        .end((err, res) => {
            //console.log(res);
            expect(res.statusCode).toEqual(200);
            expect(res.body.token).toEqual('19mob');
            done();
        })
    }); 

    it('should be response with error: User not found', (done) => {
        supertest(app)
        .post('/auth')
        .send({ email: 'XDXD', password: 'xxxxx'})
        .set('Accept', 'application/json')
        .end((err, res) => {
            //console.log(res);
            expect(res.statusCode).toEqual(401);
            //expect(res.body.code).toEqual('not_found');
            done();
        })
    });
    
});