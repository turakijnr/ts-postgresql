import express, {Request, Response} from "express";
import {PostController} from "../controller/post.controller"; // import the post controller

class Server{
    private postcontroller: PostController
    private app: express.Application;
    constructor() {
        this.app = express()
        this.configuration()
        this.postcontroller = new PostController() // create a new controller instance
        this.routes()

    }

    /**
     * Method to configure the server,
     * if we didn't configure the port in the environment
     * variables it takes the default port 3000
     */

    public  configuration(){
        this.app.set('port', process.env.PORT || 3000)
    }
    /**
     * Method to configure the Routes,
     */
    public  routes(){
        this.app.use('/api/posts/',this.postcontroller.router) // configure a new routes of the controller post
        this.app.get('/', (req:Request, res:Response)=>{
            res.send('Hello World!')
        })

    }

    /**
     * Method to start the Server
     */
    public  start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Server is listening on ${this.app.get('port')}  `)
        })
    }
}
const server = new Server() // create server instance

server.start() // Execute the server


