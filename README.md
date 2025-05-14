# SIWAKRITCV

A modern, responsive personal CV/portfolio web app built with React and Tailwind CSS.

## Features

- Responsive navigation bar with mobile side menu
- Language selection (EN/中文/ไทย)
- Dark/Light theme toggle
- Social media links
- Animated, stylish UI

## Responsive Navbar

- On mobile, only the logo and hamburger button are visible.
- Tapping the hamburger opens a side menu with navigation, language, theme, and social icons.
- Overlay closes the menu when tapped outside, and body scroll is locked while open.
- Desktop shows full navigation, language, theme, and social icons inline.

## Code Structure

- `src/components/Navbar.jsx` — Main navigation bar logic
- `src/hooks/useDarkMode.jsx` — Dark mode context/hook
- `src/hooks/useLanguage.jsx` — Language context/hook
- `src/pages/` — Main content pages
- `public/Img/` — Images and assets

## Getting Started

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Edit `src/data/translations.jsx` and `src/data/locales/` for language content.
- Update images in `public/Img/`.

---

Feel free to fork and customize for your own portfolio!

