# 🚀 Guia de Deploy e Solução de Problemas

Este documento contém o conhecimento adquirido sobre o deploy deste projeto no GitHub Pages para evitar a recorrência de erros de carregamento de scripts (MIME type error).

## 🛠️ Configuração Recomendada

### 1. Vite Base Path
No arquivo `vite.config.ts`, o `base` deve ser configurado como `'./'`.
- **Por que?** Isso torna todos os caminhos de assets relativos. Se o GitHub Pages tentar servir o site de uma subpasta ou se houver qualquer redirecionamento, os arquivos `.js` e `.css` ainda serão encontrados.

### 2. Caminhos de Assets no Código
Sempre utilize caminhos relativos para imagens e outros arquivos na pasta `public`:
- **Certo:** `./images/logo.png` ou `images/logo.png`
- **Errado:** `/images/logo.png`

### 3. Fonte do Deploy no GitHub
Para que o site funcione corretamente (especialmente sendo um projeto React/Vite), o GitHub **DEVE** estar configurado para usar **GitHub Actions** como fonte de deploy.

**Como verificar/ajustar:**
1. Vá nas configurações do repositório no GitHub (**Settings**).
2. No menu lateral, clique em **Pages**.
3. Em **Build and deployment > Source**, selecione **"GitHub Actions"**.

## 🔴 Erro: "Failed to load module script (MIME type application/octet-stream)"

### O que causa este erro?
Este erro ocorre quando o navegador tenta carregar um arquivo JavaScript, mas o servidor responde com um tipo de arquivo genérico ou incorreto. No GitHub Pages, isso geralmente acontece por dois motivos:

1.  **Caminho Incorreto:** O navegador pede `/assets/file.js`, mas o arquivo está em outro lugar. O GitHub retorna uma página de erro 404 (HTML), e o navegador tenta ler esse HTML como se fosse JavaScript.
2.  **Servindo Código Fonte:** Se o GitHub estiver configurado para servir a branch `main` diretamente (sem Actions), ele tentará servir o `index.html` da raiz, que aponta para `/src/main.tsx`. O navegador não entende `.tsx` e o GitHub o envia como `application/octet-stream`, causando o erro.

## ✅ Checklist de Deploy
- [ ] Rodar `npm run build` localmente para verificar se não há erros de TypeScript.
- [ ] Garantir que o `vite.config.ts` está com `base: './'`.
- [ ] Dar `push` na branch `main`.
- [ ] Acompanhar o progresso na aba **Actions** do GitHub.
- [ ] Verificar se o site em `defol-tech.github.io` carregou sem erros no console.
