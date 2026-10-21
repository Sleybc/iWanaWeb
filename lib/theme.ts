export type ThemeMode = "system" | "light" | "dark";

export const THEME_STORAGE_KEY = "iwana-theme";

// Se ejecuta en el <head> antes del primer pintado para evitar el destello de
// tema incorrecto. Si localStorage falla, queda «system» (RESUMEN §3, decisión 1).
// Si se cambia, hay que actualizar el hash de la CSP en el hosting.
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
