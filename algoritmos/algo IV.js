/*1. Dados un array y un valor Y,
 cuenta e imprime (print) el número de valores del array
  que sean mayores que Y.
function array(y,M){
  
  for(var i=0; i<y.length; i++)
  {
   
    if(y[i]>M){
    
      console.log (y[i]);
    }
  }
}

var a=[1,2,3,6,9,15];
var b=4;

array(a, b);
*/

/*2. Dado un array, imprime los valores máximos (max),
 mínimos (min) y promedio (average) para el array.*/

function B(x){
  
  z=x[0];
  y=x[0];  
  w=0;
  
  for (var i=0; i<x.length; i++){
  
    if(x[i+1] > z){
       z = x[i+1];
    }
    if(y > x[i+1]){
       y = x[i+1];
    }
    w = w + x[i];
    
  }    
  console.log (z);
  console.log (y);
  console.log (w/x.length);
  
}
var x=[1,2,7,15,5];
B(x);

/*Dado un array de números,
crea una función que dé como resultado un nuevo array
donde los valores negativos se reemplacen por el texto (string) ‘Dojo’.
Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) 
debiera devolver [1,2, “Dojo”, “Dojo”, 5]. */

function reemplazarNegativos(x){
    z = x;
    for (var i=0; i<x.length; i++){
        if ( x[i] <0){
            x[i] = 'Dojo';
        }
    }
    return z;
}
console.log(reemplazarNegativos([1,2,-3,-5,5]));

/*Dado un array y su respectivo índice,
 remueve los valores en el rango del índice dado( acortando el array).
 Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].*/

 