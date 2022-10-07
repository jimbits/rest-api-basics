const deleteButton = document.getElementById('deleteDeveloper')
const editButton = document.getElementById('editDeveloper')


deleteButton.addEventListener('click', onDeleteDeveloper)


function onDeleteDeveloper(e){
    console.log( `delete developer usin id ${e.target.dataset.id}`)
}