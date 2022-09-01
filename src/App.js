import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'
import  Roadmap from './components/Roadmap'
import Populatediv from './components/Populatediv';
import './App.css';

function App() {

  
  return (
    <div className='app'>
      <header>
      <Navbar />
      </header>
      <main>
        <Main />
        <h2>Hello</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit adipisci commodi fugit maxime blanditiis quaerat cum fuga sit optio maiores esse minus id nam ullam recusandae voluptatibus, omnis corrupti.
    Molestias sunt iusto nemo maxime blanditiis, accusamus delectus quasi iste, praesentium porro cupiditate dolore perferendis non beatae. Aliquam tempore ut facere nesciunt hic ullam temporibus! Qui sint distinctio ab omnis!
    Assumenda ipsum necessitatibus aperiam porro hic maxime laborum praesentium temporibus numquam illum sequi, rem eum architecto, sit nemo, animi delectus reiciendis! Ea modi rerum debitis expedita! Repellendus inventore tempora velit!
    Consequuntur ducimus numquam dignissimos nostrum consectetur amet, corporis rerum. Distinctio ducimus voluptas ipsa expedita at id vel a porro soluta modi laudantium, repudiandae minima velit. Quos mollitia eligendi aut maxime.
    Vel pariatur, distinctio id quam eveniet quod ex dicta temporibus quasi dolorem, quaerat veritatis modi voluptas rem placeat sequi fugit magni! Eaque eligendi quisquam ipsum explicabo voluptates? Qui, laboriosam atque.
        </p>
      </main>
      <Populatediv />
      <Roadmap/>

      <Footer />
    </div>
  );
}

export default App;
