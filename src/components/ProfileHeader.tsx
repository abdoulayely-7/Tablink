import profileImage from "@/assets/profile.jpg";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6">
      <div className="relative group">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-40 blur-2xl animate-pulse" 
             style={{ boxShadow: 'var(--shadow-glow)' }} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
        <img
          src={profileImage}
          alt="Abdoulaye Ly - Développeur Full-Stack"
          className="relative w-36 h-36 rounded-full object-top object-cover border-2 border-primary/30 shadow-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all"
        />
      </div>
      
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
          Abdoulaye Ly
        </h1>
        <p className="text-xl md:text-2xl text-foreground font-semibold animate-fade-in-up-delay-1">
          Développeur Full-Stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base animate-fade-in-up-delay-2">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">React</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Angular</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Spring Boot</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Laravel</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">NodeJS</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">TypeScript</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Express</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Python</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Flask</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Flutter</span>
        </div>
      </div>

      <p className="max-w-md text-muted-foreground leading-relaxed px-4 text-base md:text-lg animate-fade-in-up-delay-3">
        Passionné par le développement logiciel et les architectures propres, j'aime concevoir
        des applications performantes, maintenables et bien structurées. J'ai obtenu ma licence
        en Génie Logiciel à ISI (2021-2024) et je termine actuellement ma formation à l'Orange Digital Center.
      </p>
    </div>
  );
};

export default ProfileHeader;
