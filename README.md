# 🌸 Period Cramp Soother

> **AI-powered menstrual health companion** - Track cycles, manage symptoms, and get personalized care with our intelligent web platform.

[![Live Demo](https://img.shields.io/badge/🚀-Live_Demo-ff69b4)](https://period-cramp-soother.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-89.5%25-3178c6)](https://github.com/codetil/Period-Cramp-Soother)
[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-000000)](https://nextjs.org/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

 **AI Wellness Assistant** - Smart chatbot powered by Groq LLaMA for personalized health advice  
 **Analytics Dashboard** - Real-time cycle tracking with AI-powered insights  
 **Medication Tracker** - Smart reminders and dosage monitoring  
 **Nearby Washrooms** - Find clean facilities when you need them most  
 **IoT Device Control** - Connect and manage heat therapy devices  
 **Responsive Design** - Seamless experience across all devices  

## Quick Start

```bash
# Clone the repository
git clone https://github.com/codetil/Period-Cramp-Soother.git
cd Period-Cramp-Soother

# Install dependencies with Bun
bun install

# Set up environment variables
cp .env.example .env.local
# Add your API keys (Clerk, Groq, OpenAI)

# Run development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the magic happen! ✨

##  Tech Stack

**Frontend**  
Next.js 15.2.4 • TypeScript • Tailwind CSS • Framer Motion  

**UI Components**  
Shadcn/UI • Radix UI • Lucide Icons   

**Backend & AI**  
• Clerk Auth • Groq AI • OpenAI SDK  

**Analytics**  
Vercel Analytics • Speed Insights  

**Tools**  
Bun Runtime • ESLint • PostCSS  

## 📁 Architecture

```
app/
├── (root)/           # Landing & public pages
├── (dash)/           # Protected dashboard
│   ├── chatbot/      # AI assistant interface
│   ├── dashboard/    # Main dashboard
│   └── docs/         # Documentation
├── api/
│   └── chat/         # AI chat API endpoint
└── layout.tsx        # Root layout with Clerk

components/
├── ui/               # Base UI components
├── magicui/          # Enhanced animations
├── features.tsx      # Feature showcase
└── app-sidebar.tsx   # Navigation

lib/
├── docs.ts           # Navigation config
└── utils.ts          # Utilities
```



##  Core Features

###  AI Chatbot
- **Groq LLaMA 3.3 70B** - Advanced conversational AI
- **Women's Health Focus** - Specialized wellness guidance
- **Real-time Streaming** - Instant responses
- **Contextual Support** - Personalized advice

###  Smart Analytics
- **Cycle Tracking** - Automated pattern recognition
- **Pain Visualization** - Interactive charts with Nivo
- **Predictive Insights** - AI-powered forecasting
- **Progress Monitoring** - Long-term health trends

###  Security & Privacy
- **Clerk Authentication** - Enterprise-grade security
- **Protected Routes** - Middleware-based access control
- **Data Encryption** - Secure health data storage
- **GDPR Compliant** - Privacy-first design



##  Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'feat: add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request



##  Performance

- **89.5% TypeScript** - Type-safe codebase
- **Vercel Analytics** - Real-time performance monitoring
- **Speed Insights** - Core Web Vitals optimization
- **Turbo Mode** - Lightning-fast development

##  Roadmap

- [ ] Advanced AI recommendations
- [ ] Wearable device integration  
- [ ] Telehealth provider connections
- [ ] Multi-language support
- [ ] Social community features
- [ ] Advanced analytics dashboard


<div align="center">
  <p><strong>Built with ❤️ for women's health empowerment</strong></p>
  <p>
    <a href="https://period-cramp-soother.vercel.app">🌐 Live Demo</a> • 
    <a href="https://github.com/codetil/Period-Cramp-Soother/issues">🐛 Issues</a> • 
    <a href="https://github.com/codetil/Period-Cramp-Soother/graphs/contributors">👥 Team</a>
  </p>
</div>