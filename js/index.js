document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms[0];
  const warning = document.querySelector('.form__warning');
  const error = document.querySelector('.form__error');
  const submit = document.querySelector('.form__submit');
  
  var ageCheck = document.querySelector('.form__age-check'),
      adultWarn = document.querySelector('.form__age-text'),
      rubCurr = document.getElementById('currency-ru');
      currencyType = '';

  var verifyMail = false,
      verifyPassword = false;

  // Отменяем отправку формы по нажатию на enter

  submit.addEventListener('keydown', (e) => {
    if (e.key = "Enter") {
      e.preventDefault();
    }
  });

  // События полей формы

  form.email.onfocus = function() {
    this.classList.add('input-active');
    this.previousElementSibling.classList.add('placeholder-active');
  };

  // Проверка email

  form.email.onblur = function() {
    if ( this.value === "samplemail@mail.com") {
      this.style.borderColor ="#E15433";
      warning.style.display = "flex";
    } else if (this.value.length == 0) {
      this.previousElementSibling.classList.remove('placeholder-active');
    } else {
      this.style.borderColor ="#20A86B";
      warning.style.display = "none";
      verifyMail = true;
    }
  };

  form.password.onfocus = function() {
    this.classList.add('input-active');
    this.previousElementSibling.classList.add('placeholder-active');
  };

  // Проверка пароля

  form.password.onblur = function() {
    if ( this.value.length === 0 || this.value.length < 4) {
      this.style.borderColor ="#E15433";
      error.style.display = "block";
      this.focus();
    } else {
      this.style.borderColor ="#20A86B";
      error.style.display = "none";
      this.blur();
      verifyPassword = true;
    };
  };
  
  //Событие выюора валюты
  var currencyButton = document.querySelectorAll('.form__widget-check');

  currencyButton.forEach(i => {
    i.onchange = function(e) {
      currencyType = i.nextElementSibling.innerHTML;
    }
  });

  submit.addEventListener('click', (e) => {

    if (verifyMail) {
      if (verifyPassword) {
        // Проверяем возрастное ограничение
        if (!ageCheck.checked) {
          e.preventDefault();
          ageCheck.nextElementSibling.focus();
          adultWarn.style.backgroundColor = "#E15433";
          adultWarn.style.color = "#ffffff";
        } else {
          ageCheck.nextElementSibling.blur();
          adultWarn.style.backgroundColor = "initial";
          adultWarn.style.color = "#7A8F99";
        }
        // Проверяем тип валюты перед отправкой
        if (currencyType.length == 0) {
          currencyType = 'P';
          rubCurr.checked = true;
        };
        e.target.submit();
      } else {
        form.password.style.borderColor = '#E15433';
      }
    } else {
      form.email.style.borderColor = '#E15433';
    }
  });

});