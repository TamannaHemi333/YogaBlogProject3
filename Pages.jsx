import { Fragment } from "react";
import PHead from "../components/PHead/PHead";
import PAbout from "../components/PAbout/PAbout";
import Header from "../components/Header/Header";


const Pages = () => {
  return (
    <Fragment>
      <Header/>
        <PHead/>
        <PAbout/>
    </Fragment>
    
  )
}

export default Pages