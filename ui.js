class Ui{

    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
     this.profile.innerHTML = `
     <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
              <img class ="img-fluid mb-2" src="${user.avatar_url}">
              <a herf="${user.html_url}" target="_blank" class= "btn btn-primary btn-block mb-4">View Profile</a>
         </div>
         <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
             <li class="list-group-item">Company:${user.company}</li>
             <li class="list-group-item">Website/blog:${user.blog}</li>
             <li class="list-group-item">Location:${user.location}</li>
             <li class="list-group-item">Member Since:${user.created_at}</li>
             </ul>
         </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
     `
    }

    // display repos in the ui 
   showRepos(repos){
     let outPut = '';

     repos.forEach(function(repo){
         outPut+=`
         <div  class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                    <a herf="${repo.html_url}" target="_blank">${repo.name}</a>
                 </div>
                 <div class= "col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-primary">Forks: ${repo.forms_count}</span>
                 </div>
                </div>
             </div>`

     });
     document.getElementById('repos').innerHTML = outPut;
    }

    // show alert
    showAlert(message,clasName){
        // clear alert
        const newAlert = document.querySelector('.alert');
        if(newAlert){
         this.clearAlert();
        }
        const div = document.createElement('div');
        div.className = clasName;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div,search);
        // clear alert after 5 sec
        setTimeout(() =>{
            this.clearAlert();
        },5000)
    }
    //clear alert form the UI
    clearAlert(){
     const currentAlert = document.querySelector('.alert');
     currentAlert.remove();
    }

    // clear profile after a search result 
    clearProfile(){
        this.profile.innerHTML ='';
    }
}