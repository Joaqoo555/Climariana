import { Model } from "sequelize";
import { IProduct } from "../interfaces/product";


export default (sequelize:any, DataTypes:any) => {
    class Product extends Model<IProduct> {
    // public encryptPassword = async (_newPass: string, _pass: string)=> {
    // }
    static associate(_models: any) {
        
    }
  }
  Product.init({
    id: {
        type: DataTypes.UUID,
        //Una columna que almacena un identificador universal único. Usar con UUIDV1 o UUIDV4 para valores predeterminados.
        defaultValue: DataTypes.UUIDV4,
        //Un identificador universal único predeterminado generado siguiendo el estándar UUID v4
        primaryKey: true,
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //Borrado logico
    view: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
    
  }, { sequelize, timestamps:true, tableName: "Product" })
return Product
}