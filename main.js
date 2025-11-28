const inteira = 30.00;
const meia = 15.00;
const vip = 60.00;
let totalNormal = 200;
let totalVip =  50;
let pedidos = ["vip", "inteira", "meia"]; // fila de pedidos
let valorTotal = 0;
let quantoInteira = 0;
let quantoMeia = 0;
let quantoVip = 0;

for (const pedido of pedidos){ // cria uma variavel const chamada pedido para puxar 1 item de cada vez do array pedidos
    switch (pedido) {
        case "inteira":
            if (totalNormal > 0) {
                totalNormal--; // decrementa a quantidade total de ingressos
                quantoInteira ++; // crementa a quantidade de ingressos pedidos
                console.log("1 Ingresso Inteira");
                console.log(`Valor: R$ ${inteira.toFixed(2)}`);
                console.log("Ingressos restantes:",totalNormal);
            } else {
                console.log("Desculpe mas os ingressos acabaram");
            };
            break;
        case "meia":
            if (totalNormal > 0) {
                totalNormal--;
                quantoMeia ++;
                console.log("1 Ingresso Meia");
                console.log(`Valor: R$ ${meia.toFixed(2)}`);
                console.log("Ingressos restantes:",totalNormal);
            } else {
                console.log("Desculpe mas os ingressos acabaram");
            };
            break;
        case "vip":
            if (totalVip > 0) {
                totalVip--;
                quantoVip ++;
                console.log("1 Ingresso VIP");
                console.log(`Valor: R$ ${vip.toFixed(2)}`);
                console.log("Ingressos VIP restantes:",totalVip);
            } else {
                console.log("Desculpe mas os ingressos acabaram");
            };
            break;
    };
    // IF utilizado para somar o valor total do pedido
    if (pedido === "inteira"){ 
      valorTotal += inteira;
    } else if (pedido === "meia") {
      valorTotal += meia;
    } else if (pedido === "vip") {
      valorTotal += vip;
    };
};

console.log("\n ==================");
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
console.log(`Você pediu ao todo:`);
console.log(`${quantoInteira} Ingresso(s) Inteira(s)`);
console.log(`${quantoMeia} Ingresso(s) Meia(s)`);
console.log(`${quantoVip} Ingresso(s) Vip(s)`);
console.log("Fim da compra");