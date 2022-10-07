
 
 
async function renderMarkup(template, developerData){
  
    let markup = ""
 
    developerData.forEach(developer =>{
        markup += template(developer);
       
    })
 
    return markup
  
}


export {renderMarkup}