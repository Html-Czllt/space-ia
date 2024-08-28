document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');


    
    let currentStep = 0;
    let clickCount = 0;

    function showStep(step) {
        const storyStep = story[step];
        narrativeText.textContent = storyStep.text;

        choicesContainer.innerHTML = '';
        storyStep.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                if (choice.nextStep < story.length) {
                    showStep(choice.nextStep);
                } else {
                    endGame();
                }
            });
            choicesContainer.appendChild(button);
        });
    }

    function startGame() {
        home.style.display = 'none';
        narrative.style.display = 'block';
        showStep(currentStep);
    }

    function endGame() {
        narrative.style.display = 'none';
        endScreen.style.display = 'block';
        centerRestartButton();
    }

    function moveRestartButtonRandomly() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const maxWidth = windowWidth - restartBtn.offsetWidth;
        const maxHeight = windowHeight - restartBtn.offsetHeight;

        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;

        restartBtn.style.position = 'absolute';
        restartBtn.style.left = `${randomX}px`;
        restartBtn.style.top = `${randomY}px`;
    }

    function centerRestartButton() {
        const endScreenRect = endScreen.getBoundingClientRect();
        const restartBtnRect = restartBtn.getBoundingClientRect();

        const x = (endScreenRect.width - restartBtnRect.width) / 2 + endScreenRect.left;
        const y = endScreenRect.bottom + 20;

        restartBtn.style.position = 'absolute';
        restartBtn.style.left = `${x}px`;
        restartBtn.style.top = `${y}px`;
    }

    function handleRestartButtonClick() {
        clickCount += 1;

        if (clickCount < 4) {
            moveRestartButtonRandomly();
        } else {
            window.location.href = 'space.html'; // Substitua pelo URL desejado
        }
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', handleRestartButtonClick);

    // Centraliza o botão abaixo do texto final ao carregar a página
    centerRestartButton();
});