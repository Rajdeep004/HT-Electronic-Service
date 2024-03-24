import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CPOtoHCT.mjs';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.5.9/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"let a=!1;const c=document.querySelector(\"#navlinks\"),d=document.querySelector(\"#hamburger\"),u=document.querySelector(\"#navLayer\"),p=[...c.querySelector(\"ul\").children];function v(){a?(c.classList.add(\"!visible\",\"!scale-100\",\"!opacity-100\",\"!lg:translate-y-0\"),d.classList.add(\"toggled\"),u.classList.add(\"origin-top\",\"scale-y-100\")):(c.classList.remove(\"!visible\",\"!scale-100\",\"!opacity-100\",\"!lg:translate-y-0\"),d.classList.remove(\"toggled\"),u.classList.remove(\"origin-top\",\"scale-y-100\"))}d.addEventListener(\"click\",()=>{a=!a,v()});p.forEach(e=>{e.addEventListener(\"click\",()=>{a=!a,v()})});var S=\"@vercel/speed-insights\",h=\"1.0.10\",y=()=>{window.si||(window.si=function(...s){(window.siq=window.siq||[]).push(s)})};function w(){return typeof window<\"u\"}function R(){try{const e=\"production\"}catch{}return\"production\"}function f(){return R()===\"development\"}function b(e,s){if(!e||!s)return e;let n=e;try{for(const[r,i]of Object.entries(s)){const t=Array.isArray(i),o=t?i.join(\"/\"):i,m=t?`...${r}`:r,l=new RegExp(`/${k(o)}(?=[/?#]|$)`);l.test(n)&&(n=n.replace(l,`/[${m}]`))}return n}catch{return e}}function k(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}var g=\"https://va.vercel-scripts.com/v1/speed-insights\",L=`${g}/script.js`,$=`${g}/script.debug.js`,E=\"/_vercel/speed-insights/script.js\";function I(e={}){var s;if(!w()||e.route===null)return null;y();const r=!!e.dsn?L:E,i=e.scriptSrc||(f()?$:r);if(document.head.querySelector(`script[src*=\"${i}\"]`))return null;e.beforeSend&&((s=window.si)==null||s.call(window,\"beforeSend\",e.beforeSend));const t=document.createElement(\"script\");return t.src=i,t.defer=!0,t.dataset.sdkn=S+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=h,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),f()&&e.debug===!1&&(t.dataset.debug=\"false\"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${i}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:o=>{t.dataset.route=o??void 0}}}customElements.define(\"vercel-speed-insights\",class extends HTMLElement{constructor(){super();try{const s=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\"),r=b(this.dataset.pathname??\"\",n);I({route:r,...s,framework:\"astro\",beforeSend:window.speedInsightsBeforeSend})}catch(s){throw new Error(`Failed to parse SpeedInsights properties: ${s}`)}}});\n"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"#toggle_nav[data-astro-cid-qgrrgaau]:checked~div[data-astro-cid-qgrrgaau] #hamburger[data-astro-cid-qgrrgaau] #line[data-astro-cid-qgrrgaau]{@apply translate-y-1.5 rotate-45;}#toggle_nav[data-astro-cid-qgrrgaau]:checked~div[data-astro-cid-qgrrgaau] #hamburger[data-astro-cid-qgrrgaau] #line2[data-astro-cid-qgrrgaau]{@apply -translate-y-1 -rotate-45;}.toggled[data-astro-cid-qgrrgaau] div[data-astro-cid-qgrrgaau]:first-child{@apply translate-y-1.5 rotate-45;}.toggled[data-astro-cid-qgrrgaau] div[data-astro-cid-qgrrgaau]:last-child{@apply -translate-y-1 -rotate-45;}html{font-family:Urbanist,sans-serif;scroll-behavior:smooth}body{margin:0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/rjx/Github/HT-Electronic-Service/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.5.9/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_E343zwNc.mjs","/src/pages/index.astro":"chunks/pages/index_DCyp0Yak.mjs","\u0000@astrojs-manifest":"manifest_DJhO-rdP.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.5.9/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Dkq_9x0k.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DnubE5cA.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Ci7Vlerg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/images/pie.svg","/images/Services/ATTA.jpeg","/images/Services/CCTV.jpeg","/images/Services/Computer.jpeg","/images/Services/Cooler.jpeg","/images/Services/Dish.jpeg","/images/Services/Gas stove.jpeg","/images/Services/LED.jpeg","/images/Services/Laptop.jpeg","/images/Services/Light.jpeg","/images/Services/Motar.jpeg","/images/Services/Oven.jpeg","/images/Services/Plumber.jpeg","/images/Services/Pressure Pump.jpeg","/images/Services/RO.jpg","/images/Services/Solar.jpeg","/images/Services/Washing.jpeg","/images/Services/blender.jpg","/images/Services/geyser.jpg","/images/Services/mixer.webp","/images/Services/printer.jpg","/images/Services/s1.webp","/images/Services/s2.webp","/images/Services/s3.webp","/images/Services/s4.png","/images/Services/s5.webp","/images/Services/s6.webp","/images/Services/standfan.jpg","/images/avatars/avatar-1.webp","/images/avatars/avatar-2.webp","/images/avatars/avatar-3.webp","/images/avatars/avatar-4.webp","/images/avatars/avatar.webp","/images/clients/insta-icon.svg","/images/clients/linkedin-icon.svg","/images/clients/whatsapp-icon.svg","/images/clients/yt-icon.svg"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
