'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estados_operaciones', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
 
      estado: {
        type: Sequelize.STRING(50)
      },

      // abreviatura: {
      //   type: Sequelize.STRING(3) o (5)
      // },
      
      activo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1 
      },

      por_defecto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0 
      },

      // orden: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   defaultValue: 0 
      // },

      creado_por: {
        type: Sequelize.STRING(50)
      },

      fecha_creacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInsert: Sequelize.DATEONLY
      },

      modificado_por: {
        type: Sequelize.STRING(50)
      },

      fecha_modificacion: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.DATEONLY,
        onInset: Sequelize.DATEONLY,
        onUpdate: Sequelize.DATEONLY
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estados_operaciones');
  }
};