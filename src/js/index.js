import { getAllDevelopers } from "./api/getRequests";
import {renderMarkup} from './render/renderMarkup';
import {developerTemplate} from './templates/developerTemplate'
import {configListeners} from './utils/configListeners'

 async function appInit(){
    const developerData = await getAllDevelopers();
  
     if(developerData){
      document.querySelector(`#developerList`).innerHTML = await renderMarkup( developerTemplate, developerData,)
      // add listeners to the controls 
      configListeners(document.querySelectorAll('#developerDataControls'), {action:"add", type:"edit-delete", path:"pages"})
    }
 }

 appInit()