import server from "./app"
import dotenv from "dotenv"
import config from "./config"
import db from "./db"
dotenv.config()
type TPort = string | number
const port:TPort = process.env.PORT || 4000

server.listen(port, async ()=> {
    try {
      await db.sequelize.sync({ force: true });
      await db.sequelize.authenticate()
        console.log(`Connection has been established successfully in the database ${config.database}`);
        console.log(`Listen on port ${port}`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      };
})