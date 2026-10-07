import { prisma, RoleName } from './index.js';

async function main() {
  const roles = await prisma.role.createMany({
    data: [
      { name: RoleName.CUSTOMER },
      { name: RoleName.RESTAURANT_OWNER },
      { name: RoleName.RESTAURANT_EMPLOYEE },
      { name: RoleName.COURIER },
      { name: RoleName.SUPPORT },
      { name: RoleName.ADMIN },
      { name: RoleName.SUPER_ADMIN },
    ],
    skipDuplicates: true,
  });
  console.log('Roles seeded:', roles.count);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.();
  });
