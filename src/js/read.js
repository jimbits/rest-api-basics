import {getDeveloperById, getDevelopersByStatus} from './api/getRequests'
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
        case "getDevelopersByType": console.log("by type");break;
        case "getDevelopersByStatus": processRequest(getDevelopersByStatus, query); break;
        default: throw "No id on element found";
    }
  
}

async function processRequest(getRequest, query){
    formatResponse(await getRequest(query));
     
}

 

async function formatResponse(developerData){
    console.log(developerData)
    const items = await renderMarkup(developerTemplate, developerData)
    console.log(items)
    document.querySelector(`#developerList`).innerHTML = items
}


 