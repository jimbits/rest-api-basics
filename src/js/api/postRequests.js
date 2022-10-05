


async function createDeveloper(developerObject){
   

    const body = JSON.stringify(developerObject);
    const settings = {
        method:"POST",
        body,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    }
    const res = await fetch('http://localhost:3000/developers', settings);
      
  

  
    return await res.json()
}



export {createDeveloper}