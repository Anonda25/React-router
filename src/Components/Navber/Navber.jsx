import { Link } from "react-router-dom"
import pdf from '../../assets/qursation-in js.pdf'

function Navber() {
  return (
    <div className="flex  justify-between p-6 bg-gray-500 text-white items-center">
      <div className="font-bold text-2xl p-3">
        <h1>Ananda Biswas</h1>
      </div>
      <div className="flex gap-5 font-bold items-center">
        <Link className="hover:bg-black px-3" to={"Home"}>
          Home
        </Link>
        <Link className="hover:bg-black px-3" to={"Blog"}>
          About Us
        </Link>
        <Link className="hover:bg-black px-3" to={"Contuct"}>
          Contuct
        </Link>
        <Link to={"/posts"}>Posts</Link>
        <Link className="hover:bg-black px-3" to={"Profile"}>
          Profile
        </Link>
        <a
          className="hover:bg-black bg-gray-500 px-3 btn text-white"
          href={pdf}
          download={pdf}
        >
          Dowenload Resume
        </a>
      </div>
    </div>
  );
}

export default Navber