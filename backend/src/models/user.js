const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db.js");
const Image = require('./image');
const jwt = require('jsonwebtoken');
const config = require('config');
const Joi = require('joi');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 2,
            max: 50
        }
    },
    lastName:{
        type: DataTypes.STRING,
        validate: {
            min: 2,
            max: 50
        }
    },
    PhoneNumber: {
        type: DataTypes.STRING,
        validate: {
            isPhoneNumberFormat(value) {
                const phoneNumberRegex = /^\d{11}$/;

                if (!phoneNumberRegex.test(value)) {
                    throw new Error('Invalid phone number format. Please use XXXX-XXX-XXXX.');
                }
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isStrongPassword(value){
                const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/;

                if(!strongPasswordRegex.test(value))
                    throw new Error('Its not strong password.');
            }
        }
    },
    emailIsVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    phoneNumberIsVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
    {
        tableName: 'users',
    });

User.generateAuthToken = function(){
    return jwt.sign({id: this.id, email: this.email, name: this.name, lastName: this.lastName } , config.get('jwtPrivateKey'));
}

User.hasOne(Image, {
    foreignKey: 'ImageId',
});

function userValidate(user) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        phoneNumber: Joi.string().pattern(/^\d{11}$/).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/).required()
    })
    return schema.validate(user);
}
module.exports = { User, userValidate };
