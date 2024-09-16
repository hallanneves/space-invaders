
class Inimigo extends Objeto{
    constructor(x,y,velocidade)
    {
        super(x,y,velocidade)
        this.sentido = true;
    }    
    desenha(ctx){
        //cor
        ctx.strokeStyle = '#ff0000';
        ctx.beginPath();
        //corpo do inimigo
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        //asa esquerda
        ctx.moveTo(this.x -10, this.y)
        ctx.lineTo(this.x -15 , this.y);
        ctx.lineTo(this.x -15 , this.y +3);
        ctx.lineTo(this.x -15 , this.y -3);
        //asa direita
        ctx.moveTo(this.x +10, this.y)
        ctx.lineTo(this.x +15 , this.y);
        ctx.lineTo(this.x +15 , this.y +3);
        ctx.lineTo(this.x +15 , this.y -3);
        ctx.stroke();
    }

    processa(teclas){
        
        if(this.sentido){
            this.x += this.velocidade;
        }else{
            this.x -= this.velocidade;
        }

        if(this.x > 800 - 20 || this.x < 15){
            this.sentido = !this.sentido;
        }
    }
}