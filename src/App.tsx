import "./styles.css";

const SHOT_PROMPT_BUILDER_SRC = "/shot_prompt_builder.html";

export function App() {
  return (
    <main className="app-host" aria-label="Shot Prompt Builder">
      <iframe
        className="app-frame"
        src={SHOT_PROMPT_BUILDER_SRC}
        title="Shot Prompt Builder"
      />
    </main>
  );
}
