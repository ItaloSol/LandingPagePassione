import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Building, Heart, Shield, BarChart3, Lightbulb, Star, Phone, Link } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
// Schema de validação para o formulário empresarial
const empresaSchema = z.object({
  nomeEmpresa: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  segmento: z.string().min(2, 'Segmento deve ter pelo menos 2 caracteres'),
  nome: z.string().min(2, 'Nome do responsável deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail corporativo inválido'),
  whatsapp: z.string()
  .min(11, 'WhatsApp deve ter pelo menos 11 dígitos (incluindo DDD)')
  .transform(val => {
    const digits = val.replace(/\D/g, '');

    if (digits.length === 11) {
      // Formato: (11) 9 1234-1234
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
    }

    return digits; // Retorna apenas os números se não tiver 11 dígitos
  }),
  servicoInteresse: z.string().min(1, 'Selecione um serviço de interesse'),
  mensagemApresentacao: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  instagram: z.string().optional(),
  site: z.string().optional(),
  politicaprivacidade: z.literal(true, {
    errorMap: () => ({ message: 'Você deve concordar com a Política de privacidade para enviar o formulário.' })
  }),
});
type EmpresaFormData = z.infer<typeof empresaSchema>;


interface Servico {
  id: string;
  categoria: 'RH' | 'Gestao';
  titulo: string;
  descricao: string;
  detalhes: string[];
  beneficios: string[];
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  cor: string;
  preco?: string;
  duracao?: string;
}

const Servicos: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmpresaFormData>({
    resolver: zodResolver(empresaSchema)
  });
  const onSubmit = async (data: EmpresaFormData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          formData.append(key, value);
        }
      });
      formData.append('Created', new Date().toISOString());
      formData.append('source', 'Serviços');
      
      const response = await fetch('https://api.sheetmonkey.io/form/4GNMHEQJVDe2pZbbn5DF3o', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSuccessMessage('Formulário enviado com sucesso!');
      } else {
        setSuccessMessage('Erro ao enviar o formulário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSuccessMessage('Erro ao enviar o formulário. Tente novamente.');
    }
  };
  




  const [categoriaAtiva, setCategoriaAtiva] = useState<'Todos' | 'RH' | 'Gestao'>('Todos');
  const [servicoSelecionado, setServicoSelecionado] = useState<Servico | null>(null);

  const servicos: Servico[] = [
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
      titulo: 'Plano de cargos, salários & carreira',
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
      titulo: 'Gestão de desempenho',
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
      titulo: 'Clima organizacional & engajamento',
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
      titulo: 'Planejamento estratégico',
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
      titulo: 'Mapeamento & otimização de processos',
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
      titulo: 'Gestão financeira & indicadores',
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
      titulo: 'Governança & compliance',
      descricao: 'Implementação de políticas e conformidade legal.',
      detalhes: [
        'Políticas internas e código de conduta',
        'Conformidade legal e boas práticas d& Gestão',
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
      titulo: 'Mentoria & aconselhamento executivo',
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
      titulo: 'Palestras corporativas',
      temas: ['Liderança', 'Cultura Organizacional', 'Protagonismo', 'Diversidade'],
      descricao: 'Palestras inspiradoras e educativas para eventos corporativos'
    },
    {
      titulo: 'Cursos livres',
      temas: ['Capacitações técnicas', 'Desenvolvimento comportamental', 'Presencial ou online'],
      descricao: 'Cursos personalizados sob demanda para sua equipe'
    },
    {
      titulo: 'Desenvolvimento de carreira',
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
            className="mb-8 flex items-center space-x-2 text-[#1E0549] hover:text-red-700 transition-colors duration-200"
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
                  <h1 className="text-3xl md:text-4xl  font-bold">{servicoSelecionado.titulo}</h1>
                  <p className="text-xl opacity-90 mt-2">{servicoSelecionado.descricao}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

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
                      
                    </Link>
                    <a
                      href="https://wa.me/5561991526116"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-red-600 text-[#1E0549] px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white uppercase transition-colors duration-200 inline-flex items-center justify-center space-x-2"
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
            Soluções completas em Recursos Humanos & Gestão Empresarial
            para transformar sua organização
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['Todos', 'RH', 'Gestao'] as const).map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${categoriaAtiva === categoria
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
                <h3 className="text-xl uppercase font-bold mb-2">{servico.titulo}</h3>
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

                  <div className="flex items-center space-x-1 text-[#1E0549] font-medium group-hover:text-red-700">
                    <span>Ver detalhes</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        
        {/* Formulário de Serviços */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-blue-600">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Solicita uma proposta
                </h2>
                <p className="text-lg text-gray-600">
                  Preencha o formulário abaixo
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nome da Empresa */}
          <div>
            <label htmlFor="nomeEmpresa" className="block text-sm font-medium text-gray-700 mb-2">
              Nome da Empresa *
            </label>
            <input
              type="text"
              id="nomeEmpresa"
              {...register('nomeEmpresa')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.nomeEmpresa ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Nome da sua empresa"
            />
            {errors.nomeEmpresa && (
              <p className="mt-1 text-sm text-red-600">{errors.nomeEmpresa.message}</p>
            )}
          </div>

          {/* Segmento */}
          <div>
            <label htmlFor="segmento" className="block text-sm font-medium text-gray-700 mb-2">
              Segmento *
            </label>
            <input
              type="text"
              id="segmento"
              {...register('segmento')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.segmento ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Segmento de atuação"
            />
            {errors.segmento && (
              <p className="mt-1 text-sm text-red-600">{errors.segmento.message}</p>
            )}
          </div>

          {/* Nome do Responsável */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
              Nome do Responsável *
            </label>
            <input
              type="text"
              id="nome"
              {...register('nome')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.nome ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Nome completo"
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
            )}
          </div>

          {/* E-mail para Contato */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail para Contato *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="email@empresa.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Telefone/WhatsApp */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
              Telefone/WhatsApp *
            </label>
            <input
              type="tel"
              id="whatsapp"
              {...register('whatsapp')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.whatsapp ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="(XX) XXXXX-XXXX"
            />
            {errors.whatsapp && (
              <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
            )}
          </div>
{/* Site */}
<div>
            <label htmlFor="site" className="block text-sm font-medium text-gray-700 mb-2">
              Site
            </label>
            <input
              type="text"
              id="site"
              {...register('site')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="https://www.suaempresa.com.br"
            />
          </div>
          {/* Instagram */}
          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              {...register('instagram')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="@suaempresa"
            />
          </div>

          {/* Serviço buscando */}
          <div className="md:col-span-2">
            <label htmlFor="servicoInteresse" className="block text-sm font-medium text-gray-700 mb-2">
              Qual serviço está buscando? *
            </label>
            <select
              id="servicoInteresse"
              {...register('servicoInteresse')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.servicoInteresse ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Selecione um serviço</option>
              {servicos.map((servico) => (
                <option key={servico.id} value={servico.titulo}>
                  {servico.titulo}
                </option>
              ))}
            </select>
            {errors.servicoInteresse && (
              <p className="mt-1 text-sm text-red-600">{errors.servicoInteresse.message}</p>
            )}
          </div>

          {/* Mensagem detalhada */}
          <div className="md:col-span-2">
            <label htmlFor="mensagemApresentacao" className="block text-sm font-medium text-gray-700 mb-2">
              Descreva brevemente a necessidade da empresa *
            </label>
            <textarea
              id="mensagemApresentacao"
              {...register('mensagemApresentacao')}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.mensagemApresentacao ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Descreva sua necessidade..."
            ></textarea>
            {errors.mensagemApresentacao && (
              <p className="mt-1 text-sm text-red-600">{errors.mensagemApresentacao.message}</p>
            )}
          </div>

          {/* Política de privacidade */}
          <div className="md:col-span-2">
            <div className="flex items-start">
              
              {/* Política de privacidade */}
              <div className="mb-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
                  >
                    <h3 className="font-semibold text-gray-800">Política de privacidade – Tratamento de dados pessoais</h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${showPrivacyPolicy ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {showPrivacyPolicy && (
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-2">
                        Ao preencher este formulário, você autoriza o tratamento dos seus dados pessoais pela Passione Gente & Gestão Empresarial, conforme a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).<br />
                        As informações fornecidas serão utilizadas exclusivamente para fins de cadastro em nosso banco de talentos e/ou envio de propostas comerciais relacionadas aos nossos serviços. Seus dados serão armazenados com segurança e não serão compartilhados com terceiros sem o seu consentimento.<br />
                        Você poderá, a qualquer momento, solicitar a atualização, correção ou exclusão dos seus dados, conforme os seus direitos garantidos pela LGPD, entrando em contato pelo e-mail: <a href="mailto:contato@passione-rh.com.br" className="text-blue-600 underline">contato@passione-rh.com.br</a>.
                      </p>
                    </div>
                  )}
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="politicaprivacidade"
                      {...register('politicaprivacidade')}
                      className="mr-2"
                    />
                    <label htmlFor="politicaprivacidade" className="text-sm text-gray-700 select-none">
                      Li e concordo com a Política de privacidade e autorizo o uso dos meus dados pessoais conforme a LGPD.
                    </label>
                  </div>
                  {errors.politicaprivacidade && (
                    <p className="mt-1 text-sm text-[#1E0549]">{errors.politicaprivacidade.message}</p>
                  )}
                </div>
            </div>
          </div>

          {/* Botão de envio */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : 'ENVIAR PROPOSTA'}
            </button>
          </div>

          {/* Mensagem de sucesso */}
          {successMessage && (
            <div className="md:col-span-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">{successMessage}</p>
              </div>
            </div>
          )}
        </div>


        {/* <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'ENVIAR PROPOSTA'}
        </button> */}
      </form>
            </div>
          </div>
        </section>

                  

        {/* Palestras, Cursos & Desenvolvimento */}
        <section className="mb-16">

          <div className="text-center my-8 mb-12">

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
                <div className="bg-[#1E0549]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#1E0549]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Profissionais registrados</h3>
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
                <h3 className="font-semibold text-gray-900 mb-2">Atendimento personalizado</h3>
                <p className="text-sm text-gray-600">Soluções 100% customizadas</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Experiência multissetorial</h3>
                <p className="text-sm text-gray-600">Corporativo, público, terceiro setor</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1E0549]/50">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pronto para Transformar sua Empresa?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Solicite uma proposta personalizada e descubra como nossos serviços
                podem impulsionar os resultados da sua organização.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5561991526116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 uppercase text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Direto</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Servicos;