# Copilot Instructions for Antipodean Codebase

## Project Overview
Antipodean is a narrative-driven project with a focus on character POV documents, story notes, and supporting web assets. The codebase is organized for collaborative writing, story development, and web presentation.

## Directory Structure & Key Files
- `character-pov/`: Contains markdown files for each major character's POV. See `README.md` for character summaries and links.
- `src/`: Main story chapters and narrative arcs, organized by numbered markdown files.
- `spike/` and `notes/`: Experimental scenes, analysis, and planning notes.
- `index.html`, `content.css`, `navbar.css`, etc.: Web presentation layer for the story.
- `server.js`: Node.js server for local development and preview.
- `js/smartquotes.min.js`: Client-side enhancement for typography.

## Developer Workflows
- **Previewing the Story**: Run the local server (`node server.js`) and open `index.html` in a browser. Use the VS Code task `open-browser` to launch `http://localhost:3000`.
- **Editing Content**: Add or update markdown files in `character-pov/`, `src/`, `spike/`, or `notes/`. Link new POVs in `character-pov/README.md`.
- **Styling**: Update CSS files in the root for global or component-specific styles.

## Project-Specific Conventions
- **POV Structure**: Each character POV file follows a narrative format, focusing on internal perspective and development. Summaries and links are maintained in `character-pov/README.md`.
- **File Naming**: Story chapters use a `N.NN.Title.md` pattern for chronological order and clarity.
- **Experimental Content**: Use `spike/` for drafts, alternate scenes, or speculative writing. Move finalized content to `src/`.
- **Web Assets**: All presentation files (HTML, CSS, JS) are in the root or `js/`.

## Integration Points
- **Node.js**: The project uses a simple Node.js server (`server.js`) for local preview. No build step is required.
- **No Automated Tests**: There are no test scripts or frameworks; focus is on narrative and presentation.
- **No Database**: All data is stored in markdown files; no backend database integration.

## Example Patterns
- To add a new character POV:
  1. Create `character-pov/New-Character-POV.md`.
  2. Add a summary and link in `character-pov/README.md`.
- To add a new chapter:
  1. Create `src/N.NN.Chapter-Title.md`.
  2. Update navigation or references as needed.

## Additional Notes
- Keep markdown files focused on narrative, not code.
- Use CSS for all styling; avoid inline styles in HTML.
- Use the provided JS for minor client-side enhancements only.

---
For questions about conventions or structure, review `character-pov/README.md` and the root directory files. If unclear, ask for feedback or clarification.

Content analysis:

- The valley community has no name. "Protectorate" refers to the aliens who created Autumn and who supply the technology that Autumn dispenses to Forest.
- Always include all chapter files from `src/*.md` and higher as context for any operation, search, or reference.
- The valley community is an independent group in rural Australia, defending against antithesis threats. Forest leads with self-reliance and distrust of authority. Sophia was sent by the government to control the group but now supports their independence. Government and corporate interests seek to observe, learn from, or access advanced technology and limit the valley community’s autonomy.
- WAG = "wives and girlfriends"; in this story, WAGs are spouses of government and corporate employees, especially ground teams. The "range mothers" are all WAGs.
- Children begin as selfish little monsters. Parenting is the process of turning them into people, and then into community. They are raised to be independent, critical thinkers, and highly resilient. Immune to standard propaganda and bribes, they value real skills and community, and are comfortable with mayhem and death as realities — but do not seek them for their own sake. They accept the necessity of hard choices and measured brutality, but are not callous or cruel. Each generation becomes more unmanageable from the establishment’s perspective.
- Do not mention Bonzer.
- Use third person perspective consistently.
- Each character's thoughts and feelings should be conveyed through their actions and dialogue, rather than direct exposition.