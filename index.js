async function fetchNewsDetails() {
    try {
        const response = await fetch('https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        
        const newsSegment = data.slice(0, 10);
        console.log(newsSegment);
        newsSegment.forEach(news => {
            const wrapper = document.querySelector('.news-item'); 

            const h2 = document.createElement('h2');
            h2.textContent = news.title;

            const p = document.createElement('p');
            p.textContent = news.author;

            wrapper.appendChild(h2); 
            wrapper.appendChild(p); 
        });
    } 
    catch(error) {
        console.error('An error occurred:', error);
    }
}

fetchNewsDetails();



// const data =
// {
//     "author": "Ms. Albert Reilly",
//     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/190.jpg",
//     "title": "quidem maxime libero",
//     "url": "https://unacceptable-balance.net",
//     "id": "121"
//   }


// const title = document.getElementById('title') 
// title.textContent = data.title;

// const img = document.querySelector('img')
// img.src = data.avatar
// img.alt = 'authors image';

// const author = document.getElementById('author')
// author.textContent = data.author;

// const url = document.getElementsByClassName('view-details')[0]
// url.href = data.url;