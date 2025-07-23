import React, { useState } from 'react';
import { Calendar, User, ArrowRight, TrendingUp, Users, Target, Lightbulb, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Artigo {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  autor: string;
  data: string;
  categoria: string;
  tempoLeitura: string;
  tags: string[];
  imagem: string;
  ctaFormulario?: {
    tipo: 'curriculo' | 'empresa' | 'parceiro' | 'tematico';
    titulo: string;
    descricao: string;
    link: string;
  };
}

const Blog: React.FC = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [artigoSelecionado, setArtigoSelecionado] = useState<Artigo | null>(null);

  const categorias = ['Todos', 'RH', 'Gestão', 'Liderança', 'Carreira', 'Tendências'];

  const artigos: Artigo[] = [
    {
      id: 1,
      titulo: 'O Futuro do RH: Tendências para 2025',
      resumo: 'Descubra as principais tendências que estão moldando o futuro dos recursos humanos e como se preparar para elas.',
      conteudo: `
        <p>O mundo dos recursos humanos está em constante evolução, e 2025 promete ser um ano de grandes transformações. Neste artigo, exploramos as principais tendências que estão moldando o futuro do RH.</p>
        
        <h3>1. Inteligência Artificial e Automação</h3>
        <p>A IA está revolucionando processos de recrutamento, análise de dados de funcionários e personalização de experiências. Empresas que adotam essas tecnologias conseguem maior eficiência e precisão em suas decisões.</p>
        
        <h3>2. Experiência do Funcionário</h3>
        <p>O foco mudou de apenas atrair talentos para criar experiências memoráveis ao longo de toda a jornada do colaborador na empresa.</p>
        
        <h3>3. Trabalho Híbrido e Flexibilidade</h3>
        <p>O modelo híbrido veio para ficar, exigindo novas abordagens para gestão de equipes, cultura organizacional e produtividade.</p>
        
        <h3>4. Diversidade, Equidade e Inclusão</h3>
        <p>DEI deixou de ser apenas uma tendência para se tornar uma necessidade estratégica para o sucesso empresarial.</p>
      `,
      autor: 'Equipe Passione',
      data: '15 de Junho, 2025',
      categoria: 'RH',
      tempoLeitura: '8 min',
      tags: ['IA', 'Futuro', 'Tendências', 'Tecnologia'],
      imagem: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      ctaFormulario: {
        tipo: 'empresa',
        titulo: 'Modernize seu RH',
        descricao: 'Quer implementar essas tendências na sua empresa? Solicite uma consultoria personalizada.',
        link: '/contato'
      }
    },
    {
      id: 2,
      titulo: 'Liderança Transformacional: Guia Completo',
      resumo: 'Como desenvolver uma liderança que inspira, motiva e transforma equipes e organizações.',
      conteudo: `
        <p>A liderança transformacional é mais do que um estilo d& Gestão - é uma filosofia que pode revolucionar organizações inteiras.</p>
        
        <h3>Características da Liderança Transformacional</h3>
        <ul>
          <li><strong>Inspiração Motivacional:</strong> Criar uma visão compartilhada e inspiradora</li>
          <li><strong>Influência Idealizada:</strong> Ser um modelo de comportamento ético</li>
          <li><strong>Estimulação Intelectual:</strong> Encorajar inovação e criatividade</li>
          <li><strong>Consideração Individual:</strong> Atenção personalizada a cada membro da equipe</li>
        </ul>
        
        <h3>Como Desenvolver Essas Competências</h3>
        <p>O desenvolvimento da liderança transformacional requer autoconhecimento, prática constante e feedback contínuo.</p>
      `,
      autor: 'Dra. Ana Silva',
      data: '10 de Junho, 2025',
      categoria: 'Liderança',
      tempoLeitura: '12 min',
      tags: ['Liderança', 'Transformação', 'Gestão', 'Desenvolvimento'],
      imagem: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      ctaFormulario: {
        tipo: 'tematico',
        titulo: 'Curso de Liderança',
        descricao: 'Desenvolva suas competências de liderança com nosso curso especializado.',
        link: '/contato'
      }
    },
    {
      id: 3,
      titulo: 'Planejamento de Carreira: Estratégias Vencedoras',
      resumo: 'Descubra como criar um plano de carreira sólido e alcançar seus objetivos profissionais.',
      conteudo: `
        <p>Um planejamento de carreira bem estruturado é fundamental para o sucesso profissional a longo prazo.</p>
        
        <h3>Passos Essenciais</h3>
        <ol>
          <li><strong>Autoavaliação:</strong> Conheça suas forças, fraquezas e valores</li>
          <li><strong>Definição de Objetivos:</strong> Estabeleça metas claras e mensuráveis</li>
          <li><strong>Mapeamento de Competências:</strong> Identifique gaps e oportunidades</li>
          <li><strong>Plano de Ação:</strong> Crie estratégias concretas para alcançar seus objetivos</li>
        </ol>
        
        <h3>Ferramentas Úteis</h3>
        <p>Utilize ferramentas como matriz SWOT pessoal, mapeamento de stakeholders e análise de mercado.</p>
      `,
      autor: 'Carlos Mendes',
      data: '5 de Junho, 2025',
      categoria: 'Carreira',
      tempoLeitura: '10 min',
      tags: ['Carreira', 'Planejamento', 'Desenvolvimento', 'Estratégia'],
      imagem: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      ctaFormulario: {
        tipo: 'curriculo',
        titulo: 'Orientação de Carreira',
        descricao: 'Precisa de ajuda para planejar sua carreira? Envie seu currículo e receba orientação personalizada.',
        link: '/portal-vagas'
      }
    },
    {
      id: 4,
      titulo: 'Gestão de Mudanças: Como Liderar Transformações',
      resumo: 'Estratégias eficazes para conduzir processos de mudança organizacional com sucesso.',
      conteudo: `
        <p>A gestão de mudanças é uma competência crítica para líderes em um mundo em constante transformação.</p>
        
        <h3>Modelo de 8 Passos de Kotter</h3>
        <ol>
          <li>Criar senso de urgência</li>
          <li>Formar uma coalizão orientadora</li>
          <li>Desenvolver uma visão e estratégia</li>
          <li>Comunicar a visão de mudança</li>
          <li>Empoderar ação ampla</li>
          <li>Gerar vitórias de curto prazo</li>
          <li>Sustentar aceleração</li>
          <li>Institucionalizar novas abordagens</li>
        </ol>
        
        <h3>Superando Resistências</h3>
        <p>A resistência à mudança é natural. O segredo está em comunicação transparente, envolvimento das pessoas e demonstração de benefícios.</p>
      `,
      autor: 'Equipe Passione',
      data: '28 de junho, 2025',
      categoria: 'Gestão',
      tempoLeitura: '15 min',
      tags: ['Mudança', 'Transformação', 'Liderança', 'Estratégia'],
      imagem: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      ctaFormulario: {
        tipo: 'empresa',
        titulo: 'Consultoria em Mudanças',
        descricao: 'Sua empresa precisa passar por uma transformação? Solicite nossa consultoria especializada.',
        link: '/contato'
      }
    },
    {
      id: 5,
      titulo: 'Cultura Organizacional: Construindo Ambientes de Alto Desempenho',
      resumo: 'Como desenvolver uma cultura organizacional forte que impulsiona resultados e engajamento.',
      conteudo: `
        <p>A cultura organizacional é o DNA da empresa - ela define como as pessoas se comportam, tomam decisões e interagem.</p>
        
        <h3>Elementos da Cultura</h3>
        <ul>
          <li><strong>Valores:</strong> Princípios fundamentais que guiam comportamentos</li>
          <li><strong>Crenças:</strong> Convicções compartilhadas sobre o que é importante</li>
          <li><strong>Normas:</strong> Regras não escritas sobre como as coisas são feitas</li>
          <li><strong>Símbolos:</strong> Representações visuais da identidade organizacional</li>
        </ul>
        
        <h3>Construindo uma Cultura Forte</h3>
        <p>Uma cultura forte requer liderança consistente, comunicação clara e alinhamento entre discurso e prática.</p>
      `,
      autor: 'Dra. Maria Santos',
      data: '20 de junho, 2025',
      categoria: 'RH',
      tempoLeitura: '11 min',
      tags: ['Cultura', 'Engajamento', 'Valores', 'Desempenho'],
      imagem: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      ctaFormulario: {
        tipo: 'parceiro',
        titulo: 'Especialista em Cultura',
        descricao: 'É especialista em cultura organizacional? Junte-se à nossa rede de parceiros.',
        link: '/parceiros'
      }
    },
    {
      id: 6,
      titulo: 'Recrutamento 4.0: Inovações na Seleção de Talentos',
      resumo: 'As mais recentes inovações em recrutamento e seleção que estão transformando a atração de talentos.',
      conteudo: `
        <p>O recrutamento evoluiu drasticamente com a chegada de novas tecnologias e metodologias inovadoras.</p>
        
        <h3>Tecnologias Emergentes</h3>
        <ul>
          <li><strong>IA para Triagem:</strong> Algoritmos que analisam currículos e perfis</li>
          <li><strong>Chatbots:</strong> Automatização do primeiro contato com candidatos</li>
          <li><strong>Gamificação:</strong> Jogos para avaliar competências</li>
          <li><strong>Video Entrevistas:</strong> Análise de linguagem corporal e expressões</li>
        </ul>
        
        <h3>Metodologias Inovadoras</h3>
        <p>Entrevistas comportamentais, assessment centers virtuais e avaliações por competências estão redefinindo como selecionamos talentos.</p>
      `,
      autor: 'João Oliveira',
      data: '15 de junho, 2025',
      categoria: 'RH',
      tempoLeitura: '9 min',
      tags: ['Recrutamento', 'Tecnologia', 'Inovação', 'Talentos'],
      imagem: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      ctaFormulario: {
        tipo: 'empresa',
        titulo: 'Modernize seu Recrutamento',
        descricao: 'Quer implementar essas inovações no seu processo seletivo? Fale conosco.',
        link: '/contato'
      }
    }
  ];

  const artigosFiltrados = categoriaAtiva === 'Todos' 
    ? artigos 
    : artigos.filter(artigo => artigo.categoria === categoriaAtiva);

  const renderCTA = (cta: Artigo['ctaFormulario']) => {
    if (!cta) return null;

    const cores = {
      curriculo: 'from-green-600 to-green-700',
      empresa: 'from-red-600 to-red-700',
      parceiro: 'from-blue-600 to-blue-700',
      tematico: 'from-purple-600 to-purple-700'
    };

    return (
      <div className={`bg-gradient-to-r ${cores[cta.tipo]} text-white p-6 rounded-lg mt-8`}>
        <h4 className="text-xl font-bold mb-2">{cta.titulo}</h4>
        <p className="mb-4 text-gray-100">{cta.descricao}</p>
        <Link
          to={cta.link}
          className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
        >
          <span>Saiba Mais</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  };

  if (artigoSelecionado) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Botão Voltar */}
          <button
            onClick={() => setArtigoSelecionado(null)}
            className="mb-8 flex items-center space-x-2 text-[#1E0549] hover:text-red-700 transition-colors duration-200"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
            <span>Voltar aos artigos</span>
          </button>

          {/* Artigo Completo */}
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src={artigoSelecionado.imagem}
              alt={artigoSelecionado.titulo}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                <span className="bg-[#1E0549]/10 text-[#1E0549] px-3 py-1 rounded-full font-medium">
                  {artigoSelecionado.categoria}
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{artigoSelecionado.data}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{artigoSelecionado.tempoLeitura}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{artigoSelecionado.autor}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {artigoSelecionado.titulo}
              </h1>

              <div className="prose prose-lg max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: artigoSelecionado.conteudo }} />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {artigoSelecionado.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* CTA do Artigo */}
              {renderCTA(artigoSelecionado.ctaFormulario)}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Blog Passione
              </h1>
              <p className="text-lg text-[#1E0549] font-medium">
                Insights e tendências em RH & Gestão
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdos especializados sobre recursos humanos, gestão empresarial, 
            liderança e desenvolvimento de carreira
          </p>
        </div>

        {/* Filtros de Categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaAtiva(categoria)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                categoriaAtiva === categoria
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artigosFiltrados.map((artigo) => (
            <article
              key={artigo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setArtigoSelecionado(artigo)}
            >
              <img
                src={artigo.imagem}
                alt={artigo.titulo}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#1E0549]/10 text-[#1E0549] px-3 py-1 rounded-full text-sm font-medium">
                    {artigo.categoria}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{artigo.tempoLeitura}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {artigo.titulo}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {artigo.resumo}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{artigo.autor}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{artigo.data}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {artigo.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-1 text-[#1E0549] font-medium">
                      <span>Ler mais</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        {/* <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Receba Nossos Conteúdos
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Cadastre-se para receber artigos exclusivos sobre RH, gestão e carreira 
            diretamente no seu e-mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-300 focus:outline-none"
            />
            <button className="bg-white text-[#1E0549] px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200">
              Cadastrar
            </button>
          </div>
        </section> */}

        {/* CTAs para Formulários */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transforme Conhecimento em Ação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/portal-vagas"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <Users className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-bold mb-2">Portal de vagas</h3>
              <p className="text-green-100 mb-4">Envie seu currículo</p>
              <div className="flex items-center space-x-1 font-medium">
                <span className="uppercase">Enviar Currículo</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              to="/servicos"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <Target className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-bold mb-2">Transforme sua empresa</h3>
              <p className="text-red-100 mb-4">Solicite uma consultoria personalizada</p>
              <div className="flex items-center space-x-1 font-medium">
                <span className="uppercase">Solicitar Proposta</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              to="/parceiros"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <TrendingUp className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-bold mb-2">Seja nosso parceiro</h3>
              <p className="text-blue-100 mb-4">Junte-se à nossa rede de especialistas</p>
              <div className="flex items-center space-x-1 font-medium">
                <span className="uppercase">Enviar Proposta</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link
              to="/servicos"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <Lightbulb className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-bold mb-2">Cursos & Palestras</h3>
              <p className="text-purple-100 mb-4">Capacitações personalizadas para sua equipe</p>
              <div className="flex items-center space-x-1 font-medium">
                <span className="uppercase">Solicitar Orçamento</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;