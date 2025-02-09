import React, { useEffect } from 'react';

function Error() {
  
  useEffect(() => {
    alert("Server didn't respond.");
  }, []); 

  return null; 
}

const Error404 = () => {
  return (
    <div>
      <Error />
    </div>
  );
};

export default Error404;