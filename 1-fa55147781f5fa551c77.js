(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return p}),t.d(n,"StaticQueryContext",function(){return m}),t.d(n,"StaticQuery",function(){return h});var r=t(0),i=t.n(r),o=t(4),a=t.n(o),l=t(144),s=t.n(l);t.d(n,"Link",function(){return s.a}),t.d(n,"withPrefix",function(){return l.withPrefix}),t.d(n,"navigate",function(){return l.navigate}),t.d(n,"push",function(){return l.push}),t.d(n,"replace",function(){return l.replace}),t.d(n,"navigateTo",function(){return l.navigateTo});var d=t(151),c=t.n(d);t.d(n,"PageRenderer",function(){return c.a});var u=t(49);t.d(n,"parsePath",function(){return u.a});var m=i.a.createContext({}),h=function(e){return i.a.createElement(m.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},146:function(e,n,t){"use strict";var r=t(4),i=t.n(r),o=t(142),a=o.d.div.withConfig({displayName:"Row",componentId:"sc-1in056w-0"})(["display:flex;"," "," ",""],function(e){return e.hasGutters&&Object(o.c)(["margin-right:calc(-"," / 2);margin-left:calc(-"," / 2);"],function(e){return e.theme.gridGutterWidth},function(e){return e.theme.gridGutterWidth})},function(e){return"row"===e.flexDirection&&Object(o.c)(["flex-direction:row;flex-wrap:wrap;"])},function(e){return"column"===e.flexDirection&&Object(o.c)(["flex-direction:column;flex-wrap:nowrap;"])});a.propTypes={children:i.a.node.isRequired,hasGutters:i.a.bool,flexDirection:i.a.oneOf(["row","column"])},a.defaultProps={hasGutters:!0,flexDirection:"row"},n.a=a},147:function(e,n,t){"use strict";var r=t(4),i=t.n(r),o=t(142),a=o.d.div.withConfig({displayName:"Container",componentId:"sc-3vdbpn-0"})(["width:100%;margin-right:auto;margin-left:auto;"," ",""],function(e){return e.hasGutters&&Object(o.c)(["padding-right:calc("," / 2);padding-left:calc("," / 2);"],function(e){return e.theme.gridGutterWidth},function(e){return e.theme.gridGutterWidth})},function(e){return e.hasMaxWidth&&Object(o.c)(["@media (min-width:","){max-width:",";}@media (min-width:","){max-width:",";}@media (min-width:","){max-width:",";}@media (min-width:","){max-width:",";}"],function(e){return e.theme.gridBreakpoints.sm},function(e){return e.theme.gridContainers.sm},function(e){return e.theme.gridBreakpoints.md},function(e){return e.theme.gridContainers.md},function(e){return e.theme.gridBreakpoints.lg},function(e){return e.theme.gridContainers.lg},function(e){return e.theme.gridBreakpoints.xl},function(e){return e.theme.gridContainers.xl})});a.propTypes={children:i.a.node.isRequired,hasMaxWidth:i.a.bool,hasGutters:i.a.bool},a.defaultProps={hasMaxWidth:!1,hasGutters:!0},n.a=a},148:function(e,n,t){"use strict";var r=t(4),i=t.n(r),o=t(142),a=function(e){if(e){var n=e/12*100;return"flex-basis: "+n+"%; max-width: "+n+"%; flex-grow: 0; flex-shrink: 0;"}},l=o.d.div.withConfig({displayName:"Column",componentId:"sc-1l6t293-0"})(["position:relative;width:100%;",";@media (min-width:","){",";}@media (min-width:","){",";}@media (min-width:","){",";}@media (min-width:","){",";}",""],function(e){var n=e.xs;return n?a(n):"flex-basis: 100%; max-width: 100%; flex-grow: 1; flex-basis: 0;"},function(e){return e.theme.gridBreakpoints.sm},function(e){var n=e.sm;return n&&a(n)},function(e){return e.theme.gridBreakpoints.md},function(e){var n=e.md;return n&&a(n)},function(e){return e.theme.gridBreakpoints.lg},function(e){var n=e.lg;return n&&a(n)},function(e){return e.theme.gridBreakpoints.xl},function(e){var n=e.xl;return n&&a(n)},function(e){return e.hasGutters&&Object(o.c)(["padding-right:calc("," / 2);padding-left:calc("," / 2);"],function(e){return e.theme.gridGutterWidth},function(e){return e.theme.gridGutterWidth})});l.propTypes={children:i.a.node.isRequired,hasGutters:i.a.bool},l.defaultProps={hasGutters:!0},n.a=l},149:function(e,n,t){"use strict";var r=t(167),i=t(0),o=t.n(i),a=t(4),l=t.n(a),s=t(168),d=t.n(s),c=t(143);function u(e){var n=e.description,t=e.lang,i=e.meta,a=e.keywords,l=e.title;return o.a.createElement(c.StaticQuery,{query:m,render:function(e){var r=n||e.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:l},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:r}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(i)},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,900|Yellowtail",rel:"stylesheet"}))},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},n.a=u;var m="1025518380"},150:function(e,n,t){"use strict";var r=t(153),i=t(0),o=t.n(i),a=t(4),l=t.n(a),s=t(143),d=t(142),c=(t(157),t(159)),u=t.n(c);function m(){var e=u()(["\n  /**\n   * Reboot\n   * Adapted from Bootstrap Reboot v4.2.1 (https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)\n   * Normalization of HTML elements, manually forked from Normalize.css to remove\n   * styles targeting irrelevant browsers while applying new styles.\n   * \n   * Bootstrap is licensed MIT. https://github.com/twbs/bootstrap/blob/master/LICENSE\n   * Normalize is licensed MIT. https://github.com/necolas/normalize.css/blob/master/LICENSE.md\n   */\n\n  /**\n   * Document\n   * \n   * 1. Change from 'box-sizing: content-box' so that 'width' is not affected by 'padding' or 'border'.\n   * 2. Change the default font family in all browsers.\n   * 3. Correct the line height in all browsers.\n   * 4. Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.\n   * 5. Change the default tap highlight to be completely transparent in iOS.\n   */\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box; /* 1 */\n  }\n\n  html {\n    font-family: sans-serif; /* 2 */\n    line-height: 1.15; /* 3 */\n    -webkit-text-size-adjust: 100%; /* 4 */\n    -webkit-tap-highlight-color: rgba(",", 0); /* 5 */\n  }\n\n  /**\n   * Shim for \"new\" HTML5 structural elements to display correctly (IE10, older browsers)\n   */\n  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {\n    display: block;\n  }\n\n  /**\n   * Body\n   * \n   * 1. Remove the margin in all browsers.\n   * 2. As a best practice, apply a default 'background-color'.\n   * 3. Set an explicit initial text-align value so that we can later use\n   *    the 'inherit' value on things like '<th>' elements.\n   */\n\n  body {\n    margin: 0; /* 1 */\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n    color: ",";\n    text-align: left; /* 3 */\n    background-color: ","; /* 2 */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /**\n   * Suppress the focus outline on elements that cannot be accessed via keyboard.\n   * This prevents an unwanted focus outline from appearing around elements that\n   * might still respond to pointer events.\n   * \n   * Credit: https://github.com/suitcss/base\n   */\n  [tabindex=\"-1\"]:focus {\n    outline: 0 !important;\n  }\n\n  /**\n   * Content grouping\n   * \n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   * 3. Set an explicit initial text-align value so that we can later use\n   *    the 'inherit' value on things like '<th>' elements.\n   */\n\n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n\n  /**\n   * Typography\n   */\n\n  /**\n   * Remove top margins from headings\n   * \n   * By default, '<h1>'-'<h6>' all receive top and bottom margins. We nuke the top\n   * margin for easier control within type scales as it avoids margin collapsing.\n   */\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: calc("," / 2);\n  }\n\n  /**\n   * Reset margins on paragraphs\n   * \n   * Similarly, the top margin on '<p>'s get reset. However, we also reset the\n   * bottom margin to use 'rem' units instead of 'em'.\n   */\n  p {\n    margin-top: 0;\n    margin-bottom: ",";\n  }\n\n  /**\n   * Abbreviations\n   * \n   * 1. Duplicate behavior to the data-* attribute for our tooltip plugin\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   * 3. Add explicit cursor to indicate changed behavior.\n   * 4. Remove the bottom border in Firefox 39-.\n   * 5. Prevent the text-decoration to be skipped.\n   */\n\n  abbr[title],\n  abbr[data-original-title] { /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n    cursor: help; /* 3 */\n    border-bottom: 0; /* 4 */\n    text-decoration-skip-ink: none; /* 5 */\n  }\n\n  address {\n    margin-bottom: 1rem;\n    font-style: normal;\n    line-height: inherit;\n  }\n\n  ol,\n  ul,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  ol ol,\n  ul ul,\n  ol ul,\n  ul ol {\n    margin-bottom: 0;\n  }\n\n  dt {\n    font-weight: ",";\n  }\n\n  dd {\n    margin-bottom: .5rem;\n    margin-left: 0; /* Undo browser default */\n  }\n\n  blockquote {\n    margin: 0 0 1rem;\n  }\n\n  b,\n  strong {\n    font-weight: ","; /* Add the correct font weight in Chrome, Edge, and Safari */\n  }\n\n  small {\n    font-size: 80%; /* Add the correct font size in all browsers */\n  }\n\n  /**\n   * Prevent 'sub' and 'sup' elements from affecting the line height in\n   * all browsers.\n   */\n\n  sub,\n  sup {\n    position: relative;\n    font-size: 75%;\n    line-height: 0;\n    vertical-align: baseline;\n  }\n\n  sub { bottom: -.25em; }\n  sup { top: -.5em; }\n\n  /**\n   * Links\n   */\n\n  a {\n    color: ",";\n    text-decoration: ",";\n    background-color: transparent; /* Remove the gray background on active links in IE 10. */\n\n    &:hover {\n      color: ",";\n      text-decoration: ",";\n    }\n  }\n\n  /**\n   * And undo these styles for placeholder links/named anchors (without href)\n   * which have not been made explicitly keyboard-focusable (without tabindex).\n   * It would be more straightforward to just use a[href] in previous block, but that\n   * causes specificity issues in many other styles that are too complex to fix.\n   * See https://github.com/twbs/bootstrap/issues/19402\n   */\n\n  a:not([href]):not([tabindex]) {\n    color: inherit;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    &:focus {\n      outline: 0;\n    }\n  }\n\n  /**\n   * Code\n   */\n\n  pre,\n  code,\n  kbd,\n  samp {\n    font-family: ",";\n    font-size: 1em; /* Correct the odd 'em' font sizing in all browsers. */\n  }\n\n  pre {\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of '1em' to use 'rem's */\n    margin-bottom: 1rem;\n    /* Don't allow content to break outside */\n    overflow: auto;\n  }\n\n  /**\n   * Figures\n   */\n\n  figure {\n    /* Apply a consistent margin strategy (matches our type styles). */\n    margin: 0 0 1rem;\n  }\n\n  /**\n   * Images and content\n   */\n\n  img {\n    vertical-align: middle;\n    border-style: none; /* Remove the border on images inside links in IE 10-. */\n  }\n\n  svg {\n    /* Workaround for the SVG overflow bug in IE10/11 is still required. */\n    /* See https://github.com/twbs/bootstrap/issues/26878 */\n    overflow: hidden;\n    vertical-align: middle;\n  }\n\n  /**\n   * Tables\n   */\n\n  table {\n    border-collapse: collapse; /* Prevent double borders */\n  }\n\n  caption {\n    padding-top: ",";\n    padding-bottom: ",";\n    color: ",";\n    text-align: left;\n    caption-side: bottom;\n  }\n\n  th {\n    /* Matches default '<td>' alignment by inheriting from the '<body>', or the */\n    /* closest parent with a set 'text-align'. */\n    text-align: inherit;\n  }\n\n  /**\n   * Forms\n   */\n\n  label {\n    /* Allow labels to use 'margin' for spacing. */\n    display: inline-block;\n    margin-bottom: ",';\n  }\n\n  /**\n   * Remove the default \'border-radius\' that macOS Chrome adds.\n   * \n   * Details at https://github.com/twbs/bootstrap/issues/24093\n   */\n  button {\n    border-radius: 0;\n  }\n\n  /**\n   * Work around a Firefox/IE bug where the transparent \'button\' background\n   * results in a loss of the default \'button\' focus styles.\n   * \n   * Credit: https://github.com/suitcss/base/\n   */\n  button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  input,\n  button,\n  select,\n  optgroup,\n  textarea {\n    margin: 0; /* Remove the margin in Firefox and Safari */\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n\n  button,\n  input {\n    overflow: visible; /* Show the overflow in Edge */\n  }\n\n  button,\n  select {\n    text-transform: none; /* Remove the inheritance of text transform in Firefox */\n  }\n\n  /**\n   * 1. Prevent a WebKit bug where (2) destroys native \'audio\' and \'video\'\n   *    controls in Android 4.\n   * \n   * 2. Correct the inability to style clickable types in iOS and Safari.\n   */\n  button,\n  [type="button"], /* 1 */\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button; /* 2 */\n  }\n\n  /* Remove inner border and padding from Firefox, but don\'t restore the outline like Normalize. */\n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n\n  input[type="radio"],\n  input[type="checkbox"] {\n    box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */\n    padding: 0; /* 2. Remove the padding in IE 10- */\n  }\n\n  input[type="date"],\n  input[type="time"],\n  input[type="datetime-local"],\n  input[type="month"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari */\n    /* bug where setting a custom line-height prevents text from being vertically */\n    /* centered within the input. */\n    /* See https://bugs.webkit.org/show_bug.cgi?id=139848 */\n    /* and https://github.com/twbs/bootstrap/issues/11266 */\n    -webkit-appearance: listbox;\n  }\n\n  textarea {\n    overflow: auto; /* Remove the default vertical scrollbar in IE. */\n    /* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */\n    resize: vertical;\n  }\n\n  fieldset {\n    /* Browsers set a default \'min-width: min-content;\' on fieldsets, */\n    /* unlike e.g. \'<div>\'s, which have \'min-width: 0;\' by default. */\n    /* So we reset that to ensure fieldsets behave more like a standard block element. */\n    /* See https://github.com/twbs/bootstrap/issues/12359 */\n    /* and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements */\n    min-width: 0;\n    /* Reset the default outline behavior of fieldsets so they don\'t affect page layout. */\n    padding: 0;\n    margin: 0;\n    border: 0;\n  }\n\n  /* 1. Correct the text wrapping in Edge and IE. */\n  /* 2. Correct the color inheritance from \'fieldset\' elements in IE. */\n  legend {\n    display: block;\n    width: 100%;\n    max-width: 100%; /* 1 */\n    padding: 0;\n    margin-bottom: .5rem;\n    font-size: 1.5rem;\n    line-height: inherit;\n    color: inherit; /* 2 */\n    white-space: normal; /* 1 */\n  }\n\n  progress {\n    vertical-align: baseline; /* Add the correct vertical alignment in Chrome, Firefox, and Opera. */\n  }\n\n  /* Correct the cursor style of increment and decrement buttons in Chrome. */\n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [type="search"] {\n    /* This overrides the extra rounded corners on search inputs in iOS so that our */\n    /* \'.form-control\' class can properly style them. Note that this cannot simply */\n    /* be added to \'.form-control\' as it\'s not specific enough. For details, see */\n    /* https://github.com/twbs/bootstrap/issues/11586. */\n    outline-offset: -2px; /* 2. Correct the outline style in Safari. */\n    -webkit-appearance: none;\n  }\n\n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to \'inherit\' in Safari.\n  */\n\n  ::-webkit-file-upload-button {\n    font: inherit; /* 2 */\n    -webkit-appearance: button; /* 1 */\n  }\n\n  /**\n   * Correct element displays\n   */\n\n  output {\n    display: inline-block;\n  }\n  \n  summary {\n    display: list-item; /* Add the correct display in all browsers */\n    cursor: pointer;\n  }\n  \n  template {\n    display: none; /* Add the correct display in IE */\n  }\n\n  /* Always hide an element with the \'hidden\' HTML attribute (from PureCSS). */\n  /* Needed for proper display in IE 10-. */\n  [hidden] {\n    display: none !important;\n  }\n']);return m=function(){return e},e}var h=Object(d.b)(m(),function(e){return e.theme.color.black},function(e){return e.theme.fontFamily.sansSerif},function(e){return e.theme.fontSizeBase},function(e){return e.theme.fontWeight.normal},function(e){return e.theme.lineHeightBase},function(e){return e.theme.color.N900},function(e){return e.theme.color.white},function(e){return e.theme.spacer},function(e){return e.theme.paragraphMarginBottom},function(e){return e.theme.fontWeight.bold},function(e){return e.theme.fontWeight.bold},function(e){return e.theme.linkColor},function(e){return e.theme.linkDecoration},function(e){return e.theme.linkHoverColor},function(e){return e.theme.linkHoverDecoration},function(e){return e.theme.fontFamily.monospace},function(e){return e.theme.tableCellPadding},function(e){return e.theme.tableCellPadding},function(e){return e.theme.tableCaptionColor},function(e){return e.theme.labelMarginBottom}),p=(t(32),t(145)),f=Object.assign({},{primary:"#007bff"},{N100:"#f8f9fa",N200:"#e9ecef",N300:"#dee2e6",N400:"#ced4da",N500:"#adb5bd",N600:"#6c757d",N700:"#495057",N800:"#343a40",N900:"#212529"},{white:"#fff",black:"#000"}),g={color:f,gridBreakpoints:{xs:"0",sm:"576px",md:"768px",lg:"992px",xl:"1200px"},gridContainers:{sm:"540px",md:"720px",lg:"960px",xl:"1140px"},spacer:"1rem",linkColor:f.primary,linkDecoration:"none",linkHoverColor:Object(p.a)(.15,f.primary),linkHoverDecoration:"underline",paragraphMarginBottom:"1rem",gridGutterWidth:"24px",fontFamily:{sansSerif:'"Montserrat", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',monospace:'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},fontSizeBase:"1rem",fontWeight:{lighter:"lighter",light:"300",normal:"400",bold:"600",bolder:"bolder"},lineHeightBase:1.5,tableCellPadding:".75rem",tableCaptionColor:f.N600,labelMarginBottom:".5rem"},b=t(147),y=t(146),w=t(148),x=d.d.div.withConfig({displayName:"Navigation__StyledNavigation",componentId:"wnfqzg-0"})(["text-align:right;display:flex;height:100%;align-items:center;justify-content:flex-end;ul{margin:0;padding:0;list-style:none;li{float:left;margin:0 ",";&:last-child{margin-right:0;}}}a{color:#faffd1;text-transform:uppercase;&:hover,&:focus{color:#ffc371;}}"],Object(p.b)("8px")),v=function(){return o.a.createElement(x,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/"},"Work")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/about/"},"About")),o.a.createElement("li",null,o.a.createElement(s.Link,{to:"/contact/"},"Connect"))))},k=d.d.header.withConfig({displayName:"Header__StyledHeader",componentId:"kdtggo-0"})(["position:relative;padding:"," 0;@media print,screen and (min-width:","){padding:"," ",";}"],Object(p.b)("16px"),function(e){return e.theme.gridBreakpoints.sm},Object(p.b)("24px"),Object(p.b)("68px")),E=d.d.div.withConfig({displayName:"Header__StyledStripes",componentId:"kdtggo-1"})(["position:absolute;left:0;top:50%;right:0;transform:skewY(-8deg);pointer-events:none;z-index:-10;bottom:",";"],Object(p.b)("-700px")),S=d.d.div.withConfig({displayName:"Header__StyledStripe",componentId:"kdtggo-2"})(["position:absolute;top:auto;left:0;right:0;height:",";"," "," "," "," "," "," ",""],Object(p.b)("204px"),function(e){return 1===e.order?"\n      height: 5000px;\n      bottom: 203px;\n      background: linear-gradient(90deg, #ed4234, #881249)\n    ":null},function(e){return 2===e.order?"\n      right: calc(50% - 30px);\n      bottom: 0;\n      background: linear-gradient(90deg,#fff 50%,#f1f4f7);\n    ":null},function(e){return 3===e.order?"\n        left: calc(50% + 30px);\n        bottom: 0;\n        background: linear-gradient(90deg,#d2363a,#a42043);\n      ":null},function(e){return 4===e.order?"\n        bottom: 204px;\n        left: 75%;\n        background: linear-gradient(90deg,#c12d3d,#ed4234);\n      ":null},function(e){return 5===e.order?"\n        bottom: 408px;\n        left: calc(50% + 410px);\n        background: linear-gradient(90deg,#b6283f,#881249);\n      ":null},function(e){return 6===e.order?"\n        bottom: 612px;\n        right: 30%;\n        background: linear-gradient(90deg,#d2363a,#a42043);\n      ":null},function(e){return 7===e.order?"\n        bottom: 816px;\n        background: #ed4234;\n      ":null}),C=d.d.div.withConfig({displayName:"Header__StyledBranding",componentId:"kdtggo-3"})(["> a{display:flex;align-items:center;&:hover,&:focus{text-decoration:none;}}"]),z=d.d.div.withConfig({displayName:"Header__StyledBrandingTitle",componentId:"kdtggo-4"})(["font-family:'Yellowtail',cursive;color:#faffd1;font-size:",";"],Object(p.b)("28px")),N=d.d.div.withConfig({displayName:"Header__StyledBrandingSubtitle",componentId:"kdtggo-5"})(["padding:0 ",";color:#ffc371;font-family:'Montserrat',sans-serif;font-weight:600;"],Object(p.b)("8px")),I=function(e){var n=e.siteTitle,t=e.siteSubtitle;return o.a.createElement(k,null,o.a.createElement(E,null,o.a.createElement(S,{order:1}),o.a.createElement(S,{order:2}),o.a.createElement(S,{order:3}),o.a.createElement(S,{order:4}),o.a.createElement(S,{order:5}),o.a.createElement(S,{order:6})),o.a.createElement(b.a,null,o.a.createElement(y.a,null,o.a.createElement(w.a,{xs:6},o.a.createElement(C,null,o.a.createElement(s.Link,{to:"/"},o.a.createElement(z,null,n),o.a.createElement(N,null,t)))),o.a.createElement(w.a,null,o.a.createElement(v,null)))))};I.propTypes={siteTitle:l.a.string,siteSubtitle:l.a.string},I.defaultProps={siteTitle:"",siteSubtitle:""};var O=I,R=d.d.section.withConfig({displayName:"Announcement__StyledAnnouncement",componentId:"sc-1rqwi5i-0"})(["background-color:#092742;font-size:",";padding:"," 0;@media print,screen and (min-width:","){padding:"," ",";}p{margin-bottom:0;color:#f6f6f6;line-height:1.6;}a{color:#f6f6f6;border-bottom:"," solid #0E89C7;&:hover,&:focus{color:#0E89C7;text-decoration:none;}}"],Object(p.b)("14px"),Object(p.b)("12px"),function(e){return e.theme.gridBreakpoints.sm},Object(p.b)("12px"),Object(p.b)("68px"),Object(p.b)("1px")),j=d.d.span.withConfig({displayName:"Announcement__StyledTextUppercase",componentId:"sc-1rqwi5i-1"})(["text-transform:uppercase;"]),B=function(){return o.a.createElement(R,null,o.a.createElement(b.a,null,o.a.createElement(y.a,null,o.a.createElement(w.a,null,o.a.createElement("p",null,o.a.createElement("strong",null,"This site is in ",o.a.createElement(j,null,"Beta"),".")," For more details on project work, feel free to ",o.a.createElement(s.Link,{to:"/contact/"},"contact me")," or check out ",o.a.createElement("a",{href:"http://stephaniecondrey.com/",target:"_blank",rel:"noopener noreferrer"},"past work"),".")))))},T=function(e){var n=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{theme:g},o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),o.a.createElement(B,null),o.a.createElement(O,{siteTitle:e.site.siteMetadata.title,siteSubtitle:"[ Designer + Coder ]"}),n,o.a.createElement("footer",null,"© ",(new Date).getFullYear()))))},data:r})};T.propTypes={children:l.a.node.isRequired};n.a=T},151:function(e,n,t){var r;e.exports=(r=t(156))&&r.default||r},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Stephanie Shields"}}}}},156:function(e,n,t){"use strict";t.r(n);t(32);var r=t(0),i=t.n(r),o=t(4),a=t.n(o),l=t(68),s=t(2),d=function(e){var n=e.location,t=s.default.getResourcesForPathnameSync(n.pathname);return i.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json))};d.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},n.default=d},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Stephanie Shields",description:"A portfolio website for Stephanie Shields",author:"Stephanie Shields"}}}}}}]);
//# sourceMappingURL=1-fa55147781f5fa551c77.js.map