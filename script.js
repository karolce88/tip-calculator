const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {

    if (price.value == '' || tip.value == 0 || people.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none';
    }
    else {
        error.textContent = '';
        countBill();
    }
}

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseFloat(people.value);
    const newTip = parseFloat(tip.value);

    const sum = ((newPrice * newTip) + newPrice) / newPeople;
    costInfo.style.display = 'block';

    cost.textContent = sum.toFixed(2)
    console.log(sum);
}

countBtn.addEventListener('click', showBill)