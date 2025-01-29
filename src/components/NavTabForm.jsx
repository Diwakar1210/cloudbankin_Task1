import React from "react";
import useFormViewModel from "../viewmodels/useFormViewModel";

const NavTabForm = () => {
  const { currentPage, fields, changePage, pages } = useFormViewModel();

  return (
    <div>
      <h2>Dynamic Form with Nav Tabs</h2>

      {/* Navigation Tabs */}
      <div className="nav-tabs">
        {pages.map((page) => (
          <button
            key={page.pageName}
            className={currentPage === page.pageName ? "active-tab" : "tab"}
            onClick={() => changePage(page.pageName)}
          >
            {page.pageName}
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <form className="form-container">
        {fields.map((field) => (
          <div key={field.fieldId} className="form-group">
            <label>{field.fieldName}:</label>
            {field.type === "string" && <input type="text" />}
            {field.type === "textarea" && <textarea />}
            {field.type === "file" && <input type="file" />}
            {field.type === "number" && <input type="number" />}
            {field.type === "dropdown" && (
              <select>
                {field.selectableValues.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default NavTabForm;