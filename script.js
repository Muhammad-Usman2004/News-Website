const news = [];

let key = "9a999077aa9caf4e858d0e6bba4e6252";
async function getdata(key) {
    let result = await fetch(`https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=${key}`);
    result = await result.json();

    news.push(...result.articles);
    console.log(news);

    
    const card3 = document.getElementById("card-3");
    card3.innerHTML = ""; 
    news.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3"); 

        card.innerHTML = `
         <div class="row g-0 d-flex align-items-center ">
                        <div class="col-4 col-md-4 border h-100">
                            <img src=${article.image} class="img-fluid h-100" alt="...">
                        </div>
                    <div class="col-8 col-md-8">
                        <div class="card-body ">
                                <h5 class="card-title">${article.title.slice(0,19)}...</h5>
                                <p class="card-text">${article.description.slice(0,19)}...</p>
                                <p class="card-text"><small class="text-body-secondary">${article.publishedAt}</small>
                                </p>
                         </div>
                    </div>
            </div>
        `;

        card3.appendChild(card);
    });
}

getdata(key);
