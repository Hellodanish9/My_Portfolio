# 🚀 Modern Portfolio Website

A stunning, fully responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, modern design, and excellent user experience.

## ✨ Features

- **🎨 Modern Design**: Clean, professional design with glass morphism effects
- **📱 Fully Responsive**: Works perfectly on all devices and screen sizes
- **🎭 Smooth Animations**: Beautiful animations powered by Framer Motion
- **⚡ Fast Performance**: Optimized for speed and performance
- **🎯 SEO Friendly**: Built with SEO best practices
- **🔧 Easy Customization**: Simple to customize with your information
- **📧 Contact Form**: Functional contact form with validation
- **🌙 Dark Theme**: Elegant dark theme with gradient accents

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Vercel (Recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Personal Information

Update your personal information in the following files:

1. **Hero Section** (`src/components/Hero.tsx`)
   - Change "Your Name" to your actual name
   - Update the description
   - Modify social media links

2. **About Section** (`src/components/About.tsx`)
   - Update personal information (name, location, email, phone)
   - Modify the "Who I Am" section
   - Update statistics

3. **Skills Section** (`src/components/Skills.tsx`)
   - Customize skill categories and proficiency levels
   - Add/remove technologies as needed

4. **Projects Section** (`src/components/Projects.tsx`)
   - Replace sample projects with your actual projects
   - Update project links and descriptions
   - Add your own project images

5. **Experience Section** (`src/components/Experience.tsx`)
   - Update work experience with your actual history
   - Modify job descriptions and achievements

6. **Contact Section** (`src/components/Contact.tsx`)
   - Update contact information
   - Modify social media links

### Styling

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify fonts in `tailwind.config.js` and `public/index.html`
- **Animations**: Customize animations in `src/index.css`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a React app
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - In your Vercel dashboard, go to project settings
   - Add your custom domain
   - Update DNS settings as instructed

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-website"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization Tips

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Changing Colors

Update the primary colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#your-color-here',
    // ... other shades
  }
}
```

### Adding Animations

Use Framer Motion for new animations:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Your content here
</motion.div>
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [React](https://reactjs.org/) for the framework

## 📞 Support

If you have any questions or need help, feel free to reach out:

- Email: your.email@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

⭐ **Star this repository if you found it helpful!**
