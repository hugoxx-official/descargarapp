// Configuración centralizada para la landing de descarga
// Modificar estos valores para actualizar la información de la app

export const APP_CONFIG = {
  // URLs de descarga
  ANDROID_APP_URL: 'https://docs.google.com/uc?export=download&id=1Xgae5IIMzg7mdJCt2aeh3H-KcVn3QSJE',
  IOS_APP_URL: 'https://apps.apple.com/es/app/alfazulu/id-placeholder',

  // Estado de iOS: 'available' | 'coming-soon'
  IOS_STATUS: 'coming-soon',

  // Información de versión Android
  ANDROID_VERSION: '1.0.0',
  ANDROID_SIZE: '53.1 MB',
  ANDROID_RELEASE_DATE: '2026-05-09',

  // Información de versión iOS
  IOS_VERSION: 'Próximamente',

  // Información general
  APP_NAME: 'AlfaZulu',
  APP_TAGLINE: 'Tu centro táctico de recursos, mapas y herramientas.',
  APP_DESCRIPTION: 'Descarga oficial de AlfaZulu para Android y iPhone. Accede a recursos tácticos, mapas descargables, notificaciones inteligentes y contenido premium.',

  // Colores de marca
  PRIMARY_COLOR: '#FF003C',
  SECONDARY_COLOR: '#0A0A0A',
  ACCENT_COLOR: '#FFD700',

  // Redes sociales / enlaces
  GITHUB_URL: 'https://github.com/hugoxx-official/alfazulu',
  TELEGRAM_URL: 'https://t.me/alfazulu',
  WEBSITE_URL: 'https://app.alfazulu.pro',
};

// Features que se muestran en la landing
export const FEATURES = [
  {
    icon: '📦',
    title: 'Recursos Tácticos',
    description: 'Accede a documentación, manuales y recursos exclusivos para profesionales.',
  },
  {
    icon: '🗺️',
    title: 'Mapas Descargables',
    description: 'Mapas tácticos en múltiples formatos: KML, KMZ, GPX, GeoTIFF y más.',
  },
  {
    icon: '🔔',
    title: 'Notificaciones Inteligentes',
    description: 'Recibe alertas instantáneas de nuevo contenido y actualizaciones.',
  },
  {
    icon: '💎',
    title: 'Contenido Premium',
    description: 'Planes exclusivos con acceso anticipado y contenido VIP.',
  },
  {
    icon: '⚡',
    title: 'Acceso Rápido',
    description: 'Interfaz optimizada para acceso inmediato a lo que necesitas.',
  },
  {
    icon: '🔄',
    title: 'Actualizaciones Constantes',
    description: 'Nuevo contenido añadido regularmente por el equipo.',
  },
];

// Información de seguridad
export const SECURITY_INFO = {
  verified: true,
  official: true,
  noModifications: true,
  safeUpdates: true,
};

// Instrucciones de instalación
export const INSTALL_STEPS = {
  android: [
    { step: 1, title: 'Descargar', text: 'Pulsa el botón de descarga para obtener la APK' },
    { step: 2, title: 'Abrir archivo', text: 'Localiza el archivo descargado en tu dispositivo' },
    { step: 3, title: 'Instalar', text: 'Permite instalaciones de fuentes desconocidas si es necesario' },
  ],
  ios: [
    { step: 1, title: 'App Store', text: 'Abre la App Store en tu iPhone o iPad' },
    { step: 2, title: 'Buscar', text: 'Busca "AlfaZulu" en el buscador' },
    { step: 3, title: 'Obtener', text: 'Pulsa Obtener para instalar la app' },
  ],
};

export default APP_CONFIG;
