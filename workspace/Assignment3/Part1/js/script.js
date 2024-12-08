


function processEntries() {

    subTotal = parseFloat(document.querySelector("#subtotal").value)
    taxRate = parseFloat((document.querySelector("#taxrate").value) / 100)

    taxOutput = document.querySelector("#salesTax")
    totalOutput = document.querySelector("#total")

    console.log(subTotal)
    console.log(taxRate)

    if (subTotal > 0 && subTotal <= 10000) {
        if(taxRate > 0 && taxRate <= 0.12) {

        let totalTax = parseFloat(subTotal * taxRate)

        let finalTotal = parseFloat(subTotal + totalTax)

        taxOutput.value = totalTax
        totalOutput.value = finalTotal


        } else {
            alert("Tax Rate must be > 0 and < 12")
        }
    
    }else {
        alert("Subtotal must be > 0 and < 10000")
    }
   

}

function moveCursor() {
    document.querySelector("#subtotal").focus()
}

function clearTax() {
    document.querySelector("#taxrate").value = ""
}

function clearSub() {
    document.querySelector("#subtotal").value = ""
}

function clearBoxes() {
    clearTax()
    clearSub()
    document.querySelector("#salesTax").value = ""
    document.querySelector("#total").value = ""

}

addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("#calculate").addEventListener("click", processEntries)
    document.querySelector("#calculate").addEventListener("click", moveCursor)
})

moveCursor()

document.querySelector("#clear").addEventListener("click", clearBoxes)
document.querySelector("#taxrate").addEventListener("click", clearTax)
document.querySelector("#subtotal").addEventListener("click", clearSub)









// submit.onclick = processEntries()
