import  { Router, Request,Response} from "express";

export class PostController {
    public router : Router
    constructor() {
        this.router = Router()
        this.routes()
    }
    public  index = async  (req: Request, res: Response)=>{
        res.send('Index')
    }
    public  create = async  (req: Request, res: Response)=>{
        res.send('Create')
    }
    public  update = async  (req: Request, res: Response)=>{
        res.send('Update')
    }
    public  delete = async  (req: Request, res: Response)=>{
        res.send('Delete')
    }
    public routes(){
        this.router.get('/', this.index)
        this.router.post('/', this.create)
        this.router.put('/', this.update)
        this.router.delete('/', this.delete)
    }

}

