

function processEntries() {

    change = document.querySelector("#change").value

    if (change > 0 && change <= 99) {
        quarters = parseInt(change / 25)
        quarterLeftOver = change % 25

        dimes = parseInt(quarterLeftOver / 10)
        dimeLeftOver = quarterLeftOver % 10

        nickels = parseInt(dimeLeftOver / 5)
        nickelLeftOver = dimeLeftOver % 5

        pennies = dimeLeftOver

        document.querySelector("#quarter").value = quarters
        document.querySelector("#dime").value = dimes
        document.querySelector("#nickel").value = nickels
        document.querySelector("#penny").value = pennies

    } else {
        alert("Please enter a value greater than 0 and less than 100.")
    }

}

addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("#calculate").addEventListener("click", processEntries)
})