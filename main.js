// Name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

//Number card
let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error');

// MM

let monthcard = document.querySelector('.card_month');
let monthInput = document.querySelector('#cardMonth');
let monthErrorDiv = document.querySelector('.form__input-mm--error');

// YY

let yearCard = document.querySelector('.card__year');
let yearInput = document.querySelector('#cardYear');
let yearErrorDiv = document.querySelector('.form__input-yy--error');

// CVC

let cvcCard = document.querySelector('.card-back__cvc');
let cvcInput = document.querySelector('#cadrCvc');
let cvcErrorDiv = document.querySelector('.form__input-cvc--error');


//Ingreso dinamico del nombre
nameInput.addEventListener('input', () => {
    if (nameInput.value == '') {
        nameCard.innerText = 'Jane Appleseed';
    } else {
        nameCard.innerText = nameInput.value;
    }
});

//Ingreso dinamico del Number
numberInput.addEventListener('input', () => {

    let inputValue = event.target.value;

    //Actualizando graficamente la tarjeta
    numberCard.innerText = numberInput.value;

    //validando que no haya letras
    let regExp = /[A-z]/g;
    if (regExp.test(numberInput.value)) {
        showError(numberInput, numberErrorDiv, 'Wrong fromat, numbers only');
    } else {
        numberInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
        showError(numberInput, numberErrorDiv, '', false);
    }

    //Mostrando los ceros por defedto
    if (numberInput.value == '') {
        numberCard.innerText = '0000 0000 0000 0000';
    }
});

// INGRESO DINAMICO DEL MES

monthInput.addEventListener('input', () => {
    monthcard.innerText = monthInput.value;
    validateLetters(monthInput, monthErrorDiv);
});

// Igreso dinamico del anio

yearInput.addEventListener('input', () => {
    yearCard.innerText = yearInput.value;
    validateLetters(yearInput, yearErrorDiv);
});

// Ingreso dinamico cvc

cvcInput.addEventListener('input', () => {
    cvcCard.innerText = cvcInput.value;
    validateLetters(cvcInput, cvcErrorDiv);
});





// BOTON CONFIRM

let confirmBtn = document.querySelector('.form__submit');
let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

// Secciones, formularios y thanks

let formSection = document.querySelector('.form');
let thanksSection = document.querySelector('.thanks-section');

confirmBtn.addEventListener('click', event => {
    event.preventDefault();
    //  console.log(event);

    // Validar Name
    if (verfyIsFilled(nameInput, nameErrorDiv)) {
        nameValidation = true;
    } else {
        nameValidation = false;
    }

    // validar Numero
    if (verfyIsFilled(numberInput, numberErrorDiv) == true) {
        if (numberInput.value.length == 19) {
            showError(numberInput, nameErrorDiv, '', false);
            numberValidation = true;
        } else {
            showError(numberInput, numberErrorDiv, 'Wrong number');
            numberValidation = false;
        }
    };


    //VALIDAR MES
    if (verfyIsFilled(monthInput, monthErrorDiv)) {
        if (parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <= 12) {
            showError(monthInput, monthErrorDiv, '', false)
            monthValidation = true;
        } else {
            showError(monthInput, monthErrorDiv, 'Wrong month');
            monthValidation = false;
        }
    };

    //Validar anio
    if (verfyIsFilled(yearInput, yearErrorDiv)) {
        if (parseInt(yearInput.value) > 24 && parseInt(yearInput.value) <= 29) {
            showError(yearInput, yearErrorDiv, '', false);
            yearValidation = true;
        } else {
            showError(yearInput, yearErrorDiv, 'Wrong year');
            yearValidation = false;
        }
    }



    //Validar cvc
    if (verfyIsFilled(cvcInput, cvcErrorDiv)) {
        if (cvcInput.value.length == 3) {
            showError(cvcInput, cvcErrorDiv, '', false);
            cvcValidation = true;
        } else {
            showError(cvcInput, cvcErrorDiv, 'Wrong cvc');
            cvcValidation = false;
        }
    };

    if (nameValidation == true && numberValidation == true && monthValidation == true && yearValidation == true && cvcValidation == true) {
        formSection.style.display = 'none';
        thanksSection.style.display = 'block';
    };


});

// FUNTIONS

function showError(divInput, divError, msgError, show = true) {
    if (show) {
        divError.innerText = msgError;
        divInput.style.borderColor = '#ff0000';
    } else {
        divError.innerText = msgError;
        divInput.style.borderColor = 'hsl(270, 3%, 87%)';
    }
};

function verfyIsFilled(divInput, divError) {
    if (divInput.value.length > 0) {
        showError(divInput, divError, '', false);
        return true;
    } else {
        showError(divInput, divError, 'Cant be blank');
        return false;
    }
}

function validateLetters(input, divError) {
    let regExp = /[A-z]/g;
    if (regExp.test(input.value)) {
        showError(input, divError, 'Wrong fromat, numbers only');
    } else {
        showError(input, divError, '', false);
    }
}



