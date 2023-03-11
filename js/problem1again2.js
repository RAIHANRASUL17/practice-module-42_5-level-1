/*set a local storage item, key:name, value: salman sha*/ 
const setNameLocalStore = () =>{
    localStorage.setItem('name', 'salman')
    localStorage.setItem('age', 12)
    
  
  const user= localStorage.getItem('name')
  // console.log(user)
  
  const user1= localStorage.getItem('age')
  // console.log(user1)
  
  localStorage.setItem('users', JSON.stringify({name: 'Raihan', age: 28, Job: 'student'}))

//   using Array
  localStorage.setItem('users2', JSON.stringify([{name: 'Raihan', age: 28, Job: 'student'}]))
  
  const info= JSON.parse(localStorage.getItem('users'))
  // console.log(info)

  const info2= JSON.parse(localStorage.getItem('users2'))
  // console.log(info2)
  
  displaySetNameLocalStore(user, user1, info, info2)
  
  }
  
  const displaySetNameLocalStore = (setName, user1, info, info2) =>{
    console.log(setName)
    console.log(user1)
    console.log(info)
    console.log(info2)

    info2.forEach(singleData =>{
        console.log(singleData.name)
        
    const parentContainer=  document.getElementById('display-name')
  const newDiv= document.createElement('div')
  newDiv.innerHTML=`

  SingleInfo & Name: ${singleData.name}
  Age: ${singleData.age}
  Job: ${singleData.Job}          
  `;
  parentContainer.appendChild(newDiv)
    })
  
  const parentContainer=  document.getElementById('display-name')
  const newDiv= document.createElement('div')
  newDiv.innerHTML=`
  Name1: ${setName} ;
  
  NameUser2: ${user1} ;
  
  Info & Name: ${info.name}
                ${info.age}        
  `;
  parentContainer.appendChild(newDiv)
  };

  

//   call displaySetNameLocalStore
displaySetNameLocalStore(setName, user1, info, info2)