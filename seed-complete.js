const db = require("./src/database/models");

async function seed() {
  try {
    console.log("Iniciando carga masiva de datos...");
    
    // Sincronizar (IMPORTANTE: force: true borrará lo anterior)
    await db.sequelize.sync({ force: true });
    
    // Categorías
    await db.Category.bulkCreate([
      { id_categories: 1, name: "top" },
      { id_categories: 2, name: "popular" },
      { id_categories: 3, name: "moreSale" },
    ]);

    // Géneros
    await db.Genre.bulkCreate([
      { id_genres: 1, name: "Rock" },
      { id_genres: 2, name: "Metal" },
      { id_genres: 3, name: "Pop" },
      { id_genres: 4, name: "Funk" },
      { id_genres: 14, name: "Otros" },
    ]);

    // Artistas
    await db.Artist.bulkCreate([
      { id_artists: 1, name: "Dream Theater" },
      { id_artists: 2, name: "Maná" },
      { id_artists: 3, name: "Michael Jackson" },
      { id_artists: 4, name: "Metallica" },
      { id_artists: 5, name: "Nirvana" },
      { id_artists: 6, name: "The Beatles" },
      { id_artists: 7, name: "José José" },
      { id_artists: 8, name: "AC/DC" },
      { id_artists: 9, name: "Aerosmith" },
      { id_artists: 10, name: "Muse" },
    ]);

    // Usuario Vendedor
    await db.User.create({
      id_users: 1,
      full_name: "Admin MellowDyne",
      email: "admin@mellowdyne.com",
      password: "admin", // En producción usar bcrypt
      admin: true
    });

    // Álbumes (13 ítems del data.sql)
    await db.Album.bulkCreate([
      { id_albums: 1, title: "Scenes from a memory", id_artist: 1, id_genre: 2, id_category: 1, price: 500, image: "Scenes-from-a-memory.jpg", id_seller: 1, description: "Álbum conceptual de Dream Theater." },
      { id_albums: 2, title: "Sueños Líquidos", id_artist: 2, id_genre: 1, id_category: 2, price: 350, image: "Suenos-liquidos.jpg", id_seller: 1, description: "Quinto álbum de estudio de Maná." },
      { id_albums: 3, title: "Immortal", id_artist: 3, id_genre: 3, id_category: 1, price: 300, image: "Immortal.jpg", id_seller: 1, description: "Temas originales de Michael Jackson." },
      { id_albums: 4, title: "Master of puppets", id_artist: 4, id_genre: 2, id_category: 2, price: 250, image: "Master-of-puppets.jpg", id_seller: 1, description: "Clásico de Metallica." },
      { id_albums: 5, title: "Nevermind", id_artist: 5, id_genre: 1, id_category: 3, price: 250, image: "Nevermind.jpg", id_seller: 1, description: "Álbum icónico de Nirvana." },
      { id_albums: 6, title: "Revolver", id_artist: 6, id_genre: 1, id_category: 1, price: 400, image: "Revolver.jpg", id_seller: 1, description: "Séptimo disco de The Beatles." },
      { id_albums: 7, title: "Promesas", id_artist: 7, id_genre: 14, id_category: 2, price: 350, image: "Promesas.jpg", id_seller: 1, description: "Álbum de José José." },
      { id_albums: 8, title: "Back In Black", id_artist: 8, id_genre: 1, id_category: 3, price: 420, image: "Back-in-black.jpg", id_seller: 1, description: "Séptimo álbum de AC/DC." },
      { id_albums: 9, title: "Train of Thought", id_artist: 1, id_genre: 2, id_category: 1, price: 550, image: "Train_of_Thought.jpg", id_seller: 1, description: "Álbum pesado de Dream Theater." },
      { id_albums: 10, title: "Six Degrees of Inner Turbulence", id_artist: 1, id_genre: 2, id_category: 2, price: 450, image: "Six_Degrees_of_Inner_Turbulence.jpg", id_seller: 1, description: "CD doble de Dream Theater." },
      { id_albums: 11, title: "Get a Grip", id_artist: 9, id_genre: 1, id_category: 3, price: 260, image: "Get-a-grip.jpg", id_seller: 1, description: "Undécimo álbum de Aerosmith." },
      { id_albums: 12, title: "¿Donde jugaran los niños?", id_artist: 2, id_genre: 1, id_category: 3, price: 220, image: "1640623837770_img_.jpg", id_seller: 1, description: "Tercer álbum de Maná." },
      { id_albums: 13, title: "The Resitance", id_artist: 10, id_genre: 1, id_category: 1, price: 340, image: "1642028433659_img_.jpg", id_seller: 1, description: "Quinto álbum de Muse." }
    ]);

    console.log("¡Carga masiva completada exitosamente!");
    process.exit(0);
  } catch (error) {
    console.error("Error en la carga masiva:", error);
    process.exit(1);
  }
}

seed();
