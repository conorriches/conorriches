import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Anybody', sans-serif;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow-y: scroll;
  }

  h1 {
    background: #0575e6;
    background: -webkit-linear-gradient(
      to right,
      #0575e6,
      #021b79
    );
    background: linear-gradient(
      to right,
      #0575e6,
      #021b79
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1{
    font-size:2.4em;
    margin: 0.6em 0;
  }

  h2{
    font-size:1.8em;
    margin-bottom: 0.6em;
    margin-top: 1.5em;
    border-left: 0.2em solid #0575e6;
    padding: 0.3em;
    padding-left: 0.5em;
  }

  h3{
    font-size: 1.2em;
    margin: 1.5em 0 0.6em 0;
    border-left: 0.2em solid #00c9ff;
    padding: 0.3em;
    padding-left: 0.5em;
  }

  h4{
    font-weight: bold;
    line-height:1.4em;
    margin: 0.6em 0;
  }

  ol, ul {
    margin-left: 1.8em;
  }

  li {
    line-height:1.4em;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
  }

  pre {
    background: #eee;
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    background: #eee;
    border-left: 3px solid;
    font-family: monospace;
  }

  code {
    font-family: monospace;
    display: inline-block;
    padding: 0 0.5em;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-top:0.6em;
    margin-bottom: 2.4rem;
    line-height:1.4em;
  }

  strong {
    font-weight: 900;
  }

  em {
    font-style: italic;
  }

  h1,h2,h3,h4,h5,h6 {
    clear:both;
  }


`;
