/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Bot, Check, FileText, Lock, MessageSquare, Settings, Sparkles, Upload } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SequentialTypingEffect } from "@/components/typing-effect"
import Navbar from "@/app/Navbar"
import { FileUploadAnimation } from "@/components/file-upload-animation"
import FAQItem from "@/app/FAQ/Faqitems"
import { HeroEmailForm } from "./hero-email-form"

const messages = [
  {
    type: "question" as const,
    text: "What's our company's vacation policy?"
  },
  {
    type: "answer" as const,
    text: "Our company offers 20 days of paid vacation per year for full-time employees. Vacation days accrue monthly and can be carried over to the next year with a maximum of 5 days. Requests should be submitted at least 2 weeks in advance through the HR portal.",
    sources: ["Employee Handbook.pdf (p.12)"]
  },
  {
    type: "question" as const,
    text: "When is our next product release scheduled?"
  },
  {
    type: "answer" as const,
    text: "The next product release (v2.5) is scheduled for October 15th, 2025. Key features include the new analytics dashboard, improved API integration, and custom reporting tools. The development team is currently in the final QA phase, and all critical bugs have been addressed. Marketing materials are being prepared for the launch announcement.",
    sources: ["Product Roadmap 2025.pdf", "Release Schedule.xlsx"]
  },
  {
    type: "question" as const,
    text: "What's the process for requesting new equipment?"
  },
  {
    type: "answer" as const,
    text: "To request new equipment, follow these steps: 1) Submit a request through the IT portal with equipment details and business justification, 2) Get approval from your department manager, 3) Once approved, IT will process the order within 5 business days, 4) You'll receive an email notification when the equipment arrives and is ready for pickup or delivery. For urgent requests, contact the IT helpdesk directly at extension 4567.",
    sources: ["IT Procedures Manual.pdf (p.23)", "Equipment Request Form.docx"]
  }
]
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-5 -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight ai-assistant-title">
              AI Assistant for Teams
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
  Think of it as your own personal assistant, powered by AI and trained on your company&apos;s docs to answer questions and help you get up to speed.
  </p>

          </div>

          <div className="max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
           <HeroEmailForm/>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
          <ScrollReveal delay={100}>
          <div
            className="relative mx-auto rounded-xl border bg-background shadow-xl overflow-hidden max-w-4xl animate-fade-in-up gradient-border"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="bg-muted p-4 border-b">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="font-medium">SyncMind Assistant</span>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-4">
                <div className="bg-muted p-3 rounded-lg text-muted-foreground">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="font-medium">What's our refund policy for enterprise customers?</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <SequentialTypingEffect
                    messages="Enterprise customers have a 30-day money-back guarantee from the date of purchase. To request a refund, the account administrator should contact our support team at support@company.com with their account details."
                    delay={1000}
                    typingSpeed={10}
                  />
                  <div className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "4s" }}>
                    <p>
                      Sources: <span className="text-primary underline cursor-pointer">Enterprise Terms.pdf</span>,{" "}
                      <span className="text-primary underline cursor-pointer">Refund Policy.docx</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </section>

        {/* Features Section */}
    <section id="features" className="bg-muted py-24 relative overflow-hidden">
  <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
  <div className="container space-y-12">
    <ScrollReveal>
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text">Core Features</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to build your team&apos;s knowledge assistant
        </p>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ScrollReveal delay={100}>
        <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 feature-card h-[450px]">
          <div className="bg-primary/10 p-3 rounded-full w-fit">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Chat Assistant</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Web-based chatbot interface</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Answers based on your content</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Source links in responses</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Multi-user context memory</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Semantic search capabilities</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Real-time response updates</span></li>
           
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 feature-card h-[450px]">
          <div className="bg-primary/10 p-3 rounded-full w-fit">
            <Upload className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Document Upload</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Upload PDFs, Word, CSVs</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Manual text editor</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Tag and categorize docs</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Automatic chunking</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Smart summaries & metadata extraction</span></li> 
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Automatic file format detection</span></li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 feature-card h-[450px]">
          <div className="bg-primary/10 p-3 rounded-full w-fit">
            <Settings className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Admin Panel</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Manage documents</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>View chat history</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Toggle access controls</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Custom assistant prompts</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Audit logs and user analytics</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Data usage reporting</span></li>
          </ul>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={400}>
        <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 feature-card h-[450px]">
          <div className="bg-primary/10 p-3 rounded-full w-fit">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Permissions</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Control access</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Role-based permissions</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Invite team members</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Secure data handling</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Granular doc-level access</span></li>
            <li className="flex items-start gap-2"><Check className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>Single sign-on (SSO) support</span></li>
          </ul>
        </div>
      </ScrollReveal>
    </div>

    <ScrollReveal delay={500}>
      <div className="text-center">
       <Link href="features">
       <Button
          size="lg"
          variant="outline"
          className="border-2 hover:border-primary hover:text-primary transition-colors group"
        >
          View All Features
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
       </Link>
      </div>
    </ScrollReveal>
  </div>
</section>



        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
          <div className="container space-y-12">
            <ScrollReveal>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">How It Works</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Get up and running in minutes, not weeks
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="bg-primary/10 p-4 rounded-full transition-transform group-hover:scale-110 duration-300">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">1. Upload Your Documents</h3>
                  <p className="text-muted-foreground">
                    Connect to your knowledge sources or upload documents directly. We support PDFs, Word docs, Notion,
                    Google Drive, and more.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="bg-primary/10 p-4 rounded-full transition-transform group-hover:scale-110 duration-300">
                    <Sparkles className="h-8 w-8 text-primary animate-pulse-slow" />
                  </div>
                  <h3 className="text-xl font-bold">2. AI Processes Your Data</h3>
                  <p className="text-muted-foreground">
                    Our AI automatically chunks, indexes, and prepares your documents for retrieval. No technical setup
                    required.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="bg-primary/10 p-4 rounded-full transition-transform group-hover:scale-110 duration-300">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">3. Start Chatting</h3>
                  <p className="text-muted-foreground">
                    Your team can immediately start asking questions and getting accurate answers based on your
                    company's knowledge.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <p  className="flex items-center justify-center font-bold mb-6">
                Click and checkout various ways you can upload, process and get results in chats
              </p>
              <div className="max-w-4xl mx-auto rounded-xl border bg-background shadow-xl overflow-hidden gradient-border">
                <Tabs defaultValue="upload" className="w-full">
                  <div className="border-b px-6">
                  <TabsList className="bg-transparent border-b-0 h-14">
  <TabsTrigger
    value="upload"
    className="mb-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-4px mt-2 data-[state=active]:font-semibold transition-colors hover:border-b-2 hover:border-muted/50 hover:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
  >
    Upload
  </TabsTrigger>
  <TabsTrigger
    value="process"
    className="mb-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-4px mt-2 data-[state=active]:font-semibold transition-colors hover:border-b-2 hover:border-muted/50 hover:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
  >
    Process
  </TabsTrigger>
  <TabsTrigger
    value="chat"
    className="mb-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-4px mt-2 data-[state=active]:font-semibold transition-colors hover:border-b-2 hover:border-muted/50 hover:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
  >
    Chat
  </TabsTrigger>
</TabsList>

                  </div>
                  <TabsContent value="upload" className="p-6 space-y-4 mt-0">
                    <FileUploadAnimation />
                  </TabsContent>
                  <TabsContent value="process" className="p-6 space-y-4 mt-0">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-accent w-3/4 shimmer"></div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Processing: Company Handbook.pdf (75%)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-accent w-full"></div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Completed: Product Documentation.docx</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-primary to-accent w-1/3 shimmer"></div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Processing: Customer FAQs.pdf (33%)</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="chat" className="p-6 space-y-4 mt-0">
                  <div className="p-6 space-y-4 mt-0">
      <SequentialTypingEffect 
        messages={messages}
        delay={300}  // Faster initial delay
        typingSpeed={12}  // Faster typing speed
        pauseBetweenMessages={1000}  // Slightly shorter pause between messages
      />
    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-muted py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
          <div className="container space-y-12">
            <ScrollReveal>
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">Simple, Transparent Pricing</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose the plan that fits your team's needs
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={100}>
  <div className="bg-background rounded-xl p-8 border shadow-sm flex flex-col transition-transform hover:-translate-y-2 duration-300">
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Starter</h3>
      <p className="text-muted-foreground">For small teams getting started with AI onboarding</p>
    </div>
    <div className="my-6">
      <span className="text-4xl font-bold gradient-text">$19</span>
      <span className="text-muted-foreground">/month</span>
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Up to 5 team members</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>100 MB document storage</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>100 questions per day</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Basic document upload & AI answers</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Email support</span>
      </li>
    </ul>
   <Link href="/waitlist">
   <Button
      variant="outline"
      className="w-full border-2 hover:border-primary hover:text-primary transition-colors"
    >
      Join Waitlist
    </Button>
   </Link>
  </div>
</ScrollReveal>


              <ScrollReveal delay={200}>
  <div className="bg-background rounded-xl p-8 border-2 shadow-lg flex flex-col relative transition-transform hover:-translate-y-2 duration-300 border-custom-animation">
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
      Most Popular
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Pro</h3>
      <p className="text-muted-foreground">For growing teams and scaling startups</p>
    </div>
    <div className="my-6">
      <span className="text-4xl font-bold gradient-text">$49</span>
      <span className="text-muted-foreground">/month</span>
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Up to 20 team members</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>1 GB document storage</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Unlimited questions & semantic search</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Advanced document management & tagging</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Google Drive integration</span>
      </li>
     
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Select between Notion or Slack bot integration</span>
      </li>
    </ul>
    <Link href="/waitlist">
    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
      Join Waitlist
    </Button>
    </Link>
  </div>
</ScrollReveal>


<ScrollReveal delay={300}>
  <div className="bg-background rounded-xl p-8 border shadow-sm flex flex-col transition-transform hover:-translate-y-2 duration-300">
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Enterprise</h3>
      <p className="text-muted-foreground">Tailored onboarding AI for large teams</p>
    </div>
    <div className="my-6">
      <span className="text-4xl font-bold gradient-text">Custom</span>
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Unlimited team members</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Custom document storage & scaling</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Unlimited AI-powered Q&A</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Select your preferred bot integration (Slack, Notion, or Microsoft Teams)</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Custom onboarding workflows</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Dedicated account manager</span>
      </li>
      <li className="flex items-start gap-2">
        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <span>Flexible deployment options (Cloud/Self-hosted)</span>
      </li>
    </ul>
    <Button
      variant="outline"
      className="w-full border-2 hover:border-primary hover:text-primary transition-colors"
    >
      Contact Sales
    </Button>
  </div>
</ScrollReveal>


            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQItem/>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
          <div className="container text-center space-y-6 relative z-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                Ready to transform how your team accesses knowledge?
              </h2>
              <p className="text-base mt-6 max-w-2xl mx-auto">
                Join our waitlist today and be the first to know when we launch.
              </p>
              <div className="max-w-md mx-auto mt-6">
                {/* <form className="flex w-full space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-2 focus-visible:ring-accent"
                    required
                  />
                  <Link href="/waitlist">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    Join Waitlist
                  </Button>
                  </Link>
                </form> */}
                <HeroEmailForm/>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

    </div>
  )
}
