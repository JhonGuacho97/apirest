import jwt from 'jsonwebtoken'

export default class Token {

    private static seed: string = 'este-es-el-seed-de-mi-app-secreto';

    private static caducidad: string = '30d';

    constructor(){}

    static getJwtToken( payLoad: any ): string {
        return jwt.sign({
            usuario: payLoad
        }, this.seed, { expiresIn: this.caducidad });
    }

    static comprobarToken(userToken: string){

        return new Promise((resolve, reject)=>{
          jwt.verify(userToken, this.seed, ( err, decode)=>{
            if(err){
                reject();
            }else{
                resolve(decode);
            }
        });
        });

        
    }

}