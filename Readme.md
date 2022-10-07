#  REST API Basics


## HTML Template For Displaying A Developer

```javascript
  <li >
   <aside class="developer" data-id="${id}"> 
      
      <header class="${developerType(type)}">   
     
      <img
     
      src="${avatar}"
      width="104"
      height="104"
      alt="user name"
    />
    
     </div>        
       <h2 class="name">${firstName} ${lastName}</h2> 
       <p class="speciality">${type}</p>
       <p class="developer-id-number">id:<span>${uid}</span> </p>
       <ul class="editor-controls">
  
       <li id="editDeveloper" data-id="${id}">
       <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
         
      <g>
        <path  d="M284.7,123.2c34.6,34.6,69.1,69.1,104,104c-0.9,1-2.1,2.4-3.4,3.7c-60.5,60.5-121,121-181.5,181.4
          c-9.8,9.8-21.3,16.8-34.5,20.7c-30.4,9-60.9,17.8-91.4,26.7c-5.3,1.5-10.7,2.7-16.1-0.2c-8.6-4.7-13-12.5-10.2-22.4
          c9.7-34.1,19.9-68.1,30.2-102.1c3.1-10.1,9.9-18.1,17.2-25.5c61.1-61.4,122.3-122.7,183.4-184.1
          C283.1,124.5,284.1,123.7,284.7,123.2z"/>
        <path d="M407.1,207.3c-33.9-33.9-68.4-68.4-103.6-103.6c3.6-3.4,7.6-7.2,11.5-11c10.6-10.3,20.7-21.3,32-30.7
          c18.9-15.6,46.7-14.9,64.9,1.5c13.1,11.8,25.8,24.3,37.1,37.7c16.8,19.8,16.4,46.8-1,66C435.2,181.5,420.6,194.2,407.1,207.3z"/>
      </g>
      </svg>
     </li>
       <li id="deleteDeveloper" data-id="${id}"><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g>
        <path d="M89.4,145.3c111.3,0,221.8,0,333.2,0c-6.9,111-13.9,221.8-20.8,333c-97.4,0-194.2,0-291.6,0
          C103.3,367.3,96.3,256.6,89.4,145.3z"/>
        <path d="M61.9,61.7c2.3,0,4.3,0,6.4,0c32.8,0,65.6-0.1,98.5,0.1c4.6,0,6.9-1.5,8.7-5.5c3.4-7.5,7.3-14.9,11.1-22.4
          c12.3,0,24.4,0,36.6,0c32.4,0,64.9,0.1,97.3-0.1c3.5,0,5.6,0.9,7.1,4.3c2.9,6.5,6.5,12.7,9.4,19.2c1.6,3.6,3.8,4.5,7.5,4.5
          c33-0.2,66-0.1,99-0.1c2.1,0,4.2,0,6.5,0c0,18.6,0,36.7,0,55c-129.4,0-258.5,0-388.1,0C61.9,98.5,61.9,80.4,61.9,61.7z"/>
      </g>
      </svg>
      </li>
     </ul>
      </header>


      <ul class="developer-details">
         <li>User ID: <span>${id}</span></li>
         <li>Email: <span>${email}</span></li>
         <li>Availabile For Work: <span>${status?"Yes":"No"}</span><li></li>
         <li>Phone: <span>${phoneNumber}</span></li>
         <li>Experience: <span>${experience} years</span></li>
    </ul>
   </aside>
 </li>

```
  