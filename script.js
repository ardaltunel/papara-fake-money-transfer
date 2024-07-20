// script.js

function updateTransferDetails() {
    const dateInput = document.getElementById('date-input').value;
    const nameInput = document.getElementById('name-input').value;
    const amountInput = document.getElementById('amount-input').value;
    const timeInput = document.getElementById('time-input').value;

    if (dateInput) {
        const date = new Date(dateInput);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('date').innerText = date.toLocaleDateString('tr-TR', options);
    }

    if (nameInput) {
        document.getElementById('name').innerText = nameInput;
    }

    if (amountInput) {
        document.getElementById('amount').innerText = `₺${parseFloat(amountInput).toFixed(2)}`;
    }

    if (timeInput) {
        document.getElementById('time').innerText = timeInput;
    }
}

function changeDescription(newText) {
    document.getElementById('description').innerText = newText;
}

function changeAvatar(imagePath) {
    document.getElementById('avatar-img').src = imagePath;
}
