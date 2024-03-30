import Image from "next/image";
import image1 from "../app/assets/valise.jpeg";
export default function Hero() {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://wordpress.vecurosoft.com/travolo/wp-content/uploads/2023/11/banner-bg-1.png)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:items-center">
        <Image
          src={image1}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Luggage"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Explore the World and Find Beauty!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn text-white btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}
