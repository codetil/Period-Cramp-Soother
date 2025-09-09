# Period Cramp Soother - GitHub Copilot Instructions

**ALWAYS follow these instructions first and fallback to additional search and context gathering only if the information here is incomplete or found to be in error.**

Period Cramp Soother is a Next.js 15 web application built with TypeScript, Tailwind CSS, and Bun runtime. It's an AI-powered menstrual health companion that helps track cycles, manage symptoms, and provides personalized care through an intelligent web platform with IoT device integration.

## Essential Setup & Build Commands

**CRITICAL: All build/install commands below have been validated and timed. NEVER CANCEL these operations early.**

### Prerequisites & Installation
```bash
# Install Bun runtime (if not available)
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# Navigate to repository root
cd /home/runner/work/Period-Cramp-Soother/Period-Cramp-Soother

# Install dependencies - takes ~30 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
bun install

# Set up environment variables (required for dev server)
cp .env.example .env.local
# Note: Add real API keys to .env.local for full functionality
```

### Build & Development Commands
```bash
# Lint the codebase - takes ~3 seconds
bun run lint
# Note: Shows deprecation warning - "next lint is deprecated", this is expected

# Development server - takes ~2 seconds to start. NEVER CANCEL. Set timeout to 60+ seconds.
bun run dev
# Accessible at http://localhost:3000
# Note: Will show auth errors without proper Clerk API keys

# Production build - FAILS in restricted environments due to Google Fonts network access
bun run build
# Error: "Failed to fetch `Inter` from Google Fonts" - EXPECTED in sandboxed environments

# Production server (only works after successful build)
bun run start
```

## Known Limitations & Workarounds

### Build Failures (EXPECTED)
- **Google Fonts Network Error**: Build fails with "ENOTFOUND fonts.googleapis.com" in restricted environments
- **Workaround**: Development server works fine; production builds require network access to fonts.googleapis.com
- **Status**: This is an environment limitation, not a code issue

### Runtime Requirements
- **Clerk Authentication**: Dev server requires valid `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
- **AI Services**: Full chatbot functionality needs `GROQ_API_KEY` and `OPENAI_API_KEY`
- **Without Keys**: App shows "Publishable key not valid" error but structure remains accessible

## Application Architecture

### Directory Structure
```
app/
├── (root)/           # Public pages (landing, auth)
├── (dash)/           # Protected dashboard routes
│   ├── chatbot/      # AI assistant interface
│   ├── dashboard/    # Main analytics dashboard
│   ├── medication/   # Medication tracking
│   ├── washroom/     # Washroom locator
│   └── settings/     # User preferences
├── api/
│   ├── chat/         # AI chat API endpoint (Groq/OpenAI)
│   └── washroom/     # Washroom API
└── layout.tsx        # Root layout with Clerk auth

components/
├── ui/               # shadcn/ui base components
├── magicui/          # Enhanced animations (sparkles, word-rotate)
├── features.tsx      # Landing page feature showcase
└── app-sidebar.tsx   # Dashboard navigation
```

### Key Technologies
- **Frontend**: Next.js 15.3.0, TypeScript, Tailwind CSS, Framer Motion
- **UI Components**: shadcn/ui, Radix UI primitives
- **Authentication**: Clerk (middleware-protected routes)
- **AI Services**: Groq LLaMA 3.3 70B, OpenAI integration
- **Runtime**: Bun (fast JavaScript runtime)

## Development Workflow

### Making Changes
```bash
# Always lint before committing
bun run lint

# Test changes in development
bun run dev
# Manually test routes: /, /dashboard, /chatbot

# Check route protection
# - Public: /, /sign-in, /sign-up
# - Protected: /dashboard/*, /chatbot/*
```

### Validation Steps
**ALWAYS perform these validation steps after making changes:**

1. **Lint Check**: `bun run lint` - should show only minor warnings
2. **Dev Server**: `bun run dev` - should start without TypeScript errors
3. **Route Testing**: Manually test both public and protected routes
4. **Component Testing**: Verify UI components render correctly
5. **Mobile Responsiveness**: Test responsive design at various screen sizes

### Manual Testing Scenarios
**CRITICAL: After making changes, ALWAYS test these user flows:**

1. **Development Server Validation**:
   - Run `bun run dev` and verify server starts in ~2 seconds
   - Visit http://localhost:3000
   - **EXPECTED**: See "Publishable key not valid" error (this is normal without API keys)
   - **VERIFY**: Next.js error overlay shows proper error information
   - **VERIFY**: Hot module replacement (HMR) works during development

2. **Landing Page Structure** (when auth is properly configured):
   - Verify animated components load (SparklesText, WordRotate, AnimatedShinyText)
   - Check responsive design at different screen sizes
   - Test navigation buttons functionality

3. **Route Protection Testing**:
   - Access protected routes like `/dashboard` or `/chatbot`
   - **EXPECTED**: Redirect to authentication or show auth errors
   - Verify middleware protection is working correctly

4. **Component Validation**:
   - Test shadcn/ui components render without console errors
   - Verify Tailwind CSS classes apply correctly
   - Check TypeScript compilation has no errors

## Common Issues & Solutions

### "Publishable key not valid" Error
- **Cause**: Missing or invalid Clerk API keys
- **Solution**: Add valid keys to `.env.local` or expect this error in development
- **Visual**: Red error overlay saying "Publishable key not valid" - this is expected behavior

### Next Lint Deprecation Warning
- **Warning**: "`next lint` is deprecated and will be removed in Next.js 16"
- **Status**: Expected warning, linting still functions correctly
- **Action**: Continue using `bun run lint` - migration not required for this project

### Build Fails with Font Errors
- **Cause**: Network restrictions preventing Google Fonts access
- **Solution**: This is expected in sandboxed environments; dev server works fine

### TypeScript Errors
- **Check**: Ensure all imports use correct path aliases (`@/components`, `@/lib`)
- **Verify**: TypeScript strict mode is enabled; address type errors immediately

### Styling Issues
- **CSS Variables**: Custom CSS variables defined in `app/globals.css`
- **Tailwind Config**: Extended configuration in `tailwind.config.ts`
- **Component Library**: shadcn/ui components in `components/ui/`

## Time Expectations

**NEVER CANCEL these operations. Wait for completion:**

- **Dependency Install**: 34 seconds (set 120s timeout)
- **Lint Check**: 3 seconds (set 30s timeout)  
- **Dev Server Start**: 2 seconds (set 60s timeout)
- **Build Process**: 13 seconds before network failure (set 120s timeout)
- **Component Hot Reload**: 1-3 seconds

## Quick Reference

### Most Frequently Modified Files
```bash
# Main application pages
app/(root)/page.tsx              # Landing page
app/(dash)/dashboard/page.tsx    # Dashboard
app/(dash)/chatbot/page.tsx      # AI chatbot

# Shared components  
components/features.tsx          # Feature showcase
components/app-sidebar.tsx       # Navigation
components/ui/                   # Base UI components

# Configuration
tailwind.config.ts              # Styling configuration
middleware.ts                   # Route protection
next.config.mjs                 # Next.js configuration
```

### Essential Commands Quick List
```bash
bun install                     # Install dependencies (34s)
bun run lint                    # Lint code (3s) - shows deprecation warning  
bun run dev                     # Start dev server (2s)
cp .env.example .env.local      # Environment setup
```

**Remember**: This application requires external API keys for full functionality, but development and testing can proceed without them using the working components and static features.