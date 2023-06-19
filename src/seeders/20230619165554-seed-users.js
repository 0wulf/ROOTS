module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      name: 'Francisco Wulf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Tomás Pino',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Martín Sanfuentes',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Luis Fernández',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'José Infante',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
