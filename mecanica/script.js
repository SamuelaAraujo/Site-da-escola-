// Espera o documento HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona o botão pelo ID que demos a ele no HTML
    const matriculaButton = document.getElementById('matricula-btn');

    // 2. Adiciona um "ouvinte de evento" de clique
    // Isso diz ao navegador: "Quando este botão for clicado, faça isso:"
    matriculaButton.addEventListener('click', () => {
        
        // 3. A ação que será executada
        alert('Botão de matrícula clicado! Redirecionando para a página de inscrição...');
        
        // No futuro, você poderia trocar o 'alert' por algo mais prático, como:
        // window.location.href = '/pagina-de-matricula.html';
    });

});