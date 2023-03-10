"use strict" //activo modo estricto
import {Vista} from './vista.js'
/**
 * Clase VistaDatos que muestra el formulario para una nueva pelicula
 * Gestiona los elementos y métodos de esta Vista
 */
export class VistaDatos extends Vista {

	/**
     * Contructor de la clase VistaDatos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador

          this.div=document.getElementById('datos')
          this.eliminar=this.div.getElementsByTagName('button')[0]
          this.modificar=this.div.getElementsByTagName('button')[1]

          this.modificar.onclick=this.pulsarModificar.bind(this)

	}
     /**
      * Método que muestra en la tabla de datos, los datos de la pelicula
      * @param {Object} pelicula 
      */
     mostrarDatos(pelicula){
          //Buscamos los datos
          let nombre=document.getElementById("datosNombre")
          let descripcion=document.getElementById("datosDescripcion")
          let fecha=document.getElementById("datosFecha")
          let duracion=document.getElementById("datosDuracion")
          let plataformas=document.getElementById("datosPlataformas")
          let genero=document.getElementById("datosGenero")
          let vista=document.getElementById("datosVista")
          //Borramos el contenido que pudiera haber anteriormente
          nombre.innerHTML=''
          descripcion.innerHTML=''
          fecha.innerHTML=''
          duracion.innerHTML=''
          plataformas.innerHTML=''
          genero.innerHTML=''
          vista.innerHTML=''
          //Metemos los datos de la pelicula
          nombre.appendChild(document.createTextNode(pelicula.nombre))
          descripcion.appendChild(document.createTextNode(pelicula.descripcion))
          fecha.appendChild(document.createTextNode(pelicula.fecha))
          duracion.appendChild(document.createTextNode(pelicula.duracion))
          let plat=''
          for(let item of pelicula.plataforma){
               plat+=item+'; '
          }
          plataformas.appendChild(document.createTextNode(plat))
          genero.appendChild(document.createTextNode(pelicula.genero))
          if(pelicula.vista){
               vista.appendChild(document.createTextNode('Si'))
          }
          else{
               vista.appendChild(document.createTextNode('No'))
          }

          this.eliminar.onclick = this.pulsarEliminar.bind(this, pelicula.id)
     }

     /**
      * Método para cuando damos al boton eliminar
      */
     pulsarEliminar(id){
          this.controlador.ocultarVistas()
          this.controlador.mostrarEliminar(id)
     }

     /**
      * Método para cuando damos al boton modificar
      */
     pulsarModificar(){
          this.controlador.ocultarVistas()
          this.controlador.mostrarModificar()
     }
}