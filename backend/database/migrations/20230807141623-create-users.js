module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                validate: {
                    min: 2,
                    max: 50
                }
            },
            lastName:{
                type: Sequelize.DataTypes.STRING,
                validate: {
                    min: 2,
                    max: 50
                }
            },
            PhoneNumber: {
                type: Sequelize.DataTypes.STRING,
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
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: Sequelize.DataTypes.STRING,
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
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false
            },
            phoneNumberIsVerified: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false
            },
            imageId: {
                type: Sequelize.DataTypes.INTEGER,
                references: {
                    model: 'images',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            createdAt: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.DataTypes.NOW,
            },
            updatedAt: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.DataTypes.NOW,
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
}
