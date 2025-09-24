const postsList = document.getElementById("listeposts");
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.slice(0, 5).forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postsList.appendChild(li);
    });
  } catch (error) {
    console.error("Erreur :", error);
  }
}

getPosts();