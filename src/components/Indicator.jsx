export default function Indicator({
  currentSlide,
  slides,
  changeCurrentSlide,
}) {
  const dotElements = slides.map((_, i) => {
    return (
      <div
        className={`dot ${currentSlide === i ? "current" : ""}`}
        key={i}
        onClick={() => changeCurrentSlide(i)}
      ></div>
    );
  });

  return <div className="indicator-wrapper">{dotElements}</div>;
}
