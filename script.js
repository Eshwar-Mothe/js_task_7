var income = +prompt("Enter your annual income")
// var income = "eshwar"
if (income > 0) {
    if (income <= 250000) {
        console.log("No Tax")
    }

    else if (income > 250000 && income <= 500000) {
        tax = income * 5 / 100
        console.log(`Your tax falls on 1st slab(5% of the amount) based on your income(${income}) is: ${tax}`)
    }

    else if (income > 500000 && income <= 1000000) {
        tax = (income * 20 / 100) + 12500
        console.log(`Your tax falls on nd slab(12,500 + 20% of the amount) based on your income(${income}) is: ${tax}`)
    }

    else if (income > 1000000) {
        tax = (income * 30 / 100) + 112500
        console.log(`Your tax falls on 3rd(1,12,500 + 30% of the amount) slab based on your income(${income}) is: ${tax}`)
    }
}

else{
    console.log("Enter proper income")
}
