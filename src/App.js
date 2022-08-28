import React from "react";
import html2canvas from "html2canvas";
import "./App.css";

const App = () => {
  const printRef = React.useRef();

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <div>I will not be in the image.</div>
        <div ref={printRef}>I will be in the image.</div>
        <button type="button" onClick={handleDownloadImage}>
          Download as Image
        </button>
      </div>
    </div>
  );
};

export default App;
