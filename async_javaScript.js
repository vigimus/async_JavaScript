// ASYNC AWAIT

//Gör samma som nedan
/*movePlayer(100, 'Left')
 .then(() => movePlayer(400, 'Left'))
 .then(() => movePlayer(10, 'Right'))
 .then(() => movePlayer(330, 'Left'))*/

//Syntactic sugar
 async function playerStart() {
  const firstMove = await movePlayer(100, 'Left'); //Pausa innan vi har något
  const secoundMove = await movePlayer(400, 'Left'))
  await movePlayer(10, 'Right'))
  await movePlayer(330, 'Left'))
 }

async function fetchUsers() {
const resp = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await resp.json();
 console.log(data);
}

const urls = [
'https://jsonplaceholder.typicode.com/users'
'https://jsonplaceholder.typicode.com/posts
'https://jsonplaceholder.typicode.com/albums'
	]

const getData = async function () {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
		))
	console.log('users', users)
	console.log('posta', posts)
	console.log('albums', albums)
} catch (err) {
	console.log('oooops', err)
}	
}