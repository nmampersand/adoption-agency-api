module.exports = class Responder {

    constructor (res) {
        this.res = res;
    }

    send (code, body) {
        if(body) {
            this.res.status(code).send(body);
        } else {
            this.res.sendStatus(code);
        }
    }
}
