import { Model } from "sequelize";


export default (sequelize:any, DataTypes:any) => {
    class Order extends Model {
    // public encryptPassword = async (_newPass: string, _pass: string)=> {
    // }
    static associate(_models: any) {

    }
  }
  Order.init({
    id: {
        type: DataTypes.UUID,
        //Una columna que almacena un identificador universal único. Usar con UUIDV1 o UUIDV4 para valores predeterminados.
        defaultValue: DataTypes.UUIDV4,
        //Un identificador universal único predeterminado generado siguiendo el estándar UUID v4
        primaryKey: true,
    },


    
    
  }, { sequelize, timestamps:true, tableName: "Order" })
return Order
}