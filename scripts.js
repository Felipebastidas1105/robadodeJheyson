const FormGenerar = document.querySelector('#FormGenerarTarjeta')
const NameStudent = document.querySelector('#Name')
const Msg = document.querySelector('#Aprendizaje')

var boton = document.getElementById("download")
var contador = 15;
var etiqueta = document.createElement("p")

etiqueta.innerHTML = " <b> 15 segundos de descarga </b>"
var id;

boton.parentNode.replaceChild(etiqueta,boton)

function descarga(){
    this.style.display = "none"
    id = window.setInterval(function(){
        contador--;
        if(contador < 0)
        {
          etiqueta.parentNode.removeChild(boton,etiqueta)  
          window.clearInterval(id)
        }
        else
        {
            etiqueta.innerHTML = + contador.toString() + "<b> segundos para descargar </b>"
        }
    },1000)
}

var clickBtn = document.getElementById("btn")
clickBtn.onclick = descarga;

/*var img = document.getElementById("Contendido-tarjeta")
var source = document.getElementById("Contendido-tarjeta")

var a = document.createElement("a")

a.download = true
a.target = 'blank'
a.heref = source;
a.click();*/
FormGenerar.addEventListener('submit', (e) => {

    e.preventDefault()    
    RenderCard(NameStudent.value, Msg.value)
})

function RenderCard(Name, Message)
{
    document.querySelector('#Student').innerHTML = Name
    document.querySelector('#Aprendido').innerHTML = Message
    ClearInputs()
}

function ClearInputs()
{
    NameStudent.value = ''
    Msg.value = ''
}
