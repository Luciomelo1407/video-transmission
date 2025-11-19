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

O projeto precisa de um arquivo de vídeo convertido para HLS. Crie uma pasta chamada `videos` na raiz e use o FFmpeg.

1.  Coloque um arquivo `input.mp4` na raiz do projeto.
2.  Execute o comando abaixo para gerar os segmentos:

```bash
mkdir -p videos/meu-video

ffmpeg -i input.mp4 \
  -profile:v baseline \
  -level 3.0 \
  -start_number 0 \
  -hls_time 10 \
  -hls_list_size 0 \
  -f hls videos/meu-video/playlist.m3u8
```

Isso criará a playlist (`.m3u8`) e os fragmentos (`.ts`) dentro de `videos/meu-video/`.

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
