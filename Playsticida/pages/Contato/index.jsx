function Contato() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Contato</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
          <h2 className="text-xl font-semibold mb-4">Exemplo</h2>
          <p className="text-gray-600 mb-6">
            Exemplo
          </p>
        </div>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p className="text-sm text-gray-600">&copy; 2025 - Minha Página</p>
      </footer>
    </div>
  );
}

export default Contato;