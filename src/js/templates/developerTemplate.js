 


export function developerTemplate ({avatar, firstName, status, lastName, email, phoneNumber, experience, type, uid, ...rest}){

   return `
   <li class="developer" data-uid="${uid}">
   <aside >
 
      
      <header class="avatar ${developerType(type)}">   
     
      <img
     
      src="${avatar}"
      width="104"
      height="104"
      alt="user name"
    />
    
     </div>        
       <h2 class="name">${firstName} ${lastName}</h2> 
       <p class="speciality">${type}</p>
      </header>


      <ul class="developer-details">
      <li>User Identification Number: <span>${uid}</span></li>
         <li>Email: <span>${email}</span></li>
         <li>Availabile For Work: <span>${status?"Yes":"No"}</span><li></li>
         <li>Phone: <span>${phoneNumber}</span></li>
         <li>Experience: <span>${experience} years</span></li>
    </ul>
   </aside>
 </li>
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

 
