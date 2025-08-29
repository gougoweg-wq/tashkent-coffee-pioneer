import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import coffeeArt from "@/assets/coffee-art.jpg";

const About = () => {
  const features = [
    {
      title: "Premium Coffee Beans",
      description: "Sourced from the finest coffee regions around the world",
      icon: "☕"
    },
    {
      title: "Expert Baristas",
      description: "Skilled craftspeople who perfect every cup with passion",
      icon: "👨‍🍳"
    },
    {
      title: "Cozy Atmosphere",
      description: "A warm space where culture and comfort meet",
      icon: "🏠"
    },
    {
      title: "Local Heritage",
      description: "Celebrating Tashkent's rich coffee culture and traditions",
      icon: "🌟"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Place No.1
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just a coffee bar - we're Tashkent's premier destination for coffee lovers seeking exceptional quality and authentic experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={coffeeArt} 
              alt="Beautiful latte art being created by our expert baristas"
              className="rounded-lg shadow-warm w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Crafting Perfect Moments
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Place No.1, we believe that every cup tells a story. Located in the vibrant heart of Tashkent, we've created a space where the ancient tradition of coffee meets modern artistry.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our passionate team of baristas transforms carefully selected beans into extraordinary experiences, one cup at a time. We're not just serving coffee - we're sharing a piece of our culture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-gold transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;