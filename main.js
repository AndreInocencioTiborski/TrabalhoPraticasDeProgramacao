//inicio projeto
let inteira = 30.0
let meia = 15.0
let vip = 60.0
let total_normal = 200
let total_vip =  50
let pedido = "vip"
let valor_total = 0
switch (pedido) {
    case "inteira":
        if (total_normal > 0) {
            total_normal--
            valor_total =+ inteira
            console.log("1 Ingresso Inteira")
            console.log("Valor R$",inteira)
            console.log("Ingressos restantes:",total_normal)
            
        } else {
            console.log("Desculpe mas os ingressos acabaram")
        }
        break
    case "meia":
        if (total_normal > 0) {
            total_normal--
            valor_total =+ meia
            console.log("1 Ingresso Meia")
            console.log("Valor R$",meia)
            console.log("Ingressos restantes:",total_normal)
        } else {
            console.log("Desculpe mas os ingressos acabaram")
        }
        break
    case "vip":
        if (total_normal > 0) {
            total_vip--
            valor_total=+vip
            console.log("1 Ingresso VIP")
            console.log("Valor R$",vip)
            console.log("Ingressos VIP restantes:",total_vip)
        } else {
            console.log("Desculpe mas os ingressos acabaram")
        }
        break
}
console.log("Valor total R$", valor_total)
