# PRODUCT.md - Especificación de Producto

## Visión
Plataforma de delivery/multimarketplace profesional, clara, rápida, accesible y escalable. Inspirada en patrones operativos (no branding) de Pim Pam, Glovo, Uber Eats, Just Eat, Deliveroo. Identidad propia.

## Principios (4-5, 89)
- Usabilidad > Claridad > Accesibilidad > Velocidad > Consistencia > Estética
- Funciona mejor > queda impresionante
- Sin elementos decorativos sin función. Sin "AI generated UI".
- Profesional, orden, rapidez, confianza.

## Actores (5)
CUSTOMER, RESTAURANT_OWNER, RESTAURANT_EMPLOYEE, COURIER, SUPPORT, ADMIN, SUPER_ADMIN.

## Módulos principales
- Cliente: Home, Búsqueda, Restaurante, Menú, Producto, Carrito, Checkout, Pedidos, Seguimiento, Valoraciones
- Restaurante: Dashboard, Pedidos, Menú, Categorías, Horarios, Promociones, Ventas, Incidencias, Liquidaciones
- Repartidor: Disponibilidad, Pedidos, Navegación, Entregas, Ganancias, Historial
- Admin: Dashboard, Gestión, Pagos/Reembolsos, Comisiones/Liquidaciones, Zonas, Analítica, Incidencias, Logs, Auditoría

## Flujo principal (6,14)
PENDING_PAYMENT → PAYMENT_CONFIRMED → RECEIVED → ACCEPTED → PREPARING → READY_FOR_PICKUP → COURIER_ASSIGNED → PICKED_UP → ON_THE_WAY → DELIVERED → CANCELLED → REFUNDED → FAILED

## Requisitos no funcionales
- WCAG 2.2 AA (43)
- Responsive por roles (42)
- Performance, SEO público (47-48)
- Seguridad + RBAC + Auditoría (36-37)
- Idempotencia (80)
- Offline/reconexión (79)
- Logs seguros (81)

## Entregable Fase 0
Este documento define alcance, actores, flujos y reglas. Base para arquitectura.