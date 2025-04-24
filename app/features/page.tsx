/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Lock, MessageSquare, Search, Settings, Upload, Zap } from "lucide-react"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {Bot,ArrowLeft} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container py-12 space-y-16 max-w-7xl">
         <header className="border-b py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary animate-pulse-slow" />
            <span className="text-xl font-bold gradient-text">KnowledgeAI</span>
          </Link>
          <Link
            href="/"
            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>
      <ScrollReveal>
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">All Features</h1>
          <p className="text-xl text-muted-foreground">
            Explore all the powerful features that make our platform the perfect solution for building your team&apos;s
            knowledge assistant.
          </p>
        </div>
      </ScrollReveal>

      {/* Chat Assistant */}
      <section id="chat-assistant" className="space-y-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Chat Assistant</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Web-based chatbot interface</h3>
              <p className="text-muted-foreground">
                Engage with a simple, user-friendly chatbot interface that helps onboard new employees and provides
                answers from the company's knowledge base.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Answers based on company documents</h3>
              <p className="text-muted-foreground">
                Retrieves and provides responses based on the company's policies, employee manuals, and documents.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Source links in responses</h3>
              <p className="text-muted-foreground">
                Every answer provided by the assistant comes with a reference link directly pointing to the relevant
                section of the company documentation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Multi-user context memory</h3>
              <p className="text-muted-foreground">
                Remembers individual users and their previous interactions to provide personalized responses across
                sessions, such as remembering an employee's role or previous queries.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Semantic search capabilities</h3>
              <p className="text-muted-foreground">
                Ability to search documents intelligently, understanding the context and meaning behind queries instead
                of just matching keywords.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Customizable assistant behavior</h3>
              <p className="text-muted-foreground">
                Tailor the assistant to respond in specific ways based on company tone or preferred communication style.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Document Management & Upload */}
      <section id="document-management" className="space-y-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Document Management & Upload</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Upload PDFs, Word, CSVs</h3>
              <p className="text-muted-foreground">
                Supports uploading various document types commonly used by the company, such as employee handbooks,
                operational guides, and training materials.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Tag and categorize docs</h3>
              <p className="text-muted-foreground">
                Allows categorization of documents into groups (e.g., HR policies, Safety protocols, IT procedures) for
                easy navigation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Automatic chunking</h3>
              <p className="text-muted-foreground">
                Large documents are automatically divided into smaller, manageable sections for easy access.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Smart summaries & metadata extraction</h3>
              <p className="text-muted-foreground">
                Extract key points and metadata from documents for quick summaries and improved searchability.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Drag-and-drop document uploads</h3>
              <p className="text-muted-foreground">
                Easy and intuitive document upload experience with progress indicators.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Document versioning</h3>
              <p className="text-muted-foreground">
                Keep track of multiple versions of documents, ensuring that employees always have access to the latest
                version.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Admin Panel */}
      <section id="admin-panel" className="space-y-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Admin Panel</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Manage documents</h3>
              <p className="text-muted-foreground">
                Admins can upload, categorize, and manage access to all company documents.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">View chat history</h3>
              <p className="text-muted-foreground">
                Admins can review chat interactions between employees and the assistant to improve responses or gather
                insights.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Add other admins</h3>
              <p className="text-muted-foreground">Control who has admin privileges and assign roles.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Toggle document access controls</h3>
              <p className="text-muted-foreground">
                Set permissions to determine who can view or edit specific documents based on employee roles or
                departments.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Custom assistant prompts</h3>
              <p className="text-muted-foreground">
                Set up specific instructions and responses for the assistant to ensure that it answers in line with
                company policies.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Audit logs</h3>
              <p className="text-muted-foreground">
                Keep a record of all actions performed by admins and users for accountability and security purposes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Permissions & Security */}
      <section id="permissions-security" className="space-y-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Permissions & Security</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Role-based access</h3>
              <p className="text-muted-foreground">
                Grant different permissions based on user roles (e.g., Admin, Employee, HR) to control access to
                documents and features.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Invite team members</h3>
              <p className="text-muted-foreground">
                Invite employees into the system and assign them appropriate roles based on their job function.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Secure document handling</h3>
              <p className="text-muted-foreground">
                Encrypted storage and access control ensure that sensitive company data remains protected.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Data privacy compliance</h3>
              <p className="text-muted-foreground">
                The app follows best practices to comply with data protection regulations, ensuring secure handling of
                employee and company information.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search & Analytics */}
      <section id="search-analytics" className="space-y-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Search & Analytics</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Full-text document search</h3>
              <p className="text-muted-foreground">
                Employees can search the entire document library quickly to find relevant company policies and
                information.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Filtered search</h3>
              <p className="text-muted-foreground">
                Search results can be filtered based on tags, document type, or categories to narrow down the scope.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">User behavior analytics</h3>
              <p className="text-muted-foreground">
                Track how employees interact with the assistant and what documents they frequently access, helping to
                optimize onboarding and improve training content.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Query insights</h3>
              <p className="text-muted-foreground">
                Get insights into the most commonly asked questions by employees and optimize document content
                accordingly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="space-y-8">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Coming Soon (Next 6 Months)</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={100}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Third-party integrations</h3>
              <p className="text-muted-foreground">
                Integration with external tools such as HR management systems, employee management platforms, or
                learning management systems (LMS) will be available to help enrich the employee onboarding experience.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">API Integrations</h3>
              <p className="text-muted-foreground">
                Custom API integrations to sync documents and data with other systems or applications for more seamless
                workflows (e.g., integrating with internal tools like payroll systems or employee directories).
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Voice Assistant Integration</h3>
              <p className="text-muted-foreground">
                Integration with voice-based assistants (e.g., Alexa, Google Assistant) for hands-free access to company
                knowledge.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">Real-time document sync</h3>
              <p className="text-muted-foreground">
                Sync content across multiple platforms and devices for a consistent experience, especially when
                documents are updated in real-time.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-background rounded-xl p-6 shadow-sm border space-y-4 h-full">
              <h3 className="text-xl font-semibold">External content sync</h3>
              <p className="text-muted-foreground">
                Sync external content (e.g., from Google Docs, SharePoint, or internal wikis) to automatically include
                in the company knowledge base.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal delay={350}>
        <div className="bg-primary/5 rounded-xl p-8 md:p-12 text-center space-y-6 border">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your team's knowledge assistant today and transform how your organization shares information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="font-medium">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
