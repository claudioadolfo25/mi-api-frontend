export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-4">
        ¡Bienvenido a QMSNCH!
      </h1>
      <p className="text-lg text-gray-600">
        Backend funcionando en <a href="http://localhost:3001" className="text-blue-500 hover:underline">http://localhost:3001</a>
      </p>
    </main>
  );
}
