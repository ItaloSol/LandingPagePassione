import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Upload, Send } from 'lucide-react';

// Schema de validação para o formulário de currículo
const curriculoSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string()
    .min(11, 'WhatsApp deve ter pelo menos 11 dígitos (incluindo DDD)')
    .max(15, 'WhatsApp deve ter no máximo 15 dígitos')
    .regex(/^\d+$/, 'Somente números são permitidos')
    .transform(val => val.replace(/[^\d]/g, '')), // Remove non-numeric characters
  areaInteresse: z.string().min(1, 'Selecione uma área de interesse'),
  escolaridade: z.string().min(1, 'Selecione sua escolaridade'),
  curriculo: z.any().optional(),
  mensagemApresentacao: z.string().optional(),
  codigo: z.string().optional(),
  politicaprivacidade: z.literal(true, {
    errorMap: () => ({ message: 'Você deve concordar com a Política de privacidade para enviar o formulário.' })
  })
});

type CurriculoFormData = z.infer<typeof curriculoSchema>;

const escolaridades = [
  'Ensino Fundamental Incompleto',
  'Ensino Fundamental Completo',
  'Ensino Médio Incompleto',
  'Ensino Médio Completo',
  'Ensino Técnico Incompleto',
  'Ensino Técnico Completo',
  'Ensino Superior Incompleto',
  'Ensino Superior Completo',
  'Pós-graduação (Lato Sensu)',
  'Mestrado',
  'Doutorado'
];

const TrabalheConosco: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<CurriculoFormData>({
    resolver: zodResolver(curriculoSchema)
  });

  const onSubmit = async (data: CurriculoFormData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'curriculo' && value && value[0]) {
          formData.append(key, value[0]);
        } else if (value !== undefined && value !== null && value !== '') {
          formData.append(key, value);
        }
      });
      formData.append('Created', new Date().toISOString());
      formData.append('source', 'Candidato');
      const response = await fetch('https://api.sheetmonkey.io/form/4GNMHEQJVDe2pZbbn5DF3o', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Currículo enviado com sucesso! Entraremos em contato em breve.');
        reset();
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Falha ao enviar formulário');
        } else {
          const text = await response.text();
          throw new Error(`O servidor retornou um erro: ${response.status} ${response.statusText}`);
        }
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert(`Ocorreu um erro ao enviar seu currículo: ${error instanceof Error ? error.message : 'Erro desconhecido'}. Por favor, verifique os dados e tente novamente.`);
    }
  };

  const areasInteresse = [
    'Administração e Gestão',
    'Recursos Humanos',
    'Comercial e Vendas',
    'Marketing e Comunicação',
    'Financeiro e Contábil',
    'Tecnologia da Informação (TI)',
    'Engenharia e Produção',
    'Logística e Suprimentos',
    'Jurídica',
    'Projetos e Processos',
    'Sustentabilidade e ESG',
    'Outras'
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const beneficios = [
    'Ambiente colaborativo e inovador',
    'Oportunidades de crescimento profissional',
    'Projetos desafiadores e estratégicos',
    'Equipe multidisciplinar qualificada',
    'Flexibilidade e autonomia',
    'Desenvolvimento contínuo'
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const competencias = [
    'Visão estratégica e analítica',
    'Comunicação assertiva',
    'Trabalho em equipe',
    'Orientação a resultados',
    'Adaptabilidade e inovação',
    'Ética e transparência'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Portal de Vagas
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Acreditamos no potencial humano como força estratégica. Envie seu currículo e faça parte de processos seletivos que conectam talento e propósito.
          </p>
        </div>

        {/* Cultura da Empresa */}
        {/* <section className="mb-16">
          <div className="bg-gradient-to-r from-[#1E0549]/10 to-[#1E0549]/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Nossa Cultura e Valores
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 text-[#1E0549] mr-2" />
                  Por que trabalhar na Passione?
                </h3>
                <ul className="space-y-3">
                  {beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-[#1E0549] mr-2" />
                  Competências que valorizamos
                </h3>
                <ul className="space-y-3">
                  {competencias.map((competencia, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{competencia}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        {/* Formulário de Currículo */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envie seu Currículo
                </h2>
                <p className="text-lg text-gray-600">
                  Preencha o formulário abaixo
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome Completo */}
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      {...register('nome')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors ${
                        errors.nome ? 'border-[#1E0549]/50' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome completo"
                    />
                   
                    
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors ${
                        errors.email ? 'border-[#1E0549]/50' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[#1E0549]">{errors.email.message}</p>
                    )}
                  </div>
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors ${
                        errors.whatsapp ? 'border-[#1E0549]/50' : 'border-gray-300'
                      }`}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-[#1E0549]">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  {/* Área de Interesse */}
                  <div>
                    <label htmlFor="areaInteresse" className="block text-sm font-medium text-gray-700 mb-2">
                      Área de interesse *
                    </label>
                    <select
                      id="areaInteresse"
                      {...register('areaInteresse')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors ${
                        errors.areaInteresse ? 'border-[#1E0549]/50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione uma área</option>
                      {areasInteresse.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                    {errors.areaInteresse && (
                      <p className="mt-1 text-sm text-[#1E0549]">{errors.areaInteresse.message}</p>
                    )}
                  </div>

                  {/* Escolaridade */}
                  <div>
                    <label htmlFor="escolaridade" className="block text-sm font-medium text-gray-700 mb-2">
                      Escolaridade *
                    </label>
                    <select
                      id="escolaridade"
                      {...register('escolaridade')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors ${
                        errors.escolaridade ? 'border-[#1E0549]/50' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione sua escolaridade</option>
                      {escolaridades.map((escolaridade) => (
                        <option key={escolaridade} value={escolaridade}>
                          {escolaridade}
                        </option>
                      ))}
                    </select>
                    {errors.escolaridade && (
                      <p className="mt-1 text-sm text-[#1E0549]">{errors.escolaridade.message}</p>
                    )}
                  </div>
                </div>

                {/* Upload de Currículo */}
                <div>
                  <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-2">
                    Anexar currículo *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="curriculo"
                      // {...register('curriculo')}
                      accept=".pdf,.doc,.docx"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-700 hover:file:bg-[#1E0549]/10 ${
                        errors.curriculo ? 'border-[#1E0549]/50' : 'border-gray-300'
                      }`}
                    />
                    <Upload className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)
                  </p>
                  {errors.curriculo && (
                    <p className="mt-1 text-sm text-[#1E0549]">{errors.curriculo?.message as string}</p>
                  )}
                </div>

                {/* mensagemApresentacao Adicional */}
                <div>
                  <label htmlFor="mensagemApresentacao" className="block text-sm font-medium text-gray-700 mb-2">
                    mensagemApresentacao adicional (Opcional)
                  </label>
                  <textarea
                    id="mensagemApresentacao"
                    {...register('mensagemApresentacao')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors"
                    placeholder="Conte-nos um pouco sobre você, suas experiências e motivações..."
                  />
                </div>

                {/* Código Comercial */}
                <div>
                  <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 mb-2">
                    CÓD: <span className="text-gray-400 text-xs">(Preenchimento não obrigatório, uso interno Passione)</span>
                  </label>
                  <input
                    type="text"
                    id="codigo"
                    {...register('codigo')}
                    className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-[#1E0549]/50 transition-colors"
                    placeholder="Código fornecido pela equipe comercial (opcional)"
                  />
                </div>
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
                        Ao preencher este formulário, você autoriza o tratamento dos seus dados pessoais pela Passione Gente & Gestão Empresarial, conforme a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).<br/>
                        As informações fornecidas serão utilizadas exclusivamente para fins de cadastro em nosso banco de talentos e/ou envio de propostas comerciais relacionadas aos nossos serviços. Seus dados serão armazenados com segurança e não serão compartilhados com terceiros sem o seu consentimento.<br/>
                        Você poderá, a qualquer momento, solicitar a atualização, correção ou exclusão dos seus dados, conforme os seus direitos garantidos pela LGPD, entrando em contato pelo e-mail: <a href="mailto:contato@passione-rh.com.br" className="text-[#1E0549] underline">contato@passione-rh.com.br</a>.
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
                    <label htmlFor="politicaprivacidade" className="text-sm text-gray-700">
                      Li e concordo com a Política de privacidade e autorizo o uso dos meus dados pessoais conforme a LGPD.
                    </label>
                  </div>
                  {errors.politicaprivacidade && (
                    <p className="mt-1 text-sm text-[#1E0549]">{errors.politicaprivacidade.message as string}</p>
                  )}
                </div>
                {/* Botão de Envio */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span className="uppercase">Enviar Currículo</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Processo Seletivo */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              ETAPAS DO PROCESSO SELETIVO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-[#1E0549]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1E0549]">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Análise curricular</h3>
                <p className="text-sm text-gray-600">Avaliação do perfil e experiências</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1E0549]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1E0549]">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Entrevista inicial</h3>
                <p className="text-sm text-gray-600">Conversa sobre motivações e fit cultural</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1E0549]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1E0549]">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Teste comportamental</h3>
                <p className="text-sm text-gray-600">Avaliação de perfil comportamental</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1E0549]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1E0549]">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Avaliação técnica</h3>
                <p className="text-sm text-gray-600">Teste de competências específicas</p>
              </div>
              <div className="text-center">
                <div className="bg-[#1E0549]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#1E0549]">5</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Feedback</h3>
                <p className="text-sm text-gray-600">Retorno sobre o processo e próximos passos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para fazer a diferença?
            </h2>
            <p className="text-xl mb-8 text-red-100">
            A sua trajetória é única e cheia de valor. A oportunidade certa começa quando você acredita no seu potencial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#curriculo"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('nome')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#1E0549] uppercase px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
              >
                Enviar Currículo Agora
              </a>
              <a
                href="/contato"
                className="border-2 border-white uppercase text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1E0549] transition-colors duration-200"
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

export default TrabalheConosco;