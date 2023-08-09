
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.renameColumn('users', 'PhoneNumber', 'phoneNumber');
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.renameColumn('users', 'phoneNumber', 'PhoneNumber');
  }
};
