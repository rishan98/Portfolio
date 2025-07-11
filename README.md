# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, modern design, and excellent user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Friendly**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the following files to customize your portfolio:

- **Hero Section** (`src/components/Hero.tsx`): Update your name, title, and description
- **About Section** (`src/components/About.tsx`): Modify your story and experience
- **Skills Section** (`src/components/Skills.tsx`): Update your skills and proficiency levels
- **Projects Section** (`src/components/Projects.tsx`): Add your own projects
- **Contact Section** (`src/components/Contact.tsx`): Update contact information

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind config
- **Animations**: Customize animations in the Framer Motion components

### Content
- **Images**: Replace project images with your own
- **Links**: Update social media and project links
- **Contact Form**: Connect to your preferred backend service

## 📱 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal story and experience overview
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Showcase of your work with project cards
5. **Contact**: Contact form and contact information
6. **Footer**: Social links and additional information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🎯 Performance Tips

- Optimize images before adding them to the project
- Use lazy loading for images
- Minimize bundle size by removing unused dependencies
- Enable gzip compression on your hosting provider

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Made with ❤️ using React & TypeScript** 