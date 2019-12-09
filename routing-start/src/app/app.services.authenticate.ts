

export class Authenticate {
    authenticated:boolean=false;
    constructor(){
        //au
    }

    login(){
        this.authenticated=true;
    }
    logout(){
        this.authenticated=false;
    }

    isAuthenticate(){
       const promise= new Promise((resolve,reject)=>{

            setTimeout(() => {
                resolve(this.authenticated);
            }, 800);
        });
        return promise;
    }
}