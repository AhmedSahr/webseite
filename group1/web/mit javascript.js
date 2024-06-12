document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formularüberprüfung
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let messageInput = document.getElementById('message');

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    // Hier kannst du den Code für die Nachrichtenübermittlung einfügen, z.B. mit fetch() oder einer anderen Methode.

    // Optional: Formular zurücksetzen
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Nachricht erfolgreich gesendet!');
});
