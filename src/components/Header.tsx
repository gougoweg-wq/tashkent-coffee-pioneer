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