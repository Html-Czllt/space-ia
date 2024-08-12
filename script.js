
document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');

    const story = [
        {
            text: "Você é um gestor ambiental responsável por proteger os ecossistemas marinhos em uma região rica em petróleo. Recentemente, uma grande empresa de petróleo obteve licença para explorar e extrair petróleo do fundo do mar. A empresa promete altos lucros e benefícios econômicos para a região, mas há um custo significativo para o meio ambiente. Há preocupações crescentes sobre o impacto negativo que essa extração pode ter sobre os corais, a fauna marinha e a saúde dos oceanos. Como você vai agir para equilibrar os interesses econômicos com a preservação ambiental?",
            choices: [
                { text: "Propor a implementação de tecnologias de extração mais seguras e realizar estudos de impacto ambiental detalhados.", nextStep: 1 },
                { text: "Negociar com a empresa para reduzir a área de extração e implementar medidas de mitigação para proteger os ecossistemas marinhos.", nextStep: 2 },
                { text: "Contrariar a extração e pressionar por uma alternativa sustentável que não coloque em risco a vida marinha.", nextStep: 3 }
            ]
        },
        {
            text: "Você propôs a implementação de tecnologias de extração mais seguras. Embora a empresa tenha concordado com algumas das medidas, há um risco constante de acidentes e danos ao meio ambiente. Qual é o próximo passo?",
            choices: [
                { text: "Aumentar a vigilância e monitoramento ambiental para garantir que as medidas de segurança sejam eficazes.", nextStep: 4 },
                { text: "Exigir que a empresa forneça relatórios regulares sobre os impactos ambientais e se comprometa a restaurar áreas danificadas.", nextStep: 5 },
                { text: "Buscar alternativas de fontes de energia renováveis para reduzir a dependência do petróleo e promover práticas mais sustentáveis.", nextStep: 6 }
            ]
        },
        {
            text: "Você negociou para reduzir a área de extração e implementar medidas de mitigação. A empresa concordou, mas ainda há críticas e desafios sobre a eficácia das medidas. O que fazer a seguir?",
            choices: [
                { text: "Focar em campanhas de conscientização e educação para a comunidade sobre a importância da preservação marinha e as medidas tomadas.", nextStep: 7 },
                { text: "Reforçar as regulamentações e garantir que a empresa cumpra todas as exigências ambientais estabelecidas.", nextStep: 8 },
                { text: "Desenvolver um plano de contingência para lidar com possíveis acidentes e danos ambientais.", nextStep: 9 }
            ]
        },
        {
            text: "Você pressionou por uma alternativa sustentável. A empresa e alguns stakeholders estão abertos à ideia, mas há resistência devido ao custo e complexidade. Qual é o próximo passo?",
            choices: [
                { text: "Explorar parcerias com organizações ambientais e governos para obter apoio e financiamento para soluções sustentáveis.", nextStep: 10 },
                { text: "Propor um plano gradual para a transição para energias renováveis e reduzir o impacto da extração de petróleo.", nextStep: 11 },
                { text: "Focar em políticas públicas para promover a legislação ambiental que desencoraje a exploração destrutiva dos recursos marinhos.", nextStep: 12 }
            ]
        },
        {
            text: "Obrigado por jogar! Volte sempre para tomar mais decisões.",
            isEnd: true
        }
    ];

    let currentStep = 0;

    function startGame() {
        home.style.display = 'none';
        narrative.style.display = 'block';
        showStep(currentStep);
    }

    function showStep(step) {
        const currentStory = story[step];
        narrativeText.textContent = currentStory.text;
        choicesContainer.innerHTML = '';
        if (currentStory.choices) {
            currentStory.choices.forEach((choice) => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.addEventListener('click', () => handleChoice(choice.nextStep));
                choicesContainer.appendChild(button);
            });
        }
    }

    function handleChoice(nextStep) {
        if (nextStep >= story.length || story[nextStep].isEnd) {
            showEndScreen();
        } else {
            currentStep = nextStep;
            showStep(currentStep);
        }
    }

    function showEndScreen() {
        narrative.style.display = 'none';
        endScreen.style.display = 'block';
    }

    function restartGame() {
        endScreen.style.display = 'none';
        home.style.display = 'block'; // Exibe a tela inicial
        currentStep = 0; // Reinicia o passo do jogo
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
});
