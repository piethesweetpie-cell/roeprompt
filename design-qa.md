source visual truth path: C:\Users\minss\.codex\generated_images\019edf01-3943-72f1-bb7c-7672c5d0dcc4\ig_09d53b9e07eca10b016a34fe7ed5008191a0d47fcaaa76a1d6.png
implementation screenshot path: D:\Program\기타\Shot\shot-prompt-builder\qa\implementation-step1-final.png
viewport: 1440 x 1024
state: Step 1, no selected prompt pieces
full-view comparison evidence: D:\Program\기타\Shot\shot-prompt-builder\qa\comparison-step1.png
focused region comparison evidence: not needed; first-screen navigation, central sample image, frame overlay, prompt cart, and primary controls are readable in the full-view comparison.

**Findings**
- No actionable P0, P1, or P2 issues remain.

**Required Fidelity Surfaces**
- Fonts and typography: implementation uses clean system UI typography with similar hierarchy, readable body sizing, strong title weight, and uppercase utility labels. No wrapping or clipping is visible at the target viewport.
- Spacing and layout rhythm: implementation preserves the source three-column frame, narrow step rail, large central image workspace, and sticky right prompt cart. The central image is slightly wider and the empty-state cart is intentionally adapted to the real app's initial state.
- Colors and visual tokens: navy, sky blue, and white palette matches the source direction. Dividers, blue chips, and primary button states are consistent with the mock.
- Image quality and asset fidelity: generated studio subject is a real bitmap asset, not a placeholder or CSS drawing. The sample image is clear, horizontally framed, and supports overlay click zones.
- Copy and content: app-specific labels, step names, prompt cart, empty state, and actions match the requested Shot Prompt Builder flow.

**Interaction Checks**
- Step 1 page renders with "Choose Shot Size".
- Clicking "Full Shot" moves to Direction Layers and adds "full body shot" to the cart.
- Selecting "Low Angle" and "Center Composition" enables "Next: Review Prompt".
- Review screen includes "full body shot", "low angle", and "centered composition" in the final prompt.

**Patches Made Since Previous QA Pass**
- Replaced portrait sample asset with a horizontal studio sample so the image no longer crops.
- Repositioned shot-size label overlays to reduce overlap.
- Changed SVG frame fill to transparent by default so the sample image remains visible.
- Updated empty prompt cart behavior so no generated prompt appears before the first selection.
- Fixed the Vite entrypoint from `main.jsx` to `main.tsx`.

**Implementation Checklist**
- Build passes with `npm run build`.
- Dev server responds at `http://127.0.0.1:5173`.
- First-screen screenshot captured.
- Core wizard click path verified through the local browser debug protocol.

**Follow-up Polish**
- A future pass could add a compact Korean/English label toggle if the number of shot-size labels feels too dense for smaller screens.

final result: passed

---

source visual truth path: user request in conversation on 2026-06-19 asking Step 2 to become a numbered selector
implementation screenshot path: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-numbered-selection-v2.png
viewport: 1440 x 1024
state: Step 2, Shot Size selected, Camera Angle question active
full-view comparison evidence: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-numbered-selection-v2.png
focused region comparison evidence: not needed; the full viewport shows the tab area, clean image preview, numbered option bar, detail panel, and Prompt Cart.

**Findings**
- No actionable P0, P1, or P2 issues remain for the numbered Step 2 selector change.

**Required Fidelity Surfaces**
- Fonts and typography: numbered buttons are compact and legible; the detail panel carries the large Korean title, concise Korean explanation, English term, and prompt chip.
- Spacing and layout rhythm: Step 2 no longer pushes option controls into a long card list. The first desktop viewport contains the preview, number selector, detail panel, helper text, and next button.
- Colors and visual tokens: the existing navy/blue palette is preserved. Active and hover number states use blue outline/fill.
- Image quality and asset fidelity: the preview image is unobstructed by text boxes; only guide overlays and markers appear on top of the image.
- Copy and content: angle options now match the requested 1-6 set; lens and lighting prompt terms were adjusted to `anamorphic lens` and `moody blue hour`.

**Interaction Checks**
- `npm run build` passes.
- `?step=2` renders the numbered Step 2 QA state.
- Number buttons render horizontally below the image.
- Detail panel shows the current option and includes the "이 옵션 선택" action.

**Patches Made Since Previous QA Pass**
- Removed the large explanatory text box from the image preview.
- Replaced the long option card grid with a compact numbered option bar.
- Added a separate detail panel below the number bar.
- Kept hover preview behavior on number buttons.
- Updated durable Step 2 design guidance in `AGENTS.md`.

**Follow-up Polish**
- A future pass could reduce the Step 2 header copy further if even more vertical room is desired.

final result: passed

---

source visual truth path: C:\Users\minss\.codex\attachments\eb1c1d84-8529-4c59-8907-10435ed47e91\pasted-text.txt
implementation screenshot path: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-overlay-selection.png
viewport: 1440 x 1024
state: Step 2, Shot Size selected, Camera Angle question active
full-view comparison evidence: the rendered Step 2 screenshot shows the tab strip, preview image, option buttons, and detail panel without requiring page scroll. Options and detail controls are now overlaid inside the preview image.
focused region comparison evidence: not needed; the full viewport shows the requested no-scroll overlay structure.

**Findings**
- No actionable P0, P1, or P2 issues remain for the requested Step 2 overlay redesign.

**Required Fidelity Surfaces**
- Layout: Step 2 uses a fixed-height desktop shell with overflow hidden. The image preview owns the interaction area; long controls are no longer placed below the image.
- Controls: option buttons render as number plus short Korean label, for example `① 자연스럽게`, `② 강하게`, `③ 약하게`.
- Detail panel: the active hover/selected option is shown as a glass overlay inside the image with Korean title, short Korean description, English term, prompt chip, and `이 옵션 선택`.
- State: `currentPreviewOption` now resolves from hover, then selected value, then the first option, so hover and click update the visible explanation from the same source.
- Colors and visual tokens: the existing navy/blue palette, glass panels, active blue states, and sample person image are preserved.

**Interaction Checks**
- `npm run build` passes.
- `?step=2` renders the overlay Step 2 QA state.
- Hover/focus handlers update `hoveredOptionId`; click updates the selected category value and clears hover state.
- Prompt Cart remains category-based and updates from the same selected state.

**Patches Made Since Previous QA Pass**
- Moved the numbered option selector from below the image into the preview image overlay.
- Replaced number-only buttons with number plus short Korean labels.
- Moved the detail panel into the preview image overlay.
- Reworked Step 2 preview state to use hover/selected/fallback priority.
- Added Step 2 fixed-height desktop shell and internal Prompt Cart scrolling.
- Updated durable Step 2 design guidance in `AGENTS.md`.

final result: passed

source visual truth path: user request in conversation on 2026-06-19 asking Step 2 to become a numbered selector
implementation screenshot path: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-numbered-selection-v2.png
viewport: 1440 x 1024
state: Step 2, Shot Size selected, Camera Angle question active
full-view comparison evidence: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-numbered-selection-v2.png
focused region comparison evidence: not needed; the full viewport shows the tab area, clean image preview, numbered option bar, detail panel, and Prompt Cart.

**Findings**
- No actionable P0, P1, or P2 issues remain for the numbered Step 2 selector change.

**Required Fidelity Surfaces**
- Fonts and typography: the numbered buttons are compact and legible; the detail panel carries the large Korean title, concise Korean explanation, English term, and prompt chip.
- Spacing and layout rhythm: Step 2 no longer pushes the option controls into a long card list. The first desktop viewport contains the preview, number selector, detail panel, helper text, and next button.
- Colors and visual tokens: the existing navy/blue palette is preserved. Active and hover number states use blue outline/fill.
- Image quality and asset fidelity: the preview image is unobstructed by text boxes; only guide overlays and markers appear on top of the image.
- Copy and content: angle options now match the requested 1-6 set; lens and lighting prompt terms were adjusted to `anamorphic lens` and `moody blue hour`.

**Interaction Checks**
- `npm run build` passes.
- `?step=2` renders the numbered Step 2 QA state.
- Number buttons render horizontally below the image.
- Detail panel shows the current option and includes the "이 옵션 선택" action.

**Patches Made Since Previous QA Pass**
- Removed the large explanatory text box from the image preview.
- Replaced the long option card grid with a compact numbered option bar.
- Added a separate detail panel below the number bar.
- Kept hover preview behavior on number buttons.
- Updated durable Step 2 design guidance in `AGENTS.md`.

**Follow-up Polish**
- A future pass could reduce the Step 2 header copy further if even more vertical room is desired.

final result: passed

---

source visual truth path: C:\Users\minss\.codex\attachments\85ac9b4c-105f-4928-8341-de69ae36c880\pasted-text.txt
implementation screenshot path: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-feeling-selection-v2.png
viewport: 1440 x 1024
state: Step 2, Shot Size selected, Camera Angle question active
full-view comparison evidence: text brief requested Step 2 to change from terminology dictionary to feeling selector; implementation screenshot shows the changed Step 2 state.
focused region comparison evidence: not needed; the Step 2 header, question tabs, central preview, result-first option cards, prompt chips, and categorized cart are all readable in the full-view screenshot.

**Findings**
- No actionable P0, P1, or P2 issues remain for the requested Step 2 change.

**Required Fidelity Surfaces**
- Fonts and typography: Step 2 now leads with Korean question text and result-oriented card titles. English camera terms are demoted to small secondary labels and prompt chips.
- Spacing and layout rhythm: the central preview is larger and the options sit below it as a selection area rather than a side-by-side glossary. Cards use a 3-column grid to avoid clipped copy.
- Colors and visual tokens: the existing navy, sky blue, and white prototype palette is preserved. Lighting cards include subtle mood gradients.
- Image quality and asset fidelity: the central preview continues to use the existing generated studio image asset. Preview overlays and mini guides update visually without adding new placeholder imagery.
- Copy and content: tab labels now read "어디서 볼까?", "어디에 놓을까?", "렌즈 느낌", "빛/분위기", with Movement available only in video mode. Cards use result-first Korean titles such as "강하고 위압적으로" and "배경을 흐리게".

**Interaction Checks**
- `npm run build` passes.
- `?step=2` renders Step 2 directly for local visual QA without changing the normal root flow.
- Prompt Cart groups selected chips by category, for example `Shot Size: full body shot`.
- The disabled next-state helper explains that camera position and composition are required before review.

**Patches Made Since Previous QA Pass**
- Reworked Direction Layers into a question-led feeling selector.
- Added result-first presentation metadata for angle, composition, lens/depth, lighting/mood, and movement options.
- Added central preview states for camera angle, composition, lens/depth, lighting, and motion.
- Added composition/lens/lighting mini-guide cards.
- Updated Prompt Cart to show category labels with selected prompt chips.
- Recorded the Step 2 design decision in `AGENTS.md`.

**Follow-up Polish**
- A future pass could add per-card image thumbnails for each lens and lighting choice if more photorealistic previews are needed.

final result: passed

---

source visual truth path: user request in conversation on 2026-06-19 asking Step 2 to become a numbered selector
implementation screenshot path: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-numbered-selection-v2.png
viewport: 1440 x 1024
state: Step 2, Shot Size selected, Camera Angle question active
full-view comparison evidence: D:\Program\기타\Shot\shot-prompt-builder\qa\step2-numbered-selection-v2.png
focused region comparison evidence: not needed; the full viewport shows the tab area, clean image preview, numbered option bar, detail panel, and Prompt Cart.

**Findings**
- No actionable P0, P1, or P2 issues remain for the numbered Step 2 selector change.

**Required Fidelity Surfaces**
- Fonts and typography: numbered buttons are compact and legible; the detail panel carries the large Korean title, concise Korean explanation, English term, and prompt chip.
- Spacing and layout rhythm: Step 2 no longer pushes option controls into a long card list. The first desktop viewport contains the preview, number selector, detail panel, helper text, and next button.
- Colors and visual tokens: the existing navy/blue palette is preserved. Active and hover number states use blue outline/fill.
- Image quality and asset fidelity: the preview image is unobstructed by text boxes; only guide overlays and markers appear on top of the image.
- Copy and content: angle options now match the requested 1-6 set; lens and lighting prompt terms were adjusted to `anamorphic lens` and `moody blue hour`.

**Interaction Checks**
- `npm run build` passes.
- `?step=2` renders the numbered Step 2 QA state.
- Number buttons render horizontally below the image.
- Detail panel shows the current option and includes the "이 옵션 선택" action.

**Patches Made Since Previous QA Pass**
- Removed the large explanatory text box from the image preview.
- Replaced the long option card grid with a compact numbered option bar.
- Added a separate detail panel below the number bar.
- Kept hover preview behavior on number buttons.
- Updated durable Step 2 design guidance in `AGENTS.md`.

**Follow-up Polish**
- A future pass could reduce the Step 2 header copy further if even more vertical room is desired.

final result: passed
