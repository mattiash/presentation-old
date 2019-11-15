# Presentation

Based on https://github.com/jxnblk/mdx-deck
and https://github.com/mattiash/presentation

Run

```
npm install
npm start
```

To start a dev-server and open it in your browser.

`npm run build` builds a static html/js presentation in dist/
and `npm run pdf` generates a pdf in dist/.

## Workaround for image loading

[Issue #401](https://github.com/jxnblk/mdx-deck/issues/401) in mdx-deck means that images don't load with the dev server.
To work-around that, run

`npm run dev`  in one window and then `npm run proxy` in another.
Finally, open [http://localhost:8080/0](http://localhost:8080/0)
in your browser.
