import "./stylesheets/style.sass";
import "@fontsource/inter/600.css";
import "@fontsource/inter";
import "animate.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
