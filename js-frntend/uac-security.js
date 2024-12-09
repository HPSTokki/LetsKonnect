document.addEventListener("DOMContentLoaded", () => {
    const tabs = {
      "admin-homepage.html": "home",
      "admin-event.html": "events",
      "admin-news&updates.html": "news",
      "admin-scholarships.html": "scholarships",
      "admin-jobfairs.html": "jobfairs",
      "dashboardAdm.html": "dashboard",
    };
  
    const currentPage = window.location.pathname.split("uac-security.html").pop();
    const activeTabId = tabs[currentPage];
  
    if (activeTabId) {
      document.getElementById(activeTabId).classList.add("active");
    }
  });

function showForgotPasswordModal(event) {
    event.preventDefault();
    const modal = document.getElementById('forgot-password-modal');
    modal.classList.add('modal-show');
    modal.style.display = 'flex';
}

function closeForgotPasswordModal() {
    const modal = document.getElementById('forgot-password-modal');
    modal.classList.remove('modal-show');
    modal.style.display = 'none';
}

function moveFocus(currentField) {
    const currentInput = document.getElementById(`otp-${currentField}`);
    if (currentInput.value.length === 1) {
        if (currentField < 6) {
            document.getElementById(`otp-${currentField + 1}`).focus();
        }
    } else if (currentInput.value.length === 0 && currentField > 1) {
        document.getElementById(`otp-${currentField - 1}`).focus();
    }
}

function verifyOTP() {
    const securityBox = document.getElementById('securityBox');
    securityBox.innerHTML = `
        <div class="security-box-captions">
            <h1>SECURITY & PRIVACY</h1>
            <img src="../Assets/GUEST/Password Reset secu & priva (User acc).png">
            <h3>Reset Your Password</h3>
        </div>
        <div class="security-fields">
            <form>
                <div class="form-group">
                    <label for="newPassword">New Password</label>
                    <input type="password" id="newPassword" name="newPassword" required>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirm New Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                </div>

                <div class="password-requirements">
                    <p>Password Requirements:</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                    </ul>
                </div>
            </form>
        </div>
        <div class="button-group">
            <button type="submit">Reset Password</button>
            <button type="button" onclick="cancelReset()">Cancel</button>
        </div>
    `;
    closeForgotPasswordModal();
}

function cancelReset() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButtons = document.querySelectorAll('.learn-more');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const flexContainer = document.querySelector('.flex-container');
            const privacyBox = button.closest('.privacy-box');
            const newContent = privacyBox.querySelector('.new-content');

            flexContainer.innerHTML = '';

            const newPrivacyBox = document.createElement('div');
            newPrivacyBox.classList.add('privacy-box');
            newPrivacyBox.appendChild(newContent);
            newContent.style.display = 'block'; 
            flexContainer.appendChild(newPrivacyBox);
        });
    });
});

function toggleProfileBox() {
    const profileBox = document.getElementById('profileBox');
    if (profileBox.style.display === 'none' || profileBox.style.display === '') {
        profileBox.style.display = 'block';
    } else {
        profileBox.style.display = 'none';
    }
}

function showSignOutModal() {
    document.getElementById('signOutModal').style.display = 'block';
}

function closeSignOutModal() {
    document.getElementById('signOutModal').style.display = 'none';
}
