# Metadados do Website DefolTech

Preencha os valores abaixo conforme necessário. Estes dados serão futuramente consumidos pela aplicação para exibir suas informações de contato e links reais.

```json
{
  "companyName": "DefolTech",
  "email": "defoltech@gmail.com",
  "phone": "+55 41 98406-8509",
  "whatsapp": "https://wa.me/5541984068509",
  "website": "https://defol-tech.github.io",
  "linkedin": "https://linkedin.com/company/defol-tech",
  "instagram": "https://instagram.com/defol-tech",
  "address": "Rua Heitor Stockler de França, 396 - Centro Cívico, Curitiba - PR, 80530-000",
  "images": {
    "logo_light": "/path/to/your/defol_logo_light.png",
    "logo_dark": "/path/to/your/defol_logo_dark.png",
    "hero_graphic": "/path/to/your/hero_illustration_or_dashboard.png"
  }
}
```

> **Instruções sobre Imagens:**
> Atualmente, o redesign do site utiliza emojis/texto puro (ex: `🚀` na Hero Section e a palavra `DefolTech` no lugar da logo) para compor a estética Glassmorphism, de forma muito parecida com o repositório do BRDD.
> 
> **Qual seria o ideal?**
> 1. **Logo:** Uma imagem em `.png` com fundo transparente e a escrita branca para contrastar no fundo escuro, ou apenas o símbolo SVG.
> 2. **Hero Graphic:** O ideal é que a `hero_graphic` seja uma ilustração moderna isométrica 3D, uma captura limpa de um Dashboard ou uma arte abstrata com tons de Ciano/Roxo para combinar com a identidade visual da DefolTech.
> 
> Quando você possuir os arquivos reais, coloque as imagens dentro de `apps/website/public/images/` e substitua as tags `<div className="glass">🚀</div>` e `<div className="logo"><span>DefolTech</span></div>` em `App.tsx` pelas respectivas tags `<img src="/images/nome-do-arquivo.png" />`.
