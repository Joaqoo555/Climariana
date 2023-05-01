import server from "./app"
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT || 4000

server.listen(4000, async ()=> {


    console.log(`Se escucha en el puerto ${port}`)

    
})