// function criaCalculadora () {
    
//     return {
//         display: document.querySelector('.display'),

//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//         },

//         pressionaEnter(){
//             document.addEventListener('keydown', e => {
//                 if(e.key === 'Enter'){
//                     this.realizaConta();
//                 }
//             });
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         apagaUm() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if(conta  === undefined || conta === null || isNaN(conta)) {
//                     alert('Conta inválida');
//                     return;
//                 }

//                 this.display.value = String(conta);
//             }catch(e) {
//                  alert('Conta inválida');
//                  return;
//             }
//         },


//         cliqueBotoes() {
//             document.addEventListener('click', e => {
//                 const el = e.target;

//                 if(el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if(el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if(el.classList.contains('btn-del')) {
//                     this.apagaUm()
//                 }

//                 if (el.classList.contains('btn-eq')) {
//                     this.realizaConta()
//                 }
//             });
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         }


//     };
// }

// const calculadoea = criaCalculadora();
// calculadoea.inicia();



function Calculadora() {
    this.display = document.querySelector('.display')

    this.inicia = function(){
        this.cliqueBotoes()
        this.pressionaEnter()
    
    }

    this.pressionaEnter = function (){
        document.addEventListener('keydown', e => {
            if(e.key === 'Enter'){
                this.realizaConta();
        }
            if (e.key === 'Backspace') {
                this.apagaUm();
            }
    });
}

    this.cliqueBotoes = function(){
        document.addEventListener('click', e => {
            const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
            }


                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
            }


                if(el.classList.contains('btn-del')){
                    this.apagaUm();
            }


                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
            }
        
    });
}


    this.realizaConta = function (){
        let conta = this.display.value
        
        try{
            conta = eval(conta)
            if (conta === undefined || conta === null || isNaN(conta) ){
                alert('conta inválida')
                return;
            }

            this.display.value = String(conta)
        }catch(e){
            alert('conta inválida')
        }
    }

    this.apagaUm = function(){
        this.display.value = this.display.value.slice(0, -1)
    }

    this.btnParaDisplay = function(valor){
        this.display.value += valor
    }

    this.clearDisplay = function() {
        this.display.value = '';
    }
}


const calc = new Calculadora()

calc.inicia()