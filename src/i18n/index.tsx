import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Define the translations dictionary
const translations = {
  pt: {
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.features': 'Funcionalidades',
    'nav.partners': 'Parceiros',
    'nav.contact': 'Contato',
    'hero.title.pre': 'Engenharia de Software de ',
    'hero.title.highlight': 'Excelência',
    'hero.subtitle': 'Elevamos o patamar tecnológico do seu negócio através de soluções robustas, design premium e engenharia de software de alta performance.',
    'hero.btn.services': 'Nossos Serviços',
    'hero.btn.contact': 'Fale Conosco',
    'about.title': 'Quem Somos',
    'about.subtitle': 'Comprometidos com a excelência técnica e a geração de valor real para nossos clientes através da inovação.',
    'about.mission.title': 'Nossa Missão',
    'about.mission.desc': 'Tornar a tecnologia acessível, desenvolvendo soluções de alto impacto que impulsionem a transformação digital de nossos clientes e parceiros.',
    'about.vision.title': 'Nossa Visão',
    'about.vision.desc': 'Ser reconhecida como a principal parceira tecnológica em inovação, excelência em engenharia de software e geração de valor.',
    'about.values.title': 'Nossos Valores',
    'about.values.desc': 'Inovação contínua, compromisso com a qualidade, transparência, foco em resultados e parcerias duradouras.',
    'features.title': 'Soluções para diversas áreas e finalidades',
    'features.subtitle': 'Desenvolvemos tecnologia para otimizar operações, independentemente do segmento ou complexidade.',
    'features.f1': 'Logística e Estoque',
    'features.f1.desc': 'Controle total de entradas, saídas e movimentações em tempo real.',
    'features.f2': 'Gestão Financeira',
    'features.f2.desc': 'Fluxo de caixa, DRE e automação de conciliação bancária.',
    'features.f3': 'Varejo e Compras',
    'features.f3.desc': 'Gestão de PDV, fornecedores e otimização de pedidos.',
    'features.f4': 'Saúde e Clínicas',
    'features.f4.desc': 'Prontuários eletrônicos, gestão de pacientes e faturamento.',
    'features.f5': 'Recursos Humanos',
    'features.f5.desc': 'Gestão de talentos, folha e indicadores de performance.',
    'features.f6': 'Integração de Pagamentos',
    'features.f6.desc': 'Checkout transparente, recorrência e múltiplas adquirentes.',
    'features.f7': 'Educação e EAD',
    'features.f7.desc': 'Plataformas de ensino, gestão acadêmica e conteúdo digital.',
    'features.f8': 'E-commerce',
    'features.f8.desc': 'Lojas virtuais escaláveis com foco em conversão e UX.',
    'features.f9': 'Indústria e Produção',
    'features.f9.desc': 'PCP, controle de qualidade e gestão de chão de fábrica.',
    'features.f10': 'Automação de Processos',
    'features.f10.desc': 'Workflow inteligente para reduzir custos e erros operacionais.',
    'features.f11': 'CRM e Vendas',
    'features.f11.desc': 'Pipeline de vendas, automação de marketing e retenção.',
    'features.f12': 'Agendamentos',
    'features.f12.desc': 'Sistemas de reserva online com sincronização em tempo real.',
    'features.desc': 'Solução escalável e sob medida.',
    'services.title': 'O que fazemos',
    'services.subtitle': 'Oferecemos um portfólio completo de serviços de engenharia de software e inovação tecnológica.',
    'services.s1.title': 'Soluções Próprias',
    'services.s1.desc': 'Produtos de software prontos e robustos desenvolvidos pela DefolTech para otimizar o seu negócio.',
    'services.s2.title': 'Soluções Customizadas',
    'services.s2.desc': 'Sistemas criados sob medida para atender exatamente às necessidades exclusivas da sua operação.',
    'services.s3.title': 'Fábrica de Software',
    'services.s3.desc': 'Terceirização de desenvolvimento com profissionais altamente qualificados e entrega ágil.',
    'services.s4.title': 'Parcerias Estratégicas',
    'services.s4.desc': 'Juntos criamos soluções inovadoras. Seja nosso parceiro de tecnologia e impulsione seus resultados.',
    'partners.title': 'Nossos Parceiros',
    'partners.subtitle': 'Empresas que confiam e colaboram com a DefolTech.',
    'parallax.text': 'A tecnologia que impulsiona o seu negócio está aqui.',
    'contact.title': 'Vamos conversar?',
    'contact.subtitle': 'Entre em contato para discutirmos o seu próximo projeto ou uma parceria de sucesso.',
    'contact.box.title': 'Contato Direto',
    'contact.box.email': 'Email:',
    'contact.box.phone': 'Telefone:',
    'contact.box.location': 'Localização:',
    'contact.btn': 'Enviar Email',
    'cta.title': 'Comece agora mesmo com a DefolTech',
    'cta.btn': 'Criar minha conta grátis',
    'footer.rights': 'DefolTech. Todos os direitos reservados.',
    'footer.description': 'Transformando ideias em software. Excelência, inovação e agilidade para o seu negócio.',
    'footer.nav_title': 'Navegação',
    'footer.social_title': 'Redes Sociais',
    'footer.contact_title': 'Contato',
    'contact.address': 'Rua Heitor Stockler de França, 396 - Curitiba, PR'
  },
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.features': 'Features',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'hero.title.pre': 'Software Engineering of ',
    'hero.title.highlight': 'Excellence',
    'hero.subtitle': 'Elevating your business\'s technological standard through robust solutions, premium design, and high-performance software engineering.',
    'hero.btn.services': 'Our Services',
    'hero.btn.contact': 'Contact Us',
    'about.title': 'Who We Are',
    'about.subtitle': 'Committed to technical excellence and generating real value for our clients through innovation.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To make technology accessible by developing high-impact solutions that drive the digital transformation of our clients and partners.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be recognized as the main technological partner in innovation, software engineering excellence, and value generation.',
    'about.values.title': 'Our Values',
    'about.values.desc': 'Continuous innovation, commitment to quality, transparency, focus on results, and lasting partnerships.',
    'features.title': 'Solutions for various areas and purposes',
    'features.subtitle': 'We develop technology to optimize operations, regardless of segment or complexity.',
    'features.f1': 'Logistics and Inventory',
    'features.f1.desc': 'Total control of inputs, outputs, and movements in real-time.',
    'features.f2': 'Financial Management',
    'features.f2.desc': 'Cash flow, P&L, and bank reconciliation automation.',
    'features.f3': 'Retail and Purchasing',
    'features.f3.desc': 'POS management, suppliers, and order optimization.',
    'features.f4': 'Health and Clinics',
    'features.f4.desc': 'Electronic health records, patient management, and billing.',
    'features.f5': 'Human Resources',
    'features.f5.desc': 'Talent management, payroll, and performance indicators.',
    'features.f6': 'Payment Integration',
    'features.f6.desc': 'Transparent checkout, recurrence, and multiple acquirers.',
    'features.f7': 'Education and E-learning',
    'features.f7.desc': 'Learning platforms, academic management, and digital content.',
    'features.f8': 'E-commerce',
    'features.f8.desc': 'Scalable virtual stores focusing on conversion and UX.',
    'features.f9': 'Industry and Production',
    'features.f9.desc': 'PPC, quality control, and shop floor management.',
    'features.f10': 'Process Automation',
    'features.f10.desc': 'Intelligent workflow to reduce costs and operational errors.',
    'features.f11': 'CRM and Sales',
    'features.f11.desc': 'Sales pipeline, marketing automation, and retention.',
    'features.f12': 'Scheduling',
    'features.f12.desc': 'Online booking systems with real-time synchronization.',
    'features.desc': 'Scalable and tailor-made solution.',
    'services.title': 'What we do',
    'services.subtitle': 'We offer a complete portfolio of software engineering and technological innovation services.',
    'services.s1.title': 'Proprietary Solutions',
    'services.s1.desc': 'Ready and robust software products developed by DefolTech to optimize your business.',
    'services.s2.title': 'Customized Solutions',
    'services.s2.desc': 'Systems created to exactly meet the exclusive needs of your operation.',
    'services.s3.title': 'Software Factory',
    'services.s3.desc': 'Development outsourcing with highly qualified professionals and agile delivery.',
    'services.s4.title': 'Strategic Partnerships',
    'services.s4.desc': 'Together we create innovative solutions. Be our technology partner and boost your results.',
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Companies that trust and collaborate with DefolTech.',
    'parallax.text': 'The technology that drives your business is here.',
    'contact.title': 'Let\'s talk?',
    'contact.subtitle': 'Get in touch to discuss your next project or a successful partnership.',
    'contact.box.title': 'Direct Contact',
    'contact.box.email': 'Email:',
    'contact.box.phone': 'Phone:',
    'contact.box.location': 'Location:',
    'contact.btn': 'Send Email',
    'cta.title': 'Start right now with DefolTech',
    'cta.btn': 'Create my free account',
    'footer.rights': 'DefolTech. All rights reserved.',
    'footer.description': 'Transforming ideas into software. Excellence, innovation, and agility for your business.',
    'footer.nav_title': 'Navigation',
    'footer.social_title': 'Social Networks',
    'footer.contact_title': 'Contact',
    'contact.address': '396 Heitor Stockler de França St - Curitiba, PR'
  }
};

type Language = 'pt' | 'en';

interface I18nContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.pt) => string;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: keyof typeof translations.pt): string => {
    return translations[language][key] || translations['pt'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider');
  }
  return context;
};
