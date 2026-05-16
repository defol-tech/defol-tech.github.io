# 🤖 DefolTech Website: AI Implementation Guidelines

Este documento define as regras críticas para manutenção do site institucional da DefolTech.

## 🏛 Princípios de Design e Deploy

1.  **Estratégia de Deploy (RECOMENDADA)**: Utilizamos **GitHub Actions**.
    - O repositório DEVE estar configurado em *Settings > Pages > Source* como **"GitHub Actions"**.
    - NUNCA suba a pasta `dist` para o repositório. O build é feito automaticamente no servidor.

2.  **Caminhos Absolutos no Root**: Sempre utilize o padrão absoluto do Vite para o arquivo principal de entrada e a configuração base.
    - O `vite.config.ts` **NÃO** deve ter `base: './'` (deixe o padrão `/`), pois isso quebra o roteamento em repositórios de usuário (`username.github.io`).
    - `index.html` deve ter `<script type="module" src="/src/main.tsx"></script>`. O Vite fará a substituição corretamente durante o build.

3.  **Tecnologias**: React + Vite + Vanilla CSS. Evite dependências pesadas de UI a menos que solicitado.

## 📝 Histórico de Solução (Learning Log)
- **MIME Type Error**: Resolvido garantindo o uso de caminhos relativos e a configuração correta do GitHub Actions como fonte de deploy.
