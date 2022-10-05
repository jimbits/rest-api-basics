async function getAllDevelopers(){
    const res = await fetch('http://localhost:3000/developers');
    return await res.json()
}

async function getDeveloperById(uid){
    const res = await fetch(`http://localhost:3000/developers?uid=${uid}`)
    return await res.json()
}

async function getDevelopersByType(type){
    const res = await fetch(`http://localhost:3000/developers?type=${type}`)
    return await res.json()
}

async function getDevelopersByStatus(status){
    console.log(status)
    const res = await fetch(`http://localhost:3000/developers?status=${status}`)
    return await res.json()
}




export {getAllDevelopers, getDeveloperById, getDevelopersByStatus, getDevelopersByType}