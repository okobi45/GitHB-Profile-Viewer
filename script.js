async function fetchProfile() {
    const username = document.getElementById('username').value;

    if (username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();

            displayProfile(data);
        } catch (error) {
            console.error('Error fetching GitHub profile:', error);
            displayError();
        }
    } else {
        alert('Please enter a GitHub username');
    }
}

function displayProfile(profile) {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = '';

    const avatar = document.createElement('img');
    avatar.src = profile.avatar_url;
    avatar.alt = 'GitHub Avatar';
    avatar.style.width = '100px';
    avatar.style.borderRadius = '50%';
    profileContainer.appendChild(avatar);

    const username = document.createElement('h2');
    username.textContent = profile.login;
    profileContainer.appendChild(username);

    const bio = document.createElement('p');
    bio.textContent = profile.bio || 'No bio available';
    profileContainer.appendChild(bio);

    const link = document.createElement('a');
    link.href = profile.html_url;
    link.target = '_blank';
    link.textContent = 'View on GitHub';
    profileContainer.appendChild(link);
}

function displayError() {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = '<p>Error fetching GitHub profile. Please try again later.</p>';
}
