const nparadas = Math.floor(Math.random()*3);//numero de paradas
const distancia = Math.floor(Math.random()*10)//distancia en kilometros
const timelife = Math.floor(Math.random()*1000);//calcula el timelife de todo el viaje
const tparada = Math.floor(Math.random()*5);//tiempo de cada parada;
let tiempoParada = Math.floor(Math.random*5);
//let btnRetroceso = document.getElementById("retroceso");

const paradas = (distancia, nparadas) => {
      
    let puntoParada;
    let calculo;
    let resultados = new Array();
        switch(nparada){
            case 0: puntoParda = Math.floor(Math.random()*10);
                    while(puntoParada >= distancia-1){
                        puntoParda = Math.floor(Math.random()*10);
                    }
                        resultados.push(puntoParada);
                        break;

            case 1: puntoParda = Math.floor(Math.random()*10);
                    while(puntoParada >= distancia){
                           puntoParda = Math.floor(Math.random() * 10);
                    }
                    resultados.push(puntoParada);
                
                    break;
            case 2:  puntoParda = Math.floor(Math.random()*10);
                     while(puntoParada >= (distancia)){
                       puntoParda = Math.floor(Math.random()*10);
                     }
                       
                     for(let i =0; i<nparadas; i++){
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
                   
                     
                    return puntoParada;    
            
            case 3: calculo = Math.floor(distancia / 4);
                    
                    
                    for(let i = 0; i<3; i++){
                        switch(i) {
                            case 0:
                                puntoParada = Math.floor((Math.random()*calculo));
                                 while(puntoParada == 0 || puntoParada>=calculo){
                                    puntoParada = Math.floor((Math.random()*calculo));
                                 }
                                 resultados.push(puntoParada);
                                 break;

                            case 1: puntoParada = calculo + Math.floor((Math.random()*calculo)) + 1;
                                    while(puntoParada >= (2*calculo)){
                                    puntoParada = calculo + Math.floor((Math.random()*calculo)) + 1;
                                    }
                                    resultados.push(puntoParada);
                                    break;

                            case 2: puntoParada = (2 * calculo) + Math.floor((Math.random()*calculo)) + 1;
                                    while(puntoParada >= (3 * calculo)){
                                    puntoParada = (2 * calculo) + Math.floor((Math.random()*calculo)) + 1;
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

class destino {
    
    constructor(nparadas,
                destino,) {

         this.nparadas = nparadas;
         this.destino = destino;
    }

    set paradas( nparadas){
        this.nparadas = nparadas;
    }

    get paradas(){
        return this.nparadas;
    }

    set destino( destino){
        this.destino = destino;
    }

    get destino(){
        return this.destino;
    }


}


class Carro extends destino{

    constructor (){
        super();
        
    }

    // datos encendido

    encendido(){

        this.encendido = true;
    }

    Apagado(){
        this.encendido = false;
    }
    get encendido(){
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
    get neutro(){
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
    get clutch(){

        return this.clutch;
    }
    //freno
    ponerfreno(){
        this.clutch = true;
    }
    quitarfreno(){
        this.freno = false;
    }
    get freno(){

        return this.freno;
    }
      //frenoMano
      ponerfrenoMano(){
        this.frenoMano = true;
    }
      quitarfrenoMano(){
        this.frenoMano = false;
    }
    get frenoMano(){

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
    get acelearador(){

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
    get turnLeft(){
        return this.left;
    }

    //giro derecha

    turnRight(){
        this.right=true;
    }
    noturnRight(){
        this.right = false;
    }
    get turnRight(){
        return this.right;
    }

    ponerEstacionaria(){
        this.estacionaria = true;
    }
    quitarEstacionaria(){
        this.estacionaria = false;
    }
    get estacionaria(){
        return this.estacionaria;
    }

    ponerReversa(){
        this.reversa = true;
    }
    quitarReversa(){
        this.reversa = false;
    }
    get reversa(){
        return this.reversa;
    }



    ponerPrimera(){
        this.primera = true;
    }
    quitarPrimera(){
        this.primera = false;
    }
    get primera(){
        return this.primera;
    }
    
    ponerSegunda(){
        this.segunda = true;
    }
    quitarSegunda(){
        this.segunda = false;
    }
    get segunda(){
        return this.segunda;
    }

    ponerTercera(){
        this.tercera = true;
    }
    quitarTercera(){
        this.tercera = false;
    }
    get Tercera(){
        return this.tercera;
    }

    ponerCuarta(){
        this.cuarta = true;
    }
    quitarCuarta(){
        this.cuarta = false;
    }
    get Cuarta(){
        return this.cuarta;
    }

    ponerQuinta(){
        this.quinta = true;
    }
    quitarQuinta(){
        this.quinta = false;
    }
    get Quinta(){
        return this.quinta;
    }

    ponerSexta(){
        this.sexta = true;
    }
    quitarSexta(){
        this.sexta = false;
    }
    get Sexta(){
        return this.sexta;
    }
}

btnRetroceso.addEventListener('click',function cutch(){

});

