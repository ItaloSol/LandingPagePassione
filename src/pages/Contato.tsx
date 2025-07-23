import React from 'react';
import { Mail, MessageCircle, Instagram, Linkedin, Facebook} from 'lucide-react';

// Schema de validação para o formulário empresarial



const Contato: React.FC = () => {
  
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
      info: 'Passione RH',
      link: 'https://linkedin.com/company/passione-rh',
      cor: 'text-blue-700'
    },
    {
      icon: Facebook,
      titulo: 'Facebook',
      info: 'passione.rh',
      link: 'https://www.facebook.com/passione.rh',
      cor: 'text-blue-700'
    }
  ];

  return (
    <div className="min-h-screen py-12 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-col lg:flex-row justify-center gap-12 w-full">
          {/* Formulário Empresarial */}
         

          {/* Informações de Contato */}
          <div className="space-y-8 w-full max-w-2xl">
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
                      <img src={`/${contato.titulo.toLowerCase()}.png`} alt={contato.titulo} className="h-auto w-8" />
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
                  <span className="text-gray-600">9h às 18h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sábado</span>
                  <span className="text-gray-600">Fechado</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Domingo</span>
                  <span className="text-gray-600">Fechado</span>
                </div>
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
                  <p className="text-gray-700">
                  Nosso compromisso é oferecer respostas claras e seguras, dentro do horário de atendimento, com foco na excelência da comunicação e no respeito ao cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1E0549]/50">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Pronto para evoluir sua carreira e alavancar a gestão do seu negócio?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe de especialistas está pronta para desenvolver soluções 
                personalizadas que irão revolucionar a gestão de pessoas e negócios da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/servicos"
                  className="bg-red-600 uppercase text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  SOU EMPRESA
                </a>
                <a
                  href="/portal-vagas"
                  className="border-2 uppercase border-red-600 text-[#1E0549] px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  SOU CANDIDATO
                </a>
                <a
                  href="/parceiros"
                  className="border-2 uppercase border-red-600 text-[#1E0549] px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
                >
                  QUERO SER PARCEIRO
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contato;