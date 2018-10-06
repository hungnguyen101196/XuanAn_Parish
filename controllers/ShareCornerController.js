const ShareCornerService = require('../services/ShareCornerService');
const Codes = require('../constants/response');
const mongoose = require('mongoose')

module.exports = {
    create: async(req, res) => {
        try {
            var d = {
                PostName: "test1",
                Content: "test1",
                UserId: "5ba8fd4ddc7a161a96331563",
                Status: "Active",
                Image: "test1",
            }
            let result = await ShareCornerService.create(d);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    },
    list: async(req, res) => {
        try {
            var d = {
                UserId: "5ba8fd4ddc7a161a96331563",
                Status: "Active"
            }
            let result = await ShareCornerService.list(d);
            console.log(result);
            return res.json(result);
        } catch (error) {
            return res.json(error)
        }
    }
}