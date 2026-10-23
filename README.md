# Curriculum Vitae

to Launch [Click Here](https://vahan-sahakyan.github.io/cv/)

## Build PDF

`./scripts/build-pdf.sh` renders `index.html` via headless Chrome into a text-based A4 `download/VAHAN_SAHAKYAN__SR_SWE.pdf`. Set `CHROME` to override the browser path.

## Layout

| Path | Contents |
|---|---|
| `index.html` | CV markup |
| `css/` | `style.css` base, `dark.css` dark theme, `pdf-mode.css` paper view, `print.css` A4 print/PDF |
| `js/script.js` | theme switch, console helpers |
| `assets/` | fonts, favicon |
| `download/` | built PDF, linked from the page |
| `scripts/build-pdf.sh` | PDF build |
