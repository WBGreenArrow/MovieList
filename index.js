const movies = [
    {
        id: 1,
        name: "Matrix",
        genero: "Ação",
        img_url:
            "https://th.bing.com/th/id/R.6fe3e09e74511ca7a93e8944e153eb1a?rik=hjAdd4%2fZRAHESQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-EeEy3m13LFQ%2fUX1TA3_xjSI%2fAAAAAAAAATQ%2fYDdwZKwjGAo%2fs1600%2f1999-matrix-1999-2.jpg&ehk=PS0rPa1BH80hk%2f0buuWJoYlIH1UXAd6es6nHMbPSpKY%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        id: 2,
        name: "Homem Aranha",
        genero: "Comédia",
        img_url: "https://th.bing.com/th/id/OIP.kQHM65LZs42_AqYXIyZf-AHaK4?pid=ImgDet&rs=1",
    },
    {
        id: 3,
        name: "Homem Aranha 2",
        genero: "Ação",
        img_url: "https://br.web.img2.acsta.net/pictures/19/06/21/09/19/3733262.jpg",
    },
];

const divForm = document.getElementById("form-father");

const form = document.getElementById("form");

const containerCarder = document.getElementById("container-carder");

divForm.removeChild(form);
renderCarder();

function addNewMovie() {
    const btnSpan = document.getElementById("btn-add-new-movie");
    divForm.removeChild(btnSpan);

    form.animate([{ transform: "scale(0)" }], 500);

    form.animate([{ transform: "scale(1)" }], 500);

    divForm.appendChild(form);
}
function addMovie() {
    const nameMovie = document.getElementById("name").value;
    const imgURL = document.getElementById("img-url").value;
    const genreMovie = document.getElementById("genre-movie").value;
    const id = movies.length + 1;

    salveMovie(id, nameMovie, genreMovie, imgURL);

    renderCarder();

    //Cleaning inputs

    document.getElementById("name").value = "";
    document.getElementById("img-url").value = "";
    document.getElementById("genre-movie").value = "";
}

function salveMovie(id, name, genre, img) {
    const newMovie = {
        id: id,
        name: name,
        genero: genre,
        img_url: img,
    };
    movies.push(newMovie);
}

function renderCarder() {
    const carder = movies.map((movie) => {
        return `<div class="movie-carder">
            <img
                src="${movie.img_url}"
                alt="${movie.id}"
            />
            <div class="movie-cader-footer content-flex">
                <h1>${movie.name}</h1>
                <h2>${movie.genero}</h2>
            </div>
        </div>`;
    });

    containerCarder.innerHTML = carder;
}
