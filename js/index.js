// VARIABLES
const container = document.getElementById('blogs');
const searchForm = document.getElementById('search');

// DISPLAY BLOGS FROM THE DB
const renderPosts = async (term) => {
    let uri = 'http://localhost:3000/posts?_sort=likes&_order=asc';
    
    // SEARCH IN WHOLE DB
    if (term) {
        uri += `&q=${term}`
    }

    const res = await fetch(uri);
    const posts = await res.json();

    let template = '';

    posts.forEach((post) => {
        template += `
        <article class="post">
            <a href="./details.html?id=${post.id}">
                <h2>${post.title}</h2>
            </a>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}...</p>
        </article>
        `
    })

    container.innerHTML = template;
}

// SEARCH IN WHOLE DB
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim())
})

// DISPLAY BLOGS WHEN PAGE LOADS
window.addEventListener('DOMContentLoaded', () => {
    renderPosts();
})