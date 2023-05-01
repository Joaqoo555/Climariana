import express, {Express} from "express";
import cors from "cors"
import {a} from "./db"




const server:Express = express()

server.use(cors());
