function NicePanda() {
  return (
    <div className="cssLoader">
      <div className="triangle1"></div>
      <div className="triangle2"></div>
    </div>
  );
}

function Astronaut() {
  return (
    <div className="space-loader">
      <div className="astronaut">
        <div className="astronaut-helmet">
          <div className="helmet-glass">
            <div className="helmet-inner-glass"></div>
            <div className="helmet-reflection"></div>
          </div>
          <div className="antenna"></div>
        </div>
        <div className="astronaut-body">
          <div className="suit-pattern"></div>
          <div className="suit-details"></div>
          <div className="backpack">
            <div className="tank tank-1"></div>
            <div className="tank tank-2"></div>
            <div className="pipe"></div>
          </div>
          <div className="arm arm-left">
            <div className="glove"></div>
          </div>
          <div className="arm arm-right">
            <div className="glove"></div>
          </div>
          <div className="leg leg-left">
            <div className="boot"></div>
          </div>
          <div className="leg leg-right">
            <div className="boot"></div>
          </div>
        </div>
      </div>

      <div className="space-environment">
        <div className="stars-container">
          <div className="stars stars-near"></div>
          <div className="stars stars-mid"></div>
          <div className="stars stars-far"></div>
        </div>

        <div className="planets">
          <div className="planet planet-1">
            <div className="planet-ring"></div>
            <div className="planet-crater"></div>
          </div>
          <div className="planet planet-2">
            <div className="planet-atmosphere"></div>
          </div>
        </div>

        <div className="meteors">
          <div className="meteor meteor-1"></div>
          <div className="meteor meteor-2"></div>
          <div className="meteor meteor-3"></div>
        </div>

        <div className="orbit-paths">
          <div className="orbit-path path-1"></div>
          <div className="orbit-path path-2"></div>
          <div className="orbit-path path-3"></div>
        </div>
      </div>
    </div>
  );
}

const LoudBull = () => {
  return <div className="loader_loudBull"></div>;
};

const Pan = () => {
  return (
    <div
      style={{
        background: "radial-gradient(circle at top left, #4facfe, #5f2c82)",
      }}
      className="loaderPan w-screen h-screen fixed top-0 left-0"
    >
      <div className="rings anim-pan">
        <div
          style={
            {
              "--delay": "06",
            } as React.CSSProperties
          }
          className="ring anim-zoomIn"
        ></div>
        <div
          style={
            {
              "--delay": "04",
            } as React.CSSProperties
          }
          className="ring anim-zoomIn"
        ></div>
        <div
          style={
            {
              "--delay": "03",
            } as React.CSSProperties
          }
          className="ring anim-zoomIn"
        ></div>
        <div
          style={
            {
              "--delay": "02",
            } as React.CSSProperties
          }
          className="ring anim-zoomIn"
        ></div>
        <div
          style={
            {
              "--delay": "01",
            } as React.CSSProperties
          }
          className="ring anim-zoomIn"
        ></div>
        <div
          style={
            {
              "--delay": "00",
            } as React.CSSProperties
          }
          className="ring anim-zoomIn"
        ></div>
      </div>
    </div>
  );
};

export const Loader = {
  NicePanda,
  LoudBull,
  Astronaut,
  Pan,
};
