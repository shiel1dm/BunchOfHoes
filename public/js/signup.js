const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#icon_email').value.trim();
  const password = document.querySelector('#icon_password').value.trim();

  if (email && password) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#sign-up')
document.addEventListener('submit', signupFormHandler);