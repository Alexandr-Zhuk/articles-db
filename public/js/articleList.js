const artList = document.querySelector('.article-list > .container');

const renderArticles = (data) => {
    let html = '';
    data.forEach(item => {
        html += `<h2><a href="/articles/view-article/${item._id}">${item.articleName}<a/></h2>`;
    });
    artList.innerHTML = html;
}; 

const getAllArticle = async() => {
    const allArticles = await axios.get('/articles/list');
    renderArticles(allArticles.data);
};

getAllArticle();