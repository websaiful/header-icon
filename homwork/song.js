var song = document.getElementById('menu');
function playAudio(){
    song.play();
};
function audiopouse(){
    song.pause();
};

// var len = document.querySelectorAll('.button').length;
for (var i = 0; i < 3; i++){
    document.querySelectorAll('.button')[i].addEventListener('click',function(){
        var text = this.innerHTML;
       
        playsong(text)
        // stopsong(text)
        
    });
    function playsong(text){
        switch(text){
           case'atif aslam':
           var audio = new Audio('atif.mp3');
           audio.play();
           break;
           case'arjit sing':
           var audio = new Audio('arjit.mp3');
           audio.play();
           break;
           case'darsan revel':
           var audio = new Audio('darsan.mp3');
           audio.play();
           break;
        };
    };
    // function stopsong(text){
    //     switch(text){
    //        case'atif aslam':
    //        var audio = new Audio('atif.mp3');
    //        audio.pause();
    //        break;
    //        case'arjit sing':
    //        var audio = new Audio('arjit.mp3');
    //        audio.pause();
    //        break;
    //        case'darsan revel':
    //        var audio = new Audio('darsan.mp3');
    //        audio.pause();
    //        break;
    //     };
    // };
    
};





