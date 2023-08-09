module.exports = {
    up: async (queryInterface, sequelize) => {
        await queryInterface.createTable('images', {
            id: {
                type: sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            filename: {
                type: sequelize.DataTypes.STRING,
                allowNull: false,
            },
            filepath: {
                type: sequelize.DataTypes.STRING,
                allowNull: false,
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('images');
    }
}