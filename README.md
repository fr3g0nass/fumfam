# Delivery Platform

Monorepo para plataforma de delivery multimarketplace profesional.

## Requisitos
- Node.js 20+ / 22+
- pnpm 9+
- Docker + Docker Compose

## Instalación
`ash
pnpm install
`

## Variables de entorno
Copiar .env.example a .env en raíz y ajustar valores.

## Desarrollo (base de datos)
`ash
docker compose up -d postgres redis minio
pnpm db:generate
pnpm db:migrate --name init
pnpm db:seed
`

## Desarrollo (apps)
`ash
pnpm dev
`

## Estructura
Ver docs/ (PRODUCT.md, ARCHITECTURE.md, UX-UI.md, ANALYSIS_REPORT.md).
