import { getAllDevelopers } from "./api/getRequests";
import {renderMarkup} from './render/renderMarkup';
import {developerTemplate} from './templates/developerTemplate'
import {configListeners} from './utils/configListeners'

 async function appInit(){
    const developerData = await getAllDevelopers();
  
     if(developerData){
      document.querySelector('#developerList').innerHTML = await renderMarkup( developerTemplate, developerData)
      // select the ul#developerDataControls and add listeners 
      // to both the edit and delete buttons for each developer
      //
      configListeners(document.querySelectorAll('#developerDataControls'), {action:"add", path:"pages"})
    }
 }

 appInit()