document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulaire-bancaire');
    const modal = document.getElementById('modal');
    const closeModalButton = document.getElementById('close-modal');
    const resetButton = document.getElementById('reset-button');
  
    const nameInput = document.getElementById('lname');
    const firstnameInput = document.getElementById('fname');
    const dateNaissance = document.getElementById('date-naissance');
    const eMail = document.getElementById('email');
    const codeConfidentiel = document.getElementById('code-confidentiel');
  
    const regexVerifName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/;
    const regexVerifDateNaiss = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    const regexFormatEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexFormatCodeConfid = /^FR\d{5}[A-Z.\-_]{3}x$/;
  
    nameInput.addEventListener('input', () => {
      nameInput.value = nameInput.value.toUpperCase();
    });
  
    firstnameInput.addEventListener('input', () => {
      firstnameInput.value = firstnameInput.value.charAt(0).toUpperCase() + firstnameInput.value.slice(1).toLowerCase();
    });
  
    dateNaissance.addEventListener('input', () => {
      dateNaissance.value = dateNaissance.value.replace(/[\s\-.]/g, '/');
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nameQuery = nameInput.value.trim();
      const firstnameQuery = firstnameInput.value.trim();
      const datenaissanceQuery = dateNaissance.value.trim();
      const emailQuery = eMail.value.trim();
      const codeconfidQuery = codeConfidentiel.value.trim();
  
      let valid = true;
  
      if (!regexVerifName.test(nameQuery)) {
        document.getElementById('error-lname').textContent = '3 caractères alphanumériques au minimum pour le Nom!!!';
        valid = false;
      } else {
        document.getElementById('error-lname').textContent = '';
      }
  
      if (!regexVerifName.test(firstnameQuery)) {
        document.getElementById('error-fname').textContent = '3 caractères alphanumériques au minimum pour le Prenom!!!';
        valid = false;
      } else {
        document.getElementById('error-fname').textContent = '';
      }
  
      if (!regexVerifDateNaiss.test(datenaissanceQuery)) {
        document.getElementById('error-date').textContent = 'Format Date non valide \nFormat date valide : jj/mm/aaaa';
        valid = false;
      } else {
        document.getElementById('error-date').textContent = '';
      }
  
      if (!regexFormatEmail.test(emailQuery)) {
        document.getElementById('error-email').textContent = 'Format e-mail non valide';
        valid = false;
      } else {
        document.getElementById('error-email').textContent = '';
      }
  
      if (!regexFormatCodeConfid.test(codeconfidQuery)) {
        document.getElementById('error-code').textContent = 'Format Code Confidentiel non valide';
        valid = false;
      } else {
        document.getElementById('error-code').textContent = '';
      }
  
      if (valid) {
        modal.classList.remove('hidden');
      }
    });
  
    closeModalButton.addEventListener('click', () => {
      modal.classList.add('hidden');
      form.submit();
    });
  
    resetButton.addEventListener('click', () => {
      document.querySelectorAll('.error-message').forEach((span) => (span.textContent = ''));
    });
  });
  