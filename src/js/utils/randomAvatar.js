function randomAvatar(){
    const avatarTypes = ['adventurer', 'avataaars', 'big-ears', 'big-smile', 'micah', 'open-peeps', 'personas']
   
   return  avatarTypes[Math.floor(Math.random() * (avatarTypes.length - 1)) + 1]
}


export {randomAvatar}