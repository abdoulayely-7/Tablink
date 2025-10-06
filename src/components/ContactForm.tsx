import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.nom || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Envoi des données du formulaire:", formData);

    try {
      const response = await fetch("https://portfolio-mailer-u8me.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Réponse de l'API:", response.status, response.statusText);

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        setFormData({ nom: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Erreur API:", errorData);
        toast({
          title: "Erreur",
          description: "Échec de l'envoi du message. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
      toast({
        title: "Erreur",
        description: "Problème de connexion. Veuillez vérifier votre connexion internet.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Me contacter</h2>
        <p className="text-sm text-muted-foreground">
          Une question ? Un projet ? N'hésitez pas à me contacter
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Votre nom"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Textarea
            placeholder="Votre message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[120px] resize-none"
          />
        </div>

        <Button type="submit" className="w-full h-12 gap-2" disabled={isLoading}>
          <Send className="w-4 h-4" />
          {isLoading ? "Envoi en cours..." : "Envoyer le message"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
