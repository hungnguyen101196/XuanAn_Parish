const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const response = require('../constants/response');
const Promise = require('bluebird');


module.exports = {
    create: async(data) => {
        try {
            if (data) {
                const set = {
                    UserName: data.UserName,
                    Password: bcrypt.hashSync(data.Password, 14, null),
                    Info: {
                        FullName: data.Info.FullName,
                        BirthDate: data.Info.BirthDate,
                        FatherName: data.Info.FatherName,
                        MotherName: data.Info.MotherName,
                        Address: data.Info.Address
                    },
                    roles: data.roles
                }
                let result = await UserModel.create(set);
                return result;
            } else {
                const error = {
                    Success: false,
                    data: null
                }
                return error;
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    },
    findUser: async(data) => {
        try {
            const id = {
                _id: data._id
            }
            let result = await UserModel.findOne(id);
            console.log(result)
            return result;
        } catch (error) {
            return error;
        }
    },
    update: async(data) => {
        try {
            const condition = {
                _id: data._id
            };
            let result = await UserModel.update(condition, data);
            console.log('re');
            console.log(result)
            return result;
        } catch (error) {
            return error;
        }
    },
    delete: async(data) => {
        try {
            const condition = {
                _id: data._id
            };
            const set = {
                Status: response.STATUS[202]
            };
            let result = await UserModel.update(condition, set);
            return result;
        } catch (error) {
            return error;
        };
    },
    list: async() => {
        try {
            let result = await UserModel.find().select("_id UserName Info Status CreatedDate roles");
            return result;
        } catch (error) {
            return error;
        }
    }
}