import server from "./app"
import config from "./config"
import db from "./db"
import dotenv from "dotenv"
dotenv.config()
type TPort = string | number
const port:TPort = process.env.PORT || 4000

// Levantas el servidor
server.listen(port, async ()=> {
    try {
      await db.sequelize.sync({ alter: true });
      await db.sequelize.authenticate()
        console.log(`Connection has been established successfully in the database ${config.database}`);
        console.log(`Listen on port ${port}`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      };
})