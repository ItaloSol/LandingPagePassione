import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1E0549] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logotipo.png" alt="Passione Logo" className="h-20 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Desenvolvemos soluções personalizadas para transformar a gestão de pessoas 
              e negócios, sempre com foco estratégico, humano e prático.
            </p>
            <div className="flex space-x-4">
            <a href="https://wa.me/5561991526116" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <img src="/whatsapp.png" alt="whatsapp" className="h-6 w-6" />
              </a>
              <a href="mailto:contato@passione-rh.com.br" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <img src="/e-mail.png" alt="e-mail" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/passione.rh" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <img src="/instagram.png" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/passione-rh" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/passione.rh" className="text-gray-300 hover:text-red-400 transition-colors duration-200">
                <img src="/facebook.png" alt="Facebook" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LINKS RÁPIDOS</h3>
            <ul className="space-y-2 uppercase">
              <li>
                <Link 
                  to="/quem-somos" 
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  QUEM SOMOS
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos" 
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="/portal-vagas" 
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Portal de Vagas
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Fale com a Passione */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Fale com a Passione</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
              <img src="/whatsapp.png" alt="whatsapp" className="h-6 w-6" />
                <span className="text-gray-300">(61) 99152 6116</span>
              </div>
              <div className="flex items-center space-x-3">
              <img src="/e-mail.png" alt="e-mail" className="h-6 w-6" />
                <span className="text-gray-300">contato@passione-rh.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
              <img src="/instagram.png" alt="Instagram" className="h-6 w-6" />
                <span className="text-gray-300">@passione.rh</span>
              </div>
              <div className="flex items-center space-x-3">
              <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
                <span className="text-gray-300">@passione rh</span>
              </div>
              <div className="flex items-center space-x-3">
              <img src="/facebook.png" alt="facebook" className="h-6 w-6" />
                <span className="text-gray-300">@passione.rh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PASSIONE GENTE & GESTÃO EMPRESARIAL. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;