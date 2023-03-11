/*set a local storage item, key:name, value: salman sha*/ 
const setNameLocalStore = () =>{
  localStorage.setItem('name', 'salman')
  localStorage.setItem('age', 12)
  

const user= localStorage.getItem('name')
// console.log(user)

const user1= localStorage.getItem('age')
// console.log(user1)

localStorage.setItem('users', JSON.stringify({name: 'Raihan', age: 28, Job: 'student'}))

const info= JSON.parse(localStorage.getItem('users'))
// console.log(info)

displaySetNameLocalStore(user, user1, info)

}

const displaySetNameLocalStore = (setName, user1, info) =>{
  console.log(setName)
  console.log(user1)
  console.log(info)

const parentContainer=  document.getElementById('display-name')
const newDiv= document.createElement('div')
newDiv.innerHTML=`
${setName}

${user1}

${info.name}
${info.age}
`;
parentContainer.appendChild(newDiv)
}