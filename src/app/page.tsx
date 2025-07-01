// src/app/page.tsx
import LoginButton from './login-button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-qmsnch-primary mb-2">
          ¡Bienvenido a QMSNCH!
        </h1>
        
        {/* Mensaje actualizado con variable de entorno */}
        <p className="text-gray-600 mb-6">
          Sistema conectado a: {process.env.NEXT_PUBLIC_API_BASE}
        </p>
        
        <LoginButton />
      </div>
    </main>
  );
}
