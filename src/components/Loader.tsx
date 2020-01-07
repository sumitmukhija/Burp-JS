import * as React from 'react';

const defaultPlaceholder = "../../public/images/placeholder.png";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={defaultPlaceholder} width="120" height="120"></img>
    </div>
  );
};
