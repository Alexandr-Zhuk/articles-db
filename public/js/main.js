const articleData = document.querySelector('.view-article > .container');
const commentsList = document.querySelector('.comments > .container');
const addCommentForm = document.querySelector('.add-comment-form');
const commentInput = document.querySelector('textarea[name=commentInput]');
let idParent = null;
const newUrl = window.location.pathname + '/view';
const currentUrl = window.location.pathname;
const str = currentUrl.split('/');
console.log(commentInput);
const commentsUrl = '/comments/list/' + str[str.length - 1];
const addCommentUrl = '/comments/add/' + str[str.length - 1];

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

const renderComments = (data) => {
    let html = '';
    data.data.forEach(item => {
        if(item.hasOwnProperty('parentComment')){
            html += `<p class='answered'>${item.parentComment.commentText}</p>
                    <p class="comment-item" data-id="${item._id}">${item.commentText}
                        <span class="answer-question">Відповісти</span>
                    </p>`;
        }else{
            html += `<p class="comment-item" data-id="${item._id}">${item.commentText}<span class="answer-question">Відповісти</span></p>`;
        }
    });
    commentsList.innerHTML = html;
    console.log(data);
};

const getComments = async() => {
    const data = await axios.get(commentsUrl);
    console.log(data);
    renderComments(data);
};

const addComment = async(ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    if(idParent !== null){
        formData.append("parentComment", idParent);
    }
    const data = await axios.post(addCommentUrl, formData);
    getComments();
};

getComments();

addCommentForm.addEventListener('submit', addComment);

const viewArticle = async () => {
    const data = await axios.get(newUrl);
    currentIdArticle = data.data.id;
    console.log(data.data);
    renderArticle(data);
};

viewArticle();

commentsList.addEventListener('click', (ev) => {
    if(ev.target.classList.contains('answer-question')){
        idParent = ev.target.parentNode.dataset.id;
        commentInput.focus();
    }
});
