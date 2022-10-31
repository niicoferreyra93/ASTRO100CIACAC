const suscribirme = document.getElementById('suscribirme');

const mail = document.getElementById('email');
const nombre =  document.getElementById('name');
const pais =  document.getElementById('pais');

const validMail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
const validacion = (e) => {
    if (nombre.value == ""){
        alert("");
        nombre.focus();
        return false;
    }
    if (nombre.value == ""){
        alert("");
        nombre.focus();
        return false;
    }
    if (nombre.value == ""){
        alert("");
        nombre.focus();
        return false;
    }
    if (!validMail(mail.value)){
        alert("");
        nombre.focus();
        return false;
    }
}
suscribirme.addEventListener('click', validacion);

function ubicar(){
    function encontrado(position){
        const lat=position.coords.latitude;
        const alt=position.coords.altitude;
    }
    if (!navigator.geolocation){
        alert("Imposible encontrar la ubicación");

    }
    else{
        navigator.geolocation.getCurrentPosition(encontrado, error)
    }
}

