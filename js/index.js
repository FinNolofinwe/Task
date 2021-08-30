document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms[0];
  const warning = document.querySelector('.form__warning');
  const error = document.querySelector('.form__error');
  const submit = document.querySelector('.form__submit');
  const widget = document.querySelector('.form__widget');
  
  var rubCheck = document.getElementById('currency-ru'),
      currCheck = widget.querySelectorAll('input[type=checkbox]:checked');
      ageCheck = document.querySelector('.form__age-check'),
      adultWarn = document.querySelector('.form__age-text');

  var verifyMail = false,
      verifyPassword = false;

  // События полей формы

  form.email.onfocus = function() {
    this.classList.add('input-active');
    this.previousElementSibling.classList.add('placeholder-active');
  }

  // Проверка email

  form.email.onblur = function() {
    if ( this.value === "samplemail@mail.com") {
      this.style.borderColor ="#E15433";
      warning.style.display = "flex";
    } else if (this.value.length == 0) {
      this.previousElementSibling.classList.remove('placeholder-active');
    } else  {
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
    } else {
      this.style.borderColor ="#20A86B";
      error.style.display = "none";
      verifyPassword = true;
    };
  }
  
  // Проверяем возрастное ограничение

  submit.addEventListener('click', (e) => {
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
    if (currCheck.length == 0) {
      rubCheck.checked = true;
    }
  });

});