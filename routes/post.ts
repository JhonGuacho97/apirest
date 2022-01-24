import { Router, Response } from "express";
import { verificaToken } from '../middlewares/autenticacion';
import { Post } from '../models/post.model';



const postRoutes = Router();

postRoutes.post('/', [verificaToken], (req: any, res: Response) => {


    const body = req.body;

    body.usuario = req.usuario._id;

    Post.create(body).then(async postDB => {

        await postDB.populate('usuario', '-password')

        res.json({
            ok: true,
            post: postDB
        });

    }).catch(err => {
        res.json(err)
    });


});


postRoutes.get('/coment/:id_movie', async (req: any, res: Response) => {
    //console.log(req.params.id_movie);
    const post = await Post.find({idPelicula: req.params.id_movie})
        .populate('usuario', '-password')
        .exec();
    res.json({
        ok: true,
        post
    });
});


export default postRoutes;