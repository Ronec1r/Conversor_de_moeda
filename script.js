//Função para validar entrada
moedas=[]
valor = 0
function validar(){
    if (document.getElementById("valor").value!=''){
        valor=document.getElementById("valor").value
        console.log("Funfou aqui?")
        return true;
    }else{
        console.log("E aqui?")
        return false;
    }
}

//Função para buscar valores na api
function buscarMoedas(){
    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL"
    fetch(url)
        .then (function(response){
            return response.json()
        })
        .then(function(data){
            const dolar=data.USDBRL
            const euro=data.EURBRL
            const libra=data.GBPBRL

            var valor_dolar=dolar.low*valor
            var valor_euro=euro.low*valor
            var valor_libra=libra.low*valor

            document.getElementById('valor_convertido_dolar').innerHTML=parseFloat(valor_dolar.toFixed(2));
            document.getElementById('valor_convertido_euro').innerHTML=parseFloat(valor_euro.toFixed(2));
            document.getElementById('valor_convertido_libra').innerHTML=parseFloat(valor_libra.toFixed(2));
        })
    
}


//Função para atualizar na página
function atualizarPagina(){
    if(validar()){
        buscarMoedas()
    }else{
        window.alert("Insira um valor para ser convertido!!")
    }
    

}
document.getElementById('mybutton').onclick=atualizarPagina;