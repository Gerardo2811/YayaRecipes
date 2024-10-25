// authService.ts

// URL base del backend
const BASE_URL = 'http://localhost:3000'; // Asegúrate de que sea la correcta

// Función para iniciar sesión
export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Credenciales inválidas');
    }

    const data = await response.json();

    // Guardar el token en las cookies o en el local storage
    document.cookie = `authToken=${data.access_token}; path=/`;

    return data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

// Función para verificar si el usuario está autenticado (obtener el token)
export const getAuthToken = () => {
  // Obtener el token de las cookies
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('authToken='))
    ?.split('=')[1];

  return cookieValue;
};

// Función para cerrar sesión
export const logout = () => {
  // Eliminar la cookie del token
  document.cookie = 'authToken=; Max-Age=0; path=/';
};

// Función para verificar si el usuario está logueado (en base a la existencia del token)
export const isUserLoggedIn = () => {
  const token = getAuthToken();
  return !!token; // Retorna true si hay token
};
