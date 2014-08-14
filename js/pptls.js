
function aleatorio (minimo, maximo) {
	var numero = Math.floor(Math.random()* (maximo - minimo + 1) + minimo);
	return numero;
}

function premio (){
	 if (conthombre == 10) {
			document.getElementById("resultado").innerHTML   ="<img class='win'src='img/winner.png'/><a href='PPTLS.html'><h1>GENIAL GANASTE 	</h1> 	</a>";
			document.getElementById("campo").innerHTML="";
			
			}else if(contmaquina == 10){
			document.getElementById("resultado").innerHTML   ="<img  class = 'loser'src='img/loser.png'/><a href='PPTLS.html'><h1>LO SIENTO PERDISTE 	</h1>	</a>";
			document.getElementById("campo").innerHTML="";
			
			}
}
//redonde al minimo los numeros decimales 
//Math es un objeto que tiene una funcion floor
//random genera un numero aleatorio

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["Piedra","Papel","Tijera","Lagarto","Spock"];
var opcionUsuario;
var opcionMaquina;
var conthombre = 0;
var contmaquina = 0;
var contempate = 0;
//alert("sd,csd");
		
//opcionUsuario = prompt("Elige 0 1 2 3 4 ");
//opcionMaquina = aleatorio(0,4);
//alert("Eligiste" + opciones[opcionUsuario]);
//alert("JS Eligio" + opciones[opcionMaquina]);

function FPiedra() {
	document.getElementById("selecusuario").innerHTML="<img src='img/piedra.png'/>";
	document.getElementById("versus").innerHTML="<img src='img/versus.png'/>";
	aleatorio();
	opcionMaquina = aleatorio(0,4);

	if (contmaquina < 10 &&  conthombre < 10 ) {
	
	 	if (opcionMaquina == piedra) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/piedra.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/draw.png'/>";
			contempate++;
			document.getElementById("empate").innerHTML=contempate;
			
		}
		else if (opcionMaquina == papel) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/papel.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
	
		}
		else if (opcionMaquina == tijera) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/tijera.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
	
		}
		else if (opcionMaquina == lagarto) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/lagarto.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
	
		}
		else if (opcionMaquina == spock ) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/spock.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
			
		}
	}//cont
		premio();
		
		
}//fin funcion

	
function FPapel() {

	document.getElementById("selecusuario").innerHTML="<img src='img/papel.png'/>";
	document.getElementById("versus").innerHTML="<img src='img/versus.png'/>";
	aleatorio();
	opcionMaquina = aleatorio(0,4);

	if (contmaquina < 10 &&  conthombre < 10 ) {

		if (opcionMaquina == piedra) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/piedra.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
			
		}
		else if (opcionMaquina == papel) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/papel.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/draw.png'/>";
			contempate++;
			document.getElementById("empate").innerHTML=contempate;
		}
		else if (opcionMaquina == tijera) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/tijera.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
		else if (opcionMaquina == lagarto) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/lagarto.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
		else if(opcionMaquina == spock) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/spock.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
		}


	}//fin papel
	premio();
}//fin funcion

	//else if (opcionUsuario == tijera) {
		
function FTijera() {

	document.getElementById("selecusuario").innerHTML="<img src='img/tijera.png'/>";
	document.getElementById("versus").innerHTML="<img src='img/versus.png'/>";
	aleatorio();
	opcionMaquina = aleatorio(0,4);

	if (contmaquina < 10 &&  conthombre < 10 ) {

		if (opcionMaquina == piedra) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/piedra.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
		else if (opcionMaquina == papel) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/papel.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
		}
		else if (opcionMaquina == tijera) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/tijera.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/draw.png'/>";
			contempate++;
			document.getElementById("empate").innerHTML=contempate;
		}
		else if (opcionMaquina == lagarto) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/lagarto.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
		}
		else if (opcionMaquina == spock) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/spock.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
	}//fin tijera

		premio();

}//fin funcion

	//else if (opcionUsuario == lagarto) {

function FLagarto() {

	document.getElementById("selecusuario").innerHTML="<img src='img/lagarto.png'/>";
	document.getElementById("versus").innerHTML="<img src='img/versus.png'/>";
	aleatorio();
	opcionMaquina = aleatorio(0,4);

	if (contmaquina < 10 &&  conthombre < 10 ) {

		if (opcionMaquina == piedra) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/piedra.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
		else if (opcionMaquina == papel) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/papel.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
		}
		else if (opcionMaquina == tijera) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/tijera.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
		else if (opcionMaquina == lagarto) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/lagarto.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/draw.png'/>";
			contempate++;
			document.getElementById("empate").innerHTML=contempate;
		}
		else if (opcionMaquina == spock) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/spock.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
		}
	}//fin lagarto
		 premio();


}//fin funcion



	//else if (opcionUsuario == spock) {


function FSpock() {

	document.getElementById("selecusuario").innerHTML="<img src='img/spock.png'/>";
	document.getElementById("versus").innerHTML="<img src='img/versus.png'/>";
	aleatorio();
	opcionMaquina = aleatorio(0,4);

	if (contmaquina < 10 &&  conthombre < 10 ) {

		if (opcionMaquina == piedra) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/piedra.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
		}
		else if (opcionMaquina == papel) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/papel.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
		else if (opcionMaquina == tijera) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/tijera.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/up.png'/>";
			conthombre++;
			document.getElementById("hombre").innerHTML=conthombre;
		}
		else if (opcionMaquina == lagarto) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/lagarto.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/down.png'/>";
			contmaquina++;
			document.getElementById("maquina").innerHTML=contmaquina;
		}
		else if (opcionMaquina == spock) {
			document.getElementById("selecmaquina").innerHTML="<img src='img/spock.png'/>";
			document.getElementById("resultado").innerHTML   ="<img src='img/draw.png'/>";
			contempate++;
			document.getElementById("empate").innerHTML=contempate;
		}
	}//fin spock

			premio();

}//fin funcion

/* PROBAR ESTA PARTE

var usuarioEscoge = prompt("¿Piedra, papel o tijeras?");
var computadorEscoge = Math.random();
if (computadorEscoge <0.34){
	computadorEscoge = "piedra";
}else if(computadorEscoge <=0.67){
	computadorEscoge = "papel";
}else{
	computadorEscoge = "tijeras";
}

function comparar(eleccion1,eleccion2){
    
    if(eleccion1 === eleccion2){
        
        return("¡Es un empate!");
        
        }
        
        if(eleccion2 === "piedra"){
            return("piedra gana");
            if(eleccion2 === "papel"){
                return("tijera  gana");
                }
                else{
                    
                    }
            
            }
    };
    
    comparar(computadorEscoge,usuarioEscoge);
    


*/
