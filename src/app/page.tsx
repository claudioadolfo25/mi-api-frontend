// src/app/page.tsx
import LoginButton from './login-button';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-qmsnch-primary mb-4">
          ¡Bienvenido a QMSNCH!
        </h1>
        <p className="text-gray-600 mb-6">
          Sistema conectado a: {process.env.NEXT_PUBLIC_API_BASE}
        </p>
        <LoginButton />
      </div>
    </main>
  );
}
