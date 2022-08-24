
class github {

    constructor(){
        this.client_id= 'fdedfec9b7f1710a3855';
        this.client_secret='259ba41a453974079a842135b5a00c23515ca1b7';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';

    }

    async gitUser(user){
     const profileResponse = await fetch(`https://api.github.com/users/${user}
    ? client_id=${this.client_id}&client_secret =${this.client_secret}`);


    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?
    per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret =${this.client_secret}`);
    
    const profileData = await profileResponse.json();
        
    const reposData = await reposResponse.json();
    return{
        profileData,
        reposData
    }
    }
}