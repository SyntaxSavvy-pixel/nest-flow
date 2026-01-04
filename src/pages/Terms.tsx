import { Link } from "react-router-dom";
import { ArrowLeft, FileText, AlertTriangle, Monitor, Scale, Ban } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: "By using TabKeep, you agree to these Terms of Service. If you do not agree with any part of these terms, you may not use our service. We reserve the right to update these terms at any time, and continued use constitutes acceptance of any changes."
    },
    {
      icon: Monitor,
      title: "Device Limits",
      content: "Each TabKeep account may be connected to a maximum of 15 devices, depending on your subscription tier. Free accounts are limited to 2 devices, Pro to 5, Annual to 10, and Lifetime to 15. Connecting more devices than your plan allows is a violation of these terms."
    },
    {
      icon: Ban,
      title: "Prohibited Activities",
      content: "You may not: attempt to reverse-engineer, modify, or tamper with the TabKeep extension code; use automated tools to abuse our services; share your account credentials with others; or use TabKeep for any illegal activities. Violation may result in immediate account termination."
    },
    {
      icon: AlertTriangle,
      title: "Service Availability",
      content: "While we strive for 99.9% uptime, TabKeep is provided \"as is\" without warranties. We are not liable for any data loss, service interruptions, or damages arising from use of our service. We recommend regularly exporting your important tab collections."
    },
    {
      icon: Scale,
      title: "Governing Law",
      content: "These Terms of Service are governed by the laws of the United States of America. Any disputes arising from these terms shall be resolved in accordance with US federal and state laws. By using TabKeep, you consent to this jurisdiction."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Welcome to TabKeep. These terms outline the rules and regulations for using our tab management extension. Please read them carefully to ensure a smooth experience for everyone.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-destructive/5 rounded-2xl border border-destructive/20">
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                Violations
              </h2>
              <p className="text-muted-foreground">
                Violating these terms may result in temporary suspension or permanent termination of your account. If you believe your account was wrongfully terminated, please contact our support team through the extension.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Terms;
