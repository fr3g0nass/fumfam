# ARCHITECTURE.md - Arquitectura Técnica

## Principios
- Ecosistema único (7). Compartir modelos, estados, pagos, notifs, auditoría.
- Modularidad, separación dominio/presentación (65). Nunca lógica negocio en frontend (77).
- Única fuente de verdad: backend (78). Validación backend obligatoria (77).
- Monorepo Turborepo (50).

## Stack
Ver ANALYSIS_REPORT.md §Stack. Elección: NestJS (API modular), React+Vite (apps), Prisma+Postgres, Redis, Socket.IO, Stripe, Mapbox, S3-compatible.

## Capas
- Apps (UI por rol): customer/restaurant/courier/admin
- API (NestJS): módulos por dominio (auth, restaurants, orders, payments, deliveries, admin...)
- Packages: ui, types, database, auth, validation(zod), config, utils
- Infra: Docker, Postgres, Redis, MinIO

## Modelo de datos (resumen)
Relacional normalizado, FKs, índices, migraciones Prisma. Entidades: User, Role, Address, Restaurant, RestaurantMember, RestaurantSchedule, Category, Product, ProductOption, ProductOptionValue, Cart, CartItem, Order, OrderItem, OrderItemOption, Payment, Refund, Courier, CourierLocation, Delivery, Promotion, PromotionUsage, Review, SupportTicket, Notification, Zone, Commission, Settlement, AuditLog (33).

## Seguridad (36)
RBAC estricto (guards), JWT + refresh tokens, hash (bcrypt/argon2), CORS, Helmet, Rate limiting (Throttler+Redis), validación class-validator+Zod, auditoría (AuditLog), no secrets en código (.env).

## Tiempo real (35)
Socket.IO + Redis pub/sub (multi-instancia). Eventos: nuevos pedidos, cambio estados, asignación repartidor, ubicación, incidencias, notificaciones.

## Pagos (29)
Stripe (sandbox primero). Estados separados (financiero vs logístico). Reembolsos parciales/totales. Idempotencia (80).

## Zonas + Comisiones (27-28)
Zones (geo), comisiones %/fija, trazabilidad liquidaciones (Settlement/Commission).

## Variables entorno (.env.example)
DATABASE_URL, REDIS_URL, JWT_SECRET, JWT_REFRESH_SECRET, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, MAPBOX_ACCESS_TOKEN, S3_ENDPOINT/KEY/BUCKET, PORT, NODE_ENV, CORS_ORIGIN.

## Decisiones
ADRs en `docs/decisions/` (85).

## Arquitectura Fase 1
Base ejecutable: docker-compose (postgres+redis+minio opcional), Prisma init + schema inicial, NestJS bootstrap (módulos core), Turborepo config.