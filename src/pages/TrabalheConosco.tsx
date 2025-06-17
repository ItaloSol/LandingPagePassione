import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Heart, Upload, Send, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

// Schema de validação para o formulário de currículo
const curriculoSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  areaInteresse: z.string().min(1, 'Selecione uma área de interesse'),
  curriculo: z.any().refine((files) => files?.length > 0, 'Anexe seu currículo'),
  mensagem: z.string().optional()
});

type CurriculoFormData = z.infer<typeof curriculoSchema>;

const TrabalheConosco: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<CurriculoFormData>({
    resolver: zodResolver(curriculoSchema)
  });

  const onSubmit = async (data: CurriculoFormData) => {
    // Simular envio do formulário
    console.log('Dados do formulário:', data);
    
    // Aqui você integraria com sua API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Currículo enviado com sucesso! Entraremos em contato em breve.');
    reset();
  };

  const areasInteresse = [
    'Recursos Humanos',
    'Consultoria Empresarial',
    'Recrutamento e Seleção',
    'Treinamento e Desenvolvimento',
    'Gestão de Pessoas',
    'Psicologia Organizacional',
    'Administração',
    'Gestão Financeira',
    'Marketing',
    'Vendas',
    'Tecnologia da Informação',
    'Jurídico',
    'Outros'
  ];

  const beneficios = [
    'Ambiente colaborativo e inovador',
    'Oportunidades de crescimento profissional',
    'Projetos desafiadores e estratégicos',
    'Equipe multidisciplinar qualificada',
    'Flexibilidade e autonomia',
    'Desenvolvimento contínuo'
  ];

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
            <Heart className="h-12 w-12 text-red-600 mr-3" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Trabalhe Conosco
              </h1>
              <p className="text-lg text-red-600 font-medium">
                Faça parte da transformação
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se à nossa equipe de profissionais apaixonados por transformar 
            a gestão de pessoas e negócios
          </p>
        </div>

        {/* Cultura da Empresa */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Nossa Cultura e Valores
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 text-red-600 mr-2" />
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
                  <Users className="h-6 w-6 text-red-600 mr-2" />
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
        </section>

        {/* Formulário de Currículo */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envie seu Currículo
                </h2>
                <p className="text-lg text-gray-600">
                  Preencha o formulário abaixo e faça parte da nossa equipe
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome Completo */}
                  <div>
                    <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nomeCompleto"
                      {...register('nomeCompleto')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                        errors.nomeCompleto ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Seu nome completo"
                    />
                    {errors.nomeCompleto && (
                      <p className="mt-1 text-sm text-red-600">{errors.nomeCompleto.message}</p>
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                        errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.whatsapp && (
                      <p className="mt-1 text-sm text-red-600">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  {/* Área de Interesse */}
                  <div>
                    <label htmlFor="areaInteresse" className="block text-sm font-medium text-gray-700 mb-2">
                      Área de Interesse *
                    </label>
                    <select
                      id="areaInteresse"
                      {...register('areaInteresse')}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                        errors.areaInteresse ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selecione uma área</option>
                      {areasInteresse.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                    {errors.areaInteresse && (
                      <p className="mt-1 text-sm text-red-600">{errors.areaInteresse.message}</p>
                    )}
                  </div>
                </div>

                {/* Upload de Currículo */}
                <div>
                  <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-2">
                    Anexar Currículo *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="curriculo"
                      {...register('curriculo')}
                      accept=".pdf,.doc,.docx"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-700 hover:file:bg-red-100 ${
                        errors.curriculo ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    <Upload className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)
                  </p>
                  {errors.curriculo && (
                    <p className="mt-1 text-sm text-red-600">{errors.curriculo.message}</p>
                  )}
                </div>

                {/* Mensagem Adicional */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem Adicional (Opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    {...register('mensagem')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Conte-nos um pouco sobre você, suas experiências e motivações..."
                  />
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
                        <span>Enviar Currículo</span>
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
              Nosso Processo Seletivo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Análise Curricular</h3>
                <p className="text-sm text-gray-600">Avaliação do perfil e experiências</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Entrevista Inicial</h3>
                <p className="text-sm text-gray-600">Conversa sobre motivações e fit cultural</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Avaliação Técnica</h3>
                <p className="text-sm text-gray-600">Teste de competências específicas</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
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
              Sua carreira na consultoria em RH e gestão empresarial começa aqui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#curriculo"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('nomeCompleto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200"
              >
                Enviar Currículo Agora
              </a>
              <a
                href="/contato"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
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