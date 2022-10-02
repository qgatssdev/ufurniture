import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="App__section1">
        <header>
          <p>Ufurniture</p>
        </header>
        <p className="section1__cleanAndElegant">Clean and Elegant.</p>
        <div className="section1__details">
          <p className="section1__details__p">
            Join our family of clean and elegant designs to brighten your day
            with absolute comfort.
          </p>
        </div>
        <div className="section1__scroll">
          <img src={require('./assets/Vector.svg').default} alt="" />
          <p>Scroll down</p>
        </div>
      </section>
      <section className="App__section2">
        <h1>Top Selling</h1>
        <div className="section2__block1">
          <div className="block__div1">
            <p className="div1__p">Designed by Maximilian</p>
            <p className="div1__p2">
              A simple set up to catch up with friends. Enjoy our minimalistic
              design to keep things simple and clean. Made from one of finest
              wood in Italy to give customers the best quality
            </p>
          </div>
          <div className="block__div2">
            <img src={require('./assets/Rectangle 10.png')} alt="" />
          </div>
        </div>
        <div className="section2__block1">
          <div className="block__div2">
            <img src={require('./assets/Rectangle 15.png')} alt="" />
          </div>
          <div className="block__div1">
            <p className="div1__p frex">Designed by Bourgois</p>
            <p className="div1__p2 frex">
              A multi functionary chair that can be used in homes. stores,
              shopping malls and offices. Enjoy maximum comfort with stunning
              design to make you happy.
            </p>
          </div>
        </div>
        <div className="section2__block1">
          <div className="block__div1">
            <p className="div1__p">Designed by Bourgois</p>
            <p className="div1__p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
              mauris eleifend vitae tortor vivamus mattis tristique. Dignissim
              fringilla id consequat, sit. Nulla nulla ut dictumst mauris
              dignissim. Tortor bibendum sed augue pharetra sed elit. Dui ut
              vitae posuere risus aliquam suspendisse magna at. Pretium,
              volutpat phasellus amet rhoncus. Vitae, gravida interdum
              scelerisque ac nibh lectus rutrum tincidunt elit.
            </p>
          </div>
          <div className="block__div2">
            <img src={require('./assets/Rectangle 16.png')} alt="" />
          </div>
        </div>
        <button className="button__section">SHOP</button>
      </section>
      <section className="App__section3">
        <h1>Beautiful Detailing</h1>
        <p className="section3__deets">
          WE SPECIALIZE IN LUXURY AND DETAILED DESIGN TO SATISFY OUR CUSTOMERS
        </p>
        <div className="section3__gallery">
          <div className="gallery__1">
            <div className="gallery__1__floral">
              <p>FLORAL PRINT</p>
            </div>
            <p className="view__Gallery">VIEW GALLERY</p>
          </div>
          <div className="gallery__2">
            <div className="gallery__2__SW">
              <p>SIMPLE WEAVE</p>
            </div>
            <div className="gallery__2__SW2">
              <p>SCRUPLE WOOD</p>
            </div>
          </div>
        </div>
      </section>
      <section className="App__section4">
        <p>JOIN OUR CLUB TO GET DISCOUNT</p>
        <div className="section4__input">
          <div className="section4__input_div">
            <div>
              <label>YOUR EMAIL ADDRESS</label>
              <input type={'text'} />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer__gen">
          <div className="footer__gen__1">
            <div className="gen__1__links">
              <p>Twitter</p>
              <p>LinkedIn</p>
            </div>
            <div className="gen__1__mentions">
              <div className="mentions__adeniyi">
                <p>DESIGNED BY ADENIYI</p>
                <img src={require('./assets/Vector (1).svg').default} alt="" />
              </div>
              <div className="mentions__chivo">
                <p>DESIGNED BY CHIVO</p>
                <img src={require('./assets/Vector (1).svg').default} alt="" />
              </div>
            </div>
          </div>
          <div className="footer__address">
            <p>design@email.com</p>
            <p>+234 678 489 2994</p>
            <p className="address__actual">
              elkwood road, off john <br />
              murtough 1 <br />
              3456 stripe
            </p>
          </div>
        </div>
        <p className="copyright">@COPYRIGHT UFURNITURE,2022</p>
      </footer>
    </div>
  );
}

export default App;
