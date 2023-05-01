import express,{ Express} from "express";
// import router from "./routes";
//TODO Libreria para tipar los errores 
//  import { HttpError } from "http-errors";
 import helmet from "helmet"
// import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./routes";




const server:Express = express()

server.use(cors());
server.use(morgan("dev"));
server.use(express.json({limit: '25mb'}));
server.use(bodyParser.json())
server.use(helmet())

//Ruta index, middleware que junta todas las rutas para pasarla a 1
server.use(indexRouter)




export default server