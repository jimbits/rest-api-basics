import {getDeveloperById, getDevelopersByStatus, getDevelopersByType } from './api/getRequests'
import { developerTemplate } from './templates/developerTemplate'
import {renderMarkup} from './render/renderMarkup'
// document.querySelectorAll('#queryOptions button').addEventListener('click', onSubmitQuery);

const queryButtonList = document.querySelectorAll('#queryOptions button')

queryButtonList.forEach(button=>{
    button.addEventListener('click', onSubmitQuery)
})



function onSubmitQuery(e){
    const query = document.querySelector('#dataQuery').value.trim();
    //  check for empty string pop flash message (query.length)
    
    switch(e.currentTarget.id){
        case "getDeveloperById": processRequest(getDeveloperById, query);break;
        case "getDevelopersByType": processRequest(getDevelopersByType, query);break;
        case "getDevelopersByStatus": processRequest(getDevelopersByStatus, query); break;
        default: throw "No id on element found";
    }
  
}

async function processRequest(getRequest, query){
      const result =  await getRequest(query);
      formatResponse(result)
}

 

async function formatResponse(developerData){
   
    const items = await renderMarkup(developerTemplate, developerData)
 
    document.querySelector(`#developerList`).innerHTML = items
    const controlButtons = document.querySelectorAll('.editor-controls li')
   
  
 
    controlButtons.forEach(developer=>{
       developer.addEventListener('click', onControlRequest)
    })


// deleteButton



}

async function onControlRequest(e){
  
    const developerId = e.currentTarget.dataset.id;
    const controlClass = e.currentTarget.classList 
    const developerData =  await getDeveloperById(developerId)

     if(controlClass.value === 'delete-developer'){
         navigateToPage(developerData, 'delete.html')
     }
    
}



function navigateToPage(developerData, url){
    sessionStorage.setItem('developerData', JSON.stringify(developerData))
     location.href = url
}


 