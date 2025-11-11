// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os links (agora também os do footer com a classe 'puzzle-button')
    // e o link 'PEDAGÓGICO' no header, se quiser que ele seja interativo.
    const navLinks = document.querySelectorAll('.nav-item');
    const mensagemDiv = document.getElementById('mensagem-interativa');

    // Dicionário com as informações detalhadas sobre a escola
    const mensagensDetalhe = {
        conhecer: `
            <h3>📚 CONHECER: Estrutura e Ensino</h3>
            <p>A MLMB oferece o **Ensino Médio Regular**, **EJA** (Educação de Jovens e Adultos) e **Cursos Técnicos Integrados**.</p>
            <p><strong>Estrutura:</strong> Contamos com Auditório, Biblioteca, Laboratório de Informática, Laboratório de Ciências, Quadra Esportiva Coberta e Área Verde, proporcionando um ambiente completo para o aprendizado.</p>
        `,
        ser: `
            <h3>🌟 SER: Formação e Valores</h3>
            <p>Nosso foco vai além do conteúdo. Ajudamos o estudante a **Ser** um cidadão completo, ético e preparado para os desafios da vida.</p>
            <p>Valorizamos o **Desenvolvimento Socioemocional** e a **Motivação dos Estudantes** como pilares essenciais para a formação integral.</p>
        `,
        conviver: `
            <h3>🤝 CONVIVER: Comunidade e Gestão</h3>
            <p>Acreditamos na participação ativa da comunidade escolar. Nosso **Projeto Político Pedagógico** é atualizado para refletir as necessidades de todos.</p>
            <p>Contamos com órgãos colegiados em funcionamento para garantir a gestão democrática:</p>
            <ul>
                <li>Associação de Pais e Mestres (APM)</li>
                <li>Conselho Escolar</li>
                <li>Grêmio Estudantil</li>
            </ul>
        `,
        fazer: `
            <h3>🛠️ FAZER: Cursos e Ações Práticas</h3>
            <p>Incentivamos a prática e a inovação. Além do currículo tradicional, promovemos:</p>
            <ul>
                <li>Ações de **Educação Profissional** e Cursos Técnicos Integrados.</li>
                <li>Atividades de **Múltiplas Linguagens, Comunicação e Mídias**.</li>
                <li>Iniciativas no campo de **Pesquisa e Inovação Tecnológica**.</li>
            </ul>
            <p>Essas ações preparam o aluno para 'Fazer' a diferença no mercado de trabalho e na sociedade.</p>
        `,
        pedagogico: `
            <h3>📝 PEDAGÓGICO: Nossa Proposta de Ensino</h3>
            <p>O setor pedagógico da E.E. Maria Luiza Miranda Bastos foca em uma educação inovadora e inclusiva, alinhada à Base Nacional Comum Curricular (BNCC).</p>
            <p>Nosso objetivo é desenvolver as competências e habilidades necessárias para o futuro de nossos alunos, com um corpo docente qualificado e metodologias de ensino atualizadas.</p>
        `
    };

    // Adiciona o evento de clique para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', (evento) => {
            
            evento.preventDefault(); 
            
            const acao = link.getAttribute('data-acao');
            const conteudoDetalhe = mensagensDetalhe[acao];
            
            // Se a ação não tiver conteúdo, não faz nada (para HOME, SOBRE NÓS, CURSOS no header)
            if (!conteudoDetalhe) {
                mensagemDiv.classList.remove('mensagem-visivel');
                mensagemDiv.classList.add('mensagem-oculta');
                mensagemDiv.innerHTML = ''; // Limpa a mensagem se não houver conteúdo
                return; 
            }

            // Remove a classe de visibilidade para animar a saída
            mensagemDiv.classList.remove('mensagem-visivel');
            mensagemDiv.classList.add('mensagem-oculta');

            // Após a animação de saída (0.6s), muda o conteúdo e anima a entrada
            setTimeout(() => {
                mensagemDiv.innerHTML = conteudoDetalhe;
                
                // Animação de entrada
                mensagemDiv.classList.remove('mensagem-oculta');
                mensagemDiv.classList.add('mensagem-visivel');
            }, 600); // O tempo precisa ser o mesmo da transição no CSS
            
        });
    });
});