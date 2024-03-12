import {BrowserRouter,Routes,Route} from 'react-router-dom';
import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import Home from 'pages/Home/Home';

// Lessons
import Lesson20 from "./lessons/Lesson20/Lesson20";
import Lesson21 from "./lessons/Lesson21/Lesson21";
import Lesson22 from "./lessons/Lesson22/Lesson22";
import Lesson23 from "./lessons/Lesson23/Lesson23";
import Lesson24 from "lessons/Lesson24/Lesson24";
import Homework24_1 from "homeworks/Homework24_1/Homework24_1";
import Homework24_2 from "homeworks/Homework24_2/Homework24_2";

// Homeworks
import Homework20 from "./homeworks/Homework20/Homework20";
import Homework21 from "./homeworks/Homework21/Homework21";
import Homework23 from "homeworks/Homework23/Homework23";
import Homework22 from "homeworks/Homework22/Homework22";
import Homework24 from "homeworks/Homework24/Homework24";
import Lesson25 from "lessons/Lesson25/Lesson25";
import Users from 'pages/Users/Users';
import About from 'pages/About/About';
import Clients from 'pages/Clients/Clients';
import Apple from 'pages/Clients/Apple/Apple';
import Facebook from 'pages/Clients/Facebook/Facebook';
import Sega from 'pages/Clients/Sega/Sega';
import Lesson27 from 'lessons/Lesson27/Lesson27';


function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/apple" element={<Apple />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/sega" element={<Sega />} /> 
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout> */}
      
      {/* <Lesson20 /> */}
      {/* <Lesson21/> */}
      {/* <Lesson22/> */}
      {/* <Lesson23 /> */}
       {/* <Lesson24/>  */}
       {/* <Lesson25/> */}
       {/* <Lesson26/> */}
       <Lesson27 />
      {/* <Homework20 /> */}
      {/* <Homework21/> */}
       {/* <Homework22/>  */}
       {/* <Homework23/>   */}
       {/* <Homework24/>  */}
    </BrowserRouter>
  );
}

export default App;
