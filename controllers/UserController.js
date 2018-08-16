const UserService = require('../services/UserService');
const CODES = require('../constants/response');
const isEmpty = require('is-empty');

data = {
    UserName: "dnipro",
    Password: "123456",
    Info: {
        FullName: "Dnipro",
        BirthDate: "15/12/2018",
        FatherName: "Dcapro",
        MotherName: "Mary",
        Address: "New York"
    },
    roles: "Customer"
};

module.exports = {

    create: async(req, res) => {
        try {
            let result = UserService.create(data);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}