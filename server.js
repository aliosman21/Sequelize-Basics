const db = require("./models/index");

(async () => {
   try {
      // const ali = await db.Manager.create({ firstName: "Ali", lastName: "Osman" });
      //const jane = await db.User.create({ firstName: "jane", manager_id: 1 });
      //const mona = await db.User.create({ firstName: "mona", manager_id: 1 });
      //db.User.sync();
      //console.log("Manager Created");
      //const Ali = await db.Manager.create({ firstName: "Ali", user_id: 1 });
      //console.log("User Created");
      const tasks = await db.User.findAll({ include: [{ all: true }] });
      console.log(JSON.stringify(tasks, null, 2));
   } catch (error) {
      console.error("Unable to connect to the database:", error);
   }
})();
