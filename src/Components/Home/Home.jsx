import heroImg from '../../assets/logo.png'
import bgImg from '../../assets/bg-img.jpg'
import { useLoaderData } from 'react-router-dom';
import Resume from '../Resume/Resume';
function Home() {
    const resume = useLoaderData()
    // console.log(resume);
  return (
    <div>
      <header
        style={{
          background: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <div className="flex flex-col  justify-center items-center text-center text-white p-10 ">
          <img src={heroImg} alt="" />

          <h1 className="text-4xl font-bold">
            In the near future, I hope to become a Developer.
          </h1>
          <p className="text-xl font-semibold">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text.
          </p>
          <button className="btn bg-gray-500 text-white mt-10">Here Now</button>
        </div>
      </header>
      <main>
        <div className=" grid md:grid-cols-3  gap-5 mt-10 p-10">
          {resume.map((resume, idx) => (
            <Resume key={idx} resume={resume}></Resume>
          ))}
        </div>
      </main>
      <section>
        <p className="text-center text-2xl font-bold mt-10  ">Contact Us </p>
        <div className="hero  ">
          <div className="hero-content ">
            <div className="card  w-full  shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Massage</span>
                  </label>
                  <input
                    type="password"
                    placeholder="type your massage"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home