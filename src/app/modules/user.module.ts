export class User {
    constructor(private email: string, private token: string, private localId: string){

    }
    get userToken(){
        return this.token;
    }
}