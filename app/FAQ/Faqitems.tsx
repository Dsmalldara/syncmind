/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from 'react';

import { Shield, FileText, CheckCircle, Settings, Calendar } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button} from "@/components/ui/button"
// Fixed FadeIn component that doesn't rely on tailwindcss-animate
const FadeIn = ({ children, delay = 0, className = "" }:{children:any, delay:any, className:any}) => (
  <div 
    className={`transition-all duration-700 ${className}`}
    style={{ 
      opacity: 1,
      transform: 'translateY(0)',
      transition: `opacity 700ms ease, transform 700ms ease`,
      transitionDelay: `${delay}ms`
    }}
  >
    {children}
  </div>
);

// FAQ Item with icon
interface FAQItemProps {
  icon: React.ComponentType<{ size: number }>;
  question: string;
  answer: string;
  delay: number;
}

 
export const FAQItem: React.FC<FAQItemProps> = ({ icon: Icon, question, answer, delay }) => {
  return (
    <FadeIn delay={delay} className="">
      <AccordionItem value={question.replace(/\s+/g, '-').toLowerCase()} className="border border-muted rounded-lg mb-4 overflow-hidden">
        <AccordionTrigger className="px-6 py-4 hover:bg-muted/30 transition-colors data-[state=open]:bg-muted/20">
          <div className="flex items-center gap-3 text-left">
            <div className="bg-primary/10 p-2 rounded-full text-primary">
              <Icon size={20} />
            </div>
            <h3 className="text-normal font-500">{question}</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 text-muted-foreground">
          <div className="pl-11">{answer}</div>
        </AccordionContent>
      </AccordionItem>
    </FadeIn>
  );
};


export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "security", name: "Security" },
    { id: "features", name: "Features" },
    { id: "implementation", name: "Implementation" }
  ];
  
  const faqs = [
    {
      id: 1,
      question: "How secure is my company's data?",
      answer: "Your data is encrypted in transit and at rest. We use industry-standard security practices and never share your data with third parties. Your documents are only used to train your specific AI assistant.",
      icon: Shield,
      category: "security"
    },
    {
      id: 2,
      question: "What file formats do you support?",
      answer: "We support PDF, DOCX, TXT, CSV, HTML, and Markdown files. We also integrate with Notion, Google Drive, and other knowledge management tools to import your existing documentation.",
      icon: FileText,
      category: "features"
    },
    {
      id: 3,
      question: "How accurate are the AI responses?",
      answer: "Our AI is trained to only answer based on your uploaded documents. It provides source links with every response so you can verify the information. The accuracy improves as you add more documents and provide feedback.",
      icon: CheckCircle,
      category: "features"
    },
    {
      id: 4,
      question: "Can I customize the AI assistant?",
      answer: "Yes, you can customize the name, avatar, and tone of your AI assistant. You can also set custom instructions for how it should respond to certain types of questions.",
      icon: Settings,
      category: "implementation"
    },
    {
      id: 5,
      question: "When will the product be available?",
      answer: "We're currently in private beta and will be launching to the public soon. Join our waitlist to be notified when we launch and to get early access.",
      icon: Calendar,
      category: "implementation"
    },
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Simplified dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25" 
           style={{
             backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
             backgroundSize: '16px 16px'
           }}>
      </div>
      
      <div className="container max-w-4xl relative z-10">
        <FadeIn delay={0} className="text-center space-y-4 mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-medium mb-2">Knowledge Base</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about KnowledgeAI</p>
        </FadeIn>

        <FadeIn delay={100} className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </FadeIn>

        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
              delay={150 + (index * 50)}
            />
          ))}
        </Accordion>
        
        <FadeIn delay={400} className="mt-12 rounded-lg border border-primary/20 bg-secondary p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Still have questions?</h3>
              <p className="text-muted-foreground">We&apos;re here to help with any questions you have</p>
            </div>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
