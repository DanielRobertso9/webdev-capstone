import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";


function RootLayout() {
    return <div className="app">
      <Header />
      <main>
        <Outlet/>
      </main>
      {/* <Footer /> */}
    </div>
      

}

export default RootLayout
