FOREIGN ID: are set in models like the one in manager migration


 *******Careful of who migrates first to create correct relations*******



sequelize <a href="https://sequelize.org/master/index.html">full docs </a>


change sequelize default config of files from   <a href="https://sequelize.org/master/manual/migrations.html#the--code--sequelizerc--code--file">Here</a>




generate migration for adding foreign keys

npx sequelize-cli migration:generate --name add_manager_id_in_staff


migrate 

npx sequelize-cli db:migrate

example is present in add_manager_id_in_staff.js

MySQL offers EER visual diagrams in Database->ReverseEngineering


The .sequelizerc Offers dynamic routing for all the folders, Docs are straightforward 



Models and Migrations are two separate things you should define foreign keys on bot like this article

https://www.duringthedrive.com/2017/05/06/models-migrations-sequelize-node/


You have to run index in models first then export it and run the queries using it to deal with models