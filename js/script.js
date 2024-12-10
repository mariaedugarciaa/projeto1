// Selação de elementos para estar fazendo o evento neles

const multiplicationForm=document.querySelector("#multiplication-form")
// numero da tabuada
const numberInput=document.querySelector("#number")
// quantas vezes eu quero multiplicar
const multiplicationInput=document.querySelector("#multiplicator")

const multiplicationTitle=document.querySelector("#multiplication-title span")

const multiplicationTable=document.querySelector("#multiplication-operations")

// Funções.criando a partir do codigo
const createTable=(number,multiplicatorNumber)=>{
    // quando a função é executada, a gente vai ter que limpar a tabiuada anterior ou tirar o titulo do informe , nn qr q fique presente com resultados
    // vou estar limpandp o html
    multiplicationTable.innerHTML=""

    // vai repetir o tanto de vezes que o usuario digutou no multiplicator number
     for(i=1;i<=multiplicatorNumber;i++){
        const result=number*i
        console.log(result)

        const template=`<div class="row">
            <div class="operation">${number} x${i}=</div>
            <div class="result">${result}</div>
            </div>`
            // esse objeto, vai permitir transefir isso de cima para o html
        const parser=new DOMParser()
// transforma uma string em html
        const htmlTemplate=parser.parseFromString(template,"text/html")

        const row=htmlTemplate.querySelector(".row")
        // adicionando um elemento filho a minha tabela ,que é o row

        multiplicationTable.appendChild(row)

     }

     multiplicationTitle.innerText=number

}

// Eventos baseados na selação de elementos 
// para fazer quando for enviado, porque o eventodefault?:pq quando eu envio o formulario, nn recamega a pagina
multiplicationForm.addEventListener("submit",(e)=>{
    e.preventDefault()
// pego o numberInput e pego o valor dele ,valor qu eu tenho para multiplicar
    const multiplicationNumber=+numberInput.value
    // numero de multiplicação , o que via multiplicar x vezes a nossa tabuada para entregar o resultado solicitado
    const multiplicatorNumber=+multiplicationInput.value
    // fazer uma pequena validacao ,se esse numero nao estiver presente la no formulario, ou o multiplicator number nao etsiver presente
    // so prossegue o codigo se os dois numeros estiverem preenchidos
    if (!multiplicationNumber|| !multiplicatorNumber) return 
    createTable(multiplicationNumber,multiplicatorNumber)
})