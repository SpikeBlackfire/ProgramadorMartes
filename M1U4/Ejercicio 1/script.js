// 0 a 1000 metros = pie
// 1000 a 10000 metros = bicicleta
// 10000 a 30000 metros = colectivo
// 30000 a 100000 metros = auto
// +100000 = avión

var numero = prompt("Cuantos metros son?") ;

if(numero <= 1000) {   
    document.write("Empezá a elongar, acá se llega a PIE") 
}  else if (numero > 1000 && numero <= 30000) {  
    document.write("mejor inflá la BICI")  
}  else if (numero > 30000  && numero<= 100000 ) {
       document.write("Andá cargando la SUBE, tenés que tomarte un COLECTIVO")
}  else {  document.write ("Tenés el pasaporte al dia? Te vas a tener que ir en AVION") 
        }  