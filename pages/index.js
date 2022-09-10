import Create from '../components/Home/Create'
import Examples from '../components/Home/Examples'
import Introduction from '../components/Home/Introduction'
import Steps from '../components/Home/Steps'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Create />
      <Steps />
      <Examples />
    </div>
  )
}
