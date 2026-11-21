import { Category, type Service } from '@prisma/client'

export const depoimentos = [
	{
		name: 'Afonso Valentin Schwartz',
		empresa: 'Tigre SA',
		image: '',
		comentario:
			'O treinamento Solução Eficaz de Problemas, da Domus Petra, superou as expectativas. Além de apresentar os métodos e ferramentas apropriadas, trabalhamos na análise de problemas reais de modo a aplicar na prática toda a teoria apresentada.'
	},
	{
		name: 'Marconi Vieira Campos',
		empresa: 'Santa Rita',
		image: '',
		comentario:
			'Além das técnicas, fomos provocados a avaliar nosso atendimento diariamente, no treinamento Excelência no Atendimento ao Cliente. Pudemos perceber a evolução nos profissionais que mereciam atenção e desenvolvimento, e o resultado tem sido ótimo.'
	},
	{
		name: 'Daniel Massarolo',
		empresa: 'Damay Café e Confeitaria',
		image: '',
		comentario:
			'Desde o início era nítido um resultado de excelência, e hoje é muito mais fácil avaliar o quanto nosso time engrandeceu, tivemos um resultado maravilhoso. Obrigado por fazer parte de nossa história, Fabiano. Gratidão de todo o time Damay.'
	}
]

export const blog = [
	{
		id: '01',
		title: 'Fortalecendo a Indústria Brasileira com experiência do Japão.',
		subtitle:
			'Treinamento no Japão, coordenado pela JICA (Japanese International Cooperation Agency) em parceria com o Sindipeças, com objetivo de desenvolver e implantar metodologias para o fortalecimento do setor de autopeças no Brasil.',
		capa_image: '/blog/blog1.jpg',
		assunto: `O setor Industrial Automotivo, historicamente, é vanguarda no desenvolvimento tecnológico e em gestão de processos. As empresas japonesas em particular, têm demonstrado o ápice em eficiência, qualidade e controle de custos nesse setor.

O governo Japonês, por meio da Agência Internacional de Cooperação (JICA), realiza vários programas para auxiliar os países em desenvolvimento a evoluir em tecnologia, cultura e métodos.

Nesse ano tive a oportunidade de participar do programa de fortalecimento do setor de auto peças no Brasil, o qual foi formatado em parceria entre a JICA e o governo Brasileiro, e capitaneado pelo Sindipeças.

Com um mês de imersão, experimentamos a cultura e modelo de vida Japonês, em todas as suas nuances. E a capacitação consistiu de treinamentos, palestras, debates, exercícios práticos e visitas em empresas do setor.
Os temas de maior relevância foram: Kaizen, 5S, Monozukuri, Total Productive Maintenance, Total Quality Managment, Toyota Productive System, Técnicas de Consultoria, Desenvolvimento de Capital Humano, entre outros.

Aparentemente nada de muito novo, pois essas metodologias e programas já são de nosso conhecimento. Mas há razões para funcionarem tão bem no Japão, e nem tanto no Brasil. E esse, certamente, foi um dos grandes aprendizados.

Agora, o desafio é compartilhar o aprendizado nas empresas brasileiras, proporcionando a evolução em qualidade, entrega, eficiência e gestão de custos. E com isso atender o mercado global com mais competitividade.

Em nosso canal compartilharemos uma série de vídeos, apresentando em tópicos os aprendizados e percepções dessa jornada.`,
		autor: 'Fabiano Deagnollo',
		data_post: '2024-01-24'
	},
	{
		id: '02',
		title: 'Eficiência ou Eficácia?',
		subtitle:
			'Eficiência e eficácia são a mesma coisa? Qual a diferença? O que significam e onde se aplicam cada conceito? Nesse artigo essas questões são elucidadas.',
		capa_image: '/blog/blog2.jpg',
		video_youtube: 'https://youtu.be/dnlM5Crn_54',
		assunto: `O que você entende quando lê ou ouve as palavras eficiência e eficácia? Você teria segurança do significado e das diferenças?

Não se sinta mal se você não possui uma resposta clara. Apesar de esses termos estarem cada dia mais presentes e comuns em nosso cotidiano, cada vez mais comum também é a confusão nos seus conceitos e significados. Definir com precisão essas palavras, entendendo sua correta aplicação e o contexto, é fundamental, uma vez que existem controvérsias até mesmo nos dicionários; pois muitos deles apresentam eficácia e eficiência como sinônimos. Chega até ser comum encontrar que eficiência é exatamente igual a eficácia.

A confusão ocorre, em partes, por que vários tradutores e dicionários afirmam que ambas as palavras são originárias do Latim, effectus. Essa afirmação é correta, mas não completa. É necessário considerar que a palavra effectus, posteriormente, deu origem a outras duas palavras, efficax e efficiens, as quais então deram origem à eficácia e eficiência. Assim, o significado da palavra efficax é “alguém ou algo que produz o resultado ou desejo esperado”. Enquanto que efficiens quer dizer “alguma coisa ou alguém que dá ou obtém bons resultados”. A diferença é aparentemente sutil, mas na prática se torna bastante significativa.

Eficácia pode ser exemplificado como um remédio que elimina a doença a que se propõem. Ele é considerado eficaz porque o objetivo foi alcançado. Simples assim. Ou seja, atingir o resultado é o mesmo que ter eficácia. Não se leva em conta, aqui no exemplo, o custo do remédio, o tempo que levou para agir, e os efeitos colaterais que possa ter gerado. Eficácia, portanto, é apenas o resultado, o fim, o alcance do objetivo ou meta.

Já eficiência está no processo, na forma de fazer as coisas. É a capacidade de gerar bons resultados com o menor dispêndio de recursos. Nesse caso, um bom exemplo é a iluminação por meio de lâmpadas. Iluminar um ambiente é o resultado final, logo, essa é a eficácia. Iluminar utilizando uma menor quantidade de energia é a forma como o resultado é obtido, isso é eficiência. Portanto, eficiência é o desempenho do processo.

Resumindo, um remédio é eficaz se traz o resultado esperado, e é eficiente se é rápido, se tem pouco ou nenhum efeito colateral, se tem baixo custo e assim por diante. Uma lâmpada é eficaz se ilumina bem, e é eficiente se consome pouca energia, tem boa durabilidade e gera boa luminosidade.

É evidente que as duas coisas se complementam. Ser eficaz com baixa eficiência custa muito caro e não é sustentável, assim como ser eficiente sem eficácia de nada serve. Mas isso é tema para outro post.

`,
		autor: 'Fabiano Dell Agnolo',
		data_post: '2024-05-20'
	},
	{
		id: '03',
		title: 'Entrevista sobre Eficiência',
		subtitle: 'Eficiência é a palavra de ordem no contexto atual. Aqui você acompanha a entrevista sobre esse tema.',
		capa_image: '/blog/blog3.png',
		video_youtube: 'https://youtu.be/dnlM5Crn_54',
		assunto: `O setor Industrial Automotivo, historicamente, é vanguarda no desenvolvimento tecnológico e em gestão de processos. As empresas japonesas em particular, têm demonstrado o ápice em eficiência, qualidade e controle de custos nesse setor.

O governo Japonês, por meio da Agência Internacional de Cooperação (JICA), realiza vários programas para auxiliar os países em desenvolvimento a evoluir em tecnologia, cultura e métodos.

Nesse ano tive a oportunidade de participar do programa de fortalecimento do setor de auto peças no Brasil, o qual foi formatado em parceria entre a JICA e o governo Brasileiro, e capitaneado pelo Sindipeças.

Com um mês de imersão, experimentamos a cultura e modelo de vida Japonês, em todas as suas nuances. E a capacitação consistiu de treinamentos, palestras, debates, exercícios práticos e visitas em empresas do setor.
Os temas de maior relevância foram: Kaizen, 5S, Monozukuri, Total Productive Maintenance, Total Quality Managment, Toyota Productive System, Técnicas de Consultoria, Desenvolvimento de Capital Humano, entre outros.

Aparentemente nada de muito novo, pois essas metodologias e programas já são de nosso conhecimento. Mas há razões para funcionarem tão bem no Japão, e nem tanto no Brasil. E esse, certamente, foi um dos grandes aprendizados.

Agora, o desafio é compartilhar o aprendizado nas empresas brasileiras, proporcionando a evolução em qualidade, entrega, eficiência e gestão de custos. E com isso atender o mercado global com mais competitividade.

Em nosso canal compartilharemos uma série de vídeos, apresentando em tópicos os aprendizados e percepções dessa jornada.`,
		autor: 'Fabiano Deagnollo',
		data_post: '2024-04-18'
	}
]

export const fallbackServices: (Service & { tags: string[] })[] = [
	// CONSULTORIAS
	{
		id: 'consultoria-lean',
		title: 'Lean Manufacturing & Gestão Operacional',
		subtitle: 'Otimização de processos produtivos e eliminação sistemática de desperdícios.',
		text: 'Nossa consultoria em Lean Manufacturing é fundamentada nas melhores práticas industriais do Japão e do Ocidente. Realizamos o diagnóstico do fluxo de valor (VSM), identificamos gargalos, eliminamos perdas de tempo e movimentação, e reestruturamos o layout produtivo para que sua empresa ganhe agilidade, precisão e reduza custos operacionais de forma perene.',
		category: Category.CONSULTORIAS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['VSM', 'Kaizen', 'Just in Time', 'Redução de Custos']
	},
	{
		id: 'consultoria-gestao',
		title: 'Gestão Estratégica & Governança por Indicadores',
		subtitle: 'Estruturação de métricas, metas claras e alinhamento de lideranças.',
		text: 'Ajudamos empresas a transformarem objetivos estratégicos em rotinas gerenciáveis. Implementamos painéis de controle e gestão à vista, alinhando a diretoria aos líderes operacionais com metodologias de desdobramento de metas e governança de alta performance.',
		category: Category.CONSULTORIAS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['KPIs', 'Gestão à Vista', 'Governança', 'Planejamento']
	},
	{
		id: 'consultoria-qualidade',
		title: 'Seis Sigma & Gestão da Qualidade',
		subtitle: 'Padronização, controle de variabilidade e certificações robustas.',
		text: 'Assessoria especializada para elevar o nível de qualidade dos seus produtos e serviços, reduzindo refugo e retrabalho. Aplicação prática das ferramentas Seis Sigma e conformidade com normas ISO.',
		category: Category.CONSULTORIAS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['Seis Sigma', 'ISO', 'Padronização', 'Zero Defeitos']
	},

	// TREINAMENTOS
	{
		id: 'treinamento-problemas',
		title: 'Solução Eficaz de Problemas (Método A3 / 8D)',
		subtitle: 'Capacitação prática para identificar e eliminar causas raízes.',
		text: 'Treinamento intensivo e prático focado em capacitar gestores e equipes na análise e solução de problemas reais da sua empresa. Os participantes aprendem a utilizar ferramentas como Ishikawa, 5 Porquês, Diagrama de Pareto e o Relatório A3, garantindo que o problema não retorne.',
		category: Category.TREINAMENTOS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['Método A3', '8 Disciplinas', 'Causa Raiz', 'Kaizen']
	},
	{
		id: 'treinamento-5s',
		title: 'Implantação Prática do Programa 5S',
		subtitle: 'Organização, limpeza, padronização e disciplina no ambiente de trabalho.',
		text: 'Muito mais do que arrumação: o 5S é a fundação para a cultura de melhoria contínua. Capacitamos os facilitadores internos e multiplicadores da sua empresa para criar ambientes de trabalho seguros, eficientes e visualmente impecáveis.',
		category: Category.TREINAMENTOS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['5S', 'Disciplina', 'Segurança', 'Organização']
	},
	{
		id: 'treinamento-lideranca',
		title: 'Excelência em Atendimento & Liderança de Equipes',
		subtitle: 'Desenvolvimento comportamental e operacional para líderes e linha de frente.',
		text: 'Voltado para transformar o relacionamento interpessoal, elevar o engajamento das equipes e garantir um padrão de excelência no atendimento aos clientes internos e externos.',
		category: Category.TREINAMENTOS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['Liderança', 'Atendimento', 'Comunicação', 'Equipes']
	},

	// PALESTRAS
	{
		id: 'palestra-eficiencia',
		title: 'Eficiência vs. Eficácia: A Arte de Fazer Acontecer',
		subtitle: 'Como obter resultados extraordinários otimizando tempo e recursos.',
		text: 'Uma palestra provocativa e inspiradora ministrada por Fabiano Dell Agnolo, elucidando as diferenças cruciais entre eficácia (atingir a meta) e eficiência (o melhor uso dos recursos). Ideal para convenções anuais e encontros de liderança.',
		category: Category.PALESTRAS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['Alta Performance', 'Produtividade', 'Resultados', 'Gestão']
	},
	{
		id: 'palestra-japao',
		title: 'Lições do Japão: A Cultura de Excelência e Monozukuri',
		subtitle: 'O que a indústria e as empresas brasileiras podem aprender com o modelo japonês.',
		text: 'Apresentação rica e dinâmica baseada na imersão de Fabiano Dell Agnolo no Japão através da JICA e Sindipeças, compartilhando os segredos por trás da disciplina, qualidade total e melhoria contínua japonesa.',
		category: Category.PALESTRAS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['Japão', 'Monozukuri', 'JICA', 'Qualidade Total']
	},
	{
		id: 'palestra-mudanca',
		title: 'Liderança Consciente & Gestão da Mudança',
		subtitle: 'As pessoas como verdadeiros agentes de transformação nas organizações.',
		text: 'Com foco nas pessoas como a grande força transformadora de qualquer organização, esta palestra estimula o autodesenvolvimento, a inovação e o alinhamento de valores com a missão corporativa.',
		category: Category.PALESTRAS,
		image: '/services/bg-services.jpeg',
		userId: '66a000000000000000000001',
		createdAt: new Date('2024-01-01'),
		updatedAt: new Date('2024-01-01'),
		tags: ['Liderança', 'Cultura', 'Inovação', 'Propósito']
	}
]
