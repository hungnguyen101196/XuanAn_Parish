const UserGroupModel = require('../models/UserGroup');
const {generatorTime} = require('../libs/shared');
module.exports = {
    create: async(data) =>{
        return new Promise((resolve, reject) =>{
            try {
                const set = {};
                set.GroupName = data.GroupName;
                let result = UserGroupModel.create(set);
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
    },
    list: async(data) =>{
        return new Promise((resolve, reject) =>{
            try {
                let result = UserGroupModel.find();
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
        
    },
    update: async(data) =>{
        return new Promise((resolve, reject) =>{
            try {
                const condition = {};
                condition._id = data.UserGroupObjectId;
                const set = {};
                set.GroupName = data.GroupName;
                set.CreatedDate = generatorTime();
                let result = UserGroupModel.update(condition, set);
                return resolve(result);
            } catch (error) {
                return reject(error);
            }
        })
        
    },
}