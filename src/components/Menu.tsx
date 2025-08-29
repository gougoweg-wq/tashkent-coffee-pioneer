import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuItems = [
    {
      category: "Signature Coffee",
      items: [
        {
          name: "Tashkent Blend",
          description: "Our signature house blend with hints of chocolate and caramel",
          price: "25,000 UZS",
          badge: "Popular"
        },
        {
          name: "Golden Uzbek",
          description: "Single-origin beans with notes of dried fruits and spices",
          price: "30,000 UZS",
          badge: "Premium"
        },
        {
          name: "Silk Road Espresso",
          description: "Rich, bold espresso inspired by ancient trade routes",
          price: "20,000 UZS"
        }
      ]
    },
    {
      category: "Specialty Drinks",
      items: [
        {
          name: "Place No.1 Latte",
          description: "Smooth espresso with steamed milk and artistic foam design",
          price: "28,000 UZS",
          badge: "Signature"
        },
        {
          name: "Cardamom Cappuccino",
          description: "Traditional cappuccino enhanced with aromatic cardamom",
          price: "26,000 UZS"
        },
        {
          name: "Honey Macchiato",
          description: "Sweet and creamy with local honey and vanilla notes",
          price: "32,000 UZS"
        }
      ]
    },
    {
      category: "Cold Beverages",
      items: [
        {
          name: "Iced Uzbek Coffee",
          description: "Refreshing cold brew with a touch of rose water",
          price: "24,000 UZS"
        },
        {
          name: "Affogato Supreme",
          description: "Vanilla ice cream drowned in hot espresso",
          price: "35,000 UZS",
          badge: "Dessert"
        },
        {
          name: "Mint Cold Brew",
          description: "Smooth cold brew infused with fresh mint leaves",
          price: "27,000 UZS"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Coffee Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees and specialty drinks, each crafted with passion and precision.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-primary text-center pb-2 border-b-2 border-accent">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-warm transition-all duration-300 border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-primary">{item.name}</CardTitle>
                        {item.badge && (
                          <Badge variant="coffee" className="ml-2">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-muted-foreground">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="text-xl font-bold text-accent">
                        {item.price}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;