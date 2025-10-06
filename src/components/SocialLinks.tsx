import { Globe, Linkedin, Github, FileText, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  variant?: "default" | "outline";
}

const SocialLinks = () => {
  const links: SocialLink[] = [
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Portfolio",
      href: "https://abdoulaye-ly-dev-folio.vercel.app/",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdoulaye-ly-b53884229/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/abdoulayely-7",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Télécharger mon CV",
      href: "/CV_Abdoulaye_Ly.pdf",
      variant: "default",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email professionnel",
      href: "mailto:lydevtech@gmail.com",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=+221773795383&text=Salut+Abdoulaye",
    },
  ];

  return (
    <div className="w-full space-y-3">
      {links.map((link, index) => (
        <Button
          key={index}
          variant={link.variant || "outline"}
          className="w-full justify-start gap-4 h-auto py-4 px-6 link-hover group relative overflow-hidden"
          asChild
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer" {...(link.label === "Télécharger mon CV" && { download: "CV_Abdoulaye_Ly.pdf" })}>
            {(link.label === "Télécharger mon CV" || link.label === "WhatsApp") && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
            <span className="relative z-10">{link.icon}</span>
            <span className="font-medium relative z-10">{link.label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
