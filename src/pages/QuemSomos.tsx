import React from 'react';
import { Heart, Shield, Target, Eye, Award, CheckCircle, Users, Lightbulb, BarChart3 } from 'lucide-react';

const QuemSomos: React.FC = () => {
  const mission = {
    icon: Target,
    title: 'Missão',
    description: 'Transformar a gestão de pessoas e negócios por meio de soluções personalizadas e humanizadas.'
  };

  const vision = {
    icon: Eye,
    title: 'Visão',
    description: 'Ser referência em consultoria de RH & Gestão Empresarial no Brasil, reconhecida pela excelência técnica e impacto humano.'
  };

  const values = [
    {
      icon: Shield,
      title: 'Ética e transparência',
      description: 'Atuamos com integridade absoluta em todos os projetos, mantendo transparência total com nossos clientes e parceiros.'
    },
    {
      icon: BarChart3,
      title: 'Foco em resultados mensuráveis',
      description: 'Cada ação é orientada por KPIs e métricas concretas, garantindo que os resultados sejam tangíveis e mensuráveis.'
    },
    {
      icon: Heart,
      title: 'Humanização e empatia',
      description: 'Colocamos as pessoas no centro de todas as decisões, valorizando o aspecto humano em cada processo.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação e melhoria contínua',
      description: 'Estamos sempre buscando as melhores práticas e inovações para entregar soluções cada vez mais eficazes.'
    }
  ];

  const differentials = [
    'Atendimento 100% personalizado para cada cliente',
    'Equipe registrada em CRP, CRA e demais conselhos profissionais',
    'Metodologia pautada por indicadores de desempenho (KPIs)',
    'Experiência em setores corporativo, público, terceiro setor e educacional',
    'Clube de profissionais para networking e suporte contínuo'
  ];

  const sectors = [
    { name: 'Corporativo', icon: Users },
    { name: 'Público', icon: Shield },
    { name: 'Terceiro Setor', icon: Heart },
    { name: 'Educacional', icon: Award }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem Somos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história, valores e o que nos move a transformar a gestão de pessoas e negócios
          </p>
        </div>

        {/* About Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#1E0549]/10 to-[#1E0549]/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Passione  Gente & Gestão Empresarial
            </h2>
            <p className="text-lg text- text-justify max-w-4xl mx-auto mb-8">
              A Passione Gente & Gestão Empresarial é uma consultoria que tem o propósito de impulsionar organizações por meio da valorização das pessoas e da excelência na gestão.
              <br /><br />
              Acreditamos que os melhores resultados são alcançados quando estratégia e cultura caminham lado a lado e quando as pessoas são vistas como protagonistas do crescimento organizacional.
              <br /><br />
              Atuamos com foco em gestão de pessoas, desenvolvimento de lideranças, modelagem de processos, planejamento estratégico e performance empresarial, sempre com uma abordagem personalizada, analítica e profundamente humana.
              <br /><br />
              Nosso diferencial está em unir paixão por gente, metodologia baseada em boas práticas de gestão e compromisso com entregas que geram impacto real e mensurável.
              <br /><br />
              Mais do que oferecer soluções, construímos parcerias estratégicas baseadas em confiança, escuta ativa, ética e inovação contínua. Cada projeto é conduzido com clareza de propósito, atenção ao contexto do cliente e foco em resultados sustentáveis.
              <br /><br />
              Na Passione, acreditamos que transformar empresas é, antes de tudo, desenvolver pessoas.
              E que uma gestão feita com alma, intenção e método é capaz de mover organizações para um novo patamar de maturidade, performance e relevância.
            </p>
            <div className="bg-[#1E0549]/10 border-l-4 border-[#1E0549] p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-lg text-[#1E0549] font-medium">
                Nossos serviços asseguram rigorosa conformidade técnica e legal em cada projeto executado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1E0549]/50">
              <div className="flex items-center mb-6">
                <div className="bg-[#1E0549]/10 p-3 rounded-lg mr-4">
                  <mission.icon className="h-8 w-8 text-[#1E0549]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{mission.title}</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <vision.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{vision.title}</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {vision.description}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600">
              Os princípios que guiam nossa atuação e definem nossa identidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1E0549]/10 p-3 rounded-lg flex-shrink-0">
                    <value.icon className="h-6 w-6 text-[#1E0549]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Differentials */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Nossos Diferenciais
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-8">
                  O que nos torna únicos no mercado de consultoria em RH & Gestão Empresarial:
                </p>
                <ul className="space-y-4">
                  {differentials.map((differential, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{differential}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Setores de Atuação
                </h3>
                <div className="grid uppercase grid-cols-2 gap-4">
                  {sectors.map((sector, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <sector.icon className="h-8 w-8 text-[#1E0549] mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">{sector.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        {/* <section className="mb-20">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-12">
              Resultados que Comprovam Nossa Excelência
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-red-100 text-lg">Empresas atendidas</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">10k+</div>
                <div className="text-red-100 text-lg">Profissionais capacitados</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                <div className="text-red-100 text-lg">Taxa de satisfação</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1E0549]/50">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quer conhecer mais sobre nossa metodologia?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Entre em contato conosco e descubra como podemos transformar sua gestão de pessoas e negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="bg-red-600 uppercase text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Fale Conosco
              </a>
              <a
                href="/servicos"
                className="border-2 uppercase border-red-600 text-[#1E0549] px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuemSomos;