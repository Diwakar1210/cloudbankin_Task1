import React, { useState } from "react";
import TabViewModel from "../../viewmodels/TabViewModel";

const NavTabForm = () => {
  const tabs = [
    new TabViewModel("Borrower Company Info"),
    new TabViewModel("Director Info"),
    new TabViewModel("Financial Info"),
    new TabViewModel("Past Performance Details"),
    new TabViewModel("Document Upload"),
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="nav_section">
      {/* Navigation Tabs */}
      <div className="nav-tabs">
        {/* <ul>
          {tabs.map((tab, index) => (
            <li key={index}>
              <a
                className={index === activeTab ? "active" : ""}
                onClick={() => setActiveTab(index)}
              >
                <div>
                  <span>{index + 1}</span>
                  <p>{tab.tabName}</p>
                </div>
              </a>
            </li>
          ))}
        </ul> */}
      </div>
      <div className="nav-tabs">
        {tabs.map((tab, index) => (
          <div className="tab">
            <a
              className={index === activeTab ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              <div className="tabs" key={index}>
                <span>{index + 1}</span>
                <p>{tab.tabName}</p>
              </div>
            </a>
            {/* <div className="dotted_line"></div> */}
          </div>
        ))}
      </div>

      <section className="section">
        <div className="form_container">
          <h2>{tabs[activeTab].tabName}</h2>
          {activeTab === 0 && (
            <>
              <div className="form_heading">
                <div className="form">
                  <form>
                    <div className="form_section">
                      <div className="form_fields">
                        <label>Property Name</label>
                        <input
                          type="text"
                          name="propertyName"
                          placeholder="Property Name"
                        />
                      </div>
                      <div className="form_fields">
                        <label>Property Type</label>
                        <select>
                          <option value="">Property Type</option>
                          <option value="Own House">Own House</option>
                          <option value="Rented">Rented</option>
                        </select>
                      </div>
                      <div className="form_fields">
                        <label>Number of Units</label>
                        <select>
                          <option value="">Number of Units</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </div>
                    </div>
                    <div className="form_section2">
                      <div className="form_fields">
                        <label>Property Address</label>
                        <textarea
                          name="propertyAddress"
                          placeholder="Enter Borrower Name"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form_section2">
                      <div className="form_fields">
                        <label>File Attachment</label>
                        <label for="file" className="file_label">
                          <span>Browse</span> or Drag & Drop to Attach a file
                          <input type="file" name="file" id="file" />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
          {activeTab === 1 && (
            <>
              <div className="nodataavailable">
                <p>No {tabs[activeTab].tabName} fields Available</p>
              </div>
            </>
          )}
          {activeTab === 2 && (
            <>
              <div className="nodataavailable">
                <p>No {tabs[activeTab].tabName} fields Available</p>
              </div>
            </>
          )}
          {activeTab === 3 && (
            <>
              <div className="nodataavailable">
                <p>No {tabs[activeTab].tabName} fields Available</p>
              </div>
            </>
          )}
          {activeTab === 4 && (
            <>
              <div className="nodataavailable">
                <p>No {tabs[activeTab].tabName} fields Available</p>
              </div>
            </>
          )}
        </div>
        <div className="form_footer">
          <button className="btn">Back</button>
          <button className="btn">Continue</button>
        </div>
      </section>
    </div>
  );
};

export default NavTabForm;
