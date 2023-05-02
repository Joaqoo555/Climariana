import { Model } from "sequelize";
import { IUser } from "../interfaces/user";


export default (sequelize:any, DataTypes:any) => {
    class User extends Model<IUser> {
    // public encryptPassword = async (_newPass: string, _pass: string)=> {
        //hola gabi
    // }
  }
  User.init({
    id: {
        type: DataTypes.UUID,
        //Una columna que almacena un identificador universal único. Usar con UUIDV1 o UUIDV4 para valores predeterminados.
        defaultValue: DataTypes.UUIDV4,
        //Un identificador universal único predeterminado generado siguiendo el estándar UUID v4
        primaryKey: true,
    },
    fullname:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 30],
          notNull: {
            msg: "Porfavor ingrese su nombre",
          },
        },
      },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    newsLetter:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
      }
  }, { sequelize, timestamps:true, tableName: "User" })
return User
}