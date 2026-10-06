# ANÁLISIS - DELIVERY PLATFORM

## Estado actual del repositorio
- Repositorio: vacío (sin archivos, sin git inicializado).
- Directorio de trabajo: `C:\Users\porta\Desktop\fumfam`
- Objetivo: plataforma delivery multimarketplace profesional según master prompt.

## Conclusión del análisis
Partimos desde 0. Se debe establecer arquitectura monorepo desde el inicio, siguiendo fases obligatorias (0-12). No se implementará código hasta completar y presentar este informe (Fase 0).

## Propuesta de Stack Tecnológico (recomendada)
Siguiendo sección 49, propuesta sólida y bien estructurada:

### Frontend (Apps)
- **React 19 + Vite** + **TypeScript** (strict)
- **React Router v7** (SPA)
- **TanStack Query v5** (data fetching/caching)
- **Zustand** (estado global ligero)
- **Tailwind CSS v4** + **shadcn/ui** (base Design System)
- **React Hook Form + Zod** (formularios + validación)
- **Lucide React** (iconografía consistente)
- **Vitest + Playwright** (unit + E2E)

### Backend (API)
- **NestJS + TypeScript** (modular, escalable)
- **@nestjs/platform-express + Socket.IO** (REST + WebSockets)
- **class-validator + class-transformer** (DTOs)
- **Helmet, CORS, Throttler** (seguridad)

### Datos / Infra
- **PostgreSQL 16** (obligatorio)
- **Prisma ORM** (migraciones, tipado)
- **Redis 7** (cache, rate-limit, pub/sub WS)
- **MinIO/S3-compatible** (imágenes productos/restaurantes)
- **Docker + docker-compose** (dev reproducible)
- **Nginx** (proxy opcional prod)

### Integraciones
- **Stripe** (pagos + reembolsos, sandbox primero)
- **Mapbox** (mapas, navegación, zonas) — alternativa coste/privacidad vs Google Maps
- **Resend/SMTP + Firebase FCM** (email + push)

## Estructura Monorepo (Turborepo)
Propuesta limpia (sección 50):

```text
delivery-platform/
├── apps/
│   ├── customer/      # Cliente (mobile-first)
│   ├── restaurant/    # Restaurante (tablet-first)
│   ├── courier/       # Repartidor (mobile-first)
│   ├── admin/         # Admin (desktop-first)
│   └── api/           # NestJS API (REST + WS)
├── packages/
│   ├── ui/            # Design System + shadcn base
│   ├── types/         # Tipos TS compartidos (DTOs, entidades)
│   ├── database/      # Prisma schema + client + migrations + seeds
│   ├── auth/          # RBAC, guards, utils auth
│   ├── validation/    # Schemas Zod compartidos
│   ├── config/        # Config/env compartidos
│   └── utils/         # Helpers comunes
├── docs/              # Documentación
│   ├── decisions/     # ADRs
├── infra/             # Docker, scripts infra
├── scripts/           # Seeds, utilidades
├── docker-compose.yml
├── turbo.json
├── package.json       # workspaces
└── README.md
```

Justificación: un único ecosistema compartido (regla crítica 7). `packages/*` evitan duplicidad (regla 4).

## Modelo de Datos (alto nivel)
Entidades principales (sección 33):

| Dominio | Entidades |
|---|---|
| Auth | `User`, `Role`, `RefreshToken` |
| Dirección | `Address` |
| Restaurante | `Restaurant`, `RestaurantMember`, `RestaurantSchedule` |
| Catálogo | `Category`, `Product`, `ProductOption`, `ProductOptionValue` |
| Carrito | `Cart`, `CartItem` |
| Pedidos | `Order`, `OrderItem`, `OrderItemOption` |
| Pagos | `Payment`, `Refund` |
| Reparto | `Courier`, `CourierLocation`, `Delivery` |
| Marketing | `Promotion`, `PromotionUsage` |
| Calidad | `Review`, `SupportTicket` |
| Zonas | `Zone` |
| Finanzas | `Commission`, `Settlement` |
| Auditoría | `AuditLog` |
| Notifs | `Notification` |

Estados Order: `PENDING_PAYMENT, PAYMENT_CONFIRMED, RECEIVED, ACCEPTED, PREPARING, READY_FOR_PICKUP, COURIER_ASSIGNED, PICKED_UP, ON_THE_WAY, DELIVERED, CANCELLED, REFUNDED, FAILED` (sección 14). Diferenciar estado logístico/financiero (29).

RBAC (36): `CUSTOMER, RESTAURANT_OWNER, RESTAURANT_EMPLOYEE, COURIER, SUPPORT, ADMIN, SUPER_ADMIN`.

## Flujos principales (propuestos)
Cliente: Abrir → Encontrar → Elegir → Pagar → Seguir → Recibir (70). Restaurante: Pedido nuevo → Aceptar → Preparar → Listo (71). Repartidor: Aceptar → Recoger → Navegar → Entregar (72). Admin: Buscar → Filtrar → Analizar → Actuar (73).

## Design System (Fase 3 obligatoria)
Tokens: colores semánticos (SUCCESS/WARNING/ERROR/INFO/NEUTRAL), tipografía legible, spacing 4pt, radius, shadows funcionales (evitar decorativas). Componentes base reutilizables (shadcn/ui) + `packages/ui`.

## Fases de implementación (propuesta)
0. Análisis (actual) ✓
1. Arquitectura (monorepo+TS+Docker+Prisma)
2. Autenticación + RBAC
3. Design System
4. Cliente
5. Restaurante
6. Repartidor
7. Admin
8. Tiempo real (WS)
9. Pagos (Stripe sandbox)
10. Testing (unit+int+E2E)
11. Seguridad (auditoría)
12. Performance + Docs finales

## Reglas clave a aplicar
- Nunca empezar a programar antes de fases (66.1)
- Backend valida SIEMPRE cálculos críticos (77)
- Única fuente de verdad backend (78)
- No continuar si errores críticos (69)
- "Terminado" = todos criterios 87
- Funciona mejor > queda impresionante (89)

## Próximo paso
Detenerme y presentar este informe (instrucción inicial 90). Solicito aprobación para pasar a **FASE 1 — ARQUITECTURA** (crear monorepo, config, Docker, Prisma, API base).