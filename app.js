document.addEventListener("DOMContentLoaded", () => {
    // Verificar sesión activa
/*   function verificarSesion() {
        const emailActivo = localStorage.getItem("usuarioActivo");
        if (!emailActivo) {
            window.location.href = "index.html";
            return;
        }

        // Mostrar nombre del usuario
        const usuario = JSON.parse(localStorage.getItem(emailActivo));
        document.getElementById("user-name").textContent = `Hola, ${usuario.nombre}`;
    }

    // Cerrar sesión
    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("usuarioActivo");
        window.location.href = "index.html";
    });
*/
    // Datos de recomendaciones
    const recomendaciones = {
        libros: [
            { titulo: "El Principito", fecha: "1943", autor: "Antoine de Saint-Exupéry", genero: "Fábula", imagen: "https://m.media-amazon.com/images/I/81Yl3qMnjBL._AC_UF1000,1000_QL80_.jpg" },
            { titulo: "Cien años de soledad", fecha: "1967", autor: "Gabriel García Márquez", genero: "Realismo mágico", imagen: "https://m.media-amazon.com/images/I/91I+uL5mfpL.jpg" },
            { titulo: "Harry Potter", fecha: "1997", autor: "J.K. Rowling", genero: "Fantasía", imagen: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg" }
        ],
        peliculas: [
            { titulo: "Inception", fecha: "2010", autor: "Christopher Nolan", genero: "Ciencia ficción", imagen: "https://m.media-amazon.com/images/I/71EwekuUuEL._AC_UF894,1000_QL80_.jpg" },
            { titulo: "El Padrino", fecha: "1972", autor: "Francis Ford Coppola", genero: "Drama", imagen: "https://m.media-amazon.com/images/I/51FQ4p8VqEL.jpg" },
            { titulo: "Interstellar", fecha: "2014", autor: "Christopher Nolan", genero: "Ciencia ficción", imagen: "https://m.media-amazon.com/images/I/71yQFm3i6jL._AC_UF894,1000_QL80_.jpg" }
        ],
        musica: [
            { titulo: "Bohemian Rhapsody", fecha: "1975", autor: "Queen", genero: "Rock", imagen: "https://m.media-amazon.com/images/I/81y4bAhrY4L._UF894,1000_QL80_.jpg" },
            { titulo: "Shape of You", fecha: "2017", autor: "Ed Sheeran", genero: "Pop", imagen: "https://m.media-amazon.com/images/I/81MZ9JzKj9L._AC_UF1000,1000_QL80_.jpg" }
        ]
    };

    let seccionActual = "libros";

    function renderTarjetas(tipo) {
        seccionActual = tipo;
        const container = document.getElementById("cards-container");
        container.innerHTML = "";
        document.getElementById("section-title").textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);

        recomendaciones[tipo].forEach((item, i) => {
            const card = document.createElement("div");
            card.className = "card fade-in";
            card.style.animationDelay = `${i * 0.2}s`;
            card.innerHTML = `
                <img src="${item.imagen}" alt="${item.titulo}" class="card-img">
                <h3>${item.titulo}</h3>
                <p><b>Fecha:</b> ${item.fecha}</p>
                <p><b>Autor:</b> ${item.autor}</p>
                <p><b>Género:</b> ${item.genero}</p>
                <button>Ver más</button>
            `;
            container.appendChild(card);
        });
    }

    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.addEventListener("click", () => renderTarjetas(btn.dataset.section));
    });

    //verificarSesion();
    renderTarjetas("libros");
});
