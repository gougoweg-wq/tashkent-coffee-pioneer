# Place No.1 Coffee Bar - Complete Project Code

## Project Structure
```
src/
├── components/
│   ├── ui/           # UI components (button, card, etc.)
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Menu.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── pages/
│   └── Index.tsx
├── assets/
│   ├── hero-coffee.jpg
│   ├── coffee-art.jpg
│   └── logo.jpg
├── App.tsx
├── main.tsx
└── index.css
```

## Main Application Files

### src/App.tsx
```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

### src/pages/Index.tsx
```tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
```

## Components

### src/components/Header.tsx
```tsx
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">Place No.1</div>
          <div className="text-sm text-muted-foreground">Coffee • Beer • Wine</div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </a>
          <a href="#menu" className="text-sm font-medium hover:text-accent transition-colors">
            Menu
          </a>
          <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="coffee" size="sm">
          Order Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
```

### src/components/Hero.tsx
```tsx
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-gold">Place No.1</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-cream opacity-90 max-w-2xl mx-auto">
          Experience the finest coffee culture in the heart of Tashkent. Where tradition meets innovation in every cup.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Discover Our Menu
          </Button>
          <Button variant="ghost-light" size="lg" className="text-lg px-8 py-6">
            Learn Our Story
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

### src/components/About.tsx
```tsx
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
      title: "Expert Baristas",
      description: "Skilled craftspeople who perfect every cup with passion",
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
```

### src/components/Menu.tsx
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const menuItems = [
    {
      category: "Signature Coffee",
      items: [
        {
          name: "Express Yourself Blend",
          description: "Our signature house blend with notes of chocolate and caramel",
          price: "25,000 сум",
          badge: "Popular"
        },
        {
          name: "Uzbek Gold",
          description: "Premium arabica with traditional Central Asian spices",
          price: "30,000 сум",
          badge: "Premium"
        },
        {
          name: "Tashkent Morning",
          description: "Medium roast perfect for starting your day",
          price: "22,000 сум"
        }
      ]
    },
    {
      category: "Specialty Drinks",
      items: [
        {
          name: "Cappuccino Samarkand",
          description: "Classic cappuccino with a touch of local honey",
          price: "28,000 сум"
        },
        {
          name: "Cold Brew Supreme",
          description: "Smooth cold brew with vanilla and cinnamon",
          price: "26,000 сум",
          badge: "Refreshing"
        },
        {
          name: "Silk Road Latte",
          description: "Creamy latte with cardamom and rose water",
          price: "32,000 сум"
        }
      ]
    },
    {
      category: "Cold Beverages",
      items: [
        {
          name: "Iced Coffee Delight",
          description: "Perfect blend of coffee and ice with your choice of milk",
          price: "24,000 сум"
        },
        {
          name: "Frappé Tashkent",
          description: "Blended iced coffee with whipped cream",
          price: "27,000 сум",
          badge: "Popular"
        },
        {
          name: "Cold Brew Float",
          description: "Cold brew coffee with vanilla ice cream",
          price: "29,000 сум"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Coffee Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffees, each telling its own story of flavor and tradition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-border/50 hover:shadow-warm transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-border/30 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-primary">{item.name}</h4>
                      <span className="font-bold text-accent">{item.price}</span>
                    </div>
                    <CardDescription className="text-muted-foreground mb-2">
                      {item.description}
                    </CardDescription>
                    {item.badge && (
                      <Badge variant="coffee" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
```

### src/components/Contact.tsx
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      title: "Visit Us",
      icon: "📍",
      details: [
        "Амир Темура, 96",
        "Ташкент, Узбекистан",
        "Возле Opera Theater"
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
```

### src/components/Footer.tsx
```tsx
const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gold mb-4">Place No.1</h3>
            <p className="text-cream/80 mb-4 max-w-md">
              Ведущее место в Ташкенте для ценителей кофе, крафтового пива и местного вина. 
              Откройте для себя настоящую культуру гостеприимства в сердце Узбекистана.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/espressoyourself.uz" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                Telegram
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/80">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li>Амир Темура, 96</li>
              <li>Ташкент, Узбекистан</li>
              <li>+998 71 123 4567</li>
              <li>@espressoyourself.uz</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-coffee-medium pt-8 text-center">
          <p className="text-cream/60">
            © 2024 Place No.1 Coffee Bar. All rights reserved. Crafted with ❤️ in Tashkent.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

## Styling

### src/index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-family: 'Inter', system-ui, -apple-system, sans-serif;
  
  /* Coffee Color Palette */
  --coffee-dark: 25 17 14;        /* Rich dark brown */
  --coffee-medium: 62 45 38;      /* Medium brown */
  --coffee-light: 101 77 65;      /* Light brown */
  --coffee-cream: 139 125 107;    /* Warm cream */
  
  /* Gold Accents */
  --gold: 43 33 14;               /* Deep gold */
  --gold-light: 58 46 21;         /* Light gold */
  --gold-accent: 83 66 35;        /* Gold accent */
  
  /* Neutral Tones */
  --cream: 250 246 240;           /* Warm cream */
  --warm-gray: 120 113 108;       /* Warm gray */
  
  /* Primary palette built on coffee theme */
  --background: var(--cream);
  --foreground: var(--coffee-dark);
  --card: var(--cream);
  --card-foreground: var(--coffee-dark);
  --popover: var(--cream);
  --popover-foreground: var(--coffee-dark);
  --primary: var(--coffee-dark);
  --primary-foreground: var(--cream);
  --secondary: var(--coffee-light);
  --secondary-foreground: var(--cream);
  --muted: var(--coffee-cream);
  --muted-foreground: var(--coffee-medium);
  --accent: var(--gold);
  --accent-foreground: var(--cream);
  --destructive: 0 62% 30%;
  --destructive-foreground: var(--cream);
  --border: var(--coffee-light);
  --input: var(--coffee-light);
  --ring: var(--gold);
  --radius: 0.75rem;

  /* Custom coffee themed colors */
  --coffee-dark-hsl: hsl(var(--coffee-dark));
  --coffee-medium-hsl: hsl(var(--coffee-medium));
  --coffee-light-hsl: hsl(var(--coffee-light));
  --gold-hsl: hsl(var(--gold));
  --gold-light-hsl: hsl(var(--gold-light));
  --cream-hsl: hsl(var(--cream));
  
  /* Custom gradients */
  --gradient-hero: linear-gradient(135deg, hsl(var(--coffee-dark)) 0%, hsl(var(--coffee-medium)) 50%, hsl(var(--gold)) 100%);
  --gradient-warm: linear-gradient(135deg, hsl(var(--coffee-medium)) 0%, hsl(var(--gold)) 100%);
  
  /* Custom shadows */
  --shadow-warm: 0 10px 30px -10px hsl(var(--coffee-dark) / 0.3);
  --shadow-gold: 0 10px 30px -10px hsl(var(--gold) / 0.4);
}

.dark {
  --background: var(--coffee-dark);
  --foreground: var(--cream);
  --card: var(--coffee-medium);
  --card-foreground: var(--cream);
  --popover: var(--coffee-medium);
  --popover-foreground: var(--cream);
  --primary: var(--gold);
  --primary-foreground: var(--coffee-dark);
  --secondary: var(--coffee-light);
  --secondary-foreground: var(--coffee-dark);
  --muted: var(--coffee-medium);
  --muted-foreground: var(--coffee-cream);
  --accent: var(--gold-light);
  --accent-foreground: var(--coffee-dark);
  --destructive: 0 62% 30%;
  --destructive-foreground: var(--cream);
  --border: var(--coffee-medium);
  --input: var(--coffee-medium);
  --ring: var(--gold-light);
}

* {
  border-color: hsl(var(--border));
}

body {
  font-family: var(--font-family);
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

/* Custom utility classes */
.bg-gradient-hero {
  background: var(--gradient-hero);
}

.bg-gradient-warm {
  background: var(--gradient-warm);
}

.shadow-warm {
  box-shadow: var(--shadow-warm);
}

.shadow-gold {
  box-shadow: var(--shadow-gold);
}

.text-coffee-dark {
  color: var(--coffee-dark-hsl);
}

.text-gold {
  color: var(--gold-hsl);
}

.text-cream {
  color: var(--cream-hsl);
}

.bg-coffee-dark {
  background-color: var(--coffee-dark-hsl);
}

.bg-gold {
  background-color: var(--gold-hsl);
}

.bg-gold-light {
  background-color: var(--gold-light-hsl);
}

.border-coffee-medium {
  border-color: var(--coffee-medium-hsl);
}

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.6s ease-in-out;
  }
  
  .animate-slide-up {
    animation: slideUp 0.8s ease-out;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* Accordion animations */
@keyframes accordion-down {
  from { height: 0 }
  to { height: var(--radix-accordion-content-height) }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height) }
  to { height: 0 }
}

.animate-accordion-down {
  animation: accordion-down 0.2s ease-out;
}

.animate-accordion-up {
  animation: accordion-up 0.2s ease-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--coffee-light));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--gold));
}
```

### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Coffee theme colors
        'coffee-dark': 'hsl(var(--coffee-dark))',
        'coffee-medium': 'hsl(var(--coffee-medium))',
        'coffee-light': 'hsl(var(--coffee-light))',
        'coffee-cream': 'hsl(var(--coffee-cream))',
        'gold': 'hsl(var(--gold))',
        'gold-light': 'hsl(var(--gold-light))',
        'gold-accent': 'hsl(var(--gold-accent))',
        'cream': 'hsl(var(--cream))',
        'warm-gray': 'hsl(var(--warm-gray))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-warm': 'var(--gradient-warm)',
      },
      boxShadow: {
        'warm': 'var(--shadow-warm)',
        'gold': 'var(--shadow-gold)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

## Key UI Components

### src/components/ui/button.tsx (with coffee variants)
```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        coffee: "bg-coffee-dark text-cream hover:bg-coffee-medium transition-all duration-300 shadow-warm hover:shadow-gold",
        hero: "bg-gold text-coffee-dark hover:bg-gold-light transition-all duration-300 shadow-gold font-semibold",
        "ghost-light": "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### src/components/ui/badge.tsx (with coffee variant)
```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        coffee: "border-transparent bg-gold text-coffee-dark hover:bg-gold-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

## HTML Entry Point

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Place No.1 Coffee Bar - Premium Coffee in Tashkent</title>
    <meta name="description" content="Experience the finest coffee culture in Tashkent at Place No.1 Coffee Bar. Premium beans, expert baristas, and authentic Uzbek hospitality in every cup." />
    <meta name="author" content="Place No.1 Coffee Bar" />

    <meta property="og:title" content="Place No.1 Coffee Bar - Premium Coffee in Tashkent" />
    <meta property="og:description" content="Experience the finest coffee culture in Tashkent at Place No.1 Coffee Bar. Premium beans, expert baristas, and authentic Uzbek hospitality in every cup." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Technologies Used
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **React Router** for navigation
- **Lucide React** for icons
- **Class Variance Authority** for component variants

## Features
- ✅ Responsive design for all devices
- ✅ Coffee-themed color palette and branding
- ✅ Modern component architecture
- ✅ SEO optimized
- ✅ Accessible design patterns
- ✅ Smooth animations and transitions
- ✅ Real business information integration

This is the complete codebase for the Place No.1 Coffee Bar website in Tashkent.