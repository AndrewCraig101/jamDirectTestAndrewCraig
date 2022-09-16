console.log('hello')


// PRINTING CUSTOM NAMES

function insertClientName() {

    let clientName1 = "Amy Jones"
    let clientName2 = "Mark Hamil"
    let clientName3 = "Dan Lorenzo"

    // let clientNameEl = document.querySelectorAll('clientNameSpan')

    let messages = document.querySelectorAll(".clientNameSpan");

    messages.forEach(message => {
        message.textContent = clientName1
    });    
}

function insertExecName() {

    let execName1 = "Jessica Dunn"
    let execName2 = "Brian Cray"

    let execNameEl = document.getElementById('execNameSpan')
    execNameEl.textContent = execName1

}



let englishVar = "English"
let frenchSymbol = "French"

function printLanguage() {
    let englishVar = "English"
    let frenchVar = "French"

    languageEl = document.getElementById('languageSpan')
    languageEl.textContent = frenchVar
}

insertClientName()
insertExecName()
printLanguage()





