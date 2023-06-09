import { Model } from "sequelize";
import { IUser } from "../interfaces/user";

export default (sequelize: any, DataTypes: any) => {
  class User extends Model<IUser> {
    // public encryptPassword = async (_newPass: string, _pass: string)=> {
    // }
    static associate(_models: any) {}
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        //Una columna que almacena un identificador universal único. Usar con UUIDV1 o UUIDV4 para valores predeterminados.
        defaultValue: DataTypes.UUIDV4,
        //Un identificador universal único predeterminado generado siguiendo el estándar UUID v4
        primaryKey: true,
      },
      fullname: {
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
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      newsLetter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      locality: {
        type: DataTypes.ENUM(
          "Neuquen",
          "Plottier",
          "Cipolletti",
          "Centenario",
          "Cinco Saltos"
        ),
        allowNull: true,
      },
      numberPhone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { sequelize, timestamps: true, tableName: "User" }
  );
  return User;
};
