// VARIABLES
// GET ID FROM THE URL
const id = new URLSearchParams(window.location.search).get('id');
const container = document.getElementById('details')
const deleteBtn = document.getElementById('delete')

// DISPLAY THE DATA FROM DB
const renderDetails = async () => {
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    const post = await res.json();

    const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `
    container.innerHTML = template;
}

// DELETE DATA FROM THE DB
deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
    })

    // GOES TO THE MAIN PAGE
    window.location.replace('./index.html')
})

// DISPLAY DATA WHEN THE PAGE LOADS
window.addEventListener('DOMContentLoaded', () => renderDetails())