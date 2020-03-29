import React from "react";

const Dropdown = ({ options, onChange }) => {
  return (
    // <div className="dropdown is-active">
    //   <div className="dropdown-trigger">
    //     <button
    //       className="button"
    //       aria-haspopup="true"
    //       aria-controls="dropdown-menu2"
    //     >
    //       <span>Sort Order</span>
    //       <span className="icon is-small">
    //         <i className="fas fa-angle-down" aria-hidden="true"></i>
    //       </span>
    //     </button>
    //   </div>
    //   <div className="dropdown-menu" id="dropdown-menu2" role="menu">
    //     <div className="dropdown-content">
    //       <div className="dropdown-item">
    //         <p>
    //           You can insert <strong>any type of content</strong> within the
    //           dropdown menu.
    //         </p>
    //       </div>
    //       <div className="dropdown-item">
    //         <p>
    //           You simply need to use a <code>&lt;div&gt;</code> instead.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      Sort by:
      <select onChange={onChange}>
        {options.map(({ key, value }) => {
          return <option key={key}>{value}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
