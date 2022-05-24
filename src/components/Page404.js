import React from "react";

const Page404 = () => {



  return(
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "95vh", backgroundColor: "#e4304c", color:"#080494", fontWeight: "700" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white", width: "100vw", padding: "20px 0 20px 0" }}>
      <h2 style={{ fontSize:"50px", }}>Page 404 not found</h2>
      <p style={{ fontSize: "20px" }}>Go back <a href='/digi-hosting/'>Home</a></p>
    </div>
  </div>
  )
}

export default Page404