# Quick Start Guide: IDEIA LLC Corporate Brochure Website

**Date**: 2026-05-05  
**Status**: Ready for development  
**Duration**: ~5 minutes to get started locally

## Prerequisites

- **Node.js**: v18 LTS or higher (download from https://nodejs.org)
- **npm** or **yarn**: Comes with Node.js
- **Git**: Version control (download from https://git-scm.com)
- **Code Editor**: VS Code recommended (https://code.visualstudio.com)

Verify installation:
```bash
node --version    # Should be v18+
npm --version     # Should be v9+
git --version     # Should be v2.0+
```

---

## 1. Clone & Setup Project

```bash
# Clone the repository
git clone https://github.com/ideia-llc/website.git
cd ideia-llc-website

# Install dependencies
npm install

# Create environment configuration
cp .env.example .env.local
```

**What does `npm install` do?**
- Downloads React, Tailwind, Vite, and all dependencies to `node_modules/`
- Creates `package-lock.json` for reproducible installs

---

## 2. Configure Environment

Edit `.env.local` with your settings:

```env
# Google Analytics
VITE_GA_ID=G-XXXXXXXXXXXX

# API endpoint for contact form
VITE_API_ENDPOINT=https://api.example.com

# Environment
NODE_ENV=development
```

**Where to get `VITE_GA_ID`?**
1. Go to Google Analytics 4 (https://analytics.google.com)
2. Create a property for your website
3. Copy the "G-" ID from Settings → Data Streams

**Where to get `VITE_API_ENDPOINT`?**
- For local dev: use a mock endpoint or serverless function URL
- Examples: Vercel Edge Functions, AWS Lambda, Firebase Functions
- Contact form will POST to `{VITE_API_ENDPOINT}/api/contact`

---

## 3. Start Development Server

```bash
npm run dev
```

Output:
```
  VITE v5.0.0  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Press h to show help
```

**Open your browser** → http://localhost:5173

You should see the website with hot module replacement (HMR) enabled. Edit any file in `src/` and see changes instantly! 🎉

---

## 4. Project Structure Overview

```
src/
├── components/          # Reusable React components
│   ├── common/         # Buttons, Cards, Inputs
│   ├── layout/         # Header, Footer, Navigation
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   └── features/       # Feature components (Form, Cards)
│
├── pages/              # Full page components
│   ├── Home.tsx        # Main landing page
│   ├── NotFound.tsx    # 404 page
│   └── PrivacyPolicy.tsx
│
├── hooks/              # Custom React hooks
│   ├── useContactForm.ts
│   ├── useScrollSpy.ts
│   └── useMediaQuery.ts
│
├── utils/              # Utility functions
│   ├── validation.ts   # Form validation schemas
│   ├── api.ts         # API client
│   └── constants.ts   # App-wide constants
│
├── data/               # Static content
│   ├── services.ts    # Service offerings
│   ├── team.ts        # Leadership data
│   └── nav-links.ts   # Navigation menu
│
├── types/              # TypeScript types
│   └── index.ts       # Export all types
│
└── styles/             # Global styles (minimal)
    └── globals.css
```

---

## 5. Common Development Tasks

### Run Tests

```bash
# Unit & integration tests
npm run test

# Watch mode (re-run on file changes)
npm run test:watch

# Coverage report
npm run test:coverage

# Accessibility audit
npm run test:accessibility
```

### Check TypeScript

```bash
# Type check without building
npm run type-check
```

### Format & Lint Code

```bash
# Format code with Prettier
npm run format

# Lint with ESLint
npm run lint

# Both lint and format
npm run lint:fix
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Output goes to dist/
# Test production build locally
npm run preview
```

### Performance Audit

```bash
# Run Lighthouse audit
npm run lighthouse

# Check against performance budget
npm run lighthouse:ci

# View report in dist/reports/lighthouse.html
```

---

## 6. Key Files to Know

| File | Purpose |
|------|---------|
| `package.json` | Project dependencies and scripts |
| `vite.config.ts` | Build tool configuration |
| `tailwind.config.ts` | Design tokens (colors, spacing, fonts) |
| `tsconfig.json` | TypeScript configuration |
| `.env.local` | Environment variables (git-ignored) |
| `src/App.tsx` | Root component |
| `src/index.tsx` | React entry point |
| `public/robots.txt` | SEO search engine configuration |
| `public/sitemap.xml` | SEO site map for indexing |

---

## 7. Component Development Workflow

### Create a New Component

Example: Create a new `ServiceCard` component

1. **Create file** → `src/components/features/ServiceCard.tsx`

```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  cta?: { text: string; href: string };
}

export function ServiceCard({ title, description, icon, cta }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {icon && <img src={icon} alt="" className="w-12 h-12 mb-4" />}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      {cta && (
        <a href={cta.href} className="text-blue-600 hover:text-blue-700 font-medium">
          {cta.text} →
        </a>
      )}
    </div>
  );
}
```

2. **Export from index** → `src/components/features/index.ts`

```typescript
export { ServiceCard } from './ServiceCard';
```

3. **Use in page** → `src/pages/Services.tsx`

```typescript
import { ServiceCard } from '@/components/features';

export function Services() {
  return (
    <ServiceCard
      title="CIO & CISO Advisory"
      description="Strategic guidance on security..."
      icon="shield-icon.svg"
      cta={{ text: 'Learn More', href: '/services/advisory' }}
    />
  );
}
```

4. **Test it** → `src/components/features/ServiceCard.test.tsx`

```typescript
import { render, screen } from '@testing-library/react';
import { ServiceCard } from './ServiceCard';

test('renders service card with title and description', () => {
  render(
    <ServiceCard
      title="Test Service"
      description="This is a test"
    />
  );
  expect(screen.getByText('Test Service')).toBeInTheDocument();
});
```

---

## 8. Form Handling

### Use the Contact Form Hook

```typescript
import { useContactForm } from '@/hooks/useContactForm';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';

export function ContactForm() {
  const { values, errors, isSubmitting, submitStatus, handleChange, handleSubmit } = useContactForm();

  if (submitStatus === 'success') {
    return <p className="text-green-600">Thank you! We'll be in touch soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        name="name"
        label="Full Name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        required
      />

      <Input
        name="email"
        label="Email Address"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <textarea
        name="message"
        placeholder="Your message..."
        value={values.message}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
        required
      />

      {submitStatus === 'error' && (
        <p className="text-red-600">Failed to submit. Please try again.</p>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
```

---

## 9. Styling with Tailwind

### Key Tailwind Concepts

**Utility-First**: Use Tailwind classes directly in JSX
```tsx
<div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Click Me</button>
</div>
```

**Responsive Design**: Use breakpoints (mobile-first)
```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Full width on mobile, half on tablet, 1/3 on desktop */}
</div>
```

**Design Tokens from Config**:
```tsx
// All colors, spacing, sizes defined in tailwind.config.ts
<div className="bg-primary text-white p-6 rounded-lg">
  {/* Uses custom primary color from config */}
</div>
```

**No Custom CSS**: Everything via Tailwind utilities. Never create `.css` files for component styling!

---

## 10. Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes
# ...edit files...

# Stage changes
git add src/

# Commit with conventional commit message
git commit -m "feat: add contact form validation"

# Push to GitHub
git push origin feature/your-feature-name

# Create Pull Request on GitHub
# Request review, get feedback, merge when ready
```

**Conventional Commit Prefixes**:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style (formatting, no functional change)
- `refactor:` - Code refactor (no functional change)
- `test:` - Add/update tests
- `chore:` - Build/tooling updates

---

## 11. Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Production deployment
netlify deploy --prod
```

**Automatic Deployments**:
Both Vercel and Netlify auto-deploy on `git push` to `main` branch. No need to run commands!

---

## 12. Troubleshooting

### Port 5173 already in use

```bash
# Find process using port
lsof -i :5173

# Kill it
kill -9 <PID>

# Or use different port
npm run dev -- --port 3000
```

### Module not found error

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors in IDE

```bash
# Reload TypeScript in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"
```

### Tailwind classes not applying

```bash
# Make sure Tailwind is configured correctly
# Check tailwind.config.ts has content paths
# Rebuild Tailwind
npm run dev
```

---

## 13. Resources

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Testing Library**: https://testing-library.com
- **Vercel Docs**: https://vercel.com/docs
- **Constitutional Principles**: See `.specify/memory/constitution.md`

---

## 14. Getting Help

1. **Check the Plan**: See [plan.md](plan.md) for technical context and architecture
2. **Review Data Model**: See [data-model.md](data-model.md) for entity definitions
3. **Check Constitution**: See [.specify/memory/constitution.md](../../.specify/memory/constitution.md) for core principles
4. **Search Issues**: GitHub Issues for known problems
5. **Ask Team**: Slack/team communication channel

---

## Next Steps

1. ✅ Run `npm run dev` and verify homepage loads
2. ✅ Create a branch: `git checkout -b feature/add-component`
3. ✅ Create your first component in `src/components/`
4. ✅ Test it: `npm run test`
5. ✅ Commit & push: `git push origin feature/...`
6. ✅ Create Pull Request for review

**Happy coding! 🚀**

---

**Quick Start Status**: ✅ COMPLETE  
**Estimated Time**: ~5 minutes for initial setup  
**Next**: Run `npm run dev` and start developing!
