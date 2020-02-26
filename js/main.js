'use strict';

$('.search').on('click', e => {
e.preventDefault();
let user = $('.searchfield').val()
let url =
`https://api.github.com/users/${user}/repos`
fetch(url)
.then(response => {
  return response.json()})
.then(data => {
  getInfo(data)
})
});

function getInfo(data){
  if(data.message === "Not Found"){
    alert('User Not Found')
  }
  const repoUrl = [];
  const name = [];
  for(let i = 0; i < data.length; i++){
    repoUrl.push(data[i].html_url);
    name.push(data[i].name);
  }
 generateStringInfo(name,repoUrl)
}

function generateStringInfo(name,repoUrl){
  const repoHtml = name.map(name =>`<h1 class="results">Repo Name: ${name}`);
  const repoLink = repoUrl.map(repoUrl => `<h2 class="results"><a href="${repoUrl}">Repo Link</a>`)
   let count = 0;
   let strings = [];
   $('.repos').empty()
   while(count < name.length){
     const string = `${repoHtml[count]}${repoLink[count]}`;
     count++;
     $('.repos').append(string)
     }
 }

 function actions(){
   getInfo();
   generateStringInfo();
 }

 actions();