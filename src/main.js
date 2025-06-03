import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="text-2xl font-bold text-primary">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button" class="bg-blue-300 p-4"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

async function articles(order = "") {
  const response = await fetch(`https://dpdcjreodtodlmkpswzg.supabase.co`, {
    method: 'GET',
    headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZGNqcmVvZHRvZGxta3Bzd3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTM2NjcsImV4cCI6MjA2MzIyOTY2N30.QcfK3LEaNubuocLxBEHAdjFtswc-brvLXHfYtFYBsY4',
    }
  });
  const articles = await response.json();
  await display(articles);
}

function display(articles) {

  const container = document.getElementByID('articles')
  container = ''
  
  articles.forEach(article => {
    const articles_display = document.createElement('div');
    articles_display.classList.add('article');
    
    articles_display.innerHTML = `
      <h2>${article.title}</h2>
      <h3>${article.subtitle}</h3>
      <p>${article.author} | ${formatDate(article.created_at)}</p>
      <p>${article.content}</p>
    `;

    container.appendChild(articles_display);
  });
}
