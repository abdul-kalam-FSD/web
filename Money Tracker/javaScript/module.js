const person1=(function(){
    const firstName="Abdul";
    const lastName="kalam";
    return {
         getFulName:function(){
            return firstName+" "+lastName;
         }
    }
})();

console.log(person1.getFulName());