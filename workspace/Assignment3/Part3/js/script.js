

function processEntries() {
    
    taxable = document.querySelector("#taxable").value

    if (taxable > 0) {

        let finalTax = 0

        if(taxable <= 9875) {
            finalTax = taxable * 0.10
        } else if(taxable <= 40125) {
            finalTax = ((taxable - 9875) * 0.12) + 987.50
        } else if (taxable <= 85525) {
            finalTax = ((taxable - 40125) * 0.22) + 4617.50
        } else if (taxable <= 163300) {
            finalTax = ((taxable - 85525) * 0.24) + 14605.50
        } else if (taxable <= 207350) {
            finalTax = ((taxable - 163300) * 0.32) + 33271.50
        } else if (taxable <= 518400) {
            finalTax = ((taxable - 207350) * 0.35) + 47367.50
        } else if (taxable > 518400) {
            finalTax = ((taxable - 518400) * 0.37) + 156235
        }

        document.querySelector("#taxDue").value = finalTax

    } else {
        alert("Please enter an amount greater than zero.")
    }
}




addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("#calculate").addEventListener("click", processEntries)
})