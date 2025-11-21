// scripts/scroll-animation.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os elementos que devem ser animados (todas as seções de conteúdo)
    const sectionsToAnimate = document.querySelectorAll('#conteudo-principal section');

    // 2. Adiciona a classe inicial de 'fade-in' a todas as seções
    sectionsToAnimate.forEach(section => {
        section.classList.add('fade-in-section');
    });

    // Opcional: Anima o destaque da lei inicial também
    const destaqueLei = document.querySelector('.destaque-lei');
    if (destaqueLei) {
        destaqueLei.classList.add('fade-in-section');
    }

    // 3. Define a função de observação (Intersection Observer API)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se a seção estiver visível (ou parcialmente visível)
            if (entry.isIntersecting) {
                // Adiciona a classe de 'is-visible' para acionar a transição CSS
                entry.target.classList.add('is-visible');
                // Para de observar o elemento, pois ele já foi animado (otimização)
                observer.unobserve(entry.target); 
            }
        });
    }, {
        // Opções do Observer: A animação começa quando 10% do elemento está visível
        threshold: 0.1 
    });

    // 4. Inicia a observação de cada seção
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    // Opcional: Observa o destaque da lei
    if (destaqueLei) {
        observer.observe(destaqueLei);
    }
});