async function deleteRequest(id){

   
    const settings = {
        method:"DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    }


   const res = await fetch(`http://localhost:3000/developers/${id}`, settings);

   return  await res.json()
   
}


export {deleteRequest}