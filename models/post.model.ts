
import { Schema, Document, model } from 'mongoose';

const postSchema = new Schema({

    created:{
        type: Date,
    },
    idPelicula: {
        type : String,
    },
    comentario: {
      type: String,
    },

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'debe exister una referencia de usuario']
    },

});


postSchema.pre<iPost>('save', function(next){
    this.created = new Date();
    next();
});

interface iPost extends Document{
    
    created: Date;
    idPelicula: String;
    comentario: String;
    usuario:String;
    
}


export const Post = model<iPost>('Post', postSchema);