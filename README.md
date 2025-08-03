# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Portfolio Website

A professional portfolio website for Gonçalo Frutuoso, Software Engineer at Sky UK.

## 🚀 Features

- **Modern Design**: Clean, professional interface with subtle animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Vite for fast development and optimized builds
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Friendly**: Optimized meta tags and structure

## 🛠️ Tech Stack

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization

## 📂 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Main navigation component
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # About me section
│   ├── Education.tsx    # Education background
│   ├── Experience.tsx   # Professional experience
│   ├── Projects.tsx     # Featured projects
│   └── Contact.tsx      # Contact information
├── App.tsx              # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Sections

1. **Hero** - Professional introduction with call-to-action buttons
2. **About** - Personal background and core technologies
3. **Education** - University education and academic achievements
4. **Experience** - Professional experience at Sky UK
5. **Projects** - Featured projects including Set&Scale and Gomoku game
6. **Contact** - Contact information and message form

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📝 Customization

### Personal Information

Update the following components with your personal information:

- `Hero.tsx` - Name, title, and description
- `About.tsx` - Personal background and skills
- `Education.tsx` - University and education details
- `Experience.tsx` - Professional experience
- `Projects.tsx` - Your featured projects
- `Contact.tsx` - Contact information and links

### Styling

- Modify `tailwind.config.js` to customize colors and design tokens
- Update `src/index.css` for global styles
- Customize component styles directly in the TSX files

### Content

- Replace placeholder content with your actual information
- Update project descriptions and technologies
- Add your real contact information and social links

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the built files from `dist`
- **AWS S3**: Upload the `dist` folder contents

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork it and customize it for your own use!

---

Built with ❤️ by Gonçalo Frutuoso

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
