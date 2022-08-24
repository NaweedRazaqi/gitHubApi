
const gitHub = new github;
const ui = new UI;
const searchuser = document.getElementById('searchuser');
searchuser.addEventListener('keyup', (e) =>{
 
    const userText = e.target.value;

    if(userText !== ''){
        
        gitHub.gitUser(userText)
        .then(data => {
           if(data.profileData.message === 'Not Found'){
             // show alert

             ui.showAlert('User not found', 'alert alert-danger');
           }
         
           else
           {
            // show profile
               ui.showProfile(data.profileData);
               ui.showRepos(data.reposData);
           }
        })
    }
    else{
        // clear profile
      ui.clearProfile();
    }
});

