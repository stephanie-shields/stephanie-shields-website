(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(149),a=t(147);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(a.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return p}),t.d(e,"StaticQueryContext",function(){return h}),t.d(e,"StaticQuery",function(){return m});var o=t(0),r=t.n(o),i=t(4),a=t.n(i),s=t(141),l=t.n(s);t.d(e,"Link",function(){return l.a}),t.d(e,"withPrefix",function(){return s.withPrefix}),t.d(e,"navigate",function(){return s.navigate}),t.d(e,"push",function(){return s.push}),t.d(e,"replace",function(){return s.replace}),t.d(e,"navigateTo",function(){return s.navigateTo});var c=t(143),u=t.n(c);t.d(e,"PageRenderer",function(){return u.a});var d=t(33);t.d(e,"parsePath",function(){return d.a});var h=r.a.createContext({}),m=function(n){return r.a.createElement(h.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},143:function(n,e,t){var o;n.exports=(o=t(146))&&o.default||o},145:function(n){n.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},146:function(n,e,t){"use strict";t.r(e);t(32);var o=t(0),r=t.n(o),i=t(4),a=t.n(i),s=t(52),l=t(2),c=function(n){var e=n.location,t=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:t},t.json))};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},e.default=c},147:function(n,e,t){"use strict";var o=t(148),r=t(0),i=t.n(r),a=t(4),s=t.n(a),l=t(152),c=t.n(l),u=t(142);function d(n){var e=n.description,t=n.lang,r=n.meta,a=n.keywords,s=n.title;return i.a.createElement(u.StaticQuery,{query:h,render:function(n){var o=e||n.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+n.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(r)})},data:o})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var h="1025518380"},148:function(n){n.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},149:function(n,e,t){"use strict";var o=t(145),r=t(0),i=t.n(r),a=t(4),s=t.n(a),l=t(142),c=t(144),u=(t(150),t(151)),d=t.n(u);function h(){var n=d()(["\n  /**\n   * Adapted from Bootstrap Reboot v4.2.1 (https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)\n   * Adapted from Normalize v8.0.1 (https://github.com/necolas/normalize.css)\n   * Normalization of HTML elements, manually forked from Normalize.css to remove\n   * styles targeting irrelevant browsers while applying new styles.\n   * \n   * Bootstrap is licensed MIT. https://github.com/twbs/bootstrap/blob/master/LICENSE\n   * Normalize is licensed MIT. https://github.com/necolas/normalize.css/blob/master/LICENSE.md\n   */\n\n  /**\n   * Document\n   * \n   * 1. Change from 'box-sizing: content-box' so that 'width' is not affected by 'padding' or 'border'.\n   * 2. Change the default font family in all browsers.\n   * 3. Correct the line height in all browsers.\n   * 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n   * 5. Change the default tap highlight to be completely transparent in iOS.\n   */\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box; /* 1 */\n  }\n\n  html {\n    font-family: sans-serif; /* 2 */\n    line-height: 1.15; /* 3 */\n    -webkit-text-size-adjust: 100%; /* 4 */\n    -webkit-tap-highlight-color: rgba(",", 0); /* 5 */\n  }\n\n  /**\n   * Shim for \"new\" HTML5 structural elements to display correctly (IE10, older browsers)\n   */\n  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n    display: block;\n  }\n\n  /**\n   * Body\n   * \n   * 1. Remove the margin in all browsers.\n   * 2. As a best practice, apply a default 'background-color'.\n   * 3. Set an explicit initial text-align value so that we can later use\n   *    the 'inherit' value on things like '<th>' elements.\n   */\n\n  body {\n    margin: 0; /* 1 */\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n    color: ",";\n    text-align: left; /* 3 */\n    background-color: ","; /* 2 */\n  }\n\n  /**\n   * Suppress the focus outline on elements that cannot be accessed via keyboard.\n   * This prevents an unwanted focus outline from appearing around elements that\n   * might still respond to pointer events.\n   * \n   * Credit: https://github.com/suitcss/base\n   */\n  [tabindex=\"-1\"]:focus {\n    outline: 0 !important;\n  }\n\n  /**\n   * Content grouping\n   * \n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   * 3. Set an explicit initial text-align value so that we can later use\n   *    the 'inherit' value on things like '<th>' elements.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * Typography\n   */\n\n  /**\n   * Remove top margins from headings\n   * \n   * By default, '<h1>'-'<h6>' all receive top and bottom margins. We nuke the top\n   * margin for easier control within type scales as it avoids margin collapsing.\n   */\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: calc("," / 2);\n  }\n\n  /**\n   * Reset margins on paragraphs\n   * \n   * Similarly, the top margin on '<p>'s get reset. However, we also reset the\n   * bottom margin to use 'rem' units instead of 'em'.\n   */\n  p {\n    margin-top: 0;\n    margin-bottom: ",";\n  }\n\n  /**\n   * Abbreviations\n   * \n   * 1. Duplicate behavior to the data-* attribute for our tooltip plugin\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   * 3. Add explicit cursor to indicate changed behavior.\n   * 4. Remove the bottom border in Firefox 39-.\n   * 5. Prevent the text-decoration to be skipped.\n   */\n\n  abbr[title],\n  abbr[data-original-title] { /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n    cursor: help; /* 3 */\n    border-bottom: 0; /* 4 */\n    text-decoration-skip-ink: none; /* 5 */\n  }\n\n  address {\n    margin-bottom: 1rem;\n    font-style: normal;\n    line-height: inherit;\n  }\n\n  ol,\n  ul,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  ol ol,\n  ul ul,\n  ol ul,\n  ul ol {\n    margin-bottom: 0;\n  }\n\n  dt {\n    font-weight: ",";\n  }\n\n  dd {\n    margin-bottom: .5rem;\n    margin-left: 0; /* Undo browser default */\n  }\n\n  blockquote {\n    margin: 0 0 1rem;\n  }\n\n  b,\n  strong {\n    font-weight: ","; /* Add the correct font weight in Chrome, Edge, and Safari */\n  }\n\n  small {\n    font-size: 80%; /* Add the correct font size in all browsers */\n  }\n\n  /**\n   * Prevent 'sub' and 'sup' elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline;\n  }\n\n  sub { bottom: -.25em; }\n  sup { top: -.5em; }\n\n  /**\n   * Links\n   */\n\n  a {\n    color: ",";\n    text-decoration: ",";\n    background-color: transparent; /* Remove the gray background on active links in IE 10. */\n\n    &:hover {\n      color: ",";\n      text-decoration: ",";\n    }\n  }\n\n  /**\n   * And undo these styles for placeholder links/named anchors (without href)\n   * which have not been made explicitly keyboard-focusable (without tabindex).\n   * It would be more straightforward to just use a[href] in previous block, but that\n   * causes specificity issues in many other styles that are too complex to fix.\n   * See https://github.com/twbs/bootstrap/issues/19402\n   */\n\n  a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  /**\n   * Code\n   */\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ",";\n    font-size: 1em; /* Correct the odd 'em' font sizing in all browsers. */\n  }\n\n  pre {\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of '1em' to use 'rem's */\n    margin-bottom: 1rem;\n    /* Don't allow content to break outside */\n    overflow: auto;\n  }\n\n  /**\n   * Figures\n   */\n\n  figure {\n    /* Apply a consistent margin strategy (matches our type styles). */\n    margin: 0 0 1rem;\n  }\n\n  /**\n   * Images and content\n   */\n\n  img {\n    vertical-align: middle;\n    border-style: none; /* Remove the border on images inside links in IE 10-. */\n  }\n\n  svg {\n    /* Workaround for the SVG overflow bug in IE10/11 is still required. */\n    /* See https://github.com/twbs/bootstrap/issues/26878 */\n    overflow: hidden;\n    vertical-align: middle;\n  }\n\n  /**\n   * Tables\n   */\n\n  table {\n    border-collapse: collapse; /* Prevent double borders */\n  }\n\n  caption {\n    padding-top: ",";\n    padding-bottom: ",";\n    color: ",";\n    text-align: left;\n    caption-side: bottom;\n  }\n\n  th {\n    /* Matches default '<td>' alignment by inheriting from the '<body>', or the */\n    /* closest parent with a set 'text-align'. */\n    text-align: inherit;\n  }\n\n  /**\n   * Forms\n   */\n\n  label {\n    /* Allow labels to use 'margin' for spacing. */\n    display: inline-block;\n    margin-bottom: ",';\n  }\n\n  /**\n   * Remove the default \'border-radius\' that macOS Chrome adds.\n   * \n   * Details at https://github.com/twbs/bootstrap/issues/24093\n   */\n  button {\n    border-radius: 0;\n  }\n\n  /**\n   * Work around a Firefox/IE bug where the transparent \'button\' background\n   * results in a loss of the default \'button\' focus styles.\n   * \n   * Credit: https://github.com/suitcss/base/\n   */\n  button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  input,\n  button,\n  select,\n  optgroup,\n  textarea {\n    margin: 0; /* Remove the margin in Firefox and Safari */\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n  button,\n  input {\n    overflow: visible; /* Show the overflow in Edge */\n  }\n\n  button,\n  select {\n    text-transform: none; /* Remove the inheritance of text transform in Firefox */\n  }\n\n  /**\n   * 1. Prevent a WebKit bug where (2) destroys native \'audio\' and \'video\'\n   *    controls in Android 4.\n   * \n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\n  button,\n  [type="button"], /* 1 */\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button; /* 2 */\n  }\n\n  /* Remove inner border and padding from Firefox, but don\'t restore the outline like Normalize. */\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n\n  input[type="radio"],\n  input[type="checkbox"] {\n    box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */\n    padding: 0; /* 2. Remove the padding in IE 10- */\n  }\n\n  input[type="date"],\n  input[type="time"],\n  input[type="datetime-local"],\n  input[type="month"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari */\n    /* bug where setting a custom line-height prevents text from being vertically */\n    /* centered within the input. */\n    /* See https://bugs.webkit.org/show_bug.cgi?id=139848 */\n    /* and https://github.com/twbs/bootstrap/issues/11266 */\n    -webkit-appearance: listbox;\n  }\n\n  textarea {\n    overflow: auto; /* Remove the default vertical scrollbar in IE. */\n    /* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */\n    resize: vertical;\n  }\n\n  fieldset {\n    /* Browsers set a default \'min-width: min-content;\' on fieldsets, */\n    /* unlike e.g. \'<div>\'s, which have \'min-width: 0;\' by default. */\n    /* So we reset that to ensure fieldsets behave more like a standard block element. */\n    /* See https://github.com/twbs/bootstrap/issues/12359 */\n    /* and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements */\n    min-width: 0;\n    /* Reset the default outline behavior of fieldsets so they don\'t affect page layout. */\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n\n  /* 1. Correct the text wrapping in Edge and IE. */\n  /* 2. Correct the color inheritance from \'fieldset\' elements in IE. */\n  legend {\n    display: block;\n    width: 100%;\n    max-width: 100%; /* 1 */\n    padding: 0;\n    margin-bottom: .5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n    color: inherit; /* 2 */\n    white-space: normal; /* 1 */\n  }\n\n  progress {\n    vertical-align: baseline; /* Add the correct vertical alignment in Chrome, Firefox, and Opera. */\n  }\n\n  /* Correct the cursor style of increment and decrement buttons in Chrome. */\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    /* This overrides the extra rounded corners on search inputs in iOS so that our */\n    /* \'.form-control\' class can properly style them. Note that this cannot simply */\n    /* be added to \'.form-control\' as it\'s not specific enough. For details, see */\n    /* https://github.com/twbs/bootstrap/issues/11586. */\n    outline-offset: -2px; /* 2. Correct the outline style in Safari. */\n    -webkit-appearance: none;\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \'inherit\' in Safari.\n  */\n\n  ::-webkit-file-upload-button {\n    font: inherit; /* 2 */\n    -webkit-appearance: button; /* 1 */\n  }\n\n  /**\n   * Correct element displays\n   */\n\n  output {\n    display: inline-block;\n  }\n  \n  summary {\n    display: list-item; /* Add the correct display in all browsers */\n    cursor: pointer;\n  }\n  \n  template {\n    display: none; /* Add the correct display in IE */\n  }\n\n  /* Always hide an element with the \'hidden\' HTML attribute (from PureCSS). */\n  /* Needed for proper display in IE 10-. */\n  [hidden] {\n    display: none !important;\n  }\n']);return h=function(){return n},n}var m=Object(c.b)(h(),function(n){return n.theme.color.black},function(n){return n.theme.fontFamily.sansSerif},function(n){return n.theme.fontSizeBase},function(n){return n.theme.fontWeight.normal},function(n){return n.theme.lineHeightBase},function(n){return n.theme.color.gray900},function(n){return n.theme.color.white},function(n){return n.theme.spacer},function(n){return n.theme.paragraphMarginBottom},function(n){return n.theme.fontWeight.bold},function(n){return n.theme.fontWeight.bolder},function(n){return n.theme.linkColor},function(n){return n.theme.linkDecoration},function(n){return n.theme.linkHoverColor},function(n){return n.theme.linkHoverDecoration},function(n){return n.theme.fontFamily.monospace},function(n){return n.theme.tableCellPadding},function(n){return n.theme.tableCellPadding},function(n){return n.theme.tableCaptionColor},function(n){return n.theme.labelMarginBottom}),p=(t(32),Object.assign({},{primary:"#007bff"},{gray100:"#f8f9fa",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#6c757d",gray700:"#495057",gray800:"#343a40",gray900:"#212529"},{white:"#fff",black:"#000"})),b={color:p,spacer:"1rem",linkColor:p.primary,linkDecoration:"none",linkHoverColor:"#0056b3",linkHoverDecoration:"underline",paragraphMarginBottom:"1rem",gridBreakpoints:{xs:"0",sm:"576px",md:"768px",lg:"992px",xl:"1200px"},gridGutterWidth:"24px",fontFamily:{sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',monospace:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizeBase:"1rem",fontWeight:{lighter:"lighter",light:"300",normal:"400",bold:"700",bolder:"bolder"},lineHeightBase:1.5,tableCellPadding:".75rem",tableCaptionColor:p.gray600,labelMarginBottom:".5rem"},g=function(n){var e=n.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};g.propTypes={siteTitle:s.a.string},g.defaultProps={siteTitle:""};var f=g,y=function(n){var e=n.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(n){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{theme:b},i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:n.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))),i.a.createElement(m,null))))},data:o})};y.propTypes={children:s.a.node.isRequired};e.a=y}}]);
//# sourceMappingURL=component---src-pages-404-js-ea9777416ff822da51bc.js.map