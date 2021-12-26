// init github
 const github = new Github;
 const ui = new Ui;
// search user 
const searchUser = document.getElementById('Search');

searchUser.addEventListener('click',(e =>{
    const userText = document.getElementById('searchUser').value;
    
if(userText !== ''){
    github.getUser(userText)
    .then(data => {
          if(data.profile.message === 'Not Found'){
        // show alert
            ui.showAlert('User Not Found','alert alert-danger');
            ui.clearProfile();
         } else {
         // show profile
         ui.showProfile(data.profile);
         ui.showRepos(data.repos);
         }
    })
} else{
    ui.clearProfile();
}
}))