import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      title: "Visit Us",
      icon: "📍",
      details: [
        "Amir Temur Avenue",
        "Tashkent, Uzbekistan",
        "Near Alisher Navoi Opera Theater"
      ]
    },
    {
      title: "Opening Hours",
      icon: "🕐",
      details: [
        "Monday - Friday: 7:00 AM - 10:00 PM",
        "Saturday - Sunday: 8:00 AM - 11:00 PM",
        "Holidays: 9:00 AM - 9:00 PM"
      ]
    },
    {
      title: "Contact Info",
      icon: "📞",
      details: [
        "Phone: +998 71 123 4567",
        "Email: hello@placeno1.uz",
        "Instagram: @placeno1tashkent"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Visit Place No.1
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Come experience the warmth of our coffee culture. We're located in the heart of Tashkent, waiting to serve you the perfect cup.
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
              <CardTitle className="text-2xl text-primary">Ready to Visit?</CardTitle>
              <CardDescription className="text-muted-foreground">
                Reserve your table or place an order for pickup
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="coffee" size="lg" className="w-full">
                Reserve a Table
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Order for Pickup
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;