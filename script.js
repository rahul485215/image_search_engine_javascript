const accessKey='0doWPJelHl8arwGG3aP06HiKCNGY9Ejo2KRd5iL1Q1I';

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn= document.getElementById("show-more-btn");
const footer = document.getElementById('siteFooter');


let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const URL=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(URL);
    const data=await response.json();

    if(page===1){
        searchResult.innerHTML="";
    }

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;

        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })

    showMoreBtn.style.display="block";
    footer.style.display="block";
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})

