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
            "text": "Você ajudou a definir um novo projeto de exploração espacial. A equipe está animada e o projeto está prestes a começar. Qual é o próximo passo?",
            "choices": [
                { "text": "Desenvolver um cronograma detalhado para o projeto.", "nextStep": 1 },
                { "text": "Organizar uma reunião inicial com a equipe para discutir o plano.", "nextStep": 2 },
                { "text": "Preparar um relatório de início para divulgar o projeto.", "nextStep": 3 }
            ]
        },
        {
            "text": "Você desenvolveu um cronograma detalhado para o projeto. A equipe começou a trabalhar nas etapas iniciais. O que fazer agora?",
            "choices": [
                { "text": "Monitorar o progresso das etapas iniciais e ajustar conforme necessário.", "nextStep": 4 },
                { "text": "Solicitar feedback da equipe sobre o cronograma e ajustar conforme necessário.", "nextStep": 5 },
                { "text": "Divulgar uma atualização sobre o progresso inicial do projeto.", "nextStep": 6 }
            ]
        },
        {
            "text": "Você organizou uma reunião inicial com a equipe. O plano foi bem recebido e ajustes foram sugeridos. Qual é o próximo passo?",
            "choices": [
                { "text": "Implementar os ajustes sugeridos e atualizar o cronograma.", "nextStep": 7 },
                { "text": "Solicitar uma análise externa do plano atualizado.", "nextStep": 8 },
                { "text": "Divulgar um relatório sobre a reunião e os ajustes feitos.", "nextStep": 9 }
            ]
        },
        {
            "text": "Você preparou um relatório de início. A equipe está empolgada, mas alguns desafios surgiram. O que fazer agora?",
            "choices": [
                { "text": "Reavaliar o cronograma e ajustar as etapas conforme os novos desafios.", "nextStep": 10 },
                { "text": "Organizar uma sessão de brainstorming para resolver os novos desafios.", "nextStep": 11 },
                { "text": "Divulgar um relatório sobre os desafios enfrentados e as soluções propostas.", "nextStep": 12 }
            ]
        },
        {
            "text": "Você monitorou o progresso das etapas iniciais e ajustou conforme necessário. A equipe está avançando bem. Qual é o próximo passo?",
            "choices": [
                { "text": "Continuar monitorando e ajustar conforme necessário.", "nextStep": 13 },
                { "text": "Solicitar feedback da equipe sobre o progresso.", "nextStep": 14 },
                { "text": "Divulgar uma nova atualização sobre o progresso do projeto.", "nextStep": 15 }
            ]
        },
        {
            "text": "Você organizou uma sessão de brainstorming e encontrou novas soluções. Qual é o próximo passo?",
            "choices": [
                { "text": "Implementar as soluções propostas e monitorar os resultados.", "nextStep": 16 },
                { "text": "Solicitar uma análise detalhada das soluções propostas.", "nextStep": 17 },
                { "text": "Divulgar um relatório sobre as soluções e como elas foram desenvolvidas.", "nextStep": 18 }
            ]
        },
        {
            "text": "Você divulgou uma atualização sobre o progresso do projeto. O feedback sugere novas melhorias. Qual é o próximo passo?",
            "choices": [
                { "text": "Propor e implementar as novas melhorias sugeridas.", "nextStep": 19 },
                { "text": "Organizar uma reunião para discutir as melhorias sugeridas.", "nextStep": 20 },
                { "text": "Divulgar um relatório detalhado sobre o feedback e as melhorias propostas.", "nextStep": 21 }
            ]
        },
        {
            "text": "Você começou a implementar as novas melhorias. Novos dados estão sendo coletados. O que fazer agora?",
            "choices": [
                { "text": "Analisar os novos dados e ajustar o plano conforme necessário.", "nextStep": 22 },
                { "text": "Solicitar uma análise externa dos novos dados coletados.", "nextStep": 23 },
                { "text": "Divulgar um relatório sobre os novos dados e as melhorias implementadas.", "nextStep": 24 }
            ]
        },
        {
            "text": "Você solicitou uma análise externa dos novos dados. A análise trouxe novas recomendações. Qual é o próximo passo?",
            "choices": [
                { "text": "Propor um plano de ação para implementar as novas recomendações.", "nextStep": 25 },
                { "text": "Organizar uma reunião para discutir as novas recomendações e possíveis ajustes.", "nextStep": 26 },
                { "text": "Divulgar um relatório sobre a análise externa e as recomendações recebidas.", "nextStep": 27 }
            ]
        },
        {
            "text": "Você começou a implementar as novas recomendações. O projeto está avançando bem. Qual é o próximo passo?",
            "choices": [
                { "text": "Revisar o progresso e ajustar o plano conforme necessário.", "nextStep": 28 },
                { "text": "Solicitar uma análise contínua do progresso do projeto.", "nextStep": 29 },
                { "text": "Divulgar um relatório sobre o progresso e os próximos passos do projeto.", "nextStep": 30 }
            ]
        },
        {
            "text": "Você solicitou uma análise contínua do projeto. A análise revelou novas oportunidades e desafios. Qual é o próximo passo?",
            "choices": [
                { "text": "Propor um novo plano de ação para explorar as oportunidades e enfrentar os desafios.", "nextStep": 31 },
                { "text": "Organizar uma sessão de brainstorming para discutir as novas oportunidades e desafios.", "nextStep": 32 },
                { "text": "Divulgar um relatório detalhado sobre as novas oportunidades e desafios identificados.", "nextStep": 33 }
            ]
        },
        {
            "text": "Você organizou uma sessão de brainstorming para discutir novas oportunidades e desafios. A equipe gerou novas propostas. Qual é o próximo passo?",
            "choices": [
                { "text": "Implementar as novas propostas e monitorar os resultados.", "nextStep": 34 },
                { "text": "Solicitar uma análise detalhada das novas propostas e ajustes.", "nextStep": 35 },
                { "text": "Divulgar um relatório sobre as novas propostas e como elas foram desenvolvidas.", "nextStep": 36 }
            ]
        },
        {
            "text": "Você começou a implementar as novas propostas. Os resultados estão sendo monitorados. O que fazer agora?",
            "choices": [
                { "text": "Acompanhar os resultados e ajustar o plano conforme necessário.", "nextStep": 37 },
                { "text": "Solicitar uma análise contínua dos resultados das novas propostas.", "nextStep": 38 },
                { "text": "Divulgar um relatório sobre o progresso e os resultados das novas propostas.", "nextStep": 39 }
            ]
        },
        {
            "text": "Você divulgou um relatório sobre o progresso do projeto e os resultados das novas propostas. O feedback sugere mais ajustes. Qual é o próximo passo?",
            "choices": [
                { "text": "Apoiar a implementação dos novos ajustes sugeridos.", "nextStep": 40 },
                { "text": "Solicitar uma nova análise externa das sugestões e ajustes.", "nextStep": 41 },
                { "text": "Divulgar um relatório final sobre o projeto e os ajustes implementados.", "nextStep": 42 }
            ]
        },
        {
            "text": "Você começou a implementar os novos ajustes. O projeto está se aproximando da conclusão. O que fazer agora?",
            "choices": [
                { "text": "Revisar os resultados finais e preparar o relatório final.", "nextStep": 43 },
                { "text": "Organizar uma reunião para discutir os resultados e próximos passos.", "nextStep": 44 },
                { "text": "Divulgar uma atualização final sobre o progresso do projeto.", "nextStep": 45 }
            ]
        },
        {
            "text": "Você preparou o relatório final. A equipe está satisfeita com o progresso. Qual é o próximo passo?",
            "choices": [
                { "text": "Divulgar o relatório final ao público.", "nextStep": 46 },
                { "text": "Organizar uma apresentação para destacar os resultados do projeto.", "nextStep": 47 },
                { "text": "Solicitar feedback final da equipe e revisar o projeto.", "nextStep": 48 }
            ]
        },
        {
            "text": "Você divulgou o relatório final ao público. O feedback é positivo. O que fazer agora?",
            "choices": [
                { "text": "Planejar uma nova fase para o projeto baseado no feedback.", "nextStep": 49 },
                { "text": "Celebrar o sucesso com a equipe e preparar novos desafios.", "nextStep": 50 },
                { "text": "Encerrar o projeto e documentar todas as lições aprendidas.", "nextStep": 51 }
            ]
        },
        {
            "text": "Você organizou uma apresentação para destacar os resultados do projeto. A apresentação foi bem recebida. Qual é o próximo passo?",
            "choices": [
                { "text": "Divulgar um relatório detalhado sobre a apresentação.", "nextStep": 52 },
                { "text": "Planejar novos projetos baseados nas descobertas do atual.", "nextStep": 53 },
                { "text": "Encerrar o projeto e avaliar a eficácia das estratégias usadas.", "nextStep": 54 }
            ]
        },
        {
            "text": "Você solicitou feedback final da equipe e revisou o projeto. A equipe sugere algumas melhorias. Qual é o próximo passo?",
            "choices": [
                { "text": "Implementar as melhorias sugeridas e preparar um relatório final.", "nextStep": 55 },
                { "text": "Organizar uma reunião para discutir as melhorias propostas.", "nextStep": 56 },
                { "text": "Divulgar um relatório sobre o feedback final e as melhorias implementadas.", "nextStep": 57 }
            ]
        },
        {
            "text": "Você planejou uma nova fase para o projeto baseado no feedback. A equipe está entusiasmada. Qual é o próximo passo?",
            "choices": [
                { "text": "Desenvolver um plano detalhado para a nova fase.", "nextStep": 58 },
                { "text": "Organizar uma reunião para discutir o novo plano.", "nextStep": 59 },
                { "text": "Divulgar uma atualização sobre o planejamento da nova fase.", "nextStep": 60 }
            ]
        },
        {
            "text": "Você celebrou o sucesso com a equipe. Novos desafios estão sendo considerados. O que fazer agora?",
            "choices": [
                { "text": "Planejar novos desafios e metas para a equipe.", "nextStep": 61 },
                { "text": "Revisar o sucesso do projeto e explorar novas oportunidades.", "nextStep": 62 },
                { "text": "Documentar o sucesso e preparar um relatório de encerramento.", "nextStep": 63 }
            ]
        },
        {
            "text": "Você encerrou o projeto e documentou todas as lições aprendidas. A equipe está satisfeita com o resultado. Qual é o próximo passo?",
            "choices": [
                { "text": "Divulgar um relatório final sobre o projeto e lições aprendidas.", "nextStep": 64 },
                { "text": "Planejar uma nova fase de exploração espacial.", "nextStep": 65 },
                { "text": "Celebrar a conclusão do projeto e preparar novos desafios.", "nextStep": 66 }
            ]
        },
        {
            "text": "Você divulgou um relatório final sobre o projeto e lições aprendidas. O feedback é positivo. Qual é o próximo passo?",
            "choices": [
                { "text": "Organizar uma apresentação sobre as lições aprendidas.", "nextStep": 67 },
                { "text": "Planejar novos projetos baseados nas lições aprendidas.", "nextStep": 68 },
                { "text": "Encerrar o ciclo e preparar para novos desafios.", "nextStep": 69 }
            ]
        },
        {
            "text": "Você organizou uma apresentação sobre as lições aprendidas. A apresentação foi bem recebida. O que fazer agora?",
            "choices": [
                { "text": "Planejar a implementação das lições aprendidas em novos projetos.", "nextStep": 70 },
                { "text": "Documentar a apresentação e preparar um relatório detalhado.", "nextStep": 71 },
                { "text": "Explorar novas oportunidades baseadas nas lições aprendidas.", "nextStep": 72 }
            ]
        },
        {
            "text": "Você planejou novos projetos baseados nas lições aprendidas. A equipe está empolgada com as novas oportunidades. Qual é o próximo passo?",
            "choices": [
                { "text": "Desenvolver um cronograma para os novos projetos.", "nextStep": 73 },
                { "text": "Organizar uma reunião para discutir os novos projetos.", "nextStep": 74 },
                { "text": "Divulgar uma atualização sobre os novos projetos e planos.", "nextStep": 75 }
            ]
        },
        {
            "text": "Você documentou a apresentação e preparou um relatório detalhado. O relatório foi bem recebido. O que fazer agora?",
            "choices": [
                { "text": "Divulgar o relatório final ao público.", "nextStep": 76 },
                { "text": "Organizar uma sessão de feedback sobre o relatório.", "nextStep": 77 },
                { "text": "Preparar uma nova fase para a exploração espacial.", "nextStep": 78 }
            ]
        },
        {
            "text": "Você explorou novas oportunidades baseadas nas lições aprendidas. A equipe está entusiasmada. Qual é o próximo passo?",
            "choices": [
                { "text": "Desenvolver um plano para explorar essas novas oportunidades.", "nextStep": 79 },
                { "text": "Organizar uma reunião para discutir as novas oportunidades.", "nextStep": 80 },
                { "text": "Divulgar uma atualização sobre as novas oportunidades e planos.", "nextStep": 81 }
            ]
        },
        {
            "text": "Você desenvolveu um cronograma para os novos projetos. A equipe está pronta para começar. O que fazer agora?",
            "choices": [
                { "text": "Iniciar os novos projetos conforme o cronograma.", "nextStep": 82 },
                { "text": "Organizar uma reunião de início para os novos projetos.", "nextStep": 83 },
                { "text": "Divulgar uma atualização sobre o início dos novos projetos.", "nextStep": 84 }
            ]
        },
        {
            "text": "Você organizou uma reunião para discutir os novos projetos. A equipe está animada. Qual é o próximo passo?",
            "choices": [
                { "text": "Iniciar o planejamento detalhado dos novos projetos.", "nextStep": 85 },
                { "text": "Divulgar uma atualização sobre o planejamento dos novos projetos.", "nextStep": 86 },
                { "text": "Preparar um relatório inicial sobre os novos projetos.", "nextStep": 87 }
            ]
        },
        {
            "text": "Você divulgou uma atualização sobre os novos projetos e planos. O feedback é positivo. Qual é o próximo passo?",
            "choices": [
                { "text": "Iniciar a execução dos novos projetos.", "nextStep": 88 },
                { "text": "Solicitar feedback contínuo durante a execução dos projetos.", "nextStep": 89 },
                { "text": "Divulgar um relatório sobre o progresso dos novos projetos.", "nextStep": 90 }
            ]
        },
        {
            "text": "Você iniciou a execução dos novos projetos. A equipe está avançando bem. O que fazer agora?",
            "choices": [
                { "text": "Monitorar o progresso e ajustar conforme necessário.", "nextStep": 91 },
                { "text": "Solicitar feedback contínuo da equipe.", "nextStep": 92 },
                { "text": "Divulgar uma atualização sobre o progresso dos projetos.", "nextStep": 93 }
            ]
        },
        {
            "text": "Você solicitou feedback contínuo da equipe. O feedback sugere algumas melhorias. Qual é o próximo passo?",
            "choices": [
                { "text": "Implementar as melhorias sugeridas e continuar monitorando.", "nextStep": 94 },
                { "text": "Organizar uma reunião para discutir as melhorias propostas.", "nextStep": 95 },
                { "text": "Divulgar um relatório sobre as melhorias e como foram implementadas.", "nextStep": 96 }
            ]
        },
        {
            "text": "Você começou a implementar as melhorias sugeridas. Os resultados estão sendo monitorados. O que fazer agora?",
            "choices": [
                { "text": "Acompanhar os resultados e ajustar conforme necessário.", "nextStep": 97 },
                { "text": "Solicitar uma análise contínua dos resultados das melhorias.", "nextStep": 98 },
                { "text": "Divulgar um relatório sobre o progresso das melhorias implementadas.", "nextStep": 99 }
            ]
        },
        {
            "text": "Você divulgou um relatório sobre o progresso das melhorias implementadas. O feedback é positivo. O que fazer agora?",
            "choices": [
                { "text": "Apoiar a implementação de novos ajustes sugeridos.", "nextStep": 100 },
                { "text": "Solicitar uma nova análise externa dos ajustes.", "nextStep": 101 },
                { "text": "Divulgar um relatório final sobre as melhorias e ajustes implementados.", "nextStep": 102 }
            ]
        },
        {
            "text": "Você apoiou a implementação dos novos ajustes sugeridos. O projeto está quase concluído. O que fazer agora?",
            "choices": [
                { "text": "Revisar os resultados finais e preparar o relatório final.", "nextStep": 103 },
                { "text": "Organizar uma reunião para discutir os resultados finais e próximos passos.", "nextStep": 104 },
                { "text": "Divulgar uma atualização final sobre o progresso do projeto.", "nextStep": 105 }
            ]
        },
        {
            "text": "Você preparou o relatório final. A equipe está satisfeita com o resultado. Qual é o próximo passo?",
            "choices": [
                { "text": "Divulgar o relatório final ao público.", "nextStep": 106 },
                { "text": "Organizar uma apresentação para destacar os resultados do projeto.", "nextStep": 107 },
                { "text": "Solicitar feedback final da equipe e revisar o projeto.", "nextStep": 108 }
            ]
        },
        {
            "text": "Você divulgou o relatório final ao público. O feedback é positivo. Qual é o próximo passo?",
            "choices": [
                { "text": "Planejar uma nova fase para o projeto baseado no feedback.", "nextStep": 109 },
                { "text": "Celebrar o sucesso com a equipe e preparar novos desafios.", "nextStep": 110 },
                { "text": "Encerrar o projeto e documentar todas as lições aprendidas.", "nextStep": 111 }
            ]
        },
        {
            "text": "Você organizou uma apresentação para destacar os resultados do projeto. A apresentação foi bem recebida. Qual é o próximo passo?",
            "choices": [
                { "text": "Divulgar um relatório detalhado sobre a apresentação.", "nextStep": 112 },
                { "text": "Planejar novos projetos baseados nas descobertas do atual.", "nextStep": 113 },
                { "text": "Encerrar o projeto e avaliar a eficácia das estratégias usadas.", "nextStep": 114 }
            ]
        },
        {
            "text": "Você solicitou feedback final da equipe e revisou o projeto. A equipe sugere algumas melhorias. Qual é o próximo passo?",
            "choices": [
                { "text": "Implementar as melhorias sugeridas e preparar um relatório final.", "nextStep": 115 },
                { "text": "Organizar uma reunião para discutir as melhorias propostas.", "nextStep": 116 },
                { "text": "Divulgar um relatório sobre o feedback final e as melhorias implementadas.", "nextStep": 117 }
            ]
        },
        {
            "text": "Você implementou as melhorias sugeridas. O projeto está concluído com sucesso. O que fazer agora?",
            "choices": [
                { "text": "Documentar as lições aprendidas e preparar um relatório final.", "nextStep": 118 },
                { "text": "Organizar uma celebração para marcar o sucesso do projeto.", "nextStep": 119 },
                { "text": "Planejar novos desafios e projetos baseados no sucesso atual.", "nextStep": 120 }
            ]
        },
        {
            "text": "Você documentou as lições aprendidas e preparou um relatório final. O feedback é positivo. Qual é o próximo passo?",
            "choices": [
                { "text": "Divulgar o relatório final ao público.", "nextStep": 121 },
                { "text": "Organizar uma apresentação sobre as lições aprendidas.", "nextStep": 122 },
                { "text": "Planejar uma nova fase de exploração espacial.", "nextStep": 123 }
            ]
        }
    ];

    let currentStep = 0;

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
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', () => {
        endScreen.style.display = 'none';
        home.style.display = 'block';
        currentStep = 0;
    });
});
