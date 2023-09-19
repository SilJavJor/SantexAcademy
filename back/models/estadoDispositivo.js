// Creacion del modelo de estado de dispositivo

const { Model } = require('sequelize');
//const ModeloBase = require('./modeloBase');

module.exports = (sequelize, DataTypes) => {
  //class Roles extends ModeloBase {
  class EstadoDispositivo extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

      static associate(models) {
      // define association here
    }
  }

  // Inicializar la clase base (ModeloBase)
  //super.initModeloBase(sequelize);

  EstadoDispositivo.init({
    id:  DataTypes.INTEGER,

    estado: DataTypes.STRING,

    // abreviatura: 'xxx' o 'xxxxx',

    activo: DataTypes.INTEGER,

    por_defecto: DataTypes.INTEGER,

    // orden: DataTypes.INTEGER,

    creado_por:  DataTypes.STRING,

    fecha_creacion: DataTypes.DATE,

    modificado_por:  DataTypes.STRING,

    fecha_modificacion: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'EstadoDispositivo',
  });

  return EstadoDispositivo;
};