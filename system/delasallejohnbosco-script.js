document.getElementById('dob').addEventListener('change', function () {
    const dob = new Date(this.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('age').value = age || '';
});

document.getElementById('enrollmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const refNo =
        'DLJB-' +
        new Date().getFullYear() +
        '-' +
        Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.innerHTML = `
        <div class="success-title">🎉 Enrolled Successfully!</div>
        <div class="success-sub">Your Ref No: ${refNo}</div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3500);

    this.reset();
    document.getElementById('age').value = '';
});

function checkStatus() {
    const refNo = document.getElementById('referenceNo').value.trim();
    const resultDiv = document.getElementById('statusResult');

    if (!refNo) {
        resultDiv.className =
            'mt-4 p-4 rounded-lg bg-red-50 text-red-700 block';
        resultDiv.textContent = 'Please enter a reference number.';
        return;
    }

    resultDiv.className =
        'mt-4 p-4 rounded-lg bg-green-50 text-primary block';

    resultDiv.innerHTML = `
        <p class="font-semibold">Status: Pending Review</p>
        <p class="mt-1">Reference: ${refNo}</p>
        <p class="mt-2">Your application has been received and is being processed. Please check back after 3-5 working days.</p>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input, select, textarea, button');
    inputs.forEach(input => input.setAttribute('tabindex', '0'));
});