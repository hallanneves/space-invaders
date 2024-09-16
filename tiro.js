
class Tiro extends Objeto{
    constructor(x, y, velocidade, nave)
    {
        super(x,y,velocidade)
        this.ativo = false;
        this.nave = nave;
    }    
    desenha(ctx){
        //cor
        if(this.ativo){
            ctx.strokeStyle = '#ff0000';
            ctx.beginPath();
            ctx.moveTo(this.x , this.y);
            ctx.lineTo(this.x , this.y + 5);
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
        }
    }

    processa(teclas){
        if(this.y > 0){
            this.y -= this.velocidade;
        }else{
            this.ativo = false;
        }
        if (teclas['v'.charCodeAt(0) - 97] && this.ativo == false){
            this.atira()
        }
    }

    atira(){
        this.x = nave.x + 7;
        this.y = nave.y -15;
        this.ativo = true;
    }
}