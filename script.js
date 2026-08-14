// Função para abrir e fechar o menu lateral
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("aberta");
}

// Função para voltar ao início / topo da página
function mostrarHome() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar && sidebar.classList.contains("aberta")) {
        sidebar.classList.remove("aberta");
    }
    if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        window.location.href = "index.html";
    }
}


// Lógica dos menus sanfona (Técnico, Matemática, etc) para abrir as sub-matérias
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        // Pega o submenu logo abaixo do botão clicado
        let submenu = this.nextElementSibling;
        submenu.classList.toggle("aberto");
        
        // Gira a setinha
        let seta = this.querySelector(".seta");
        if(submenu.classList.contains("aberto")) {
            seta.style.transform = "rotate(180deg)";
        } else {
            seta.style.transform = "rotate(0deg)";
        }
    });
});