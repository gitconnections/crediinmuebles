export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-foreground/70 text-sm">
          &copy; {new Date().getFullYear()} Crediinmuebles. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
