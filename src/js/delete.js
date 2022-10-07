import {deleteTemplate} from './templates/deleteTemplate'
import { deleteRequest } from './api/deleteRequest'
import {renderMarkup} from './render/renderMarkup'
const removeDeveloper = document.querySelector('#deleteDeveloper')

 function pageInit(){
    if(!sessionStorage.getItem('developerData')){
        addReturnButton()
    }
    
    if(sessionStorage.getItem('developerData')){
        displayDeveloper()
    }
 }


 async function onRemoveDeveloper(e){
      const result = await deleteRequest(e.target.dataset.id);
       sessionStorage.clear();
      
        document.querySelector('.developer').remove()  
        
        addReturnButton()
 }

 async function displayDeveloper(){
    const developerData = JSON.parse(sessionStorage.getItem('developerData'))
    
  
     if(developerData){
      document.querySelector(`#deleteDeveloper`).innerHTML = await renderMarkup( deleteTemplate, developerData,);
     }

     document.querySelector('#deleteDeveloperButton').addEventListener('click', onRemoveDeveloper)
 }
 function addReturnButton(){
    const a = `<a href="../index.html">go back to the index page</a>`
    document.querySelector('#deleteDeveloper').innerHTML = a
 }
 pageInit()