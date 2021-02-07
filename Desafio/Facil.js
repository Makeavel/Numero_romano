
    var palavra = "xxiv" ;
    console.log(`Entrada: ${palavra}`);
    var entrada = palavra.split("");
    

    
    let somaFinal = 0;
    
    for( let x=0 ; x < entrada.length ; x++){
        
        if ( entrada[x] == "i" || entrada[x] == "I"){
            
            if(entrada[x+1] != "V" || entrada[x+1] != "X"){
                somaFinal += 1;
            }
            somaFinal -= 1;
        }
        
        else if( entrada[x] == "v" || entrada[x] =="V" ){

            if(entrada[x-1] != undefined && entrada[x-1] == "i"){
                somaFinal += 4;     
            }
            else{
                somaFinal += 5;
            }
        }

        else if( entrada[x] == "x" || entrada[x] == "X"){

            if(entrada[x-1] != undefined && entrada[x-1] == "i"){
                somaFinal += 9;
            }
            else{
                somaFinal += 10;
            }
        }
       
    } // for

    console.log(`Resultado: ${somaFinal}`);
    

