const CategoryModel = require('../models/Category');

module.exports = {
    create: async(data) => {
        console.log(data)
        try {
            if (data) {
                console.log(data);
                let result = await CategoryModel.create(data);
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }

    },
    getParent: async(data) => {
        try {
            if (data) {
                let condition = {
                    _id: data.id
                }
                let result = await CategoryModel.findOne(condition).select({Parent: true});
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }
    },
    updateParent: async(data) => {
        console.log(data)
        try {
            if (data) {
                let condition = {
                    _id: data.id
                }
                let set = {
                    Parent: data.Parent
                }
                let result = await CategoryModel.findOneAndUpdate(condition, set, {new : true});
                return result;
            } else {
                console.log('no data')
            }
        } catch (error) {
            console.log(error)
            return error;
        }
    }
}