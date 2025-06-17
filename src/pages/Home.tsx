import React from 'react';
import { ArrowRight, Users, Target, Award, TrendingUp, CheckCircle, Heart, Shield, BarChart3, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: 'Recrutamento & Seleção',
      description: 'Processos seletivos personalizados, hunting para cargos estratégicos e banco de talentos com triagem técnica e comportamental.'
    },
    {
      icon: Target,
      title: 'RH Estratégico',
      description: 'Diagnóstico e estruturação da área de RH, gestão por competências e implantação de cultura organizacional.'
    },
    {
      icon: Award,
      title: 'BPO de RH',
      description: 'Terceirização completa ou parcial com administração de folha, benefícios e relatórios mensais estratégicos.'
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Empresarial',
      description: 'Planejamento estratégico, otimização de processos, gestão financeira e governança corporativa.'
    }
  ];

  const differentials = [
    'Atendimento 100% personalizado',
    'Equipe registrada em CRP, CRA e demais conselhos profissionais',
    'Metodologia pautada por indicadores de desempenho (KPIs)',
    'Experiência em setores corporativo, público, terceiro setor e educacional',
    'Clube de Profissionais para networking e suporte contínuo'
  ];

  const values = [
    {
      icon: Shield,
      title: 'Ética e transparência',
      description: 'Atuamos com integridade em todos os projetos'
    },
    {
      icon: BarChart3,
      title: 'Foco em resultados mensuráveis',
      description: 'Cada ação é orientada por KPIs e métricas'
    },
    {
      icon: Heart,
      title: 'Humanização e empatia',
      description: 'Pessoas no centro de todas as decisões'
    },
    {
      icon: Lightbulb,
      title: 'Inovação e melhoria contínua',
      description: 'Sempre buscando as melhores práticas'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.4), rgba(185, 28, 28, 0.5)), url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-red-700/40 to-red-800/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl">
              Transformamos a gestão de
              <span className="text-red-200"> pessoas </span>
              e
              <span className="text-red-200"> negócios</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-red-100 max-w-4xl mx-auto font-medium drop-shadow-xl">
              com soluções estratégicas e humanas
            </h2>
            <p className="text-lg md:text-xl mb-12 text-red-100 max-w-3xl mx-auto drop-shadow-lg">
              Consultoria completa em RH e Gestão Empresarial para resultados concretos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Quero Contratar</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/trabalhe-conosco"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enviar Currículo
              </Link>
              <Link
                to="/parceiros"
                className="border-2 border-red-200 text-red-100 px-8 py-4 rounded-lg font-semibold hover:bg-red-200 hover:text-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Seja Parceiro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Passione – Gente e Gestão Empresarial
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Desenvolvemos soluções personalizadas para transformar a gestão de pessoas 
              e negócios, sempre com foco estratégico, humano e prático.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 max-w-4xl mx-auto">
              <p className="text-lg text-blue-800 font-medium">
                <Shield className="inline h-6 w-6 mr-2" />
                Todos os nossos serviços são executados por profissionais formados e 
                registrados em conselhos de classe, garantindo segurança técnica e legal a cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossas Soluções
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em RH e consultoria empresarial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-500"
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossos Diferenciais
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                O que nos torna únicos no mercado de consultoria em RH e gestão empresarial.
              </p>
              <ul className="space-y-4">
                {differentials.map((differential, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{differential}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-gray-600 mb-6">Empresas atendidas</div>
                
                <div className="text-4xl font-bold text-red-600 mb-2">10k+</div>
                <div className="text-gray-600 mb-6">Profissionais capacitados</div>
                
                <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600">Taxa de satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar sua gestão?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
            >
              <span>Solicitar Proposta</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/trabalhe-conosco"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Trabalhe Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;