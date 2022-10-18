
do {class divisa {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const divisas = []
divisas.push(new divisa("dolar", "129"));
divisas.push(new divisa("euro", "132"));
divisas.push(new divisa("franco", "133"));
divisas.push(new divisa("real", "23"));
divisas.push(new divisa("yuan", "19"));

     pesos = prompt("Ingresar pesos a convertir");
     Divisa = prompt("Ingresar una divisa");

     let resultado = 0;

     function dividir (pesos, Divisa) {
        if (pesos > 0 && Divisa == "dolar") {
            divisas.find( divisa => { 
                if (divisa.nombre == "dolar") {
                    resultado = pesos / divisa.precio;
                    alert (pesos + " pesos son $" + resultado.toFixed(2) + " dolares");
                    salir = prompt("Para continuar presione ENTER\nPara salir escriba SALIR");
                    return
                }
             })
        }
        if (pesos > 0 && Divisa == "euro") {
            divisas.find( divisa => { 
                if (divisa.nombre == "euro") {
                    resultado = pesos / divisa.precio;
                    alert (pesos + " pesos son $" + resultado.toFixed(2) + " euros");
                    salir = prompt("Para continuar presione ENTER\nPara salir escriba SALIR");
                    return
                }
             })
        } 
        if (pesos > 0 && Divisa == "franco") {
            divisas.find( divisa => { 
                if (divisa.nombre == "franco") {
                    resultado = pesos / divisa.precio;
                    alert (pesos + " pesos son $" + resultado.toFixed(2) + " francos");
                    salir = prompt("Para continuar presione ENTER\nPara salir escriba SALIR");
                    return
                }
             })
        } 
        if (pesos > 0 && Divisa == "real") {
            divisas.find( divisa => { 
                if (divisa.nombre == "real") {
                    resultado = pesos / divisa.precio;
                    alert (pesos + " pesos son $" + resultado.toFixed(2) + " reales");
                    salir = prompt("Para continuar presione ENTER\nPara salir escriba SALIR");
                    return
                }
             })
        } 
        if (pesos > 0 && Divisa == "yuan") {
            divisas.find( divisa => { 
                if (divisa.nombre == "yuan") {
                    resultado = pesos / divisa.precio;
                    alert (pesos + " pesos son $" + resultado.toFixed(2) + " yuanes");
                    salir = prompt("Para continuar presione ENTER\nPara salir escriba SALIR");
                    return
                }
             })
        } 
        else {
            alert("Debe ingresar un valor y una divisa");
        }
    }
     dividir(pesos, Divisa)
    
} while (salir != "SALIR");