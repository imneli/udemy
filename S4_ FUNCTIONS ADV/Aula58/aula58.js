// constructor function -> objs
// fabric funct -> objs
// construtora -> Pessoa (new)

// sempre que usar precisa do new

function Pessoa (name, subname) {

    // const metodoInterno = function() {

    // }; coisa interna e talz
    
    this.name = name;
    this.subname = subname;

    this.method = function() {
        console.log(this.name + ' sou um metodo')
    }
}

const p1 = new Pessoa('Manuela', 'Broxa')
const p2 = new Pessoa('Maria', 'Luiza')



console.log(p1);

