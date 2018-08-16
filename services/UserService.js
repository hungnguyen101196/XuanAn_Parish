const UserModel = require('../models/User');


module.exports = {
    create: async(data) => {
        console.log(data)
        try {
            if (data) {
                const set = {
                    UserName: data.UserName,
                    Password: data.Password,
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
                console.log(result)
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