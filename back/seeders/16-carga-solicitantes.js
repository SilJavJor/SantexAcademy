// "use strict";

// /** @type {import('sequelize-cli').Migration} */

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     const datosSolicitantes = [
//       {
//         razon_social: "Solicitante",
//         email: "",
//         calle: "",
//         numero: "",
//         piso: "",
//         departamento: "",
//         codigo_postal: "",
//         id_descripcion_telefono: 1,
//         descripcion_telefono: "",
//         numero_telefono: 0,
//         activo: 1,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       },

//       {
//         razon_social: "Solicitante",
//         email: "",
//         calle: "",
//         numero: "",
//         piso: "",
//         departamento: "",
//         codigo_postal: "",
//         id_descripcion_telefono: 1,
//         descripcion_telefono: "",
//         numero_telefono: 0,
//         activo: 1,
//         creado_por: "Sistema",
//         fecha_creacion: new Date(),
//         modificado_por: "Sistema",
//         fecha_modificacion: new Date(),
//       }
//     ];

//     return queryInterface.bulkInsert("solicitantes", datosSolicitantes, {});
//   },

//   down: async (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete("solicitantes", null, {});
//   },
// };