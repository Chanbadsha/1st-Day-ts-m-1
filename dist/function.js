"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const addArrow = (num1, num2) => num1 + num2;
//  jodi kono object ar vitor function use kora hoy tahole ata ke method bola hoy, not function, here newBalance is a method
const myBank = {
    name: "Chan Badsha",
    balance: 0,
    newBalance(balance2) {
        return this.balance + balance2;
    }
};
