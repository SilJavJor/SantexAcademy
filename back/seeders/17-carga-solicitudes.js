// "use strict";

// /** @type {import('sequelize-cli').Migration} */

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const datodSolicitudes = [
//       {
//         id_donante: 0,
//         razon_social_donante: "",
//         fecha_donacion: new Date(),
//         descripcion_donacion: "",
//         id_estado_operacion: 0,
//         estado_operacin: "",
//         activo: 1,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       },

//       {
//         id_donante: 0,
//         razon_social_donante: "",
//         fecha_donacion: new Date(),
//         descripcion_donacion: "",
//         id_estado_operacion: 0,
//         estado_operacin: "",
//         activo: 1,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       }
//     ];

//     return queryInterface.bulkInsert("solicitudes", datosSolicitudes, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete("solicitudes", null, {});
//   },
// };