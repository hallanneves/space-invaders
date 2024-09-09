function desenhaNave(x, y, ctx){
    ctx.beginPath();
    //Desenha triangulo
    ctx.moveTo(x , y);
    ctx.lineTo(x + 15, y );
    ctx.lineTo(x + 7, y -15);
    ctx.moveTo(x + 8, y -15);
    ctx.lineTo(x , y );
    //Desenha asa esquerda
    ctx.moveTo(x + -5, y -3);
    ctx.lineTo(x + -5, y +3);
    ctx.moveTo(x + -5, y);
    ctx.lineTo(x , y);
    //Deseha asa direita
    ctx.moveTo(x + 20, y -3);
    ctx.lineTo(x + 20, y +3);
    ctx.moveTo(x + 20, y );
    ctx.lineTo(x + 15, y );
    //Desenha canhão
    ctx.moveTo(x + 7, y -20);
    ctx.lineTo(x + 7, y -15);
    ctx.moveTo(x + 8, y -20);
    ctx.lineTo(x + 8, y -15);
    ctx.stroke();
}

function desenhaTiro(x, y, ctx){
    ctx.beginPath();
    ctx.moveTo(x , y);
    ctx.lineTo(x , y + 5);
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
}

function desenhaInimigo(x, y, ctx){
    ctx.beginPath();
    //corpo do inimigo
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    //asa esquerda
    ctx.moveTo(x-10, y)
    ctx.lineTo(x -15 , y);
    ctx.lineTo(x -15 , y +3);
    ctx.lineTo(x -15 , y -3);
    //asa direita
    ctx.moveTo(x+10, y)
    ctx.lineTo(x +15 , y);
    ctx.lineTo(x +15 , y +3);
    ctx.lineTo(x +15 , y -3);

    //cor
    ctx.strokeStyle = '#ff0000';
    ctx.stroke();
}

function desenhaFundo(ctx, myCanvas) {

    ctx.beginPath();
    ctx.rect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
}
