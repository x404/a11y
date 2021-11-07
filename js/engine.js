const authform = document.querySelector('.dialog_form');
authform.addEventListener('submit', (e)=>{
    e.preventDefault();

    alert('Вход выполнен');
    authform.classList.remove('formvalidity');
    closeDialog(document.querySelector('.dialog_close'))
})

const errormsg = 'Поле должно быть заполнено. Минимальная длина - 1 символ';
authform.querySelector('.btn-submit').addEventListener('click', function (e) {  
    authform.classList.add('formvalidity');

    authform.querySelectorAll('.form-control').forEach(item => { 
        if (item.value === ''){
            item.nextElementSibling.classList.remove('d-none');
            console.log(item.getAttribute('id'));

            if (item.getAttribute('id') === 'login'){
                document.querySelector('#login-input-error').textContent = errormsg
            }
            if (item.getAttribute('id') === 'password'){
                document.querySelector('#psw-input-error').textContent = errormsg
            }
        }
    })
    // added aria-described
})

authform.querySelectorAll('.form-control').forEach(item => { 
    item.addEventListener('keyup', () => {
        
        // set text for aria-describedby

        if (document.querySelectorAll('.formvalidity').length > 0){            

            if (item.getAttribute('id') === 'login'){
                if ( document.querySelector('#login').value !== ''){
                    item.nextElementSibling.classList.add('d-none');
                    
                    document.querySelector('#login-input-error').textContent = ''
                } else {
                    item.nextElementSibling.classList.remove('d-none');
                    document.querySelector('#login-input-error').textContent = errormsg
                }
            }

            if (item.getAttribute('id') === 'password'){
                if (document.querySelector('#password').value !== ''){
                    item.nextElementSibling.classList.add('d-none');
                    document.querySelector('#psw-input-error').textContent = ''
                }
                else {
                    item.nextElementSibling.classList.remove('d-none');
                    document.querySelector('#psw-input-error').textContent = errormsg
                }
            }          
        }
    })
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    }
  });


// SUBSCRIBE FORM
  const subscribeform = document.querySelector('.subscribe-form');
  const formgroup = subscribeform.querySelector('.form-group');
  const subscrubeInputError =  document.querySelector('#subscribe-input-error'); 
  const msgEmailError = 'Неверный e-mail';

  subscribeform.querySelector('.form-control').addEventListener('focusin', () => {
      formgroup.classList.add('is-focused')
  })
  subscribeform.querySelector('.form-control').addEventListener('focusout', () => {
      formgroup.classList.remove('is-focused')
  })

  subscribeform.querySelector('.form-control').addEventListener('keyup', function() { 
          if (this.value.length > 0) {
              formgroup.classList.add('is-charged');
          } else {
              formgroup.classList.remove('is-charged');
          }

          if (document.querySelectorAll('.formvalidity').length > 0){
              if (!ValidateEmail(this.value)){
                  // not valid
                  subscrubeInputError.classList.remove('d-none');
                  subscrubeInputError.textContent = msgEmailError;
              } else {
                  // valid
                  subscrubeInputError.classList.add('d-none');
                  subscrubeInputError.textContent = ''
              }
          }							
  })

  subscribeform.querySelector('.btn-submit').addEventListener('click', function (e) {  
      subscribeform.classList.add('formvalidity');

      if (!ValidateEmail(document.querySelector('#subscribe-email').value)){
          // not valid
          subscrubeInputError.classList.remove('d-none');
          subscrubeInputError.textContent = msgEmailError;
      } else {
          // valid
          subscrubeInputError.classList.add('d-none');
          subscrubeInputError.textContent = '';
          subscribeform.classList.remove('formvalidity');
          alert("Форма отправлена")
      }
  })

  subscribeform.addEventListener('submit', (e)=>{
      e.preventDefault();

  })						

  document.querySelector('#subscribe-checkbox').addEventListener('change', function() {
      let btn = document.querySelector('.subscribe-form .btn-submit');
      btn.disabled = !btn.disabled;
  });

  function ValidateEmail(mail) {
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (mail.match(validRegex)) {
          return true
      }
      return false
  }  