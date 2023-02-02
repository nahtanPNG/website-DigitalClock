const horas = document.getElementById('hours');
const minutos = document.getElementById('minutes');
const segundos = document.getElementById('seconds');
const relogio = document.getElementById('relogio'); /*pego a id da div do relogio */



const clock = setInterval(function time() { /* pegamos uma variavel e atribuimos a data de hoje */
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr <10) hr = '0' + hr;
    if(min <10) min = '0' + min;
    if(sec <10) sec = '0' + sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    if(hr >= 6 && hr < 12){
        //BOM DIA
        document.body.style.background = 'linear-gradient(120deg, #FAFFE3, #5DD9CF)';
        relogio.classList.add('fotomanha'); /* criando uma classe para personalizar no css */
        
    } else if(hr >= 12 && hr <18 ){
        //BOA TARDE
        document.body.style.background = 'linear-gradient(120deg, #E8A4C5, #7093D8)';
        relogio.classList.add('fototarde'); /* criando uma classe para personalizar no css */

    } else if(hr >= 18 && hr < 24 ){
        //BOA NOITE
    document.body.style.background = 'linear-gradient(120deg, #906CDD, #2A2553)';
    relogio.classList.add('fotonoite'); /* criando uma classe para personalizar no css */

    } else if(hr < 6 && hr >= 0){
        document.body.style.background = 'linear-gradient(120deg, #185E9B, #3674BE)';
        relogio.classList.add('fotomadrugada'); /* criando uma classe para personalizar no css */
    }
})

