# du.ae Website Replica - Claude Code Instructions

## Rules
- Short answers, no emoji, plain text
- Ask before testing, creating files, or searching directories
- One step at a time unless asked for full list
- Minimal tokens - no over-explanations or summaries unless asked
- Do NOT start building until explicitly told to start
- Design system and theming come first, then components from Figma

## Session Start
1. Read `docs/state.json` - know where we left off
2. Read `docs/10_request.md` - know current task
3. If no task in 10_request.md, ask the user

## Session End
1. Update `docs/09_changelog.md` with changes made
2. Update `docs/state.json` with current state

## Project

**du-web** is a replica of the du.ae telecom website built with Next.js.

- **Framework**: Next.js 16.1.6 (App Router, Turbopack), React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui (Radix UI), tw-animate-css
- **Design source**: Figma (connected via MCP)
- **Goal**: Pixel-accurate replica of du.ae with proper theming, components, and responsiveness

## File Map
```
docs/
  state.json                -- project state (read on start, update on end)
  09_changelog.md           -- change history
  10_request.md             -- current task
app/
  layout.tsx                -- root layout
  page.tsx                  -- home page
  globals.css               -- global styles + Tailwind config
components/
  ui/                       -- shadcn/ui primitives (button, etc.)
  theme-provider.tsx        -- next-themes dark/light provider
hooks/                      -- custom React hooks
lib/
  utils.ts                  -- cn() utility (clsx + tailwind-merge)
public/                     -- static assets (images, icons, fonts)
```

## Tech Stack
| Concern | Library |
|---------|---------|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui (Radix UI primitives) |
| Theming | next-themes |
| Animations | tw-animate-css |
| Icons | lucide-react |
| Utilities | clsx, tailwind-merge, class-variance-authority |

## Workflow
1. **Theming first** - Establish du.ae design system (colors, typography, spacing, shadows)
2. **Components from Figma** - Build each component using Figma MCP for accuracy
3. **Pages** - Assemble components into page layouts
4. **Responsiveness** - Mobile-first, match du.ae breakpoints

## Changelog Prefixes
`[SETUP]` Project setup | `[THEME]` Design system/theming | `[UI]` Components | `[PAGE]` Page layouts | `[ASSET]` Images/icons/fonts | `[CONFIG]` Configuration
