
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  define: {
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify('wPNPrIMPiU6tRPKpN'),
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify('service_rty3svx'),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify('template_iiafg6h'),
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
