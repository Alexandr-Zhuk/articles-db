const articleData = document.querySelector('.view-article > .container');
const newUrl = window.location.pathname + '/view';

let currentIdArticle;

const renderArticle = (data) => {
    const html = 
        `<div class="name-article">
            ${data.data.articleName}
        </div>
        <div class="text-article">
            ${data.data.articleText}
        </div>
        <div class="author">
            Автор: <span>${data.data.author.authorName}</span>
        </div>
        <div class="genre">
        Жанр автора: <span>${data.data.author.genre.genreName}</span>
    </div>`;
    articleData.innerHTML = html;
};

const viewArticle = async () => {
    const data = await axios.get(newUrl);
    currentIdArticle = data.data.id;
    console.log(data.data);
    renderArticle(data);
};

viewArticle();
