// 904.661.780-77


/* 


11 - (237 % 11) = 5 (primeiro digito)
Se o numero foir maior q 9, considerado 0.
*/

function ValidateCPF(cpfSent) {
    Object.defineProperty(this, 'cpfClean', {
        get: function() {
            return cpfSent.replace(/\D+/g, '')
        }
    });
}


ValidateCPF.prototype.valid = function() {
    if (typeof this.cpfClean === 'undefined') return false;
    if (this.cpfClean.length !== 11) return false;
    if (this.isSequence()) return false;
    
    const cpfPartial = this.cpfClean.slice(0, -2);
    const digit1 = this.createDigit(cpfPartial);
    const digit2 = this.createDigit(cpfPartial + digit1);

    const newCpf = cpfPartial + digit1 + digit2;
    console.log(newCpf);
    return newCpf === this.cpfClean;
    
    return true
};

ValidateCPF.prototype.createDigit = function(cpfPartial) {
    const cpfArray = Array.from(cpfPartial);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
};

ValidateCPF.prototype.isSequence = function() {
    const sequence = this.cpfClean[0].repeat(this.cpfClean.length);
    return sequence === this.cpfClean;
};



const cpf = new ValidateCPF('97547097693')
console.log(cpf.valid())

if(cpf.valid()){
    console.log('Cpf Válido.');
} else {
    console.log('Cpf Inválido')
}