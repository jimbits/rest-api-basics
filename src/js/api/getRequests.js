async function getAllDevelopers(){
    const res = await fetch('http://localhost:3000/developers');
    return await res.json()
}

async function getDevelopersByType(type){
    const res = await fetch(`http://localhost:3000/developers?type=${type}`)
    return await res.json()
}
async function getDeveloperById(id){
    const res = await fetch(`http://localhost:3000/developers?id=${id}`)
    return await res.json()
}


async function getDevelopersByStatus(status){
    const res = await fetch(`http://localhost:3000/developers?status=${status}`)
    return await res.json()
}




export {getAllDevelopers, getDeveloperById, getDevelopersByStatus, getDevelopersByType}