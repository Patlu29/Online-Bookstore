import BooksCards from "./BooksCards";
import HomePoster from "./HomePoster"
import Marquee from "react-fast-marquee";
import TopsellingBooks from "./TopsellingBooks";

const Home = () => {
  return (
    <div>
      <HomePoster />
      <Marquee>
        <BooksCards />
      </Marquee>
      <TopsellingBooks />
    </div>
  )
}

export default Home
