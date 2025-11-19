import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

// Configuração do CORS para permitir que o frontend acesse os recursos
app.use(
  cors({
    origin: "*", // Em produção, substitua pelo domínio do seu frontend
  }),
);

// Diretório onde seus arquivos de vídeo HLS estão armazenados
// Estrutura esperada: videos/nome-do-video/playlist.m3u8
const VIDEO_DIR = path.join(__dirname, "./videos");

/**
 * Rota para transmitir arquivos HLS (Manifesto e Segmentos)
 * Exemplo de uso no front: http://localhost:8000/hls/meu-video/playlist.m3u8
 */
app.get("/hls/:folder/:filename", (req: Request, res: Response) => {
  console.log("hit here");
  const { folder, filename } = req.params;

  // Caminho absoluto seguro para o arquivo
  const filePath = path.join(VIDEO_DIR, folder, filename);

  // Verificação básica de segurança para evitar Path Traversal
  if (!filePath.startsWith(VIDEO_DIR)) {
    return res.status(403).send("Acesso negado.");
  }

  // Verifica se o arquivo existe
  if (!fs.existsSync(filePath)) {
    console.error(`Arquivo não encontrado: ${filePath}`);
    return res.status(404).send("Arquivo não encontrado.");
  }

  const ext = path.extname(filename).toLowerCase();

  // Configura os Headers Content-Type corretos para HLS
  if (ext === ".m3u8") {
    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
  } else if (ext === ".ts") {
    res.setHeader("Content-Type", "video/MP2T");
  } else {
    // Outros arquivos (opcional)
    res.setHeader("Content-Type", "application/octet-stream");
  }

  // Cria uma stream de leitura e envia para a resposta (eficiente para arquivos grandes)
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

// Cria a pasta de vídeos se não existir
if (!fs.existsSync(VIDEO_DIR)) {
  fs.mkdirSync(VIDEO_DIR);
  console.log(`Pasta criada: ${VIDEO_DIR}`);
}

app.listen(PORT, () => {
  console.log(`🚀 Servidor HLS rodando em http://localhost:${PORT}`);
  console.log(`📁 Servindo vídeos de: ${VIDEO_DIR}`);
});
