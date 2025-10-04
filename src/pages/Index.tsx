import ProfileHeader from "@/components/ProfileHeader";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="fixed inset-0 opacity-30" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container max-w-2xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="space-y-8">
          {/* Profile Card */}
          <div className="glass-card glow-effect rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] card-hover animate-fade-in-up">
            <ProfileHeader />
          </div>

          {/* Social Links Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] card-hover animate-fade-in-up-delay-1">
            <SocialLinks />
          </div>

          {/* Contact Form Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] card-hover animate-fade-in-up-delay-2">
            <ContactForm />
          </div>

          {/* Footer */}
          <footer className="text-center text-sm text-muted-foreground/60 py-6">
            <p>© {currentYear} Abdoulaye Ly – Tous droits réservés</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
