let video1 = document.getElementById("video");

function pular(){

video1.currentTime += 3 ;


}

function recuar(){

    video1.currentTime -= 3 ;
    
    
}
function aumentar_vel(){


    video1.playbackRate += 0.1;


}

function diminuir_vel(){


    video1.playbackRate -= 0.1;


}

function start(){

video1.play();


}

function pausar(){

    video1.pause();

}

function reiniciar(){

video1.pause();
video1.currentTime = 0 ;

}