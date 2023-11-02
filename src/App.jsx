import Card from "./components/Card";
import imagen from './imagen/caba.jpg'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  let image = <img className='image' src={imagen} alt="IMAGEN"/>
  let instagram = <a href="https://www.instagram.com/juannmachado7" target="_blank"><button>Ir a Instagram</button></a>
  return (
    <>
      <h1>ENTREGABLE N° 1 - FRONT END III</h1>
      <h2>Juan Machado</h2>
      <Card/>
      {instagram}
      {image}
    </>
  );
}

export default App;
