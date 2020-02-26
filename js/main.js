'use strict';




$('.search').on('click', e => {

e.preventDefault();
let user = $('.searchfield').val()
console.log(user)

let url =
`https://api.github.com/users/${user}/repos`


//console.log('click')


fetch(url)
.then(response => {
  return response.json()})
.then(data => {
  //console.log(data)
  getInfo(data)
})

function getInfo(data){
  if(data.message === "Not Found"){
    alert('User Not Found')
  }

  const repoUrl = [];
  const name = [];
  for(let i = 0; i < data.length; i++){
    
    //$('.repos').html(strings[i])
    repoUrl.push(data[i].html_url);
    
    name.push(data[i].name);

    //console.log(name,repoUrl)
    
  }
 generateStringInfo(name,repoUrl)
}

function generateStringInfo(name,repoUrl){
  //console.log(repoUrl)
  const repoHtml = name.map(name =>`<h1>Repo Name: ${name}`);
  const repoLink = repoUrl.map(repoUrl => `<h2><a href="${repoUrl}">Repo Link</a>`)
   let count = 0;
   let strings = [];
   $('.repos').empty()
   while(count < name.length){
     const string = `${repoHtml[count]}${repoLink[count]}`;
     //console.log(string);
     count++;
     $('.repos').append(string)
     displayString(string)
     }

    
     
     //;
  //console.log(repoHtml[1],repoLink[1])
  
  /*for(let i = 0; i < repoHtml.length & i < repoLink.length; i++){
     let string = `${repoHtml}${repoLink}`

   
     }
  
  x)*/
  
  
  
  
}

function displayString(string){
  //console.log(string.length)
//$('.repos').html(string)
}

});