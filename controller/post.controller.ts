import  { Router, Request,Response} from "express";
import {PostService} from "../services/post.service"
export class PostController {
    public router : Router
    private postService: PostService

    constructor() {
        this.router = Router()
        this.postService = new PostService()
        this.routes()
    }
    public  index = async  (req: Request, res: Response)=>{
        res.send(this.postService.index()) // execute method of service
    }
    public  create = async  (req: Request, res: Response)=>{
        res.send(this.postService.create()) // execute method of service
    }
    public  update = async  (req: Request, res: Response)=>{
        res.send(this.postService.update()) // execute method of service
    }
    public  delete = async  (req: Request, res: Response)=>{
        res.send(this.postService.delete()) // execute method of service
    }
    public routes(){
        this.router.get('/', this.index)
        this.router.post('/', this.create)
        this.router.put('/:id', this.update)
        this.router.delete('/:id', this.delete)
    }

}

