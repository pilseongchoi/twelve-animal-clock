const clock = document.querySelector('.clock');
const animal = document.querySelector('.animal');

function getTime(){
    const d = new Date();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    clock.innerHTML = `${ hour<10 ? `0${hour}`: hour } : ${ minutes<10 ? `0${minutes}`:minutes} : ${ seconds<10 ? `0${seconds}`:seconds}`
    if( hour == 23 || hour == 0){ //시간이 23시 이거나 0 시이면
        animal.innerHTML = '🐭'
    }
    else if( hour == 1 || hour == 2){ //시간이 1시 이거나 2시 이면
        animal.innerHTML = '🐮'
    }
    else if( hour == 3 || hour == 4){ //시간이 3시 이거나 4시 이면
        animal.innerHTML = '🐯'
    }
    else if( hour == 5 || hour == 6){ //시간이 5시 이거나 6시 이면
        animal.innerHTML = '🐰'
    }
    else if( hour == 7 || hour == 8){ //시간이 7시 이거나 8시 이면
        animal.innerHTML = '🐲'
    }
    else if( hour == 9 || hour == 10){ //시간이 8시 이거나 10시 이면
        animal.innerHTML = '🐍'
    }
    else if( hour == 11 || hour == 12){ //시간이 11시 이거나 12시 이면
        animal.innerHTML = '🐴'
    }
    else if( hour == 13 || hour == 14){ //시간이 13시 이거나 14시 이면
        animal.innerHTML = '🐑'
    }
    else if( hour == 15 || hour == 16){ //시간이 15시 이거나 16시 이면
        animal.innerHTML = '🐵'
    }
    else if( hour == 17 || hour == 18){ //시간이 17시 이거나 18시 이면
        animal.innerHTML = '🐔'
    }
    else if( hour == 19 || hour == 20){ //시간이 19시 이거나 20시 이면
        animal.innerHTML = '🐶'
    }
    else if( hour == 21 || hour == 22){ //시간이 21시 이거나 22시 이면
        animal.innerHTML = '🐷'
    }
}

function init(){
    setInterval(getTime, 1000);
}

init();