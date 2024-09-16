
class Nave extends Objeto{
    desenha(ctx){
        ctx.beginPath();
        //Desenha triangulo
        ctx.moveTo(this.x , this.y);
        ctx.lineTo(this.x + 15, this.y );
        ctx.lineTo(this.x + 7, this.y -15);
        ctx.moveTo(this.x + 8, this.y -15);
        ctx.lineTo(this.x , this.y );
        //Desenha athis.sa esquerda
        ctx.moveTo(this.x + -5, this.y -3);
        ctx.lineTo(this.x + -5, this.y +3);
        ctx.moveTo(this.x + -5, this.y);
        ctx.lineTo(this.x , this.y);
        //Deseha asthis.a direita
        ctx.moveTo(this.x + 20, this.y -3);
        ctx.lineTo(this.x + 20, this.y +3);
        ctx.moveTo(this.x + 20, this.y );
        ctx.lineTo(this.x + 15, this.y );
        //Desenha cthis.anhão
        ctx.moveTo(this.x + 7, this.y -20);
        ctx.lineTo(this.x + 7, this.y -15);
        ctx.moveTo(this.x + 8, this.y -20);
        ctx.lineTo(this.x + 8, this.y -15);
        ctx.stroke();
    }

    processa(teclas){
        if (teclas['a'.charCodeAt(0) - 97]){
            this.x -= this.velocidade;
        }
        if (teclas['d'.charCodeAt(0) - 97]){
            this.x += this.velocidade;
        }
        if (teclas['w'.charCodeAt(0) - 97]){
            this.y -= this.velocidade;
        }
        if (teclas['s'.charCodeAt(0) - 97]){
            this.y += this.velocidade;
        }
    }
}