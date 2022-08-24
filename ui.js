class UI{
    constructor(profile){
    this.profile = document.getElementById('profile');

  
    }
    showProfile(user){
     //console.log(user);
     this.profile.innerHTML = `
     
     <div class="card card-body mb-3">
     <div class="row">
     <div class="col-md-3">
     <img class="img-fluid mb-3" src="${user.avatar_url}"/>
     <a href="${user.html_ur}" target ="_blank" class="btn btn-primary btn-block mb-5">View Profile</a>
     </div>
     <div class"col-md-9">
     <span class="badge badge-primary">Public Respositories: ${user.public_repos}</span>
     <span class="badge badge-secondary">Public Gists: ${user.public_Gists}</span>
     <span class="badge badge-success">Public Followers: ${user.followers}</span>
     <span class="badge badge-info">Public following: ${user.following}</span>
     <br><br>

     <ul class="list-group">
     <li class="list-group-item">Company: ${user.company}</li>
     <li class="list-group-item">Blog: ${user.blog}</li>
     <li class="list-group-item">Location: ${user.location}</li>
     <li class="list-group-item">Member since: ${user.created_at}</li>
     </ul>
     </div>
     </div>
     </div>
     <h3 class="page-heading mb-3">Lastest Repositories</h3>
     <div id ="repos"></div>
     `;
    }
    showRepos(reposData){
        let output = '';
  
        reposData.forEach(function(repo){
          output += `
             <div class="card card-body mb-3">
             <div class="row">
             <div class="col-md-6">
             <a href="${repo.html_ur}" target ="_blank">${repo.name}</a>
             </div>
             <div class="md-6">
             <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
             <span class="badge badge-secondary">Watchers Count: ${repo.watchers_count}</span>
             <span class="badge badge-success">Fork Count: ${repo.forms_cout}</span>
             </div>
             </div>
             </div>
             `;
        })
        
      // show the repos
        document.getElementById('repos').innerHTML = output;
      }

    showAlert(messege, className){
         this.clearAlert();
        const div = document.createElement('div');
        div.className = className;

        div.appendChild(document.createTextNode(messege));
        
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div, search)


        // time out after 3 seconds

        setTimeout(() => {
            this.clearAlert();
        }, 3000);

    }

    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert ){
          alert.remove();
        }
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }
   

   
}