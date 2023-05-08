import { Model } from "sequelize";
import { IOrder } from "../interfaces/orders";

export default (sequelize: any, DataTypes: any) => {
  class Order extends Model<IOrder> {
    // public encryptPassword = async (_newPass: string, _pass: string)=> {
    // }
    static associate(models: any) {
      Order.belongsToMany(models.Product, {
        through: "OrderProduct",
        foreignKey: "id_order",
      });
      
      Order.belongsTo(models.User, { foreignKey: "id_user"});
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.UUID,
        //Una columna que almacena un identificador universal único. Usar con UUIDV1 o UUIDV4 para valores predeterminados.
        defaultValue: DataTypes.UUIDV4,
        //Un identificador universal único predeterminado generado siguiendo el estándar UUID v4
        primaryKey: true,
      },
      id_user: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      dispatched: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      mode: {
        type: DataTypes.ENUM("retiro", "envio"),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("cart", "approved"),
        allowNull: false,
      },
    },
    { sequelize, timestamps: true, tableName: "Order" }
  );
  return Order;
};
