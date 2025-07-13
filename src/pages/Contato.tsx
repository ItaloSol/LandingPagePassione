import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, MessageCircle, Instagram, Linkedin, Send, Building} from 'lucide-react';

// Schema de validação para o formulário empresarial
const empresaSchema = z.object({
  nomeEmpresa: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  responsavel: z.string().min(2, 'Nome do responsável deve ter pelo menos 2 caracteres'),
  cargo: z.string().min(2, 'Cargo deve ter pelo menos 2 caracteres'),
  emailCorporativo: z.string().email('E-mail corporativo inválido'),
  whatsapp: z.string().min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  servicoInteresse: z.string().min(1, 'Selecione um serviço de interesse'),
  mensagemDetalhada: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  politicaPrivacidade: z.literal(true, {
    errorMap: () => ({ message: 'Você deve concordar com a Política de Privacidade para enviar o formulário.' })
  }),
  codigo: z.string().optional()
});

type EmpresaFormData = z.infer<typeof empresaSchema>;

const Contato: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<EmpresaFormData>({
    resolver: zodResolver(empresaSchema)
  });

  const onSubmit = async (data: EmpresaFormData) => {
    // Simular envio do formulário
    console.log('Dados do formulário empresarial:', data);
    
    // Aqui você integraria com sua API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato.');
    reset();
  };

  const servicosDisponiveis = [
    'Recrutamento & Seleção',
    'RH Estratégico',
    'BPO de RH',
    'Plano de Cargos, Salários & Carreira',
    'Gestão de Desempenho',
    'Clima Organizacional & Engajamento',
    'Planejamento Estratégico',
    'Mapeamento & Otimização de Processos',
    'Gestão Financeira & Indicadores',
    'Governança & Compliance',
    'Mentoria & Aconselhamento Executivo',
    'Palestras Corporativas',
    'Cursos & Desenvolvimento',
    'Consultoria Personalizada'
  ];

  const contatos = [
    {
      icon: MessageCircle,
      titulo: 'WhatsApp',
      info: '+55 (61) 9 9152-6116',
      link: 'https://wa.me/5561991526116',
      cor: 'text-green-600'
    },
    {
      icon: Mail,
      titulo: 'E-mail',
      info: 'contato@passione-rh.com.br',
      link: 'mailto:contato@passione-rh.com.br',
      cor: 'text-blue-600'
    },
    {
      icon: Instagram,
      titulo: 'Instagram',
      info: '@passione.rh',
      link: 'https://instagram.com/passione.rh',
      cor: 'text-pink-600'
    },
    {
      icon: Linkedin,
      titulo: 'LinkedIn',
      info: 'Passione Rh',
      link: 'https://linkedin.com/company/passione-rh',
      cor: 'text-blue-700'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua gestão de pessoas e negócios. Nossa equipe está pronta 
            para desenvolver soluções personalizadas para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário Empresarial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-600">
            <div className="text-center mb-8">
              <Building className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Solicite uma Proposta
              </h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário e receba uma proposta personalizada
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Política de Privacidade */}
              <div className="mb-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold mb-2 text-gray-800">Política de Privacidade – Tratamento de Dados Pessoais</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Ao preencher este formulário, você autoriza o tratamento dos seus dados pessoais pela Passione Gente & Gestão Empresarial, conforme a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).<br/>
                  As informações fornecidas serão utilizadas exclusivamente para fins de cadastro em nosso banco de talentos e/ou envio de propostas comerciais relacionadas aos nossos serviços. Seus dados serão armazenados com segurança e não serão compartilhados com terceiros sem o seu consentimento.<br/>
                  Você poderá, a qualquer momento, solicitar a atualização, correção ou exclusão dos seus dados, conforme os seus direitos garantidos pela LGPD, entrando em contato pelo e-mail: <a href="mailto:contato@passione-rh.com.br" className="text-red-600 underline">contato@passione-rh.com.br</a>.
                </p>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="politicaPrivacidade"
                    {...register('politicaPrivacidade')}
                    className="mr-2"
                  />
                  <label htmlFor="politicaPrivacidade" className="text-sm text-gray-700">
                    Li e concordo com a Política de Privacidade e autorizo o uso dos meus dados pessoais conforme a LGPD.
                  </label>
                </div>
                {errors.politicaPrivacidade && (
                  <p className="mt-1 text-sm text-red-600">{errors.politicaPrivacidade.message}</p>
                )}
              </div>
              {/* Código Comercial */}
              <div>
                <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 mb-2">
                  CÓD: <span className="text-gray-400 text-xs">(Opcional - uso interno equipe comercial)</span>
                </label>
                <input
                  type="text"
                  id="codigo"
                  {...register('codigo')}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors border-gray-300"
                  placeholder="Código da apresentação (se houver)"
                />
              </div>
              {/* Nome da Empresa */}
              <div>
                <label htmlFor="nomeEmpresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Empresa *
                </label>
                <input
                  type="text"
                  id="nomeEmpresa"
                  {...register('nomeEmpresa')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.nomeEmpresa ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Razão social ou nome fantasia"
                />
                {errors.nomeEmpresa && (
                  <p className="mt-1 text-sm text-red-600">{errors.nomeEmpresa.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Responsável */}
                <div>
                  <label htmlFor="responsavel" className="block text-sm font-medium text-gray-700 mb-2">
                    Responsável *
                  </label>
                  <input
                    type="text"
                    id="responsavel"
                    {...register('responsavel')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                      errors.responsavel ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nome do responsável"
                  />
                  {errors.responsavel && (
                    <p className="mt-1 text-sm text-red-600">{errors.responsavel.message}</p>
                  )}
                </div>

                {/* Cargo */}
                <div>
                  <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    id="cargo"
                    {...register('cargo')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                      errors.cargo ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Cargo/função do responsável"
                  />
                  {errors.cargo && (
                    <p className="mt-1 text-sm text-red-600">{errors.cargo.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* E-mail Corporativo */}
                <div>
                  <label htmlFor="emailCorporativo" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    id="emailCorporativo"
                    {...register('emailCorporativo')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                      errors.emailCorporativo ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="contato@empresa.com.br"
                  />
                  {errors.emailCorporativo && (
                    <p className="mt-1 text-sm text-red-600">{errors.emailCorporativo.message}</p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    {...register('whatsapp')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                      errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                  )}
                </div>
              </div>

              {/* Serviço de Interesse */}
              <div>
                <label htmlFor="servicoInteresse" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse *
                </label>
                <select
                  id="servicoInteresse"
                  {...register('servicoInteresse')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.servicoInteresse ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione o serviço de interesse</option>
                  {servicosDisponiveis.map((servico, index) => (
                    <option key={index} value={servico}>{servico}</option>
                  ))}
                </select>
                {errors.servicoInteresse && (
                  <p className="mt-1 text-sm text-red-600">{errors.servicoInteresse.message}</p>
                )}
              </div>

              {/* Mensagem Detalhada */}
              <div>
                <label htmlFor="mensagemDetalhada" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem Detalhada *
                </label>
                <textarea
                  id="mensagemDetalhada"
                  {...register('mensagemDetalhada')}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.mensagemDetalhada ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Descreva suas necessidades, desafios atuais, objetivos e qualquer informação relevante que nos ajude a entender melhor como podemos ajudar sua empresa..."
                />
                {errors.mensagemDetalhada && (
                  <p className="mt-1 text-sm text-red-600">{errors.mensagemDetalhada.message}</p>
                )}
              </div>

              {/* Botão de Envio */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Solicitar Proposta</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Contatos Diretos */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Diretamente Conosco
              </h2>
              <div className="space-y-6">
                {contatos.map((contato, index) => (
                  <a
                    key={index}
                    href={contato.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`p-3 rounded-lg bg-gray-100 ${contato.cor}`}>
                      <contato.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{contato.titulo}</h3>
                      <p className="text-gray-600">{contato.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-blue-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Horário de Atendimento
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Segunda a Sexta</span>
                  <span className="text-gray-600">8h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sábado</span>
                  <span className="text-gray-600">8h às 12h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Domingo</span>
                  <span className="text-gray-600">Fechado</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Atendimento de urgência:</strong> Disponível 24h via WhatsApp 
                  para clientes com contratos ativos.
                </p>
              </div>
            </div>

            {/* Tempo de Resposta */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Compromisso de Atendimento
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>E-mail:</strong> Resposta em até 4 horas úteis
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>WhatsApp:</strong> Resposta em até 1 hora
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                  <span className="text-gray-700">
                    <strong>Proposta:</strong> Envio em até 24 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para evoluir sua carreira e alavancar a gestão do seu negócio?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              Nossa equipe de especialistas está pronta para desenvolver soluções 
              personalizadas que irão revolucionar a gestão de pessoas e negócios da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="/servicos"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                SOU EMPRESA <br></br>
                Conheça nossos serviços
              </a>
              <a
                href="/trabalhe-conosco"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                SOU CANDIDATO <br></br>
                Portal de vagas
              </a>
              <a
                href="/parceiros"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                QUERO SER PARCEIRO <br></br>
                Parceiros
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contato;