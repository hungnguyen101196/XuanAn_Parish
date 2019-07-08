// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const response = require('../configs/response');
// const bcrypt = require('bcrypt');
// const beautifulUnique = require('mongoose-beautiful-unique-validation');
// const uniqueValidator = require('mongoose-unique-validator');
// const moment = require('moment-timezone');
// moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY HH:mm");

// const UserSchema = new Schema({
//     UserName: { type: String, required: true, unique: true },
//     Password: { type: String, required: true },
//     Info: {
//         FullName: { type: String, required: true },
//         BirthDate: { type: String, required: true },
//         FatherName: { type: String, required: true },
//         MotherName: { type: String, required: true },
//         Address: { type: String, required: true }
//     },
//     Status: { type: String, default: response.STATUS[200] },
//     CreatedDate: { type: String, default: moment(new Date(Date.now())).format('DD-MM-YYYY HH:mm') },
//     UpdateDate: { type: String },
//     roles: { type: String, required: true }
// });


// UserSchema.plugin(beautifulUnique);
// // UserSchema.pre('save', function(next) {
// //     var user = this;

// //     // only hash the password if it has been modified (or is new)
// //     if (!user.isModified('Password')) return next();

// //     // generate a salt
// //     bcrypt.genSalt(14, function(err, salt) {
// //         if (err) return next(err);

// //         // hash the password using our new salt
// //         bcrypt.hash(user.Password, salt, function(err, hash) {
// //             if (err) return next(err);

// //             // override the cleartext password with the hashed one
// //             user.Password = hash;
// //             next();
// //         });
// //     });
// // });

// UserSchema.methods.hashPassword = function(password) {
//     return bcrypt.hashSync(password, 14);
// };

// UserSchema.methods.comparePassword = function(password) {
//     return bcrypt.compareSync(password, this.Password)
// }

// module.exports = mongoose.model('User', UserSchema);