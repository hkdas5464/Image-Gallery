import React from 'react';
import ReactLoading from "react-loading";
function Loading(){
return(
<div  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
<ReactLoading type="spinningBubbles" color="#fff" />
</div>


)
}

export default Loading;
