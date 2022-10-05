
 
 
async function renderMarkup(template, developerData){
  
    let markup = ""
    console.log(template, developerData)
    developerData.forEach(developer =>{
        markup += template(developer);
       
    })
 
    return markup
  
}


export {renderMarkup}