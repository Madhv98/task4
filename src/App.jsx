import "./App.css";
function App() {
  return (
    <div>
    <header>
      <h2>Welcome to My Website</h2>
    </header>
    
    <nav>
      <ul>
      <li><a href="https://www.facebook.com/">Home</a></li>
      <li><a href="https://www.google.com/">Find US</a></li>
        <li>Services</li>
      
      
      </ul>
    </nav>
    
    <main>
      <section>
        <article>
          <h2>About Us</h2>
          <p>................Main section of the site..................................</p>
        </article>
      </section>
      
      <section>
        <h2>Expancation of the site </h2>
        <article>
          <h3>Service 1</h3>
          <p>..................................................</p>
        </article>
        <article>
          <h3>Service 2</h3>
          <p>Service 2 ..........................................</p>
        </article>
      </section>
    </main>
    
    <aside>
      <h2>Latest News</h2>
      <article>
        <h3>Breaking News</h3>
        <p>Stay informed with latest Information</p>
      </article>
    </aside>
    <footer>
      <p>2023 My react website</p>
    </footer>
  </div>
  );
}

export default App;
