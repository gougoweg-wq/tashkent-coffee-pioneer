import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import coffeeArt from "@/assets/coffee-art.jpg";

const About = () => {
  const features = [
    {
      title: "Специальный кофе",
      description: "Профессионально приготовленный кофе из отборных зерен",
      icon: "☕"
    },
    {
      title: "Опытные бариста",
      description: "Искусные мастера, которые создают идеальную чашку с душой",
      icon: "👨‍🍳"
    },
    {
      title: "Крафтовое пиво",
      description: "Отборные сорта крафтового пива для ценителей",
      icon: "🍺"
    },
    {
      title: "Местное вино",
      description: "Лучшие узбекские вина от местных производителей",
      icon: "🍷"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            О Place No.1
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Больше чем просто кофейня - мы ведущее место в Ташкенте для любителей кофе, крафтового пива и местного вина.
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
              Express Yourself
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              В Place No.1 мы создали уникальное пространство, где встречаются традиции и современность. Расположенные на Амир Темура, 96, мы предлагаем не только отличный кофе, но и крафтовое пиво с местным вином.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша команда профессиональных бариста готовит для вас лучшие напитки. Мы не просто подаем кофе - мы делимся частицей нашей культуры и гостеприимства.
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