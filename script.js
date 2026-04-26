// Função para abrir e fechar o menu lateral
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("aberta");
}

// Função para alternar o tema (Escuro/Claro)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Salva a preferência no localStorage
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("portfolio-theme", theme);
    
    // Atualiza o texto/ícone do botão se necessário
    updateThemeButton();
}

function updateThemeButton() {
    const btn = document.getElementById("theme-toggle-btn");
    if (!btn) return;
    
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Modo Claro";
    } else {
        btn.innerHTML = "🌙 Modo Escuro";
    }
}

// Aplica o tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateThemeButton();
});

// Lógica dos menus sanfona (Técnico, Matemática, etc) para abrir as sub-matérias
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        // Pega o submenu logo abaixo do botão clicado
        let submenu = this.nextElementSibling;
        if (!submenu || !submenu.classList.contains("sub-menu")) return;
        
        submenu.classList.toggle("aberto");
        
        // Gira a setinha
        let seta = this.querySelector(".seta");
        if(seta) {
            if(submenu.classList.contains("aberto")) {
                seta.style.transform = "rotate(180deg)";
            } else {
                seta.style.transform = "rotate(0deg)";
            }
        }
    });
});

function mostrarHome() {
    window.location.href = 'index.html';
}

