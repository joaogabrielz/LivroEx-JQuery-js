function moneyTextToFloat(text){
    var cleanText = text.replace("R$ ", "").replace(",", ".");
    return parseFloat(cleanText)
}
function floatToMoneyText(value){
    var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
    text = "R$ "+ text;
    return text.substr(0 , text.length - 2) + "," + text.substr(-2)
}
function readTotal(){
    var total = document.getElementById("total");
    return moneyTextToFloat(total.innerHTML);
}
function writeTotal(value){
    var total = document.getElementById("total");
    total.innerHTML = floatToMoneyText(value)
}

function calculateTotalProducts(){
    var produtos = document.getElementsByClassName("produto")
    var totalPordutos = 0;

    for(var i=0; i < produtos.length; i ++){
        var priceElmts = produtos[i].getElementsByClassName("price");
        var priceText = priceElmts[0].innerHTML
        var price = moneyTextToFloat(priceText)
        
        var qntdElmts = produtos[i].getElementsByClassName("quantity");
        var qntdText = qntdElmts[0].value
        var qntd = moneyTextToFloat(qntdText)
        
        var subtotal = qntd * price;
        totalPordutos += subtotal;
    }
    return totalPordutos;
}

// function qndtMudou(){
//     writeTotal(calculateTotalProducts());
// }
// function onDocLoad(){
//     var txtEdits = document.getElementsByClassName("quantity");
//     for(var i=0; i < txtEdits.length; i++){
//         txtEdits[i].onchange = qndtMudou;
//     }
// }
//Ou Refatorando:
function onDocLoad(){
        var txtEdits = document.getElementsByClassName("quantity");
        for(var i=0; i < txtEdits.length; i++){
            txtEdits[i].onchange = function(){
                writeTotal(calculateTotalProducts());
            };
        }
    }
window.onload = onDocLoad;