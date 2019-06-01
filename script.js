'use strict';

let money, time;

function Start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
Start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью рассходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
    i++;
}

console.log(appData);

function detectLevel(){
    appData.moneyPerDay = appData.budget / 30;

    if (appData.moneyPerDay < 100) {
        console.log("Низкий уровень дохода");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень дохода");
    } else {
        console.log("Что-то пошло не так");
    }
}
detectLevel();

function chooseOptExpenses(){
    let i = 1;
    while(i<4){
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
        i++;
    }
}
chooseOptExpenses();

function checkSaving() {
    if (appData.savings == true) {
        let deposSum = +prompt("Введите сумму, которую хотите положить на депозит: ", "");
        let deposPercent = +prompt("Введите процент вклада", "");
        appData.monthInCome = (deposSum / 100 / 12 * deposPercent);
        alert("Ваша месячная прибыль составляет " + appData.monthInCome);
    }
}
checkSaving();

function detectDayBudget(){
    appData.moneyPerDay = appData.budget / 30;
    alert("Ежедневный бюджет: " + appData.moneyPerDay);  
}
detectDayBudget();