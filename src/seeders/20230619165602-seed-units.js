module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Units', [
    {
      description: 'Masa de resiudos orgánicos generada',
      symbol: 'kg RROO',
      ponderator: 0.75,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: 'Masa de compost generada',
      symbol: 'kg COMPOST',
      ponderator: 0.15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: 'Potencial volumen de agua ahorrado por el uso del compost generado',
      symbol: 'l H2O',
      ponderator: 1.11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: 'Potencial volumen de agua (en bidones de 20l) ahorrado por el uso del compost generado',
      symbol: 'BIDONES DE 20 l H2O',
      ponderator: 0.0555,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      description: 'Disminución de la huella de carbono',
      symbol: 'kg CO2',
      ponderator: 0.46275,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Units', null, {}),
};
