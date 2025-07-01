// src/app/layout.tsx
import './globals.css';
import AuthProvider from './providers'; // Asegúrate de crear este archivo

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <AuthProvider> {/* Envuelve con el provider */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
