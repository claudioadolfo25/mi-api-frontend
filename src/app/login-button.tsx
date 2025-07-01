// src/app/login-button.tsx
'use client';

import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        // Usar variable de entorno para audience
        audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE!,
        redirect_uri: window.location.origin
      }
    });
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-qmsnch-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
    >
      Iniciar sesión
    </button>
  );
}
