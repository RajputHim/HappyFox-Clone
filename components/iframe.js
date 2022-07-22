let video = () => {
  return `          <iframe
    id="iframe"
    width="560"
    height="315"
    src="https://www.youtube.com/embed/cD0FfdHdNis"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>`;
};

export default video;

let termsFunction = () => {
  return `<a href="">By submitting, you agree to HappyFox’s Privacy Policy.</a>`;
};

export { termsFunction };
