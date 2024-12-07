document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('identification-form');
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('close-modal');
  const resetButton = document.getElementById('reset-button');

  // Fonction pour valider les champs
  const validateField = (input, regex, errorMsg) => {
    const errorSpan = document.getElementById(`error-${input.id}`);
    if (!regex.test(input.value)) {
      errorSpan.textContent = errorMsg;
      return false;
    } else {
      errorSpan.textContent = '';
      return true;
    }
  };

  // Contrôle du nom et prénom
  document.getElementById('nom').addEventListener('input', (e) => {
    e.target.value = e.target.value.toUpperCase();
  });

  document.getElementById('prenom').addEventListener('input', (e) => {
    e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase();
  });

  // Transformation de la date de naissance
  document.getElementById('date-naissance').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[ -.]/g, '/');
  });

  // Soumission du formulaire
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValidNom = validateField(
      form.nom,
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
      'Le nom doit contenir au moins 3 caractères valides.'
    );

    const isValidPrenom = validateField(
      form.prenom,
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{3,}$/,
      'Le prénom doit contenir au moins 3 caractères valides.'
    );

    const isValidDate = validateField(
      form.date - naissance,
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      'La date doit être au format jj/mm/aaaa.'
    );

    const isValidEmail = validateField(
      form.email,// Champ de formulaire à vérifier
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,// Expression régulière qui vérifie le format d'un email
      'Adresse email invalide.'//Message d'erreur affiché en cas d'échec
    );

    const isValidCode = validateField(
      form['code-confidentiel'],
      /^FR\d{5}[A-Z.\-_]{3}x$/,
      'Code confidentiel invalide.'
    );

    if (isValidNom && isValidPrenom && isValidDate && isValidEmail && isValidCode) {
      modal.classList.remove('hidden');
    }
  });

  // Fermeture de la modale
  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    form.submit();
  });

  // Réinitialisation du formulaire
  resetButton.addEventListener('click', () => {
    document.querySelectorAll('.error-message').forEach((span) => (span.textContent = ''));
  });
});
