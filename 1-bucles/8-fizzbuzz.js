// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS
for (i=1; i<101; i++){
    var j="";
    if (i%3==0){
        j=j+"GEEKS";
    }
    if (i%5==0){
        j=j+"HUBS";
    }
    if (i%3!=0 && i%5!=0){
        j=i;
    }
    console.log(j);
}