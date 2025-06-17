import React, { useState } from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Search, Building, Heart, Shield, BarChart3, Lightbulb, Star, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Servico {
  id: string;
  categoria: 'RH' | 'Gestao';
  titulo: string;
  descricao: string;
  detalhes: string[];
  beneficios: string[];
  icon: React.ComponentType<any>;
  cor: string;
  preco?: string;
  duracao?: string;
}

const Servicos: React.FC = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState<'Todos' | 'RH' | 'Gestao'>('Todos');
  const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(null);

  const servicos: Servico[] = [
    // RECURSOS HUMANOS
    {
      id: 'recrutamento-selecao',
      categoria: 'RH',
      titulo: 'Recrutamento & Seleção',
      descricao: 'Processos seletivos personalizados com foco em resultados e qualidade.',
      detalhes: [
        'Processos seletivos personalizados',
        'Hunting para cargos estratégicos',
        'Banco de talentos com triagem técnica e comportamental',
        'Entrevistas estruturadas por competências',
        'Testes psicológicos e técnicos',
        'Verificação de referências profissionais'
      ],
      beneficios: [
        'Redução do tempo de contratação',
        'Maior assertividade na seleção',
        'Diminuição do turnover',
        'Melhoria da qualidade dos candidatos'
      ],
      icon: Users,
      cor: 'from-blue-600 to-blue-700',
      duracao: '15-30 dias'
    },
    {
      id: 'rh-estrategico',
      categoria: 'RH',
      titulo: 'RH Estratégico',
      descricao: 'Estruturação e desenvolvimento estratégico da área de recursos humanos.',
      detalhes: [
        'Diagnóstico e estruturação da área de RH',
        'Gestão por competências',
        'Implantação de cultura e clima organizacional',
        'Políticas e procedimentos de RH',
        'Indicadores e métricas de RH',
        'Alinhamento estratégico com objetivos empresariais'
      ],
      beneficios: [
        'RH alinhado aos objetivos estratégicos',
        'Processos padronizados e eficientes',
        'Cultura organizacional fortalecida',
        'Maior engajamento dos colaboradores'
      ],
      icon: Target,
      cor: 'from-red-600 to-red-700',
      duracao: '60-90 dias'
    },
    {
      id: 'bpo-rh',
      categoria: 'RH',
      titulo: 'BPO de RH',
      descricao: 'Terceirização completa ou parcial dos processos de recursos humanos.',
      detalhes: [
        'Terceirização completa ou parcial',
        'Administração de folha, benefícios, admissões e desligamentos',
        'Relatórios mensais com indicadores estratégicos',
        'Gestão de ponto e frequência',
        'Controle de férias e licenças',
        'Suporte jurídico trabalhista'
      ],
      beneficios: [
        'Redução de custos operacionais',
        'Foco no core business',
        'Compliance trabalhista garantido',
        'Relatórios gerenciais detalhados'
      ],
      icon: Shield,
      cor: 'from-green-600 to-green-700',
      duracao: 'Contrato mensal'
    },
    {
      id: 'plano-cargos-salarios',
      categoria: 'RH',
      titulo: 'Plano de Cargos, Salários & Carreira',
      descricao: 'Estruturação de cargos e desenvolvimento de planos de carreira.',
      detalhes: [
        'Estruturação ou revisão de cargos e funções',
        'Pesquisa salarial de mercado',
        'Plano de crescimento interno e meritocracia',
        'Descrição e análise de cargos',
        'Matriz de competências por cargo',
        'Trilhas de desenvolvimento profissional'
      ],
      beneficios: [
        'Equidade salarial interna',
        'Competitividade no mercado',
        'Retenção de talentos',
        'Clareza nas perspectivas de carreira'
      ],
      icon: TrendingUp,
      cor: 'from-purple-600 to-purple-700',
      duracao: '45-60 dias'
    },
    {
      id: 'gestao-desempenho',
      categoria: 'RH',
      titulo: 'Gestão de Desempenho',
      descricao: 'Sistema completo de avaliação e desenvolvimento de desempenho.',
      detalhes: [
        'Avaliações 90º, 180º e 360º',
        'Feedback estruturado e PDI',
        'Metas e indicadores individuais',
        'Calibração de avaliações',
        'Planos de desenvolvimento individual',
        'Acompanhamento contínuo de performance'
      ],
      beneficios: [
        'Melhoria contínua do desempenho',
        'Desenvolvimento de competências',
        'Feedback estruturado e construtivo',
        'Alinhamento de expectativas'
      ],
      icon: Award,
      cor: 'from-orange-600 to-orange-700',
      duracao: 'Ciclo anual'
    },
    {
      id: 'clima-engajamento',
      categoria: 'RH',
      titulo: 'Clima Organizacional & Engajamento',
      descricao: 'Pesquisas e ações para melhoria do clima e engajamento.',
      detalhes: [
        'Aplicação de pesquisas internas',
        'Ações práticas de melhoria de cultura e retenção',
        'Análise de indicadores de clima',
        'Planos de ação específicos',
        'Programas de reconhecimento',
        'Iniciativas de bem-estar'
      ],
      beneficios: [
        'Maior satisfação dos colaboradores',
        'Redução do turnover',
        'Ambiente de trabalho positivo',
        'Aumento da produtividade'
      ],
      icon: Heart,
      cor: 'from-pink-600 to-pink-700',
      duracao: '30-45 dias'
    },

    // GESTÃO EMPRESARIAL
    {
      id: 'planejamento-estrategico',
      categoria: 'Gestao',
      titulo: 'Planejamento Estratégico',
      descricao: 'Definição e implementação de estratégias empresariais.',
      detalhes: [
        'Definição de missão, visão, valores e objetivos',
        'Acompanhamento e revisão de metas',
        'Análise SWOT e cenários',
        'Planos de ação estratégicos',
        'Indicadores de performance (KPIs)',
        'Reuniões de acompanhamento estratégico'
      ],
      beneficios: [
        'Direcionamento estratégico claro',
        'Alinhamento organizacional',
        'Tomada de decisão assertiva',
        'Crescimento sustentável'
      ],
      icon: Target,
      cor: 'from-indigo-600 to-indigo-700',
      duracao: '60-90 dias'
    },
    {
      id: 'mapeamento-processos',
      categoria: 'Gestao',
      titulo: 'Mapeamento & Otimização de Processos',
      descricao: 'Análise e melhoria de processos organizacionais.',
      detalhes: [
        'Diagnóstico e redesenho de processos',
        'Implantação de fluxogramas e melhoria contínua',
        'Identificação de gargalos e desperdícios',
        'Padronização de procedimentos',
        'Automação de processos',
        'Treinamento em novos processos'
      ],
      beneficios: [
        'Maior eficiência operacional',
        'Redução de custos',
        'Padronização de atividades',
        'Melhoria da qualidade'
      ],
      icon: BarChart3,
      cor: 'from-teal-600 to-teal-700',
      duracao: '45-75 dias'
    },
    {
      id: 'gestao-financeira',
      categoria: 'Gestao',
      titulo: 'Gestão Financeira & Indicadores',
      descricao: 'Estruturação financeira e criação de indicadores de performance.',
      detalhes: [
        'Estruturação financeira e criação de KPIs',
        'Acompanhamento de desempenho empresarial',
        'Controles financeiros e orçamentários',
        'Análise de viabilidade de projetos',
        'Dashboards gerenciais',
        'Relatórios de performance'
      ],
      beneficios: [
        'Controle financeiro efetivo',
        'Tomada de decisão baseada em dados',
        'Previsibilidade financeira',
        'Otimização de recursos'
      ],
      icon: TrendingUp,
      cor: 'from-emerald-600 to-emerald-700',
      duracao: '30-60 dias'
    },
    {
      id: 'governanca-compliance',
      categoria: 'Gestao',
      titulo: 'Governança & Compliance',
      descricao: 'Implementação de políticas e conformidade legal.',
      detalhes: [
        'Políticas internas e código de conduta',
        'Conformidade legal e boas práticas de gestão',
        'Estrutura de governança corporativa',
        'Gestão de riscos',
        'Auditoria interna',
        'Programas de compliance'
      ],
      beneficios: [
        'Redução de riscos legais',
        'Transparência organizacional',
        'Credibilidade no mercado',
        'Conformidade regulatória'
      ],
      icon: Shield,
      cor: 'from-gray-600 to-gray-700',
      duracao: '60-120 dias'
    },
    {
      id: 'mentoria-executiva',
      categoria: 'Gestao',
      titulo: 'Mentoria & Aconselhamento Executivo',
      descricao: 'Suporte estratégico personalizado para líderes e equipes.',
      detalhes: [
        'Suporte estratégico a líderes e equipes',
        'Coaching executivo personalizado',
        'Desenvolvimento de lideranças',
        'Resolução de conflitos',
        'Tomada de decisões estratégicas',
        'Acompanhamento contínuo'
      ],
      beneficios: [
        'Desenvolvimento de lideranças',
        'Melhoria na tomada de decisões',
        'Resolução eficaz de problemas',
        'Crescimento profissional acelerado'
      ],
      icon: Lightbulb,
      cor: 'from-yellow-600 to-yellow-700',
      duracao: 'Sessões mensais'
    }
  ];

  const servicosFiltrados = categoriaAtiva === 'Todos' 
    ? servicos 
    : servicos.filter(servico => servico.categoria === categoriaAtiva);

  const palestrasECursos = [
    {
      titulo: 'Palestras Corporativas',
      temas: ['Liderança', 'Cultura Organizacional', 'Protagonismo', 'Diversidade'],
      descricao: 'Palestras inspiradoras e educativas para eventos corporativos'
    },
    {
      titulo: 'Cursos Livres',
      temas: ['Capacitações técnicas', 'Desenvolvimento comportamental', 'Presencial ou online'],
      descricao: 'Cursos personalizados sob demanda para sua equipe'
    },
    {
      titulo: 'Desenvolvimento de Carreira',
      temas: ['Orientação profissional', 'Planejamento de carreira', 'Recolocação', 'Entrevistas simuladas'],
      descricao: 'Suporte completo para desenvolvimento profissional'
    }
  ];

  if (servicoSelecionado) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Botão Voltar */}
          <button
            onClick={() => setServicoSelecionado(null)}
            className="mb-8 flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-200"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
            <span>Voltar aos serviços</span>
          </button>

          {/* Detalhes do Serviço */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className={`bg-gradient-to-r ${servicoSelecionado.cor} text-white p-8 md:p-12`}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <servicoSelecionado.icon className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{servicoSelecionado.titulo}</h1>
                  <p className="text-xl opacity-90 mt-2">{servicoSelecionado.descricao}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <Clock className="h-6 w-6 mb-2" />
                  <div className="text-sm opacity-80">Duração</div>
                  <div className="font-semibold">{servicoSelecionado.duracao}</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <Users className="h-6 w-6 mb-2" />
                  <div className="text-sm opacity-80">Categoria</div>
                  <div className="font-semibold">{servicoSelecionado.categoria === 'RH' ? 'Recursos Humanos' : 'Gestão Empresarial'}</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <Star className="h-6 w-6 mb-2" />
                  <div className="text-sm opacity-80">Garantia</div>
                  <div className="font-semibold">Satisfação 100%</div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* O que está incluído */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">O que está incluído</h2>
                  <ul className="space-y-4">
                    {servicoSelecionado.detalhes.map((detalhe, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefícios */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefícios para sua empresa</h2>
                  <ul className="space-y-4">
                    {servicoSelecionado.beneficios.map((beneficio, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1 flex-shrink-0">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">{beneficio}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Interessado neste serviço?
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Solicite uma proposta personalizada e descubra como podemos ajudar sua empresa.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contato"
                      className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                    >
                      <span>Solicitar Proposta</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                    >
                      <Phone className="h-5 w-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em Recursos Humanos e Gestão Empresarial 
            para transformar sua organização
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['Todos', 'RH', 'Gestao'] as const).map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                categoriaAtiva === categoria
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {categoria === 'Todos' ? 'Todos os Serviços' : 
               categoria === 'RH' ? 'Recursos Humanos' : 'Gestão Empresarial'}
            </button>
          ))}
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicosFiltrados.map((servico) => (
            <div
              key={servico.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
              onClick={() => setServicoSelecionado(servico)}
            >
              <div className={`bg-gradient-to-r ${servico.cor} text-white p-6`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                    <servico.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium opacity-90">
                    {servico.categoria === 'RH' ? 'Recursos Humanos' : 'Gestão Empresarial'}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{servico.titulo}</h3>
                <p className="text-sm opacity-90">{servico.descricao}</p>
              </div>

              <div className="p-6">
                <div className="space-y-2 mb-6">
                  {servico.detalhes.slice(0, 3).map((detalhe, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{detalhe}</span>
                    </div>
                  ))}
                  {servico.detalhes.length > 3 && (
                    <div className="text-sm text-gray-500 font-medium">
                      +{servico.detalhes.length - 3} itens adicionais
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {servico.duracao}
                  </div>
                  <div className="flex items-center space-x-1 text-red-600 font-medium group-hover:text-red-700">
                    <span>Ver detalhes</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Palestras, Cursos & Desenvolvimento */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Palestras, Cursos & Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600">
              Capacitação e desenvolvimento para sua equipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {palestrasECursos.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.titulo}</h3>
                <p className="text-gray-600 mb-6">{item.descricao}</p>
                <div className="space-y-2">
                  {item.temas.map((tema, temaIndex) => (
                    <div key={temaIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{tema}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Diferenciais */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Por que Escolher a Passione?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Profissionais Registrados</h3>
                <p className="text-sm text-gray-600">Equipe com registro em conselhos de classe</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Metodologia KPI</h3>
                <p className="text-sm text-gray-600">Resultados mensuráveis e indicadores</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Atendimento Personalizado</h3>
                <p className="text-sm text-gray-600">Soluções 100% customizadas</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Experiência Multissetorial</h3>
                <p className="text-sm text-gray-600">Corporativo, público, terceiro setor</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar sua Empresa?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              Solicite uma proposta personalizada e descubra como nossos serviços 
              podem impulsionar os resultados da sua organização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Solicitar Proposta</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicos;