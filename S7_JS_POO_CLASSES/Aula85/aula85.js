// 705.484.450-52 070.987.720-03
class ValidateCPF {
    constructor(sentCPF) {
      Object.defineProperty(this, 'cleanCPF', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: sentCPF.replace(/\D+/g, '')
      });
    }
  
    isSequence() {
      return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
    }
  
    generateNewCPF() {
      const cpfWithoutDigits = this.cleanCPF.slice(0, -2);
      const digit1 = ValidateCPF.generateDigit(cpfWithoutDigits);
      const digit2 = ValidateCPF.generateDigit(cpfWithoutDigits + digit1);
      this.newCPF = cpfWithoutDigits + digit1 + digit2;
    }
  
    static generateDigit(cpfWithoutDigits) {
      let total = 0;
      let reverse = cpfWithoutDigits.length + 1;
  
      for(let numericString of cpfWithoutDigits) {
        total += reverse * Number(numericString);
        reverse--;
      }
  
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
    }
  
    validate() {
      if(!this.cleanCPF) return false;
      if(typeof this.cleanCPF !== 'string') return false;
      if(this.cleanCPF.length !== 11) return false;
      if(this.isSequence()) return false;
      this.generateNewCPF();
  
      return this.newCPF === this.cleanCPF;
    }
  }
  
  let validateCPF = new ValidateCPF('070.987.720-03');
  // validateCPF = new ValidateCPF('999.999.999-99');
  
  if (validateCPF.validate()) {
    console.log('Valid CPF');
  } else {
    console.log('Invalid CPF');
  }
  