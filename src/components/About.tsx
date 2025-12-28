import profile from '../assets/Rakesh.png'
const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Frontend Developer skilled in React.js and JavaScript.
Experienced in creating responsive and user-friendly web applications with API integration and good performance.
Focused on reusable UI components and teamwork in agile projects..
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive
                user experiences. Every project is an opportunity to learn something
                new and make a positive impact.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={profile} alt="person" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-xl -z-10" />
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default About;
