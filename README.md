# 🎥 HLS Streaming App (Node.js + React)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

Um projeto Fullstack simples para demonstrar como servir e consumir vídeos via protocolo **HLS (HTTP Live Streaming)**.

## 🚀 Funcionalidades

- **Backend (Express):** Serve arquivos `.m3u8` e segmentos `.ts` com suporte a CORS.
- **Frontend (React + Hls.js):** Player de vídeo moderno capaz de reproduzir streams HLS em qualquer navegador.
- **Fullstack Dev:** Execução simultânea com um único comando.

---

## 🛠️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

1.  [Node.js](https://nodejs.org/en/) (v18 ou superior)
2.  [FFmpeg](https://ffmpeg.org/download.html) (para converter vídeos para HLS)

---

## 📦 Instalação

1.  Clone este repositório ou copie os arquivos gerados.
2.  Instale as dependências:

```bash
npm install
```

---

## 🎬 Preparando o Vídeo

1. Você deve dar a permissão para executar os arquivos download-video.sh e mp4-to-hls.sh caso esteja no linux e executá-los

2. caso não queria executar os arquivos rode:
```
# entra no diretório de vídeos
$ cd videos

# baixa um arquivo de domínio público, caso queria pode usar qualquer outro arquivo de vídeo
$ wget https://archive.org/download/bb_be_human/bb_be_human_512kb.mp4 -O be_human_1936.mp4

# cria a pasta video-chunk onde vão ficar os arquivos convertidos e converte o vídeo no formato ideal para ser mandado via o protocolo HLS (HTTPS Live Server)
$ mkdir video-chunk && ffmpeg -i be_human_1936.mp4 -c:v libx264 -pix_fmt yuv420p -preset veryfast -crf 23 -c:a aac -ar 44100 -ac 2 -f hls -hls_time 10 -hls_playlist_type vod -hls_segment_filename "video-chunk/video%03d.ts" video-chunk/index.m3u8
```

Isso criará a playlist (`.m3u8`) e os fragmentos (`.ts`) dentro de `videos`.

---

## ▶️ Executando o Projeto

Para rodar tanto o servidor (API) quanto o site (Frontend) ao mesmo tempo:

```bash
npm run dev
```

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:8000](http://localhost:8000)

---

## 📁 Estrutura

```
.
├── src/                # Código Frontend (React)
│   ├── App.tsx
│   └── VideoPlayer.tsx
├── videos/             # Pasta onde ficam os arquivos HLS gerados
├── server.ts           # Servidor Node.js/Express
├── package.json        # Scripts e dependências
└── tsconfig.json       # Configuração TypeScript
```

---

Feito com ❤️
