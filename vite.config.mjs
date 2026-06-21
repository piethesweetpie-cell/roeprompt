import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const dcHtmlFallbackGuard = () => ({
  name: "dc-html-fallback-guard",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url?.split("?")[0].endsWith(".dc.html")) {
        res.statusCode = 404;
        res.end("Design Component not found");
        return;
      }

      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url?.split("?")[0].endsWith(".dc.html")) {
        res.statusCode = 404;
        res.end("Design Component not found");
        return;
      }

      next();
    });
  },
});

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    warmup: {
      clientFiles: ["./src/main.tsx"],
    },
  },
  plugins: [dcHtmlFallbackGuard(), react()],
});
