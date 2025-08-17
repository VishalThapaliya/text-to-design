import { CiMobile2 } from "react-icons/ci";
import { LuLightbulb } from "react-icons/lu";
import { FaRegPaperPlane } from "react-icons/fa";

import "./Generator.css";

const Generator = ({ inspirations }) => {
  return (
    <section id="generator" className="generator-section">
      <div className="container">
        <div className="section-header">
          <h2>Generate Your App Mockup</h2>
          <p>
            Describe your app idea in detail and let our AI create a visual
            representation
          </p>
        </div>

        <div className="generator-layout">
          <div className="input-column">
            <div className="card description-card">
                <div className="column-title">
                    <LuLightbulb  className="icon"/>
                    <h3>Describe Your App Idea</h3>
                </div>
              
              <textarea placeholder="Example: An e-commerce app showing list of items in a card layout..."></textarea>
              <button className="btn btn-generate">
                <FaRegPaperPlane />
                Generate Mockup
                </button>
            </div>

            <div className="inspiration-section">
              <h3>Need inspiration? Try these examples:</h3>
              <div className="inspiration-list">
                {inspirations.map((inspiration) => (
                  <div className="inspiration-item" key={inspiration.id}>
                    {inspiration.icon}
                    <div>
                        <h4>{inspiration.title}</h4>
                        <p>{inspiration.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="output-column">
            <div className="card mockup-card">
              <div className="column-title">
                <CiMobile2  className="icon"/>
                <h3>Generated UI</h3>
              </div>
              <div className="mockup-placeholder">
                <CiMobile2 className="mockup-icon"/>
                <p>
                  Your mockup will appear here. <br /> Describe your app idea to
                  get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generator;
