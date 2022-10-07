import {getDeveloperById} from './../api/getRequests'
let pagePath=""

function configListeners(nodeCollection, {action, type, path}){
   pagePath = path
   switch(type){
    case 'edit-delete':addEditDeleteListeners(nodeCollection);break;
   }

  return "adding listener functions"

}


function addEditDeleteListeners(nodeCollection, pagePath){
 
  nodeCollection.forEach((developer, index)=>{
    developer.children[0].addEventListener('click', onNavigateToPage);
    developer.children[1].addEventListener('click', onNavigateToPage);
  })

}

 

async function onNavigateToPage(e){
   let navigateTo;
  

   if(e.currentTarget.classList.contains('edit-developer')){
      navigateTo = `${pagePath}/update.html`
   }

   if(e.currentTarget.classList.contains('delete-developer')){
    navigateTo = `${pagePath}/delete.html`
   }
   const developerData = await getDeveloperById(e.currentTarget.dataset.id)
   
   if(developerData){
     sessionStorage.setItem('developerData', JSON.stringify(developerData))
     location.href = navigateTo
   }
  
}


export {configListeners}