// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


console.log(await fetch("https://jsonplaceholder.typicode.com/users").json())
