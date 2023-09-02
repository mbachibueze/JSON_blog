function fetchData(){
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById("image-container");
      data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`

        output.appendChild(postElement);
      })
    })
    
    .catch(error => {console.error('Error:', error)})
}

fetchData()