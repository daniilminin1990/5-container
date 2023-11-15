import "./App.css";
import img from "./assets/img/unnamed.jpg";

function App() {
  return (
    <div className="App">
      <section className="section1">
        <div className="my-container">
          <div className="wrap">
            <img className="img" src={img} alt="" />
            <div className="text-wrap">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa obcaecati molestias laboriosam ut sunt
                voluptatibus nihil aperiam sequi exercitationem rem rerum labore incidunt, mollitia fugiat voluptate, provident a
                fugit nemo!
              </p>
              <button className="btn">Click me</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
