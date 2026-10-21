# Sitio público iwana.co

Next.js 16 con exportación estática (`output: 'export'`) y Tailwind 4. Contexto,
decisiones y datos verificados en `../RESUMEN.md`; diseño fuente en
`../diseno/claude-design/`.

```bash
pnpm install
pnpm dev      # desarrollo
pnpm build    # genera out/, lo que se sube al hosting
pnpm lint
```

- Datos publicables: solo en `lib/constants.ts`, tomados de RESUMEN §4.
- Exo 2 se sirve desde `app/fonts/` (licencia OFL incluida).
- Las cabeceras de seguridad (RESUMEN §5) van en el hosting, no en `next.config.ts`.
