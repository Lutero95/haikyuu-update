document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('criticismForm');
    const textarea = document.getElementById('criticismText');
    const wordCounter = document.getElementById('wordCounter');
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    const MAX_WORDS = 500;

    // Remover qualquer tooltip de validação padrão
    textarea.setAttribute('novalidate', true);
    form.setAttribute('novalidate', true);

    // Criar e adicionar o elemento tooltip personalizado
    const errorTooltip = document.createElement('div');
    errorTooltip.className = 'error-tooltip';
    errorTooltip.innerHTML = '<span>🏐 Ei! Você precisa escrever sua crítica antes de fazer um saque!</span>';
    textarea.parentElement.appendChild(errorTooltip);

    // Array de mensagens de sucesso personalizadas
    const successMessages = [
        "Nice receive! Sua crítica foi recebida com sucesso! 🏐",
        "BOOM! Sua crítica foi um ace perfeito! 🎯",
        "Rolling Thunder! Crítica enviada com sucesso! ⚡",
        "Sua crítica foi um ataque rápido certeiro! 🌟"
    ];

    function countWords(text) {
        // Remove espaços extras e quebras de linha
        const trimmedText = text.replace(/\s+/g, ' ').trim();
        const words = trimmedText ? trimmedText.split(' ') : [];
        return words[0] === '' ? 0 : words.length;
    }

    function updateWordCount() {
        const wordCount = countWords(textarea.value);
        wordCounter.textContent = `${wordCount}/${MAX_WORDS}`;
        
        if (wordCount >= MAX_WORDS) {
            wordCounter.classList.add('limit-reached');
            
            // Impede a digitação de mais palavras quando atingir o limite
            const words = textarea.value.trim().split(/\s+/);
            if (words.length > MAX_WORDS) {
                textarea.value = words.slice(0, MAX_WORDS).join(' ');
            }
        } else {
            wordCounter.classList.remove('limit-reached');
        }
    }

    // Atualiza a contagem em tempo real
    textarea.addEventListener('input', updateWordCount);
    textarea.addEventListener('keyup', updateWordCount);
    textarea.addEventListener('paste', function(e) {
        setTimeout(updateWordCount, 0);
    });

    // Inicializa o contador
    updateWordCount();

    function showError() {
        textarea.classList.add('error');
        errorTooltip.classList.add('show');
        
        // Remove o erro após 3 segundos
        setTimeout(() => {
            textarea.classList.remove('error');
            errorTooltip.classList.remove('show');
        }, 3000);
    }

    function showNotification(message) {
        notificationText.textContent = message;
        notification.classList.add('show');

        setTimeout(() => {
            notification.style.animation = 'shake 0.5s ease-in-out';
        }, 500);

        setTimeout(() => {
            notification.style.animation = '';
            notification.classList.remove('show');
        }, 3000);
    }

    // Adiciona animação de shake
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(-50%) rotate(0deg); }
            25% { transform: translateX(-50%) rotate(-5deg); }
            75% { transform: translateX(-50%) rotate(5deg); }
        }
    `;
    document.head.appendChild(style);

    // Remove o erro quando o usuário começa a digitar
    textarea.addEventListener('input', function() {
        textarea.classList.remove('error');
        errorTooltip.classList.remove('show');
    });

    // Prevenir o comportamento padrão do required
    textarea.addEventListener('invalid', function(e) {
        e.preventDefault();
        showError();
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const criticismText = textarea.value.trim();
        
        if (criticismText === '') {
            showError();
            return;
        }

        const wordCount = countWords(criticismText);
        if (wordCount > MAX_WORDS) {
            showNotification("Ops! Sua crítica excedeu o limite de 500 palavras! 😅");
            return;
        }

        // Se passou nas validações, mostra mensagem de sucesso
        const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
        showNotification(randomMessage);
        form.reset();
        updateWordCount();
    });
});
