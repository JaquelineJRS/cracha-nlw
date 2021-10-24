const linksSocialMedia = {
  github: 'JaquelineJRS',
  linkedin: 'in/jaquelinersantos89',
  instagram: 'jrsjaqueline',
  twitter: 'jaquersantoss'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userGitHub.href = data.html_url
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
