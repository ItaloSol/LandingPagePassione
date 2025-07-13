import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Users, Award, TrendingUp, CheckCircle, Lightbulb, Target, Globe, Star } from 'lucide-react';

// Schema de validação para o formulário de parceiros
const parceiroSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  profissao: z.string().min(2, 'Profissão deve ter pelo menos 2 caracteres'),
  linkedinPortfolio: z.string().url('Insira uma URL válida (LinkedIn ou Portfólio)'),
  whatsapp: z.string().min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  email: z.string().email('E-mail inválido'),
  mensagemApresentacao: z.string().min(50, 'Mensagem deve ter pelo menos 50 caracteres'),
  politicaPrivacidade: z.literal(true, {
    errorMap: () => ({ message: 'Você deve concordar com a Política de Privacidade para enviar o formulário.' })
  }),
  codigo: z.string().optional()
});

type ParceiroFormData = z.infer<typeof parceiroSchema>;

const Parceiros: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ParceiroFormData>({
    resolver: zodResolver(parceiroSchema)
  });

  const onSubmit = async (data: ParceiroFormData) => {
    // Simular envio do formulário
    console.log('Dados do formulário de parceiro:', data);
    
    // Aqui você integraria com sua API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Proposta de parceria enviada com sucesso! Nossa equipe analisará seu perfil e entrará em contato.');
    reset();
  };

  const beneficiosParceria = [
    'Rede de networking qualificada',
    'Projetos estratégicos e desafiadores',
    'Flexibilidade de horários e local',
    'Valor agregado ao seu portifólio',
    'Inovação e metodologia personalizada',
    'Desenvolvimento profissional contínuo',
    'Marca reconhecida no mercado'
  ];

  const areasColaboracao = [
    {
      icon: Users,
      titulo: 'Recursos Humanos',
      descricao: 'Recrutamento, seleção, gestão de pessoas e desenvolvimento organizacional'
    },
    {
      icon: TrendingUp,
      titulo: 'Consultoria Empresarial',
      descricao: 'Planejamento estratégico, processos, gestão financeira e governança'
    },
    {
      icon: Award,
      titulo: 'Treinamento & Desenvolvimento',
      descricao: 'Palestras, cursos, capacitações e desenvolvimento de lideranças'
    },
    {
      icon: Lightbulb,
      titulo: 'Inovação & Tecnologia',
      descricao: 'Transformação digital, automação de processos e soluções tecnológicas'
    }
  ];

  const perfilIdeal = [
    'Profissionais com registro em conselho de classe',
    'Experiência comprovada na área de atuação',
    'Visão estratégica e orientação a resultados',
    'Excelente comunicação e relacionamento interpessoal',
    'Disponibilidade para projetos presenciais e remotos',
    'Comprometimento com prazos e qualidade'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Seja Nosso Parceiro
              </h1>
              <p className="text-lg text-blue-600 font-medium">
                Junte-se à nossa rede de consultores
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte-se com a Passione e faça parte de uma rede de profissionais 
            especializados em transformar a gestão de pessoas e negócios
          </p>
        </div>

        {/* Por que ser parceiro */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Por que ser Parceiro da Passione?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 text-blue-600 mr-2" />
                  Benefícios da Parceria
                </h3>
                <ul className="space-y-3">
                  {beneficiosParceria.map((beneficio, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Target className="h-6 w-6 text-blue-600 mr-2" />
                  Perfil que Buscamos
                </h3>
                <ul className="space-y-3">
                  {perfilIdeal.map((perfil, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{perfil}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Colaboração */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Áreas de Colaboração
            </h2>
            <p className="text-xl text-gray-600">
              Oportunidades em diversas especialidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {areasColaboracao.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <area.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {area.titulo}
                </h3>
                <p className="text-gray-600">
                  {area.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Formulário de Parceria */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-blue-600">
              <div className="text-center mb-8">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Proposta de Parceria
                </h2>
                <p className="text-lg text-gray-600">
                  Preencha o formulário e apresente seu perfil profissional
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Política de Privacidade */}
                <div className="mb-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold mb-2 text-gray-800">Política de Privacidade – Tratamento de Dados Pessoais</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Ao preencher este formulário, você autoriza o tratamento dos seus dados pessoais pela Passione Gente & Gestão Empresarial, conforme a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).<br/>
                    As informações fornecidas serão utilizadas exclusivamente para fins de cadastro em nosso banco de talentos e/ou envio de propostas comerciais relacionadas aos nossos serviços. Seus dados serão armazenados com segurança e não serão compartilhados com terceiros sem o seu consentimento.<br/>
                    Você poderá, a qualquer momento, solicitar a atualização, correção ou exclusão dos seus dados, conforme os seus direitos garantidos pela LGPD, entrando em contato pelo e-mail: <a href="mailto:contato@passione-rh.com.br" className="text-blue-600 underline">contato@passione-rh.com.br</a>.
                  </p>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="politicaPrivacidade"
                      {...register('politicaPrivacidade')}
                      className="mr-2"
                    />
                    <label htmlFor="politicaPrivacidade" className="text-sm text-gray-700 select-none">
                      Li e concordo com a Política de Privacidade e autorizo o uso dos meus dados pessoais conforme a LGPD.
                    </label>
                  </div>
                  {errors.politicaPrivacidade && (
                    <p className="mt-1 text-sm text-red-600">{errors.politicaPrivacidade.message}</p>
                  )}
                </div>
                {/* Código comercial */}
                <div>
                  <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 mb-2">
                    CÓD: <span className="text-gray-400">(opcional, uso interno)</span>
                  </label>
                  <input
                    type="text"
                    id="codigo"
                    {...register('codigo')}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors border-gray-300"
                    placeholder="Código fornecido pela equipe comercial"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      {...register('nome')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.nome ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>
                    )}
                  </div>

                  {/* Profissão */}
                  <div>
                    <label htmlFor="profissao" className="block text-sm font-medium text-gray-700 mb-2">
                      Profissão/Especialidade *
                    </label>
                    <input
                      type="text"
                      id="profissao"
                      {...register('profissao')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.profissao ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ex: Psicólogo Organizacional, Consultor RH, etc."
                    />
                    {errors.profissao && (
                      <p className="mt-1 text-sm text-red-600">{errors.profissao.message}</p>
                    )}
                  </div>
                </div>

                {/* LinkedIn/Portfólio */}
                <div>
                  <label htmlFor="linkedinPortfolio" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn ou Portfólio *
                  </label>
                  <input
                    type="url"
                    id="linkedinPortfolio"
                    {...register('linkedinPortfolio')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.linkedinPortfolio ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="https://linkedin.com/in/seuperfil ou https://seuportfolio.com"
                  />
                  {errors.linkedinPortfolio && (
                    <p className="mt-1 text-sm text-red-600">{errors.linkedinPortfolio.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      {...register('whatsapp')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Mensagem de Apresentação */}
                <div>
                  <label htmlFor="mensagemApresentacao" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem de Apresentação *
                  </label>
                  <textarea
                    id="mensagemApresentacao"
                    {...register('mensagemApresentacao')}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.mensagemApresentacao ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Apresente-se! Conte sobre sua experiência profissional, principais competências, projetos relevantes, áreas de especialização e como você pode contribuir com a Passione. Inclua também sua disponibilidade e expectativas para a parceria..."
                  />
                  {errors.mensagemApresentacao && (
                    <p className="mt-1 text-sm text-red-600">{errors.mensagemApresentacao.message}</p>
                  )}
                </div>

                {/* Botão de Envio */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar Proposta de Parceria</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Processo de Seleção */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Processo de Seleção de Parceiros
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Análise de Perfil</h3>
                <p className="text-sm text-gray-600">Avaliação da experiência e competências</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Entrevista</h3>
                <p className="text-sm text-gray-600">Conversa sobre expectativas e fit cultural</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Projeto Piloto</h3>
                <p className="text-sm text-gray-600">Colaboração em projeto inicial</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Parceria</h3>
                <p className="text-sm text-gray-600">Formalização da parceria estratégica</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para Transformar Negócios Juntos?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Junte-se à nossa rede de parceiros e faça parte da transformação 
              da gestão de pessoas e negócios no Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#parceria"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('nome')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Enviar Proposta Agora
              </a>
              <a
                href="/contato"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Parceiros;