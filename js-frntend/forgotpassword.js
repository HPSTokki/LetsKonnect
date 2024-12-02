function formerFields() {
    const card = document.getElementById('card');
    card.innerHTML = `
        <img src="../Assets/GUEST/reset-password.png">
        <div class="card-captions">
            <h3>Forgot your password</h3>
            <p>
                Please enter the email address associated with your account 
                to send a password reset code.
            </p>
        </div>
        <form>
            <p>Enter email address</p>
            <input type="text" placeholder="Enter your email address" required>
        </form>
        <div class="button-container">
            <button class="button" id="requestBtn">Send reset code</button>
            <button class="button" id="backToLoginBtn">Back to Login</button>
        </div>
    `;
    
    document.getElementById('requestBtn').addEventListener('click', showPasswordResetCodeFields);
}

function showPasswordResetCodeFields() {
    const card = document.getElementById('card');
    card.innerHTML = `
        <img src="../Assets/GUEST/notification.png">
        <div class="card-captions">
            <h3>Enter Reset Code</h3>
            <p>
                A 6-digit code has been sent to your email address. Please enter it below to reset your password.
            </p>
        </div>
        <form>
            <p>Enter 6-digit reset code</p>
            <input type="text" maxlength="6" placeholder="Enter code" required>
        </form>
        <div class="button-container">
            <button class="button" id="submitResetBtn">Submit</button>
            <button class="button" id="cancelBtn">Cancel</button>
        </div>
    `;

    document.getElementById('cancelBtn').addEventListener('click', formerFields);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('requestBtn').addEventListener('click', showPasswordResetCodeFields);
});
