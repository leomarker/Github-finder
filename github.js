class Github {
constructor(){
        this.client_id ='f297418382e943323dcd';
        this.client_secret ='be726eb235751d60c975eb89f8971694b4c35376';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&clinet_secret=${this.client_secret}`);
        const reposResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&clinet_secret=${this.client_secret}`);
        const profile = await profileResponce.json();
        const repos = await reposResponce.json();

        return{
            profile,
            repos
        }
    }
}

