// Creacion del modelo de donecion

const { Model } = require("sequelize");
//const ModeloBase = require('./modeloBase');
const Donante = require("./donante");
const EstadoOperacion = require("./estadoOperacion");

module.exports = (sequelize, DataTypes, Deferrable) => {
  //  class Usuario extends ModeloBase {
  class Donacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Donante.belongsTo(models.Donante, { foreignKey: "id_donante" });

      Donante.belongsTo(models.EstadoOperacion, { foreignKey: "id_estado_operacion" });
    }
  }

  // Inicializar la clase base
  //super.initModeloBase(sequelize);

  Donacion.init(
    {
      // id: DataTypes.INTEGER,

      id_doncacion: DataTypes.INTEGER,

      razon_social_donante: DataTypes.STRING,

      descripcion_donacion: DataTypes.STRING,

      fecha_donacion: DataTypes.DATE,

      id: DataTypes.INTEGER,

      id_estado_operacion: {
        type: DataTypes.INTEGER,

        references: {
          // Se toma de la ayuda de Sequelize
          // This is a reference to another model
          model: EstadoOperacion,

          // This is the column name of the referenced model
          key: "id",
        },
      },

      estado_operacion: DataTypes.STRING,

      activo: DataTypes.INTEGER,

      creado_por: DataTypes.STRING,

      fecha_creacion: DataTypes.DATE,

      modificado_por: DataTypes.STRING,

      fecha_modificacion: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Donacion",
    }
  );

  return Donacion;
};
