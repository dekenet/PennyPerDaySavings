var BasicCalculator = function(){
    const _this = document['basic-calculator'];
    const _input = document.getElementsByName('input')[0];
    const _output = document.getElementsByName('output')[0];
    const _calculate = document.getElementsByName('calculate')[0];
    _this.addEventListener('submit', e => { e.preventDefault(); return false; });
    _input.addEventListener('keyup', e => { input(e.key,e) });
    _calculate.addEventListener('click', e => { calculate(e) });
    var inputs = [''];
    var signs = [''];
    var calculate = (e) => {
        run = (n1, n2, op) => {
            console.log('Run:', n1, n2, op)
            n1 = parseInt(n1) || 0;
            n2 = parseInt(n2) || 0;
            if(!op) return Error('Missing Operand.')
            switch (op) {
                case '+': return n1 + n2; break;
                case '-': return n1 - n2; break;
                case '*': return n1 * n2; break;
                case '/': return n1 / n2; break;
                default: return Error('Unsupported Operand.')
            }
        }
        // this.outputs = this.inputs;
        // document.getElementsByName('output')[0].value = this.outputs;
        _output.innerHTML = inputs.reduce((acc, curr, idx) => {
            console.log('Reduce:',acc, curr, signs[idx])
            if(!signs[idx]) return curr;
            return run(acc, curr, signs[idx]);
        },0);
    };
    var input = (key, e) => {
        if (/\d/.test(key)) inputs[inputs.length-1] += key;
        if (/[\+\-\*\/]/.test(key)) {
            signs.push(key);
            inputs.push('');
        }
        _input.value=inputs.map( (i,idx) => (signs[idx] ? signs[idx] + ' ' : '') + i ).join(' ')
        return;

        // if (i.value == this.inputs) return;
        // var word = /d*/;
        // var test = i.value;

        // console.log(word.test(test))
        // if (i.value) {
        //     this.inputs = i.value;
        //     i.value = this.inputs;
        //     calculate();
        // }
        // // console.log()
    };
    return {
        calculate: this.calculate,
        input: this.input
    }
}();