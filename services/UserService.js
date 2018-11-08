const mongoose = require('mongoose');
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const response = require('../configs/response');
const shareModel = require('../models/ShareCorner');
const {generatorTime, formatDate} = require('../libs/shared');
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
                        BirthDate: formatDate(data.BirthDate),
                        FatherName: data.Info.FatherName,
                        MotherName: data.Info.MotherName,
                        Address: data.Info.Address
                    },
                    Roles: data.Roles,
                    CreatedDate: generatorTime()
                };
                UserModel.create(set, (err, user) =>{
                    if(err){
                        return Promise.reject(err);
                    }else{
                        return Promise.resolve(user)
                    }
                })
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
            const condition = {
                UserName: data.UserName
            }
            let result = await UserModel.findOne(condition);
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
            const set = {};
            set.Info = {};
            set.UpdatedDate = generatorTime();
            if(data.FullName){
                set.Info.FullName = data.FullName;
            }
            if(data.BirthDate){
                set.Info.BirthDate = formatDate(data.BirthDate);
            }
            if(data.FatherName){
                set.Info.FatherName = data.FatherName;
            }
            if(data.MotherName){
                set.Info.MotherName = data.MotherName;
            }
            if(data.Address){
                set.Info.Address = data.Address;
            }
            if(data.Roles){
                set.Roles = data.Roles;
            }
            let result = await UserModel.update(condition, set);

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
                console.log(data)
                if (data) {
                    console.log(data)
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