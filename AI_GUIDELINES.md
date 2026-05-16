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
- **MIME Type Error e Configuração de Root**: O erro original ocorria porque caminhos relativos (como `./src/main.tsx` e `base: './'`) confundiam o Vite durante o deploy via Actions em repositórios de usuário (que rodam na raiz `/`). A solução foi restaurar os caminhos absolutos padrões do Vite.
- **⏱️ Delay de Propagação (CDN Cache)**: Repositórios do tipo `username.github.io` sofrem com cache agressivo do GitHub Pages. Mesmo após o GitHub Actions reportar "Success", o site pode levar de 2 a 10 minutos para refletir a nova versão. **Ao realizar manutenções, SEMPRE considere esse tempo e instrua o teste via aba anônima ou `Ctrl + F5` antes de assumir que o deploy falhou.**
