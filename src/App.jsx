import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "./components/Footer";
import GridSugar from "./components/GridSugar";
import Ingredients from "./components/Ingredients";
import Introduction from "./components/Introduction";
import SectionComentaries from "./components/SectionComentaries";


export default function App() {
  return (
    <>
      <Introduction />
      <Ingredients />
      <SectionComentaries />
      <GridSugar />
      <Footer />
    </>
  )
}