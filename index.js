



function calculaRomano(){
    
    var inteiro = 0;
    var entradaRomano = "XVII"
    while(entradaRomano.indexOf("")){
        if(entradaRomano.indexOf("I") ){
            inteiro += 1;
        }
        if(entradaRomano.indexOf("V")){
            inteiro += 5;
        }
        if(entradaRomano.indexOf("X")){
            inteiro += 10;
        }   
    }

    console.log(inteiro);
}