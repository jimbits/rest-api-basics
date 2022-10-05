import { getAllDevelopers } from "./api/getRequests";
import {renderMarkup} from './render/renderMarkup';
import {developerTemplate} from './templates/developerTemplate'

 async function appInit(){
    const developerData = await getAllDevelopers();
  
     if(developerData){
        
      document.querySelector(`#developerList`).innerHTML = await renderMarkup( developerTemplate, developerData,)
     }
 }

 appInit()