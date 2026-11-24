# Curriculum Vitae

to Launch [Click Here](https://vahan-sahakyan.github.io/cv/)

## Build PDF

`./scripts/build-pdf.sh` renders `index.html` via headless Chrome into a text-based A4 `download/VAHAN_SAHAKYAN_SR_SWE.pdf`. Set `CHROME` to override the browser path.

## Layout

| Path | Contents |
|---|---|
| `index.html` | CV markup |
| `css/` | `style.css` screen, `print.css` A4 print/PDF |
| `js/script.js` | console helper: `actions.rotate()` |
| `assets/` | Geist static weights (OFL), favicon (same as the site) |
| `download/` | built PDF, linked from the page |
| `scripts/build-pdf.sh` | PDF build |
