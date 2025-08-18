# RPG Showcase

A static website showcasing tabletop RPG games with detailed descriptions, atmospheres, and recommendations.

## How it does

This SvelteKit application presents a curated collection of tabletop RPGs in an interactive showcase format:

- **Homepage**: Grid of game tiles with cover images
- **Game pages**: Detailed information including pitch, atmosphere, unique selling points, comparisons, target audience, and genres
- **Navigation**: Auto-generated menu from game data
- **Content**: Markdown-supported descriptions in German

## Tech Stack

- **SvelteKit 5** with TypeScript
- **TailwindCSS 4** + DaisyUI for styling
- **Static site generation** via `@sveltejs/adapter-static`
- **Content management** through JSON files

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Content Structure

Games are defined as JSON files in `src/lib/content/` following the `Metadata` interface:

```typescript
interface Metadata {
  imageUrl: string;
  title: string;
  pitch: string[];
  atmosphere: string[];
  usps: string[];
  comparisons: string[];
  audience: string[];
  genres: string[];
}
```

Each file becomes a route automatically - filename determines the URL slug.

## Deployment

Configured for static deployment (GitHub Pages compatible) with automatic prerendering of all routes.
