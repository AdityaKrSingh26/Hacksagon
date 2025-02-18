import { ContactSection } from "./contactus-bottom";

export function PdfViewer() {
    return (
   <div>
    <div className="w-2/3 mx-auto flex flex-col">
    <h1 className="text-5xl mt-10 pb-6 border-b text-center font-bold animate-text">
    Brochure for Hacksagon 2025
  </h1>
    </div>
      <div
        style={{
          display: "flex",           
          justifyContent: "center",  
          alignItems: "center",     
          height: "100vh",           
          width: "100vw",           
          margin: "0",               
        }}
      >
        <div>
        </div>
        <div style={{ height: "75vh", width: "75%" }}>   
          <iframe
            src="https://jmp.sh/dN2PcUqh"
            title="PDF Viewer"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>
      </div>
        <ContactSection />
      </div>
    );
  }
  