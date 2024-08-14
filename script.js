document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');
    const optionsContainer = document.getElementById('options-container');

    const story = [
        // Passo 1
        {
            text: "Você é um gestor ambiental responsável por proteger os ecossistemas marinhos em uma região rica em petróleo. Recentemente, uma grande empresa de petróleo obteve licença para explorar e extrair petróleo do fundo do mar. A empresa promete altos lucros e benefícios econômicos para a região, mas há um custo significativo para o meio ambiente. Há preocupações crescentes sobre o impacto negativo que essa extração pode ter sobre os corais, a fauna marinha e a saúde dos oceanos. Como você vai agir para equilibrar os interesses econômicos com a preservação ambiental?",
            choices: [
                { text: "Propor a implementação de tecnologias de extração mais seguras e realizar estudos de impacto ambiental detalhados.", nextStep: 1 },
                { text: "Negociar com a empresa para reduzir a área de extração e implementar medidas de mitigação para proteger os ecossistemas marinhos.", nextStep: 2 },
                { text: "Contrariar a extração e pressionar por uma alternativa sustentável que não coloque em risco a vida marinha.", nextStep: 3 }
            ]
        },
        // Passo 2
        {
            text: "Você propôs a implementação de tecnologias de extração mais seguras. Embora a empresa tenha concordado com algumas das medidas, há um risco constante de acidentes e danos ao meio ambiente. Qual é o próximo passo?",
            choices: [
                { text: "Aumentar a vigilância e monitoramento ambiental para garantir que as medidas de segurança sejam eficazes.", nextStep: 4 },
                { text: "Exigir que a empresa forneça relatórios regulares sobre os impactos ambientais e se comprometa a restaurar áreas danificadas.", nextStep: 5 },
                { text: "Buscar alternativas de fontes de energia renováveis para reduzir a dependência do petróleo e promover práticas mais sustentáveis.", nextStep: 6 }
            ]
        },
        // Passo 3
        {
            text: "Você negociou para reduzir a área de extração e implementar medidas de mitigação. A empresa concordou, mas ainda há críticas e desafios sobre a eficácia das medidas. O que fazer a seguir?",
            choices: [
                { text: "Focar em campanhas de conscientização e educação para a comunidade sobre a importância da preservação marinha e as medidas tomadas.", nextStep: 7 },
                { text: "Reforçar as regulamentações e garantir que a empresa cumpra todas as exigências ambientais estabelecidas.", nextStep: 8 },
                { text: "Desenvolver um plano de contingência para lidar com possíveis acidentes e danos ambientais.", nextStep: 9 }
            ]
        },
        // Passo 4
        {
            text: "Você aumentou a vigilância e monitoramento ambiental. Há novas descobertas sobre riscos ambientais. O que fazer a seguir?",
            choices: [
                { text: "Implementar medidas corretivas baseadas nas novas descobertas.", nextStep: 13 },
                { text: "Organizar uma reunião com a empresa para discutir as novas descobertas.", nextStep: 14 },
                { text: "Divulgar as novas descobertas para o público e solicitar apoio para novas medidas.", nextStep: 15 }
            ]
        },
        // Passo 5
        {
            text: "Você exigiu relatórios regulares sobre os impactos ambientais. A empresa forneceu dados, mas há preocupações sobre a precisão. O que fazer agora?",
            choices: [
                { text: "Contratar uma terceira parte para auditar os relatórios.", nextStep: 16 },
                { text: "Revisar os dados e buscar esclarecimentos adicionais da empresa.", nextStep: 17 },
                { text: "Criar um comitê de monitoramento para revisar os relatórios periodicamente.", nextStep: 18 }
            ]
        },
        // Passo 6
        {
            text: "Você começou a buscar alternativas de fontes de energia renováveis. Qual é o próximo passo para avançar nesse caminho?",
            choices: [
                { text: "Investigar e implementar projetos piloto de energias renováveis.", nextStep: 19 },
                { text: "Buscar financiamento para grandes projetos de energia renovável.", nextStep: 20 },
                { text: "Parcerias com empresas de tecnologia para desenvolver soluções inovadoras.", nextStep: 21 }
            ]
        },
        // Passo 7
        {
            text: "Você iniciou campanhas de conscientização. A comunidade está mais informada, mas agora você precisa engajar mais pessoas. Como proceder?",
            choices: [
                { text: "Organizar eventos comunitários e workshops.", nextStep: 22 },
                { text: "Criar uma plataforma online para interação e informações.", nextStep: 23 },
                { text: "Implementar um sistema de voluntariado para envolver mais pessoas.", nextStep: 24 }
            ]
        },
        // Passo 8
        {
            text: "Você reforçou as regulamentações. A empresa está seguindo as novas regras, mas ainda há desafios. O que fazer a seguir?",
            choices: [
                { text: "Realizar auditorias regulares para garantir o cumprimento.", nextStep: 25 },
                { text: "Atualizar as regulamentações com base em novas descobertas.", nextStep: 26 },
                { text: "Propor novas regulamentações para áreas não cobertas.", nextStep: 27 }
            ]
        },
        // Passo 9
        {
            text: "Você desenvolveu um plano de contingência. Agora, precisa testar a eficácia do plano. Qual é o próximo passo?",
            choices: [
                { text: "Realizar simulações e exercícios de resposta a emergências.", nextStep: 28 },
                { text: "Avaliar a eficácia do plano com base em testes recentes.", nextStep: 29 },
                { text: "Treinar equipes para implementar o plano em situações reais.", nextStep: 30 }
            ]
        },
        // Passo 10
        {
            text: "Você explorou parcerias para apoio e financiamento. Obteve alguns compromissos, mas precisa solidificar o suporte. O que fazer agora?",
            choices: [
                { text: "Formalizar acordos e contratos com parceiros.", nextStep: 31 },
                { text: "Lançar uma campanha para promover o projeto e atrair mais apoio.", nextStep: 32 },
                { text: "Desenvolver um plano de comunicação para manter os parceiros engajados.", nextStep: 33 }
            ]
        },
        // Passo 11
        {
            text: "Você propôs um plano gradual para a transição. Agora, precisa garantir a implementação. Como proceder?",
            choices: [
                { text: "Desenvolver um cronograma detalhado para a implementação.", nextStep: 34 },
                { text: "Estabelecer marcos e avaliar o progresso regularmente.", nextStep: 35 },
                { text: "Buscar feedback das partes interessadas para ajustar o plano.", nextStep: 36 }
            ]
        },
        // Passo 12
        {
            text: "Você focou em políticas públicas. Está pronto para promover mudanças legislativas. Qual é o próximo passo?",
            choices: [
                { text: "Engajar com legisladores e apresentar propostas.", nextStep: 37 },
                { text: "Organizar uma campanha pública para apoiar as propostas.", nextStep: 38 },
                { text: "Fazer lobby para incluir as propostas na agenda política.", nextStep: 39 }
            ]
        },
        // Passo 13
        {
            text: "Você implementou medidas corretivas. As medidas estão mostrando resultados positivos, mas você precisa monitorar a eficácia. O que fazer agora?",
            choices: [
                { text: "Aumentar a frequência das avaliações de impacto.", nextStep: 40 },
                { text: "Continuar a ajustar as medidas com base nos resultados.", nextStep: 41 },
                { text: "Compartilhar os resultados com a comunidade para manter a transparência.", nextStep: 42 }
            ]
        },
        // Passo 14
        {
            text: "Você organizou uma reunião com a empresa. A empresa está disposta a melhorar, mas precisa de mais orientações. O que fazer agora?",
            choices: [
                { text: "Desenvolver um plano de ação colaborativo com a empresa.", nextStep: 43 },
                { text: "Estabelecer um comitê de supervisão para acompanhar os progressos.", nextStep: 44 },
                { text: "Solicitar apoio adicional de organizações ambientais para garantir melhorias.", nextStep: 45 }
            ]
        },
        // Passo 15
        {
            text: "Você divulgou as descobertas para o público. A pressão pública está aumentando. O que fazer a seguir?",
            choices: [
                { text: "Utilizar a pressão pública para forçar mudanças mais significativas.", nextStep: 46 },
                { text: "Organizar uma conferência para discutir as descobertas e planos futuros.", nextStep: 47 },
                { text: "Focar em parcerias com ONGs para ampliar o impacto.", nextStep: 48 }
            ]
        },
        // Passo 16
        {
            text: "Você contratou uma terceira parte para auditar os relatórios. A auditoria revela novas preocupações. O que fazer agora?",
            choices: [
                { text: "Trabalhar com a empresa para corrigir as novas preocupações.", nextStep: 49 },
                { text: "Atualizar o plano de monitoramento com base nas novas descobertas.", nextStep: 50 },
                { text: "Reavaliar o contrato com a empresa e exigir novos compromissos.", nextStep: 51 }
            ]
        },
        // Passo 17
        {
            text: "Você revisou os dados e buscou esclarecimentos. A empresa forneceu mais informações, mas ainda há dúvidas. Qual é o próximo passo?",
            choices: [
                { text: "Solicitar uma nova auditoria para verificar as informações adicionais.", nextStep: 52 },
                { text: "Estabelecer um grupo de trabalho para investigar as dúvidas restantes.", nextStep: 53 },
                { text: "Publicar um relatório com as descobertas e solicitar feedback do público.", nextStep: 54 }
            ]
        },
        // Passo 18
        {
            text: "Você criou um comitê de monitoramento. O comitê encontrou novas áreas de preocupação. O que fazer agora?",
            choices: [
                { text: "Implementar medidas para abordar as novas áreas de preocupação.", nextStep: 55 },
                { text: "Atualizar o plano de monitoramento com novas diretrizes.", nextStep: 56 },
                { text: "Comunicar as novas descobertas e medidas à comunidade.", nextStep: 57 }
            ]
        },
        // Passo 19
        {
            text: "Você investigou e implementou projetos piloto de energias renováveis. Os resultados são promissores. O que fazer a seguir?",
            choices: [
                { text: "Expandir os projetos piloto para uma escala maior.", nextStep: 58 },
                { text: "Buscar financiamento adicional para projetos maiores.", nextStep: 59 },
                { text: "Desenvolver um plano para integrar as energias renováveis em grande escala.", nextStep: 60 }
            ]
        },
        // Passo 20
        {
            text: "Você buscou financiamento para grandes projetos de energia renovável. O financiamento foi aprovado. Qual é o próximo passo?",
            choices: [
                { text: "Iniciar a implementação dos projetos com o financiamento obtido.", nextStep: 61 },
                { text: "Desenvolver um cronograma de execução para os projetos financiados.", nextStep: 62 },
                { text: "Estabelecer parcerias com empresas para garantir a execução bem-sucedida.", nextStep: 63 }
            ]
        },
        // Passo 21
        {
            text: "Você fez parcerias com empresas de tecnologia. O desenvolvimento de soluções está em andamento. O que fazer agora?",
            choices: [
                { text: "Avaliar os resultados das soluções em desenvolvimento.", nextStep: 64 },
                { text: "Ajustar as soluções com base no feedback dos testes.", nextStep: 65 },
                { text: "Preparar um plano para implementar as soluções desenvolvidas.", nextStep: 66 }
            ]
        },
        // Passo 22
        {
            text: "Você organizou eventos comunitários e workshops. A participação foi positiva, mas precisa manter o engajamento. O que fazer agora?",
            choices: [
                { text: "Planejar eventos regulares e atualizações contínuas.", nextStep: 67 },
                { text: "Criar uma newsletter para manter a comunidade informada.", nextStep: 68 },
                { text: "Estabelecer grupos de discussão para engajar a comunidade.", nextStep: 69 }
            ]
        },
        // Passo 23
        {
            text: "Você criou uma plataforma online para interação. A plataforma está atraindo usuários, mas precisa de mais funcionalidades. O que fazer agora?",
            choices: [
                { text: "Adicionar mais recursos e ferramentas de interação.", nextStep: 70 },
                { text: "Promover a plataforma para aumentar a adesão.", nextStep: 71 },
                { text: "Obter feedback dos usuários para melhorar a plataforma.", nextStep: 72 }
            ]
        },
        // Passo 24
        {
            text: "Você implementou um sistema de voluntariado. Está recebendo uma boa resposta, mas precisa coordenar melhor os voluntários. O que fazer agora?",
            choices: [
                { text: "Desenvolver um sistema de gerenciamento para voluntários.", nextStep: 73 },
                { text: "Organizar treinamentos para os voluntários.", nextStep: 74 },
                { text: "Estabelecer um canal de comunicação para coordenar atividades.", nextStep: 75 }
            ]
        },
        // Passo 25
        {
            text: "Você realizou auditorias regulares. Encontrou algumas inconformidades. O que fazer agora?",
            choices: [
                { text: "Trabalhar com a empresa para corrigir as inconformidades.", nextStep: 76 },
                { text: "Reforçar as regulamentações e fiscalizações.", nextStep: 77 },
                { text: "Divulgar as inconformidades para aumentar a transparência.", nextStep: 78 }
            ]
        },
        // Passo 26
        {
            text: "Você atualizou as regulamentações. Agora, precisa garantir que todas as partes envolvidas se adaptem. O que fazer a seguir?",
            choices: [
                { text: "Organizar treinamentos sobre as novas regulamentações.", nextStep: 79 },
                { text: "Monitorar a adaptação das partes envolvidas.", nextStep: 80 },
                { text: "Estabelecer um sistema de feedback para ajustar as regulamentações conforme necessário.", nextStep: 81 }
            ]
        },
        // Passo 27
        {
            text: "Você propôs novas regulamentações. As propostas estão sendo discutidas. Como proceder para garantir a aceitação?",
            choices: [
                { text: "Engajar com stakeholders para obter apoio.", nextStep: 82 },
                { text: "Participar de audiências públicas para apresentar as propostas.", nextStep: 83 },
                { text: "Ajustar as propostas com base no feedback recebido.", nextStep: 84 }
            ]
        },
        // Passo 28
        {
            text: "Você realizou simulações e exercícios de resposta. O plano está funcionando bem. Qual é o próximo passo?",
            choices: [
                { text: "Documentar os resultados das simulações e ajustar o plano conforme necessário.", nextStep: 85 },
                { text: "Preparar um manual de procedimentos para situações reais.", nextStep: 86 },
                { text: "Treinar mais equipes para garantir uma resposta eficiente.", nextStep: 87 }
            ]
        },
        // Passo 29
        {
            text: "Você avaliou a eficácia do plano com base nos testes. Precisa fazer ajustes. O que fazer agora?",
            choices: [
                { text: "Atualizar o plano com base na avaliação.", nextStep: 88 },
                { text: "Implementar as mudanças e testar novamente.", nextStep: 89 },
                { text: "Revisar o plano com a equipe e partes interessadas.", nextStep: 90 }
            ]
        },
        // Passo 30
        {
            text: "Você treinou equipes para implementar o plano. As equipes estão preparadas, mas precisa garantir a coordenação. O que fazer agora?",
            choices: [
                { text: "Estabelecer um sistema de comunicação entre as equipes.", nextStep: 91 },
                { text: "Realizar exercícios conjuntos para garantir a coordenação.", nextStep: 92 },
                { text: "Desenvolver um plano de suporte contínuo para as equipes.", nextStep: 93 }
            ]
        },
        // Passo 31
        {
            text: "Você formalizou acordos com parceiros. Precisa garantir que os acordos sejam seguidos. O que fazer agora?",
            choices: [
                { text: "Estabelecer um sistema de monitoramento dos acordos.", nextStep: 94 },
                { text: "Realizar reuniões regulares com os parceiros para revisar os acordos.", nextStep: 95 },
                { text: "Revisar e atualizar os acordos conforme necessário.", nextStep: 96 }
            ]
        },
        // Passo 32
        {
            text: "Você lançou uma campanha para promover o projeto. A campanha foi bem-sucedida, mas precisa manter o interesse. O que fazer agora?",
            choices: [
                { text: "Planejar campanhas de acompanhamento.", nextStep: 97 },
                { text: "Oferecer atualizações regulares sobre o progresso do projeto.", nextStep: 98 },
                { text: "Criar eventos para manter o engajamento da comunidade.", nextStep: 99 }
            ]
        },
        // Passo 33
        {
            text: "Você desenvolveu um plano de comunicação. A comunicação está fluindo bem, mas precisa engajar mais stakeholders. O que fazer agora?",
            choices: [
                { text: "Organizar reuniões e eventos para engajar mais stakeholders.", nextStep: 100 },
                { text: "Utilizar canais de comunicação adicionais para alcançar um público maior.", nextStep: 101 },
                { text: "Buscar feedback dos stakeholders para melhorar a comunicação.", nextStep: 102 }
            ]
        },
        // Passo 34
        {
            text: "Você desenvolveu um cronograma detalhado. A implementação está em andamento. O que fazer agora?",
            choices: [
                { text: "Monitorar o progresso da implementação de acordo com o cronograma.", nextStep: 103 },
                { text: "Ajustar o cronograma conforme necessário para lidar com desafios.", nextStep: 104 },
                { text: "Realizar avaliações regulares para garantir o sucesso da implementação.", nextStep: 105 }
            ]
        },
        // Passo 35
        {
            text: "Você estabeleceu marcos e está avaliando o progresso. Os marcos estão sendo cumpridos, mas há desafios. O que fazer agora?",
            choices: [
                { text: "Resolver os desafios e ajustar o plano conforme necessário.", nextStep: 106 },
                { text: "Focar em marcos críticos para garantir o sucesso do projeto.", nextStep: 107 },
                { text: "Comunicar os resultados dos marcos aos stakeholders.", nextStep: 108 }
            ]
        },
        // Passo 36
        {
            text: "Você buscou feedback das partes interessadas. O feedback é misto. Qual é o próximo passo?",
            choices: [
                { text: "Revisar o plano com base no feedback recebido.", nextStep: 109 },
                { text: "Implementar mudanças e monitorar os resultados.", nextStep: 110 },
                { text: "Organizar sessões de feedback adicionais para obter mais informações.", nextStep: 111 }
            ]
        },
        // Passo 37
        {
            text: "Você engajou com legisladores. A proposta está sendo considerada, mas pode enfrentar oposição. Como proceder?",
            choices: [
                { text: "Preparar uma defesa sólida para a proposta.", nextStep: 112 },
                { text: "Engajar com o público para obter apoio.", nextStep: 113 },
                { text: "Ajustar a proposta com base nas preocupações levantadas.", nextStep: 114 }
            ]
        },
        // Passo 38
        {
            text: "Você organizou uma campanha pública. A campanha gerou apoio, mas precisa manter o impulso. O que fazer agora?",
            choices: [
                { text: "Lançar novas iniciativas para continuar o apoio.", nextStep: 115 },
                { text: "Focar em estratégias para engajar novos apoiadores.", nextStep: 116 },
                { text: "Atualizar o público sobre o progresso da campanha.", nextStep: 117 }
            ]
        },
        // Passo 39
        {
            text: "Você fez lobby para incluir as propostas. O lobby foi bem-sucedido, mas agora precisa garantir a implementação. Qual é o próximo passo?",
            choices: [
                { text: "Acompanhar a implementação das propostas.", nextStep: 118 },
                { text: "Engajar com os responsáveis pela implementação para garantir sucesso.", nextStep: 119 },
                { text: "Monitorar e ajustar as propostas conforme necessário.", nextStep: 120 }
            ]
        },
        // Passo 40
        {
            text: "Você aumentou a frequência das avaliações. As medidas estão mostrando melhorias. O que fazer agora?",
            choices: [
                { text: "Continuar o monitoramento e ajustar conforme necessário.", nextStep: 121 },
                { text: "Comunicar as melhorias à comunidade e partes interessadas.", nextStep: 122 },
                { text: "Revisar o plano para garantir a sustentabilidade das melhorias.", nextStep: 123 }
            ]
        },
        // Passo 41
        {
            text: "Você ajustou as medidas com base nos resultados. As melhorias estão se consolidando. Qual é o próximo passo?",
            choices: [
                { text: "Estabelecer um plano para manutenção das melhorias.", nextStep: 124 },
                { text: "Compartilhar os resultados com a comunidade e partes interessadas.", nextStep: 125 },
                { text: "Monitorar o impacto a longo prazo das medidas ajustadas.", nextStep: 126 }
            ]
        },
        // Passo 42
        {
            text: "Você compartilhou os resultados com a comunidade. A transparência está sendo bem recebida. O que fazer agora?",
            choices: [
                { text: "Focar em manter a comunicação e a transparência contínuas.", nextStep: 127 },
                { text: "Desenvolver novos projetos baseados no feedback da comunidade.", nextStep: 128 },
                { text: "Monitorar a eficácia das novas iniciativas.", nextStep: 129 }
            ]
        },
        // Passo 43
        {
            text: "Você desenvolveu um plano de ação colaborativo. A empresa está colaborando, mas há necessidade de mais coordenação. O que fazer agora?",
            choices: [
                { text: "Estabelecer uma equipe de coordenação para o plano.", nextStep: 130 },
                { text: "Realizar reuniões regulares para garantir a colaboração contínua.", nextStep: 131 },
                { text: "Revisar o plano de ação com base nas interações contínuas.", nextStep: 132 }
            ]
        },
        // Passo 44
        {
            text: "Você estabeleceu um comitê de supervisão. O comitê encontrou algumas questões. O que fazer agora?",
            choices: [
                { text: "Abordar as questões com a empresa e ajustar o plano.", nextStep: 133 },
                { text: "Aumentar a supervisão e monitoramento das atividades.", nextStep: 134 },
                { text: "Revisar e atualizar o comitê conforme necessário.", nextStep: 135 }
            ]
        },
        // Passo 45
        {
            text: "Você solicitou apoio adicional de organizações ambientais. O apoio está ajudando, mas a situação ainda é desafiadora. O que fazer agora?",
            choices: [
                { text: "Consolidar o apoio e desenvolver estratégias adicionais.", nextStep: 136 },
                { text: "Buscar mais parcerias para fortalecer o impacto.", nextStep: 137 },
                { text: "Continuar a monitorar e ajustar as estratégias com base no apoio recebido.", nextStep: 138 }
            ]
        },
        // Passos adicionais a partir do 46 em diante devem seguir a mesma estrutura de desenvolvimento.
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
        if (nextStep >= story.length) {
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
