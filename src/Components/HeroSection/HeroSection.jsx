

const HeroSection = () => {
    return (
        <div>
            <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1728486144678-95cb7c5f7463?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Push Your Limits at EdgeFit</h1>
            <p className="mb-5 text-white">
            Discover your potential at EdgeFit. Join us to transform your fitness journey with personalized programs, expert trainers, and a supportive community. Your path to a stronger, healthier you starts here.
            </p>
            <button className="btn bg-primary text-white border-none">Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default HeroSection;