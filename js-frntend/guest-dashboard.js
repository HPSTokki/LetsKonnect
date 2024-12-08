document.querySelector('.logbutton').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('show');
  });
  
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('show');
  });
  
  document.querySelector('.signbutton').addEventListener('click', () => {
    document.getElementById('signupPopup').classList.add('show');
  });
  
  document.getElementById('signupCloseBtn').addEventListener('click', () => {
    document.getElementById('signupPopup').classList.remove('show');
  });
  
  