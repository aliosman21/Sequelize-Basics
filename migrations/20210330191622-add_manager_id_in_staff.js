//  "use strict";

// module.exports = {
//    up: async (queryInterface, Sequelize) => {
//       return queryInterface.sequelize.transaction((t) => {
//          return Promise.all([
//             queryInterface.addColumn(
//                "staffs",
//                "manager_id",
//                {
//                   type: Sequelize.INTEGER,
//                   references: {
//                      model: "managers",
//                      key: "id",
//                   },
//                },
//                { transaction: t }
//             ),
//          ]);
//       });
//    },

//    down: async (queryInterface, Sequelize) => {
//       /**
//        * Add reverting commands here.
//        *
//        * Example:
//        * await queryInterface.dropTable('users');
//        */
//    },
// };
