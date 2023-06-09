import {Sequelize, DataTypes} from "sequelize"
import config from "./config"
const fs = require('fs');
const path = require('path');
const basename = path.basename(__dirname);



const db:any = {
  
};

let sequelize:any;

sequelize = new Sequelize(config);
// sequelize = new Sequelize(config.db_deploy)


fs
  .readdirSync(`${__dirname}/models`)
  .filter((file:string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' &&
      file.indexOf('.test.ts') === -1
    );
  })
  .forEach((file:any, i:number) => {
    console.log(file, i)
    //TODO: require(path.join(__dirname, file)) => devuelve un objeto con la propiedad default y es un array de funciones de todos los modelos en la carpeta models    
      const model = require(path.join(`${__dirname}/models`, file)).default(sequelize, DataTypes);
      db[model.name] = model;
    
  });


// Esto permitiría imprimir el nombre del modelo al que está asociado y el tipo de asociación (por ejemplo, "belongsTo", "hasMany", etc.).
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    for (const association in db[modelName].associations) {
      console.log(` MODELO: ${association} : ASOCIACION ${db[modelName].associations[association].associationType}`);
    }
  }
});

console.log(db)

db.sequelize = sequelize;
db.Sequelize = Sequelize;



export default db