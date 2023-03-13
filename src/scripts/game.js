function attackCollision(player1, player2){
    return(
        player1.attackRect.position.x + player1.attackRect.width >= player2.position.x
        && 
        player1.attackRect.position.x <= player2.position.x + player2.width
        && 
        player1.attackRect.position.y + player1.attackRect.height >= player2.position.y
        &&
        player1.attackRect.position.y <= player2.position.y + player2.height
    )
}

function endgameFunc({player, enemy, timerId}){
    
    clearTimeout(timerId);

    document.querySelector('#textresult').style.display = 'flex'; 
    if(player.health === enemy.health){
        document.querySelector('#textresult').innerHTML = 'Tie'
        document.querySelector('#textresult').style.display = 'flex'; 
    }else if(player.health > enemy.health){
        document.querySelector('#textresult').innerHTML = 'PLAYER 1 WINS'
        document.querySelector('#textresult').style.display = 'flex'; 
    }else if(enemy.health > player.health){
        document.querySelector('#textresult').innerHTML = 'PLAYER 2 WINS'
        document.querySelector('#textresult').style.display = 'flex'; 
    }
}

let timer = 45;
let timerId;
function countdown()  {
    if(timer > 0){
    timerId = setTimeout(countdown, 1000)   // set interval allows multiple execution of code in set interval; setTimeout allows one execution
        timer -- ;
        document.querySelector("#timer").innerHTML = timer;
    }
    if(timer === 0){
        document.querySelector('#textresult').style.display = 'flex'; 
        endgameFunc({player, enemy});
    }   
}
