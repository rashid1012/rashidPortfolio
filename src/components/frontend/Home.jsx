import React from "react";
import Header from "../common/Header";

function Home() {
  return (
    <>
      {/* Header Import */}
      <Header />

      <main>
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Hi, I'm</span>
                <h1>Muhammed Rashid</h1>
                <p>
                  As a Laravel developer, I bring elegance and efficiency to
                  every project.
                </p>
                <div className="mt-4">
                  <a href="/contact_us" className="btn btn-primary large">Contact Now</a>
                  <a href="/projects" className="btn btn-secondary large ms-2">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}

export default Home;
