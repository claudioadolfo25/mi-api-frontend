// src/app/login-button.tsx
"use client";

import { useAuth0 } from '@auth0/auth0-react';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-qmsnch-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
    >
      Iniciar sesión
    </button>
  );
}
