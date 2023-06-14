const genreList = document.querySelector('.genre-list-list');
const addForm = document.querySelector('.add-genre-form');

const renderGenres = (data) => {
    
    let html = '';
    
    data.data.forEach(item => {
        html += `<li class="genre-item"><div class="genre-name" data-id="${item._id}">${item.genreName}</div></li>`;
    });
    genreList.innerHTML = html;
};

const viewGenres = async () => {
    const data = await axios.get('/genres/list');
    renderGenres(data);
};

const addGenre = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const data = await axios.post('/genres/add', formData);
    renderGenres(data);
};

viewGenres();

addForm.addEventListener('submit', addGenre);