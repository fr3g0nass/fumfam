# UX-UI.md - Diseño, Usabilidad y Design System

## Principios UX (4,5,70-73,89)
- Jerarquía: Usabilidad > Claridad > Accesibilidad > Velocidad > Consistencia > Estética
- Funciona mejor. Información > decoración. Acciones evidentes.
- Journeys: Cliente (Abrir→Encontrar→Elegir→Pagar→Seguir→Recibir), Restaurante (Pedido→Aceptar→Preparar→Listo), Repartidor (Aceptar→Recoger→Navegar→Entregar), Admin (Buscar→Filtrar→Analizar→Actuar)

## Responsive por roles (42)
- Customer: Mobile > Tablet > Desktop
- Restaurant: Tablet > Desktop > Mobile
- Courier: Mobile (una mano)
- Admin: Desktop > Tablet > Mobile

## Design System (38, Fase 3)
Tokens base: colores semánticos (success/warning/error/info/neutral), tipografía (legible, jerarquía), spacing 4pt, border-radius, z-index, breakpoints.

### Paleta (semántica)
- Neutral: grises para texto/fondos/bordes
- Primary: acción principal (CTA)
- Success/Warning/Error/Info: estados con significado (no solo color 39)

### Tipografía
Familia principal legible, line-height adecuado, tamaños coherentes, evitar múltiples fuentes (40).

### Componentes
Buttons, Inputs, Selects, Tables, Cards, Badges, Alerts, Modals, Dropdowns, Tabs, Navigation, Breadcrumbs, Pagination, Toasts, Empty/Loading/Error/Offline/PermissionDenied/NotFound (44).

### Iconografía
Lucide (estilo consistente, significado claro). No emojis como iconografía principal (41).

## Estados UI obligatorios (44)
Loading, Success, Empty, Error, Offline, Permission_Denied, Not_Found. Empty states orientados a acción (45). Errores: Qué pasó / Por qué / Qué hacer (46).

## Accesibilidad (43, WCAG 2.2 AA)
Teclado, focus visible, labels, ARIA cuando necesario, contraste adecuado, tamaños táctiles, lectores pantalla. No depender solo color.

## UX específico
- Home cliente: responde "¿Qué puedo pedir y cuándo me llegará?" (8). Evitar saturación.
- Restaurante: pedidos prioridad sobre gráficos (17)
- Repartidor: mínimo, botones grandes, una mano, sin distracciones (22)
- Seguimiento: info > mapa (15)
- Carrito/Checkout: costes siempre visibles (12-13)

## Recomendación implementación
shadcn/ui + Tailwind v4 sobre `packages/ui`. Tokens CSS variables (light). Base antes de apps (Fase 3).