import server from "./app"
import dotenv from "dotenv"
import db from "./db"
import config from "./config"
dotenv.config()
const port = process.env.PORT || 4000

server.listen(4000, async ()=> {

    try {
        await db.authenticate();
        console.log(`Connection has been established successfully in the database ${config.database}`);
        console.log(`Se escucha en el puerto ${port}`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

    
})