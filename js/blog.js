document.addEventListener("DOMContentLoaded", function () {
    const blogPostsContainer = document.getElementById("blog-posts");
    if (!blogPostsContainer) return;

    async function carregarPosts() {
        try {
            const base = document.querySelector("script[src*='blog.js']")?.src?.replace(/blog\.js.*$/, "") || "";
            const response = await fetch(base + "post.json");
            if (!response.ok) throw new Error("Arquivo não encontrado");
            const posts = await response.json();

            blogPostsContainer.innerHTML = posts
                .map(
                    (post) => `
                <article class="post reveal">
                    <div class="post-image">
                        <img src="${post.imagem || "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80"}" alt="${post.titulo}">
                    </div>
                    <div class="post-content">
                        <span class="post-data">${post.data}</span>
                        <h2>${post.titulo}</h2>
                        <p class="post-resumo">${post.resumo || post.conteudo || ""}</p>
                        <a href="${post.link || "#"}" class="leia-mais">Leia mais <i class="bi bi-arrow-right"></i></a>
                    </div>
                </article>
            `
                )
                .join("");

            document.querySelectorAll(".reveal").forEach(function (el) {
                el.classList.add("show");
            });
        } catch (error) {
            console.warn("Blog: exibindo cards estáticos da página.", error);
        }
    }

    carregarPosts();
});
