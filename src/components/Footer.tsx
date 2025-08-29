const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gold mb-4">Place No.1</h3>
            <p className="text-cream/80 mb-4 max-w-md">
              Tashkent's premier coffee destination, where tradition meets innovation. 
              Experience the finest coffee culture in the heart of Uzbekistan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gold hover:text-gold-light transition-colors">
                Facebook
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
              <li>Amir Temur Avenue</li>
              <li>Tashkent, Uzbekistan</li>
              <li>+998 71 123 4567</li>
              <li>hello@placeno1.uz</li>
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