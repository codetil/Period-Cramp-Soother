import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import { Bot } from "lucide-react";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";


const itemsSample: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Period Tracker",
        meta: "84 completed",
        description: "Track your menstrual cycle and receive personalized insights",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
    },
    {
        title: "AI Chatbot",
        meta: "12 new",
        description: "Your personal wellness assistant providing expert guidance on women's health and period care",
        icon: <Bot className="w-4 h-4 text-purple-500" />,
        tags: ["Chatbot", "AI"],
        colSpan: 2,
    },
    {
        title: "Near by Washrooms",
        meta: "6 regions",
        description: "Find the nearest washrooms with clean facilities",
        icon: <Star className="w-4 h-4 text-yellow-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
    },
];

function Features() {
    return <BentoGrid items={itemsSample} />
}

export { Features }