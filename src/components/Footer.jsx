export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 z-[-1]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Logos de sponsors */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sponsors</h3>
          <div className="flex items-center gap-4 flex-wrap">
            {/* Reemplazar con logos reales */}
            <img src={`${import.meta.env.BASE_URL}assets/prefeitura.jpg`} alt="Sponsor 2" className="h-40 rounded-full" />
            <img src={`${import.meta.env.BASE_URL}assets/paulo_gustavo.jpg`} alt="Sponsor 1" className="h-30 rounded-full" />
          </div>
        </div>

        {/* Copyright */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Museo del Reggae Local. Todos los derechos reservados.
          </p>
        </div>

        {/* Fuentes / Créditos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Fontes</h3>
          <p className="text-sm text-gray-400">
            Imagens e textos compilados com a permissão dos artistas.<br />
          </p>
        </div>
      </div>
    </footer>
  );
}
