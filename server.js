/*jshint esversion:8 */
const db = require("./models/index");

(async () => {
   try {
      // const ali = await db.Manager.create({ firstName: "Ali", lastName: "Osman" });
      // const jane = await db.User.create({ firstName: "jane", manager_id: 1 });
      // const mona = await db.User.create({ firstName: "mona", manager_id: 1 });
      // const soad = await db.User.create({ firstName: "soad" });
      //db.User.sync();
      //console.log("Manager Created");
      //const Ali = await db.Manager.create({ firstName: "Ali", user_id: 1 });
      //console.log("User Created");
      //SELECT------------------------------------------------------------------------
      // const ali = await db.Manager.findOne({
      //    where: {
      //       firstName: "Ali",
      //    },
      //    include: db.User,
      // });
      // console.log(ali);
      // console.log(JSON.stringify(ali, null, 2));
      //SELECT------------------------------------------------------------------------
      // const jane = await db.User.findOne({
      //    where: {
      //       firstName: "jane",
      //    },
      //    include: db.Manager,
      // });
      // console.log(jane.Manager.firstName);
      // console.log(JSON.stringify(tasks, null, 2)); //auto load models
      //SELECT------------------------------------------------------------------------
      //----------------------------------------------LAZY LOADING--------------------------------------\\
      /*     const awesomeCaptain = await db.User.findOne({
         where: {
            firstName: "mona",
         },
      });
      console.log(awesomeCaptain.firstName);
      const hisShip = await awesomeCaptain.getManager();
      console.log(hisShip.firstName); */
      //----------------------------------------------LAZY LOADING--------------------------------------\\
      //----------------------------------------------EAGER LOADING--------------------------------------\\
      /* const awesomeCaptain = await db.User.findOne({
         where: {
            firstName: "mona",
         },
         include: db.Manager,
      });
      console.log(awesomeCaptain.firstName);
      console.log(awesomeCaptain.Manager.firstName); */
      //----------------------------------------------EAGER LOADING--------------------------------------\\
      //--------------------------------------------------------------------------------------------------
      // const tasks = await db.users.findAll({ include: [{ all: true }] }); // auto load models
      // console.log(JSON.stringify(tasks, null, 2)); //auto load models
      //--------------------------------------------------------------------------------------------------
      //const tasks = await db.User.findAll({ include: [{ all: true }] });
      //console.log(JSON.stringify(tasks, null, 2));
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
})();
