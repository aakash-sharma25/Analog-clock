setInterval(()=>{
     d= new Date();
     hourt =d.getHours();
     min =d.getMinutes();
     sec =d.getSeconds();
    // console.log(hour+" :"+ min + " :" + sec)
     var hro = 30*hourt + min/2;
     var mro = 6*min;
     var sro = 6*sec;
    //  hour.style.transform = ` rotate(${hro}deg)`;
     minute.style.transform = `rotate(${mro}deg)`;
     second.style.transform = `rotate(${sro}deg)`;
     hour.style.transform = ` rotate(${hro}deg) `

    console.log(min);

},100)