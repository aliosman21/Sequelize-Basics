FOREIGN ID: are set in models like the one in manager migration


 *******Careful of who migrates first to create correct relations*******



sequelize <a href="https://sequelize.org/master/index.html">full docs </a>


change sequelize default config of files from   <a href="https://sequelize.org/master/manual/migrations.html#the--code--sequelizerc--code--file">Here</a>




generate migration for adding foreign keys

npx sequelize-cli migration:generate --name add_manager_id_in_staff


example is present in add_manager_id_in_staff.js

MySQL offers EER visual diagrams in Database->ReverseEngineering