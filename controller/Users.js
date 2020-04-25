const UsersModel = require('../model/Users');
const usersModel = new UsersModel();
class Users {
    get(req, res) {
        const { id } = req.params;

        usersModel.get(id)
            .then((user) => {
                //console.log(user);
                res.json(user.data());
            })
            .catch((error) => {
                console.error(error);
            })

        //res.send(`Eu recebi o parametro ${req.params.id}`);
    }
}

module.exports = Users;