"use strict" //activo modo estricto
import {Modelo} from '../modelos/modelo.js'
import {VistaNav} from '../vistas/vistanav.js'
import {VistaListado} from '../vistas/vistalistado.js'
import {VistaNueva} from '../vistas/vistanueva.js'
import {VistaDatos} from '../vistas/vistadatos.js'
import {VistaEliminar} from '../vistas/vistaeliminar.js'
import {VistaModificar} from '../vistas/vistamodificar.js'
/**
 * Clase Controlador que administra las vistas
 */
class Controlador {
	/**
	 * Constructor de la clase Controlador
	 * Cuando carga la web ejecuta el método iniciar
	 */
	constructor() {
		window.onload=this.iniciar.bind(this)
	}

	/**
	 * Método iniciar que es el primero en ejecutarse cuando se carga la pantalla
	 */
	iniciar() {
		console.log('¡Bienvenido a Glocal Island!')
		this.modelo=new Modelo(this)

        this.nav = document.getElementsByTagName('nav')[0]
		this.vistaNav = new VistaNav(this.nav, this)

        this.divlistado=document.getElementById('inicio')
		this.vistaListado=new VistaListado(this.divlistado, this)

		this.divnueva=document.getElementById('nueva')
		this.vistaNueva=new VistaNueva(this.divnueva, this)
        
        this.divdatos=document.getElementById('datos')
		this.vistaDatos=new VistaDatos(this.divdatos, this)

        this.divEliminar=document.getElementById('inicio')
        this.vistaEliminar=new VistaEliminar(this.diveliminar, this)

        this.divModificar=document.getElementById('modificar')
        this.vistaModificar=new VistaModificar(this.divModificar, this)
		
        this.ocultarVistas()
		this.vistaListado.mostrar(true)
		
	}


	/**
	 * Método que oculta todas las vistas
	 */
	ocultarVistas() {
		this.vistaListado.mostrar(false)
		this.vistaNueva.mostrar(false)
        this.vistaDatos.mostrar(false)
        this.vistaEliminar.mostrar(false)
        this.vistaModificar.mostrar(false)
	}

	/**
	 * Método pulsarLogo que oculta las vistas y muestra la del inicio
	 */
	pulsarNavListado() {
		this.ocultarVistas()
		this.vistaListado.mostrar(true)
	}

    /**
	 * Método pulsarLogo que oculta las vistas y muestra la del inicio
	 */
	pulsarNavNuevo() {
		this.ocultarVistas()
		this.vistaNueva.mostrar(true)
	}

    /**
     * Método cuando pulsamos una pelicula
     */
    pulsarPelicula(){
        this.ocultarVistas()
		this.vistaDatos.mostrar(true)
    }

    /**
     * Método cuando pulsamos un boton cancelar
     */
    pulsarCancelar(){
        this.pulsarNavListado()
    }

    /**
     * Método que muestra la pantalla de confimacion de eliminacion
     */
    mostrarEliminar(){
        this.ocultarVistas()
        this.vistaEliminar.mostrar(true)
    }

    /**
     * Método que muestra la pantalla de confimacion de eliminacion
     */
    mostrarModificar(){
        this.ocultarVistas()
        this.vistaModificar.mostrar(true)
    }

	/**
	 * Método getModelo, devuelve el modelo de la aplicación
	 * @return {Modelo} El modelo de la aplicación
	 **/
	getModelo() {
		return this.modelo
	}
}
const app= new Controlador()
