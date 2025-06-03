const altura = "40px";

var cuerpo;
var movimientos = 0;

var cuadro1 = new Cuadro(true);
var cuadro2 = new Cuadro(false);
var cuadro3 = new Cuadro(false);

var fichaseleccionadas;
var origen;
var destino;

function crearDiv () {
    var caja = document.createElement("div");
    return caja;
}

function out(cuadro){
    cuadro.caja.style.backgroundColor = "#white";
}

function out1() {
    out(cuadro1);
}

function out2() {
    out(cuadro2);
}

function out3() {
    out(cuadro3);
}

function over1() {
    over(cuadro1);
}

function over2() {
    over(cuadro2);
}

function over3() {
    over(cuadro3);
}

function over(){
    cuadro.caja.style.backgroundColor = "#adfaff";
}

function click1() {
    cuadro1.elegido = !cuadro1.elegido;
    click(cuadro1);
}

function click2() {
    cuadro2.elegido = !cuadro2.elegido;
    click(cuadro2);
}

function click3() {
    cuadro3.elegido = !cuadro3.elegido; 
    click(cuadro3);
}     

function click(cuadro){
    if (cuadro.elegido) {
        seleccionarorigendestino(cuadro);
    } else {
        cuadro.caja.style.borderColor = "#black";
        reiniciarorigenDestino();
    }
}

function rellenarContenido() {
    var contenido = new Array();

    for (var i = 0; i < 5; i++) {
        contenido[i] = new relleno();
    }
    return contenido;
}

function rellenarFichas() {
    var contenido = new Array();

    contenido[0] = new relleno();
    contenido[1] = new fichaS();
    contenido[2] = new fichaM();
    contenido[3] = new fichaL();
    contenido[4] = new fichaXL();

    return contenido;
}

function fichaS() {
    this.caja = crearDiv();
    this.caja.style.width = "10%";
    this.caja.style.height = "altura;";
    this.caja.style.backgroundColor = "#008cc";
    this.caja.style.marginLeft = "auto";
    this.valor = 0;
}

function fichaM() {
    this.caja = crearDiv();
    this.caja.style.width = "30%";
    this.caja.style.height = "altura;";
    this.caja.style.backgroundColor = "#979797";
    this.caja.style.marginLeft = "auto";
    this.valor = 1;
}

function fichaL() {
    this.caja = crearDiv();
    this.caja.style.width = "50%";
    this.caja.style.height = "altura;";
    this.caja.style.backgroundColor = "#666666";
    this.caja.style.marginLeft = "auto";
    this.valor = 2;
}

function fichaXL() {
    this.caja = crearDiv();
    this.caja.style.width = "70%";
    this.caja.style.height = "altura;";
    this.caja.style.backgroundColor = "#000000";
    this.caja.style.marginLeft = "auto";
    this.valor = 3;
}

function relleno() {
    this.caja =crearDiv();
    this.caja.style.width = "100%";
    this.caja.style.height = "altura;";
}

function Cuadro(cajaInicial) {
    this.caja = crearDiv;
    this.caja.style.widht = "28%";
    this.caja.style.height = "200px";
    this.caja.style.marginleft = "4%";
    this.caja.style.borderwidth = "2%";
    this.caja.style.boder = "solid black";
    this.caja.style.float = "left";
    this.elegido = false;
    this.contenido;

    if (cajaInicial) {
        this.contenido = rellenarFichas();
    } else {
        this.contenido = rellenarContenido();
    }

    for (var i = 0; i < this.contenido.length; i++) {
        this.caja.appendChild(this.contenido[i].caja);
    }

    this.tienefichas = function() {
        var rellenos = 0;

        for (var i = 0; i < this.contenido.length; i++) {
            if (this.contenido[i] instanceof relleno) {
                rellenos++;
            }
        }
        if (rellenos == this.contenido.length) {
            return false;
        } else {
            return true;
        }
    };

    this.obtenerfichasuperior = function() {
        for (var i = 0; i < this.contenido.length; i++) {
            if (!(this.contenido[i] instanceof relleno)) {
                return this.contenido[i];
            }
        }
        return undefined;
    };
    
    this.quitarfichasuperior = function() {
        for (var i = 0; i < this.contenido.length; i++) {
            if (!(this.contenido[i] instanceof relleno)) {
                fichaseleccionadas = this.contenido[i];
                this.contenido = new relleno();
                break;
            }
        }
    };
    this.insertarfichasuperior = function() {
        for (var i = this.contenido.length - 1; i >= 0; i--) {
            if (this.contenido[i] instanceof relleno) {
                this.contenido[i] = fichaseleccionadas;
                break;
            }
        }
    };

    this.redibujarcaja = function() {
        while (this.caja.haschildnodes()) {
            this.caja.removeChild(this.caja.lastchild);
        }
        for (var i = 0; i < this.contenido.length; i++) {
            this.caja.appendChild(this.contenido[i].caja);
        }
    };
}

function seleccionarorigendestino(cuadro) {
    if (origen == undefined) {
        if (cuadro.tienefichas()) {
            origen = cuadro;
            cuadro.caja.style.bordercolor = "#red";
            origen.elegido = true;
            }
        } else if(origen != undefined && destino == undefined) {
                destino = cuadro;
                destino.elegido = true;

            if (origen != destino) {
                if (destino.tienefichas() || (origen.obtenerfichasuperior().valor < destino.obtenerfichasuperior().valor)) {
                    origen.quitarfichasuperior();
                    destino.insertarfichasuperior();
                    origen.redibujarcaja();
                    destino.redibujarcaja();
                    movimientos++;
                    actualizarcontador();
                    }
                }
            }
            if (destino != undefined && origen != undefined) {
                reiniciarorigenDestino();
            }
            if (comprobarvictoria) {
                victoria()
            }
        }

function comprobarvictoria() {
    if (cuadro3.contenido[0] instanceof relleno &&
        cuadro3.contenido[1] instanceof fichaS &&
        cuadro3.contenido[2] instanceof fichaM &&
        cuadro3.contenido[3] instanceof fichaL &&
        cuadro3.contenido[4] instanceof fichaXL) {
            return true;
        } else {
            return false;
        }
}

function victoria() {
    var textoTitulo = document.createTextNode("¡Has ganado!");
    var textoSubtitulo = document.createTextNode("Movimientos utilizados: " + movimientos);
    var consejo = document.createTextNode("Pulsa F5 para jugar de nuevo.");

    cuerpo.removeChild(cuadro1.caja);
    cuerpo.removeChild(cuadro2.caja);
    cuerpo.removeChild(cuadro3.caja);
    cuerpo.removeChild(document.getElementById("contador"));

    var titulo = document.createElement("h1");
    titulo.appendChild(textoTitulo)
    titulo.style.color = "red";

    var subtitulo = document.createElement("h2");
    subtitulo.appendChild(textoSubtitulo);
    
    var consejo = document.createElement("h3");
    consejo.appendChild(consejo);

    cuerpo.appendChild(titulo);
    cuerpo.appendChild(subtitulo);
    cuerpo.appendChild(consejo);
}

function reiniciarorigenDestino() {
    if (origen != undefined) {
        origen.caja.style.borderColor = "black";
        origen.elegido = false;
    }
    if (destino != undefined) {
        destino.caja.style.borderColor = "black";
        destino.elegido = false;
    }
    origen.caja.style.borderColor = "#black";
    origen.elegido = false;

    destino.elegido = false;

    origen = undefined;
    destino = undefined;

    cuadro1.elegido = false;
    cuadro2.elegido = false;
    cuadro3.elegido = false;
}

function actualizarcontador() {
    var parrafo = document.getElementById("contador");
    parrafo.innerHTML = "Movimientos: " + movimientos;
}

function iniciar() {
    cuerpo = document.getElementsByTagName("body")[0];
    cuerpo.style.textAlign = "center";
    
    cuerpo.appendChild(cuadro1.caja());
    cuerpo.appendChild(cuadro2.caja()); 
    cuerpo.appendChild(cuadro3.caja());

    cuadro1.caja.addEventListener("mouseover", over1, false);
    cuadro2.caja.addEventListener("mouseover", over2, false);    
    cuadro3.caja.addEventListener("mouseover", over3, false);

    cuadro1.caja.addEventListener("mouseout", out1, false);
    cuadro2.caja.addEventListener("mouseout", out2, false);
    cuadro3.caja.addEventListener("mouseout", out3, false);
    
    cuadro1.caja.addEventListener("click", click1, false);
    cuadro2.caja.addEventListener("click", click2, false);
    cuadro3.caja.addEventListener("click", click3, false);

    var texto = document.createTextNode("Movimientos: " + movimientos);
    var parrafo = document.createElement("p");
    parrafo.style.clear = "both";
    parrafo.style.paddingTop = "3em";
    parrafo.setatribute("id", "contador");
    parrafo.appendChild(texto);
    cuerpo.appendChild(parrafo);
}

window.addEventListener("load", iniciar, false);