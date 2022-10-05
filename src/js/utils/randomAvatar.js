function randomAvatar(){
    const avatarTypes = ['adventurer', 'open-peeps', 'big-smile', 'croodles-neutral', 'miniavs', 'croodles', 'personas']
   
   return  avatarTypes[Math.floor(Math.random() * (avatarTypes.length - 1)) + 1]
}


export {randomAvatar}