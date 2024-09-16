class Objeto {
    constructor(x, y, velocidade) {
        this.x = x;
        this.y = y;
        this.velocidade = velocidade
    }
    desenha(ctx){
        console.log("Desenha objeto")
    }
    processa(teclas){}
}