import React from "react";

const Accordion = ({name,id,email}) => {
  return (
    <>
      <div className="collapse collapse-arrow bg-base-100" key={id}>
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
            {name}
        </div>
        <div className="collapse-content">
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};
export default Accordion;
