# DefolTech Website

This is the institutional website of **DefolTech**, developed using Vite and React. The site features a modern **Glassmorphism** visual identity and full internationalization (i18n).

## Objective

To promote DefolTech, a technology company focused on:
- Development of Proprietary Solutions
- Development of Customized Solutions
- Strategic Partnerships for the Creation of Innovative Solutions
- Software Factory

The website includes sections such as: Vision, Mission, Values, About, Services, Partners, and Contact.

## Technologies Used

- **Vite** (Fast and efficient build tool)
- **React + TypeScript**
- **Custom CSS / Glassmorphism** (Modern UI styling without heavy UI frameworks)
- **React Context API** (Native, lightweight i18n implementation for Multi-language support)
- **Framer Motion** (Fluid animations)
- **React Scroll Parallax** (Parallax scrolling effects)

## Available Commands (Makefile)

We use a `Makefile` at the root of the project to simplify the execution of common commands:

- `make install`: Installs project dependencies.
- `make dev`: Runs the local development server.
- `make build`: Generates the production build.
- `make preview`: Previews the production build locally.

Alternatively, you can use npm directly:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. To generate the production build (for GitHub Pages):
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

The project is already configured in `vite.config.ts` with `base: './'`. This allows the build (`/dist`) to be correctly served from GitHub Pages using relative paths. If you host the site on a repository subpath (e.g., `https://my-user.github.io/my-repo/`), change the `base` configuration in `vite.config.ts` to `/my-repo/`.

## Metadata Configuration

To change information such as phone number, email, and social links, please refer to the [metadata.md](./metadata.md) file.

