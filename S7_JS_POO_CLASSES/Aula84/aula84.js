class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }


    // metodo estatico
    static trocaPilha() {
        console.log('Ok, vou trocar.');
    }
}

const controle1 = new ControleRemoto('LG');


controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();


ControleRemoto.trocaPilha();

console.log(controle1)

