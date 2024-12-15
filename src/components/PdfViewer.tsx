export function PdfViewer() {
    return (
      <div
        style={{
          display: "flex",           // Enables flexbox
          justifyContent: "center",  // Centers horizontally
          alignItems: "center",      // Centers vertically
          height: "100vh",           // Full viewport height
          width: "100vw",            // Full viewport width
          margin: "0",               // Remove default margin
        }}
      >
        <div style={{ height: "75vh", width: "80%" }}>
          <iframe
            src="https://jmp.sh/s/o6VvHQDkD5p3XuOTa9kl"
            title="PDF Viewer"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>
      </div>
    );
  }
  