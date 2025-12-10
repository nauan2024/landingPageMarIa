import { Cards } from "./components/layouts/cards"
import { Header } from "./components/layouts/header"
import { Main } from "./components/layouts/main"
import {Questions_space} from "./components/layouts/questions"
import { Aboutus } from "./components/layouts/sectionaboutus";
import { Maps } from "./components/layouts/maps";
import { Footer } from "./components/layouts/footer";
import { Enemys } from "./components/layouts/enemy";
import { DialogMarIA } from "./components/layouts/dialogMarIA";
function App() {
 

  return (
    <>
<Header/>
<Main/>
<Aboutus />
<Maps />
<Enemys />
<Cards/>
<DialogMarIA/>
<Questions_space/>
<Footer/>
    </>
  )
}

export default App
