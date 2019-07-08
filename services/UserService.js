const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const response = require('../configs/response');
const shareModel = require('../models/ShareCorner')
const Promise = require('bluebird');
const moment = require('moment-timezone');
moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");


module.exports = {
    create: async(data) => {
        try {
            if (data) {
                const set = {
                    UserName: data.UserName,
                    Password: bcrypt.hashSync(data.Password, 14, null),
                    Info: {
                        FullName: data.Info.FullName,
                        BirthDate: moment(data.Info.BirthDate).format("DD-MM-YYYY"),
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
            UserModel.aggregate([{
                $project: {
                    face: {
                        $cond: { if: { $eq: ["$roles", "Administrator"] }, then: { $sum: 1 }, else: 20 }
                    }
                }
            }], (err, users) => {
                console.log(users)
            })

            let result = await UserModel.find().select("_id UserName Info Status CreatedDate roles");
            return result;
        } catch (error) {
            console.log(error)
            return error;
        }
    },
    checkUser: async(data) => {
        return new Promise((resolve, reject) => {
            try {
                if (data) {
                    var condition = {
                        UserName: data.UserName
                    };
                    UserModel.findOne(condition).exec((err, user) => {
                        if (err) {
                            reject(err)
                        } else {

                            if (user && user.comparePassword(data.Password)) {
                                resolve(user)
                            } else {
                                reject(null)
                            }
                        }
                    })
                }
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    }
}