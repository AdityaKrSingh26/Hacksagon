import { ContactSection } from "./contactus-bottom";

export function PdfViewer() {
    return (
   <div>
    <div className="w-2/3 mx-auto flex flex-col">
    <h1 className="text-5xl mt-10 pb-6 border-b text-center font-bold animate-text">
    Bronchure for Hacksgon 2025
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
        <div style={{ height: "90vh", width: "75%" }}>   
          <iframe
            src="https://jmp.sh/s/o6VvHQDkD5p3XuOTa9kl"
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
  