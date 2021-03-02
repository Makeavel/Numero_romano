function entrada(palavra){
    var palavra ;
    console.log(`Entrada: ${palavra}`);
    const entrada = palavra.split(""); 
    return translate(entrada);
} 

function translate(entrada){

    let somaFinal = 0;
    
    for( let x=0 ; x < entrada.length ; x++){
       
        if ( entrada[x] == "i"){
            
           entrada[x] = (["x" , "v"].includes(x + 1)) ? somaFinal += 1 : somaFinal -= 1;
        }
        
        else if( entrada[x] == "v" ){

          entrada[x] = ([undefined , "i"].includes(x-1)) ? somaFinal += 4 : somaFinal += 5;
        }

        else if( entrada[x] == "x"){
  
          entrada[x] = ([undefined , "i"].includes(x-1)) ? somaFinal += 9 : somaFinal += 10;
        }
            
    } // for
    console.log(`Resultado: ${somaFinal}`);
}

entrada("ix") ;
    

    

