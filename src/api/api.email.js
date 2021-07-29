import {app} from './index';

export function sendEmail(username){
    return new Promise(async(resolve, reject) => {
        return app 
            .put(`/usuario/resetSenha/${username}`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    })
}