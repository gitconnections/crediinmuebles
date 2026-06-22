import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background py-16 border-t border-foreground/10">
      <div className="container mx-auto px-4 text-center text-foreground/70">
        <p className="text-lg font-poppins font-semibold mb-2">Crediinmuebles</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
