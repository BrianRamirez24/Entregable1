const nparadas  = Math.floor(Math.random() *3)+1;//numero de paradas
const distancia = 900 //distancia en kilometros
const timelife  = Math.floor(Math.random() * 10000);//calcula el timelife de todo el viaje
const tparada    = Math.floor(Math.random()*5)+1;//tiempo de cada parada;
const maxSpeed = 240;
const changeSpeed = maxSpeed/6
//let btnRetroceso = document.getElementById("retroceso");


class Carro{

    constructor (){
        //super();
        this.encendido = false;
        this.neutro = false;
        this.frenoMano = true;
        this.primera = false;
        this.segunda = false;
        this.tercera = false;
        this.cuarta  = false;
        this.quinta = false;
        this.sexta  = false;
        this.arranque = false;
        this.arranque = false;
        this.directional = false;
    }
    //datos direccional
        setDire(directional){
            this.directional = directional;
        }
        getDire(){
            return this.directional;
        }
    // fin datos direccional

    //datos encendido
      prenderEncendido(encendido){

        this.encendido = encendido;
      }

     estadoEncendido(){
        return this.encendido;
    }

    //fin datos encendido 


    //datos neutro 
    neutro(){
        this.neutro = true;
    }

    apagarNeutro(){
        this.neutro = false;
    }
     estadoNeutro(){
        return this.neutro;
    }

    //fin datos neutro

    //datos clutch
    ponerClutch(){
        this.clutch = true;
    }
    quitarClutch(){
        this.cluthc = false;
    }
    clutch(){

        return this.clutch;
    }
    //freno
    ponerfreno(){
        this.clutch = true;
    }
    quitarfreno(){
        this.freno = false;
    }
     freno(){

        return this.freno;
    }
      //frenoMano
      ponerfrenoMano(){
        this.frenoMano = true;
    }
      quitarfrenoMano(){
        this.frenoMano = false;
    }
     frenoMano(){

        return this.frenoMano;
    }
    //fin frenoMano

    //acelerador
    ponerAcelearador(){
        this.acelerador = true;
    }
      quitarAcelearador(){
        this.acelerador = false;
    }
     acelearador(){

        return this.acelerador;
    }
    //fin acelardor

    //giro izquierda
    turnLeft(){
        this.left=true;
    }
    noturnLeft(){
        this.left = false;
    }
     turnLeft(){
        return this.left;
    }

    //giro derecha

    turnRight(){
        this.right=true;
    }
    noturnRight(){
        this.right = false;
    }
     turnRight(){
        return this.right;
    }

    ponerEstacionaria(){
        this.estacionaria = true;
    }
    quitarEstacionaria(){
        this.estacionaria = false;
    }
     estacionaria(){
        return this.estacionaria;
    }

    ponerReversa(){
        this.reversa = true;
    }
    quitarReversa(){
        this.reversa = false;
    }
     reversa(){
        return this.reversa;
    }

    arranque(arranque){
        this.arranque = arranque;
    }
    retornarArranque(){
        return this.arranque;
    }

    ponerPrimera(){
        this.primera = true;
       
    }
    quitarPrimera(){
        this.primera = false;
    }
     primera(){
        return this.primera;
    }
    
    ponerSegunda(){
        this.segunda = true;
    }
    quitarSegunda(){
        this.segunda = false;
    }
     segunda(){
        return this.segunda;
    }

     ponerTercera(){
        this.tercera = true;
    }
    quitarTercera(){
        this.tercera = false;
    }
     Tercera(){
        return this.tercera;
    }

    ponerCuarta(){
        this.cuarta = true;
    }
    quitarCuarta(){
        this.cuarta = false;
    }
     Cuarta(){
        return this.cuarta;
    }

    ponerQuinta(){
        this.quinta = true;
    }
    quitarQuinta(){
        this.quinta = false;
    }
     Quinta(){
        return this.quinta;
    }

    ponerSexta(){
        this.sexta = true;
    }
    quitarSexta(){
        this.sexta = false;
    }
     Sexta(){
        return this.sexta;
    }

    
}



const paradas = (distancia, nparadas) => {
      
    let puntoParada;
    
    let resultados = new Array();

        switch(nparada) {

           
            case 1: puntoParada = Math.floor(Math.random() * 10);
                    while(puntoParada >= distancia-1 || puntoParada == 0){
                           puntoParda = Math.floor(Math.random() * 10);
                    }
                    resultados.push(puntoParada);
                    return puntoParada; 
                    
            case 2: puntoParada = Math.floor(Math.random() * 10); 
                    for(let i = 1; i <= nparadas; i++)
                    {

                        /* si el numero de paradas es igual a 2 el ciclo switch evalua que las
                            paradas esten entre dos rangos el primero es el que se encuentra 
                            desde 0 hasta la mitad de la distancia 
                            el segundo desde la mitad de la distancia hasta el casi llegar a la distancia
                         */
                         switch(i){
                             
                            case 1: puntoParada = Math.floor(Math.random() * 10);
                                    while(puntoParada >= (distancia/2) || puntoParada == 0) {
                                        puntoParda = Math.floor(Math.random()*10);
                                    }
                                    resultados.push(puntoParada);
                                    break;

                            case 2: puntoParada = Math.floor(Math.random() * 10);
                                    while(puntoParada <(distancia/2) || puntoParada >= distancia - 1 || puntoParada == 0) {
                                        puntoParda = Math.floor(Math.random()*10);
                                     }
                                     resultados.push(puntoParada); 
                                     break;     
                         }
                         

                     }
                   
                     
                    return puntoParada;    
            
            case 3: puntoParada = Math.floor(Math.random() * (distancia / 3)); 
                    
                    
                    for(let i = 0; i<3; i++){

                        switch(i) {
                                case 0: 
                                        while(puntoParada == 0){
                                            puntoParada = Math.floor((Math.random() * (distancia / 3)));
                                        }
                                        resultados.push(puntoParada);
                                        break;

                                case 1: puntoParada = (distancia / 3) + Math.floor((Math.random()*(distancia / 3))) + 1;
                                        while(puntoParada >= (2 * (distancia / 3))){
                                        puntoParada = calculo + Math.floor((Math.random()*(distancia / 3))) + 1;
                                        }
                                        resultados.push(puntoParada);
                                        break;

                                case 2: puntoParada = (2 * (distancia / 3)) + Math.floor((Math.random()* (distancia / 3))) + 1;
                                        while(puntoParada >= distancia - 1){
                                        puntoParada = (2 * (distancia / 3)) + Math.floor((Math.random()*(distancia / 3))) ;
                                        }
                                        resultados.push(puntoParada);
                                        break;
                        }
                    }

                    /*
                    while(puntoParada > (distancia/4)){
                        puntoParda = Math.floor(Math.random() * 10);
                    }

                    
                    for(let i =0;i<distancia;i++){
                        switch(i){
                            case 0:
                                while(puntoParada >= ((distancia/nparada)/2)) {
                                puntoParda = Math.floor(Math.random()*10);
                                }
                                resultados.push(puntoParada);
                                break;
                        case 1:
                                while(puntoParada < (((distancia/nparada)/2 || puntoParada >= distancia))) {
                                    puntoParda = Math.floor(Math.random()*10);
                                    }
                                    resultados.push(puntoParada);

                                    
                                    break;     
                        }
                        

                    }
                    */
                
                    
                return puntoParada;
            
        }
}


// class Destino {

//     constructor(nparadas,
//         destino) {

//         this.nparadas = nparadas;
//         this.destino = destino;
//     }

//     set paradas(nparadas) {
//         this.nparadas = nparadas;
//     }

//     get paradas() {
//         return this.nparadas;
//     }

//     set destino(destino) {
//         this.destino = destino;
//     }

//     get destino() {
//         return this.destino;
//     }


// }

var carr = new Carro();


function arranque(){
    
   
}


window.addEventListener('keydown', (event) => {
    if(carr.getDire() == false && (String.fromCharCode(event.keyCode) == "L")){
        alert( "Debe poner la direccional antes de girar a izquierda");
        return false;
    }
    else if((String.fromCharCode(event.keyCode) == "L")){
        document.getElementById("parrafo").innerHTML += (String.fromCharCode(event.keyCode));
    }
    else if(carr.getDire() == false && (String.fromCharCode(event.keyCode) == "R")){
        alert( "Debe poner la direccional antes de girar a derecha");
        return false;
    }
   
   
});


function prenderCarro(){
    
    if( carr.estadoEncendido() == false && carr.estadoNeutro() == false){
        carr.prenderEncendido(true);
        document.getElementById("parrafo").innerHTML = "";
               document.getElementById("parrafo").innerHTML += "el carro esta encendido <br/>";
                document.getElementById("directions").style.background= "#5b1e5b";
               
                    setTimeout(()=>{
                                    document.getElementById("parrafo").innerHTML += "pisando el clutch <br/>"
                                    carr.ponerClutch();},
                                    1000); 
                                        
        
                   setTimeout(() => {
                        document.getElementById("parrafo").innerHTML += "pisando el freno <br/>";
                        carr.ponerfreno();}, 1000);
                               
        
                   setTimeout(() => {
                        document.getElementById("parrafo").innerHTML += "quitando el freno de mano<br/>";
                        carr.quitarfrenoMano();},1000);
                        
        
                     setTimeout(() => {
                        document.getElementById("parrafo").innerHTML += "poniendo primera<br/>";
                        carr.apagarNeutro();
                        carr.ponerPrimera();
                        },
                         1000);
                        
        
                     setTimeout(() => {
                        document.getElementById("parrafo").innerHTML += "soltando el freno<br/>";
                        carr.quitarfreno();},1000);
                                   
                    
                    setTimeout(() => {
                            document.getElementById("parrafo").innerHTML += "se suelta el clutch y se pone el acelarador";
                            carr.quitarClutch();
                            carr.ponerAcelearador();
                            
                            }, 1000);

                     switch(nparadas){
                         case 1:     
                            
                        setTimeout(() => {
                            for(let i = 0; i<40; i++){
                                document.getElementById("parrafo").innerHTML= `velocidad marcha 1 ${i}`

                            }
                        }, 3000);

                        setTimeout(() => {
                            carr.quitarPrimera();
                            carr.ponerSegunda();
                            for(let i = 40; i<80; i++){
                                document.getElementById("parrafo").innerHTML = `velocidad marcha 2 ${i}`
                                
                            }
                            }, 3000);

                        setTimeout(() => {
                            carr.quitarSegunda();
                            carr.ponerTercera();
                            for(let i = 80; i<120; i++){
                                document.getElementById("parrafo").innerHTML = `velocidad marcha 3 ${i}`
                                
                            }
                            }, 3000);


                        setTimeout(() => {
                            document.getElementById("parrafo").innerHTML = `parada`
                            }, 3000);


                        setTimeout(() => {
                            carr.quitarTercera();
                            carr.ponerCuarta();
                            for(let i = 120; i<160; i++){
                                document.getElementById("parrafo").innerHTML = `velocidad marcha 4 ${i}`
                                
                            }
                            
                            }, 3000);

                        setTimeout(() => {
                            carr.quitarCuarta();
                            carr.ponerQuinta();
                            for(let i = 160; i<200; i++){
                                document.getElementById("parrafo").innerHTML = `velocidad marcha 5 ${i}`
                                
                            }
                            
                            }, 3000); 

                        setTimeout(() => {
                            carr.quitarQuinta();
                            carr.ponerSexta();
                            for(let i = 200; i<=240; i++){
                                document.getElementById("parrafo").innerHTML = `velocidad marcha 6 ${i}`
                                
                            }
                            
                            }, 3000);
                           break;
                    case 2: 

                    setTimeout(() => {
                        for(let i = 0; i<40; i++){
                            document.getElementById("parrafo").innerHTML= `velocidad marcha 1 ${i}`

                        }
                    }, 3000);

                    setTimeout(() => {
                        carr.quitarPrimera();
                        carr.ponerSegunda();
                        for(let i = 40; i<80; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 2 ${i}`
                            
                        }
                        }, 3000);
                        setTimeout(() => {
                            document.getElementById("parrafo").innerHTML = `parada`
                            }, 3000);
    
    
                    setTimeout(() => {
                        carr.quitarSegunda();
                        carr.ponerTercera();
                        for(let i = 80; i<120; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 3 ${i}`
                            
                        }
                        }, 3000);


                    
                    setTimeout(() => {
                        carr.quitarTercera();
                        carr.ponerCuarta();
                        for(let i = 120; i<160; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 4 ${i}`
                            
                        }
                        
                        }, 3000);

                        setTimeout(() => {
                            document.getElementById("parrafo").innerHTML = `parada`
                            }, 3000);
    
    
                    setTimeout(() => {
                        carr.quitarCuarta();
                        carr.ponerQuinta();
                        for(let i = 160; i<200; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 5 ${i}`
                            
                        }
                        
                        }, 3000); 

                    setTimeout(() => {
                        carr.quitarQuinta();
                        carr.ponerSexta();
                        for(let i = 200; i<=240; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 6 ${i}`
                            
                        }
                        
                        }, 3000);
                       break;

                            case 3: 
                            setTimeout(() => {
                                for(let i = 0; i<40; i++){
                                    document.getElementById("parrafo").innerHTML= `velocidad marcha 1 ${i}`
        
                                }
                            }, 3000);
        
                            setTimeout(() => {
                                carr.quitarPrimera();
                                carr.ponerSegunda();
                                for(let i = 40; i<80; i++){
                                    document.getElementById("parrafo").innerHTML = `velocidad marcha 2 ${i}`
                                    
                                }
                                }, 3000);
                                setTimeout(() => {
                                    document.getElementById("parrafo").innerHTML = `parada`
                                    }, 3000);
            
            
                            setTimeout(() => {
                                carr.quitarSegunda();
                                carr.ponerTercera();
                                for(let i = 80; i<120; i++){
                                    document.getElementById("parrafo").innerHTML = `velocidad marcha 3 ${i}`
                                    
                                }
                                }, 3000);
        
        
                            
                            setTimeout(() => {
                                carr.quitarTercera();
                                carr.ponerCuarta();
                                for(let i = 120; i<160; i++){
                                    document.getElementById("parrafo").innerHTML = `velocidad marcha 4 ${i}`
                                    
                                }
                                
                                }, 3000);
        
                                setTimeout(() => {
                                    document.getElementById("parrafo").innerHTML = `parada`
                                    }, 3000);
            
            
                            setTimeout(() => {
                                carr.quitarCuarta();
                                carr.ponerQuinta();
                                for(let i = 160; i<200; i++){
                                    document.getElementById("parrafo").innerHTML = `velocidad marcha 5 ${i}`
                                    
                                }
                                
                                }, 3000); 
                                                    setTimeout(() => {
                        for(let i = 0; i<40; i++){
                            document.getElementById("parrafo").innerHTML= `velocidad marcha 1 ${i}`

                        }
                    }, 3000);

                    setTimeout(() => {
                        carr.quitarPrimera();
                        carr.ponerSegunda();
                        for(let i = 40; i<80; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 2 ${i}`
                            
                        }
                        }, 3000);
                        setTimeout(() => {
                            document.getElementById("parrafo").innerHTML = `parada`
                            }, 3000);
    
    
                    setTimeout(() => {
                        carr.quitarSegunda();
                        carr.ponerTercera();
                        for(let i = 80; i<120; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 3 ${i}`
                            
                        }
                        }, 3000);


                    
                    setTimeout(() => {
                        carr.quitarTercera();
                        carr.ponerCuarta();
                        for(let i = 120; i<160; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 4 ${i}`
                            
                        }
                        
                        }, 3000);

                        setTimeout(() => {
                            document.getElementById("parrafo").innerHTML = `parada`
                            }, 3000);
    
    
                    setTimeout(() => {
                        carr.quitarCuarta();
                        carr.ponerQuinta();
                        for(let i = 160; i<200; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 5 ${i}`
                            
                        }
                        
                        }, 3000); 
                        setTimeout(() => {
                            //parada stop
                            }, 3000);
                    setTimeout(() => {
                        carr.quitarQuinta();
                        carr.ponerSexta();
                        for(let i = 200; i<=240; i++){
                            document.getElementById("parrafo").innerHTML = `velocidad marcha 6 ${i}`
                            
                        }
                        
                        }, 3000);
                       break;

        
                            setTimeout(() => {
                                carr.quitarQuinta();
                                carr.ponerSexta();
                                for(let i = 200; i<=240; i++){
                                    document.getElementById("parrafo").innerHTML = `velocidad marcha 6 ${i}`
                                    
                                }
                                
                                }, 3000);
                               break;
                             }
    
                       
                         
        
                }
                    
            

    

    else{

        carr.prenderEncendido(false);
        document.getElementById("parrafo").innerHTML = "el carro esta apagado";

    }
    
   
}

    function ponerDire(){
        if(carr.getDire() == false) {
            document.getElementById("parrafo").innerHTML = "";
            document.getElementById("parrafo").innerHTML = "ha puesto la direccional";
            carr.setDire(true);
        }
        else{
            carr.setDire(false);
        }
    
    }

function marchas(){


    
}

function activarFreno(){

}
