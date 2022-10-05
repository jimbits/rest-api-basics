import {nanoid} from 'nanoid'
import { createDeveloper } from "./api/postRequests";
import {renderMarkup} from './render/renderMarkup'
import {createTemplate} from './templates/createTemplate'
import { randomAvatar } from './utils/randomAvatar';


const developerForm = document.forms['createDeveloper']
const processingRequest = false;

developerForm.addEventListener('submit', onCreateDeveloper);
const submitDeveloperFormButton = document.querySelector('#submitDeveloperForm')
// create and add random id




function onCreateDeveloper(e){
    e.preventDefault()
    const uid = randomUID();
    const experience = e.target.elements['experience'].value.trim();
    const firstName = e.target.elements['firstName'].value.trim();
    const lastName = e.target.elements['lastName'].value.trim();
    const email = e.target.elements['email'].value.trim();
    const phoneNumber = e.target.elements['phoneNumber'].value.trim()
    const type = e.target.elements['type'].value.trim();
    const imageName = firstName.toLowerCase()
    const avatar = `https://avatars.dicebear.com/api/${randomAvatar()}/${firstName}.svg`

    const developerObject ={
        uid,
        experience,
        firstName,
        lastName,
        email,
        phoneNumber,
        type,
        avatar
      
    }
    
   console.log(developerObject)
    formatResponse(developerObject)

    

}


async function formatResponse(developerObject){
    const newDeveloper = await createDeveloper(developerObject);
   
   const items = await renderMarkup(createTemplate, [newDeveloper]);
  
   document.querySelector('#newDeveloper').removeChild(document.querySelector(`#livePreview`))
   document.querySelector('#newDeveloper').insertAdjacentHTML('beforeend', items)
}


function randomUID(){
    const randomUID = nanoid().substring(0,8)
    
}


