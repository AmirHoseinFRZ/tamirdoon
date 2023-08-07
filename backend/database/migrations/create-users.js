const {DataTypes} = require("sequelize");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
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
            },
            imageId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'images',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE', // You can adjust the deletion behavior as needed
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
}
