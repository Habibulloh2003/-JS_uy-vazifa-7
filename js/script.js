/* 
Birinchi bo'lib strelkalarimizga ulanamiz
Document bu butun sayt
document.querySelector biron bir elementga tag class yoki id orqali bog'langan elementni bitta object qilib qaytaradi
*/


const hour = document.querySelector('.h'),
    /*  soat strelkasiga bog'lanamiz */
    minute = document.querySelector('.m'),
    /*  daqiqa strelkasiga bog'lanamiz */
    second = document.querySelector('.s'),
    /*  soniya strelkasiga bog'lanamiz */
    numHour = document.querySelector('.hours'),
    numMin = document.querySelector('.minutes');

function clock() {
    /* 
        new Date() - Kumpyuterdan hozirgi vaqtni oladi
        getHours() - Kompyuteragi soatni oladigan method 
        getMinutes() - Kompyuteragi daqiqani oladigan method 
        getSeconds() - Kompyuteragi soniyani oladigan method 
    */
    let time = new Date(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    // HTML element.style - orqali html elementga style beriladi
    hour.style.transform = `rotate(${h * 30}deg)`

    minute.style.transform = `rotate(${m * 6}deg)`
    second.style.transform = `rotate(${s * 6}deg)`

    numHour.innerHTML = h < 10 ? '0' + h : h
    numMin.innerHTML = m < 10 ? '0' + m : m

    setTimeout(() => {
        clock()
    }, 1000);

}
clock()


const link = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
        e.preventDefault()
        console.log(i);
        for (let k = 0; k < link.length; k++) {
            link[k].classList.remove('active')
            tabs[k].classList.remove('active')
        }
        this.classList.add('active')
        tabs[i].classList.add('active')
    })
}


let sec = document.querySelector('.stopwatch__seconds'),
    min = document.querySelector('.stopwatch__minutes'),
    hou = document.querySelector('.stopwatch__hours'),
    point = document.querySelector('.tabsLink__span'),
    btn = document.querySelector('.stopwatch__btn'),
    sto = document.querySelector('.stopwatch__btn.stop'),
    cl = document.querySelector('.stopwatch__btn.clear');



btn.addEventListener('click', function () {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        point.classList.add('active')
    }else if (btn.innerHTML == 'stop') {
        point.classList.remove('active')
        btn.innerHTML = 'clear'
        point.classList.add('active_clear')
    }else if ( btn.innerHTML == 'clear') {
        btn.innerHTML = 'start'
        point.classList.remove('active_clear')
    }
})

function mn() {
    if (btn.innerHTML == 'stop') {
        sec.innerHTML++
        if (sec.innerHTML < 10) {
            sec.innerHTML = '0' + sec.innerHTML
        }
    
    if (sec.innerHTML > 59) {
        sec.innerHTML = '00'
        min.innerHTML++
        if (min.innerHTML < 10) {
            min.innerHTML = '0' + min.innerHTML
        }
    }
    if ( min.innerHTML > 59) {
        min.innerHTML = '00'
        hou.innerHTML++
        if (hou.innerHTML < 10) {
            hou.innerHTML = '0' + hou.innerHTML
        }
    }
}else if (btn.innerHTML == 'start') {
    min.innerHTML = '00'
    sec.innerHTML = '00'
    hou.innerHTML = '00'
}
setTimeout(() => mn(), 1000);
}
mn() ;









// function allFunc() {
//     btn.addEventListener('click', function () {
//         var set = null 
//         function start() {
//             var x = 0,
//             y = 0,
//             z = 0;
//             point.classList.add('active')
//             btn.classList.add('stop')

//             btn.innerHTML = 'stop'

//             function secundomer() {
//                  x++
//                 if (x <= 60) {
//                     if (x <= 9) {
//                      x = ('0' + x)
//                     }
//                     if (x == 60) {
//                      x = 0
//                     }
//                 }
//                 if (x == 59) {
//                     ++y
//                     if (y <= 9) {
//                        y = ('0' + y); 
//                     }
//                     if (y == 60) {
//                         y = 0
//                         ++z
//                     }
//                     if (z <= 9 && y == 0){
//                         z = ('0' + z);
//                     }
//                 } 


//                 sec.innerHTML = x;
//                 min.innerHTML = y;
//                 hou.innerHTML = z;  

//                 set = setTimeout(() => {
//                     secundomer()
//                 }, 1000);
//             }
//             secundomer() 
//         }
//         start()
//     })
//     sto.addEventListener('click', function () {
//         function stop() {
//             point.classList.remove('active')
//             point.classList.add('active_clear')
//             sto.classList.remove('stop')
//             sto.classList.add('clear')
//             btn.innerHTML = 'clear'
//             clearTimeout(set)
//         }
//         stop()

//     })  
//     cl.addEventListener('click', function () {
//         clear()
//         function clear() {
//             point.classList.remove('active_clear')
//             btn.innerHTML = 'start'
//             start()
//         }
//     })
// }
// allFunc();