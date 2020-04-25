const BaseModel = require('./BaseModel');

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
}

module.exports = Users