import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Database, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Your Data is Protected",
      content: "We use industry-standard encryption to protect all your personal information. Your email, password, and browsing data are secured with AES-256 encryption both in transit and at rest."
    },
    {
      icon: Lock,
      title: "Password Security",
      content: "We never store your passwords in plain text. All passwords are hashed using bcrypt with salt, making them virtually impossible to reverse-engineer. Even our team cannot access your actual password."
    },
    {
      icon: Eye,
      title: "What We Collect",
      content: "We only collect what's necessary: your email for account management, your tab data to provide our service, and basic usage analytics to improve TabKeep. We never sell your data to third parties."
    },
    {
      icon: Database,
      title: "Data Storage",
      content: "Your data is stored on secure servers located in the United States. We comply with all applicable data protection regulations and maintain strict access controls to your information."
    },
    {
      icon: Trash2,
      title: "Data Deletion",
      content: "You have the right to delete your account and all associated data at any time. Upon request, we will permanently remove all your information from our servers within 30 days."
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              At TabKeep, your privacy is our priority. We believe in transparency and want you to understand exactly how we handle your information. This policy explains what data we collect, how we use it, and how we keep it safe.
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

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                Questions?
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about our privacy practices, please contact us through the TabKeep extension or reach out to our support team.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Privacy;
