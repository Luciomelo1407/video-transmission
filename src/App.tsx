import { VideoPlayer } from "./VideoPlayer";

function App() {
  // Lembre-se de criar a pasta 'videos/meu-video' na raiz do projeto backend
  const videoUrl = "http://localhost:8000/hls/video-chunk/index.m3u8";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Player de Vídeo HLS</h1>
      <VideoPlayer src={videoUrl} />
      <p style={{ marginTop: "1rem", color: "#94a3b8" }}>
        Backend rodando na porta 8000 | Frontend na porta 5173
      </p>
    </div>
  );
}

export default App;
