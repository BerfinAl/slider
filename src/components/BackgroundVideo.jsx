import alp from "../assets/alp.mp4";
import cover from "../assets/cover.png";

export default function BackgroundVideo({ scrollToImages }) {
  return (
    <div className="video-wrapper">
      <video id="background-video" autoPlay loop poster={cover} muted>
        <source src={alp} type="video/mp4" />
      </video>

      <div className="slide-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet quam venenatis, fermentum ipsum ac, gravida purus.
        </p>
        <button>
          Click
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="black"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </button>
      </div>

      <div className="arrow-down" onClick={scrollToImages}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-arrow-bar-down"
          viewBox="0 0 16 16"
        >
          <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z" />
        </svg>
      </div>
    </div>
  );
}
