import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      title: "Адрес",
      icon: "📍",
      details: [
        "Амир Темура, 96",
        "Ташкент, Узбекистан",
        "Возле Opera Theater"
      ]
    },
    {
      title: "Часы работы",
      icon: "🕐",
      details: [
        "Понедельник - Пятница: 7:00 - 22:00",
        "Суббота - Воскресенье: 8:00 - 23:00",
        "Праздники: 9:00 - 21:00"
      ]
    },
    {
      title: "Контакты",
      icon: "📞",
      details: [
        "Телефон: +998 71 123 4567",
        "Instagram: @espressoyourself.uz",
        "Яндекс Карты: Место доступно"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Посетите Place No.1
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Приходите и ощутите тепло нашей кофейной культуры. Мы находимся в самом сердце Ташкента и ждем, чтобы подать вам идеальную чашку.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-0 bg-card/90 backdrop-blur hover:bg-card transition-all duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{info.icon}</div>
                <CardTitle className="text-xl text-primary">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <CardDescription key={detailIndex} className="text-muted-foreground mb-1">
                    {detail}
                  </CardDescription>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto border-0 bg-card/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Готовы к визиту?</CardTitle>
              <CardDescription className="text-muted-foreground">
                Забронируйте столик или сделайте заказ навынос
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="coffee" size="lg" className="w-full">
                Забронировать столик
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Заказать навынос
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;