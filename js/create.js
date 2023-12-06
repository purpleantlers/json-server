// VARIABLES
const form = document.getElementById('createForm');

// CREATES A BLOG
const createPost = async (e) => {
    e.preventDefault();

    // GET THE VALUES FROM THE FORM
    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    // POSTS THE BLOG IN THE DB
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    })

    // GOES TO THE MAIN PAGE
    window.location.replace('./index.html')
}

// CREATES THE POST WHEN CLICKED
form.addEventListener('submit', createPost);