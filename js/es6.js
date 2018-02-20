/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];



const name = 'Laura Prochaska';
const email = 'lauraleeprochaska@gmail.com';
const languages = ['html', 'css', 'javascript'];


users.push({
  name,
  email,
  languages
});


let emails = [];
let names = [];

users.forEach (user => {emails.push(user.email);});


users.forEach(user => {names.push(user.name);});



let developers = [];

    users.forEach(user => {
    const { name, email, languages } = user;
    developers.push(`${name} email is  ${email} ${name} knows ${languages}`);
    });


let list = '<ul>';

for (let developer of developers){
  list += `<li> ${developer} </li>`;
    }
        list += '</ul>';

document.body.innerHTML = list;
