'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: 'Ocean royal blue shirt',
        price: '600000',
        image: '../../assets/img/Ocean shirt.png',
        discount: '10',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Basic black shirt',
        price: '500000',
        image: '../../assets/img/Basic black shirt.png',
        discount: '25',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Running orange shirt',
        price: '450000',
        image: '../../assets/img/Running orange shirt.png',
        discount: '15',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Angel white shirt',
        price: '499000',
        image: '../../assets/img/Angel white shirt.png',
        discount: '20',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Ocean royal blue shorts',
        price: '299000',
        image: '../../assets/img/Ocean royal blue shorts.png',
        discount: '5',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Ocean royal blue shirt',
        price: '600000',
        image: '../../assets/img/Ocean shirt.png',
        discount: '12',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Ocean royal blue shirt',
        price: '600000',
        image: '../../assets/img/Ocean shirt.png',
        discount: '10',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Ocean royal blue shirt',
        price: '600000',
        image: '../../assets/img/Ocean shirt.png',
        discount: '0.1',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      }, 
      {
        name: 'Ocean royal blue shirt',
        price: '600000',
        image: '../../assets/img/Ocean shirt.png',
        discount: '0.1',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      },
      {
        name: 'Ocean royal blue shirt',
        price: '600000',
        image: '../../assets/img/Ocean shirt.png',
        discount: '0.1',
        description: 'The best shirt for you, do not ignore',
        unit: 'VND',
        status: 'available',
        updatedAt: "2023-08-08",
        createdAt: "2023-08-08"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
