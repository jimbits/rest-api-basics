 


function deleteTemplate ({avatar, firstName, status, lastName, email, phoneNumber, experience, type, id, ...rest}){

   return `
   <aside class="developer" data-id="${id}"> 
      
   <header class=" avatar ${developerType(type)}">   
  
   <img
  
   src="${avatar}"
   width="104"
   height="104"
   alt="user name"
 />
 
  </div>        
    <h2 class="name">${firstName} ${lastName}</h2> 
    <p class="speciality">${type}</p>
    <p class="developer-id-number">id:<span>${id}</span> </p>
  
   </header>


   <ul class="developer-details">
    
      <li>Email: <span>${email}</span></li>
      <li>Availabile For Work: <span>${status?"Yes":"No"}</span><li></li>
      <li>Phone: <span>${phoneNumber}</span></li>
      <li>Experience: <span>${experience} years</span></li>
 </ul>
 <footer class="developer-footer">
   <button id="deleteDeveloperButton" data-id="${id}" class="${developerType(type)}-button">Remove This Developer</button>
 </footer>
</aside>
   `

}


function developerType(type){
   if(type === "full stack developer"){
      return "full-stack"
   }

   if(type === 'front end developer'){
      return "front-end"
   }

   if(type === 'back end developer'){
      return "back-end"
   }
}


export {deleteTemplate}

 
