export class Carro{
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velociade = 0;
    }

    acelerar(){
        this.velociade += 10;
    }

    frear(){
        if (this.velociade > 0) {
            this.velociade -= 5;
        }
    }

    status(){
        return `Velocidade atual: ${this.velociade} km/h`;
    }
}

