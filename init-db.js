const db = require("./src/database/models");

async function init() {
  try {
    console.log("Iniciando sincronización de base de datos...");
    await db.sequelize.sync({ force: true });
    console.log("Base de datos sincronizada correctamente.");

    console.log("Siembreando datos iniciales...");
    await db.Category.bulkCreate([
      { id_categories: 1, name: "top" },
      { id_categories: 2, name: "popular" },
      { id_categories: 3, name: "moreSale" },
    ]);

    await db.Genre.bulkCreate([
      { id_genres: 1, name: "Rock" },
      { id_genres: 2, name: "Metal" },
    ]);

    await db.Artist.bulkCreate([
      { id_artists: 1, name: "Dream Theater" },
      { id_artists: 2, name: "Maná" },
    ]);

    // Crear un usuario vendedor para los albums
    await db.User.create({
      id_users: 1,
      full_name: "Admin",
      email: "admin@mellowdyne.com",
      password: "admin", // En un caso real esto debería estar hasheado
      admin: true
    });

    await db.Album.bulkCreate([
      {
        id_albums: 1,
        title: "Scenes from a memory",
        id_artist: 1,
        id_genre: 2,
        id_category: 1,
        price: 500,
        image: "Scenes-from-a-memory.jpg",
        id_seller: 1
      },
      {
        id_albums: 2,
        title: "Sueños Líquidos",
        id_artist: 2,
        id_genre: 1,
        id_category: 2,
        price: 350,
        image: "Suenos-liquidos.jpg",
        id_seller: 1
      }
    ]);

    console.log("Datos sembrados correctamente.");
    process.exit(0);
  } catch (error) {
    console.error("Error al sincronizar/sembrar la base de datos:", error);
    process.exit(1);
  }
}

init();
