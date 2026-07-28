import React from "react";

interface Props {}

const SaveBar: React.FC<Props> = () => {
  return (
    <div className="flex justify-end">
      <button className="btn-primary px-lg py-md rounded-lg shadow-md">
        Save Changes
      </button>
    </div>
  );
};
export default SaveBar;
