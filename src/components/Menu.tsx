import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuItems = [
    {
      category: "Фирменный кофе",
      items: [
        {
          name: "Ташкентский купаж",
          description: "Наш фирменный купаж с нотами шоколада и карамели",
          price: "25,000 сум",
          badge: "Популярный"
        },
        {
          name: "Золотой Узбекистан",
          description: "Зерна одного происхождения с нотами сухофруктов и специй",
          price: "30,000 сум",
          badge: "Премиум"
        },
        {
          name: "Эспрессо Шелкового пути",
          description: "Насыщенный эспрессо, вдохновленный древними торговыми путями",
          price: "20,000 сум"
        }
      ]
    },
    {
      category: "Фирменные напитки",
      items: [
        {
          name: "Латте Place No.1",
          description: "Нежный эспрессо с пропаренным молоком и художественной пенкой",
          price: "28,000 сум",
          badge: "Фирменный"
        },
        {
          name: "Капучино с кардамоном",
          description: "Традиционный капучино с ароматным кардамоном",
          price: "26,000 сум"
        },
        {
          name: "Медовый маккиато",
          description: "Сладкий и кремовый с местным медом и ванильными нотами",
          price: "32,000 сум"
        }
      ]
    },
    {
      category: "Холодные напитки",
      items: [
        {
          name: "Ледяной узбекский кофе",
          description: "Освежающий колд брю с нотой розовой воды",
          price: "24,000 сум"
        },
        {
          name: "Аффогато Супрем",
          description: "Ванильное мороженое, залитое горячим эспрессо",
          price: "35,000 сум",
          badge: "Десерт"
        },
        {
          name: "Мятный колд брю",
          description: "Нежный колд брю с листьями свежей мяты",
          price: "27,000 сум"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Наше кофейное меню
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Откройте для себя наш тщательно подобранный ассортимент премиального кофе и фирменных напитков, каждый из которых создан с любовью и точностью.
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