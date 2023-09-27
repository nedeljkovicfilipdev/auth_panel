"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userData = [
    {
        username: 'admin',
        email: 'nedeljkovic.filip.dev@gmail.com',
        password: 'root',
        firstName: 'Filip',
        lastName: 'Nedeljkovic',
        phoneNumber: '+381645772908',
        place: {
            create: [
                {
                    name: "Coffee Dreammmmmm",
                    id: 1
                }
            ]
        }
    }
];
async function main() {
    console.log(`Start seeding ...`);
    for (const u of userData) {
        const user = await prisma.user.create({
            data: u,
        });
        console.log(`Created user with id: ${user.id}`);
    }
    console.log(`Seeding finished.`);
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map