// script.js

document.getElementById('date').addEventListener('click', function() {
    document.getElementById('dateModal').style.display = "block";
});

document.getElementById('name').addEventListener('click', function() {
    document.getElementById('nameModal').style.display = "block";
});

document.getElementById('amount').addEventListener('click', function() {
    document.getElementById('amountModal').style.display = "block";
});

document.getElementById('time').addEventListener('click', function() {
    document.getElementById('timeModal').style.display = "block";
});

document.getElementById('description').addEventListener('click', function() {
    document.getElementById('descriptionModal').style.display = "block";
});

document.getElementById('avatar').addEventListener('click', function() {
    document.getElementById('avatarModal').style.display = "block";
});

document.querySelectorAll('.close').forEach(function(element) {
    element.addEventListener('click', function() {
        element.closest('.modal').style.display = "none";
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

function updateDate() {
    const dateInput = document.getElementById('modal-date-input').value;
    if (dateInput) {
        const date = new Date(dateInput);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('date').innerText = date.toLocaleDateString('tr-TR', options);
        document.getElementById('dateModal').style.display = "none";
    }
}

function updateName() {
    const nameInput = document.getElementById('modal-name-input').value;
    if (nameInput) {
        document.getElementById('name').innerText = nameInput;
        document.getElementById('nameModal').style.display = "none";
    }
}

function updateAmount() {
    const amountInput = document.getElementById('modal-amount-input').value;
    if (amountInput) {
        document.getElementById('amount').innerText = `₺${parseFloat(amountInput).toFixed(2)}`;
        document.getElementById('amountModal').style.display = "none";
    }
}

function updateTime() {
    const timeInput = document.getElementById('modal-time-input').value;
    if (timeInput) {
        document.getElementById('time').innerText = timeInput;
        document.getElementById('timeModal').style.display = "none";
    }
}

function changeDescription(description) {
    document.getElementById('description').innerText = description;
    document.getElementById('descriptionModal').style.display = "none";
}

function changeAvatar(imagePath) {
    document.getElementById('avatar-img').src = imagePath;
    document.getElementById('avatarModal').style.display = "none";
}
