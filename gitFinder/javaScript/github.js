class gitHub{
    constructor(){
        this.Client_id="Ov23lilJxZa5lHHTVCqG";
        this.client_secret="5ea5cfdb55179099fc0b742ccdd519cbe20380d9";
    }
    // https://api.github.com/users/abdul-kalam-FSD
    async getuser(user){
          const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile=await profileResponse.json();
        return profile;
    }
}