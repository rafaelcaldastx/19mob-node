const BaseModel = require('./BaseModel');
const cryptoPassword = require('../utils/cryptoPassword');

//export class Users extends BaseModel {
class Users extends BaseModel {
    constructor() {
        super();
    }

    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    //getBy(conditions) {
    getBy(email, password) {
        /*let db = this.db.collection('users');

        conditions.forEach(({ field, operator, value }) =>
            db = db.where(field, operator, value)
        );

        return db.get();*/

        return this.db
            .collection('users')
            .where('email', '==', email)
            //.where('password', '==', cryptoPassword(password))
            .where('password', '==', password)
            .get();

    }

    add(user) {
        return this.db.collection('users').add(user);
    }


}

module.exports = Users