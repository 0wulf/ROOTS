module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Declarations', [
    {
      userId: 1,
      value: 144.9,     
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      value: 378,     
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      value: 182,     
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      value: 56,     
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      value: 16.1,     
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Declarations', null, {}),
};
