const NewsModel = require('../models/News');
const rp = require('request-promise');
const isEmpty = require('is-empty');

module.exports = {
    create: async(data) => {
        try {
            var PostName = isEmpty(data.PostName) !=true? data.PostName : '';
            var Content = isEmpty(data.Content) !=true? data.Content : '';
            var UserId = isEmpty(data.UserId) !=true? data.UserId : '';
            var ProfileImage = isEmpty(data.ProfileImage) !=true? data.ProfileImage : '';

            let set = {
                PostName: PostName,
                Content: Content,
                UserId: UserId,
                ProfileImage: ProfileImage,
            }
            let result = await NewsModel.create(set);
            return result;

        } catch (error) {
            return error;
        }
    },
    update: async(data) =>{
        try {
            var PostName = isEmpty(data.PostName) !=true? data.PostName : '';
            var Content = isEmpty(data.Content) !=true? data.Content : '';
            var UserId = isEmpty(data.UserId) !=true? data.UserId : '';
            var ProfileImage = isEmpty(data.ProfileImage) !=true? data.ProfileImage : '';

            let set = {
                PostName: PostName,
                Content: Content,
                UserId: UserId,
                ProfileImage: ProfileImage,
            };
            let condition = {
                NewsId : data.NewsId
            }
            let options = {
                new : true
            }
            let result = await NewsModel.findOneAndUpdate(condition,set, options);
            return result;

        } catch (error) {
            return error;
        }
    },
    list: async(data) => {
        return new Promise((resolve, reject) =>{
            try {
                var limit = isEmpty(dat.limit) != true? data.limit: 10;
                var page = isEmpty(dat.page) != true? data.page: 1;
                var skip = (page -1)*limit;
                var sortKey = isEmpty(dat.sortKey) != true? data.sortKey: "CreatedDate";
                var sortOrder = isEmpty(dat.sortOrder) != true? data.sortOrder: -1;
    
    
                let condition  = {};
                let options = {
                    select: {},
                    sort: {[sortKey]: sortOrder},
                    lean: true,
                    page: page,
                    limit: parseInt(limit)
                }
                
                NewsModel.paginate(condition, options, (error, result) =>{
                    if(error) reject(error);
                    resolve({
                        result: true,
                        data: result.docs,
                        length: result.docs.length,
                        total: result.total,
                        numberPages: result.pages,
                        per_page: limit,
                        skip: skip,
                        limit: limit
                    })
                })
    
            } catch (error) {
                reject(error);
            }
        })
    },
    info: async (data) =>{
        try {
            let condition = {};
            condition["NewsId"] = data.NewsId;
            let result = await NewsModel.findOne(condition);
            return result;
        } catch (error) {
            return error;
        }
    },
}