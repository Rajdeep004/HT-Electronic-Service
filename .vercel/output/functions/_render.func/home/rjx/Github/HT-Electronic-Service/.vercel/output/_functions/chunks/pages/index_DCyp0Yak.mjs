import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderSlot, j as renderComponent, h as addAttribute, k as renderHead } from '../astro_CPOtoHCT.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$8 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Container;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/rjx/Github/HT-Electronic-Service/src/components/Container.astro", void 0);

const $$Astro$7 = createAstro();
const $$AppFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AppFooter;
  return renderTemplate`${maybeRenderHead()}<footer class="py-20 md:py-40"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12"> <div class="flex flex-wrap items-center justify-between md:flex-nowrap"> <div class="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start"> <ul class="list-inside list-disc space-y-8"> <li><a href="#home" class="transition hover:text-primary">Home</a></li> <li><a href="#About" class="transition hover:text-primary">About</a></li> <li><a href="#" class="transition hover:text-primary">Services</a></li> <li><a href="#" class="transition hover:text-primary">Contact</a></li> </ul> <ul role="list" class="space-y-8 flex flex-col justify-center"> <li> <a href="https://youtube.com/@Harshthakor22923?si=ZbAWWxST-GnNws4B" class="flex items-center space-x-3 transition hover:text-primary"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path> </svg> <span>YouTube</span> </a> </li> <!-- <li>
                <a href="#" class="flex items-center space-x-3 transition hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-5"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li> --> <li> <a href="https://www.instagram.com/htelectricals?igsh=bDY0dGdqc2R4b3Fw" class="flex items-center space-x-3 transition hover:text-primary"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg> <span>Instagram</span> </a> </li> </ul> </div> <div class="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left"> <!-- <span class="block text-gray-500 dark:text-gray-400"
              >We change the way UI components librairies are used</span
            > --> <span class="block text-gray-500 dark:text-gray-400">HT Electical Services &copy; <span id="year"></span></span> <!-- <span class="flex justify-between text-gray-600 dark:text-white">
              <a href="#" class="font-medium">Terms of Use </a>
              <a href="#" class="font-medium"> Privacy Policy</a>
            </span> --> <span class="block text-gray-500 dark:text-gray-400">Need help? <a href="" class="font-semibold text-gray-600 dark:text-white"> Contact Us</a></span> </div> </div> </div> ` })} </footer>`;
}, "/home/rjx/Github/HT-Electronic-Service/src/components/AppFooter.astro", void 0);

const $$Astro$6 = createAstro();
const $$AppHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$AppHeader;
  const links = [
    {
      to: "#about",
      label: "About"
    },
    {
      to: "#contact",
      label: "Connect"
    }
  ];
  return renderTemplate` ${maybeRenderHead()}<header data-astro-cid-qgrrgaau> <nav class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent" data-astro-cid-qgrrgaau> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-qgrrgaau": true }, { "default": ($$result2) => renderTemplate` <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4" data-astro-cid-qgrrgaau> <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max" data-astro-cid-qgrrgaau> <a href="/#home" aria-label="logo" class="flex items-center space-x-2" data-astro-cid-qgrrgaau> <div aria-hidden="true" class="flex space-x-1" data-astro-cid-qgrrgaau> <!-- <img src="/favicon.svg" alt="Brand Logo" class="h-24 bg-gradient-to-r"> --> <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white" data-astro-cid-qgrrgaau></div> <div class="h-6 w-2 bg-primary" data-astro-cid-qgrrgaau></div> </div> <span class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-qgrrgaau>HT Electical Service</span> </a> <div class="relative flex max-h-10 items-center lg:hidden" data-astro-cid-qgrrgaau> <button aria-label="humburger" id="hamburger" class="relative -mr-6 p-6" data-astro-cid-qgrrgaau> <div aria-hidden="true" id="line" class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300" data-astro-cid-qgrrgaau></div> <div aria-hidden="true" id="line2" class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300" data-astro-cid-qgrrgaau></div> </button> </div> </div> <div id="navLayer" aria-hidden="true" class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden" data-astro-cid-qgrrgaau></div> <div id="navlinks" class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300  dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none" data-astro-cid-qgrrgaau> <div class="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0" data-astro-cid-qgrrgaau> <ul class="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm" data-astro-cid-qgrrgaau> ${links.map((link) => renderTemplate`<li data-astro-cid-qgrrgaau> <a${addAttribute(link.to, "href")} class="hover:text-primary block transition dark:hover:text-white md:px-4" data-astro-cid-qgrrgaau> <span data-astro-cid-qgrrgaau>${link.label}</span> </a> </li>`)} <li data-astro-cid-qgrrgaau> <a href="#Services" class="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4" data-astro-cid-qgrrgaau> <span data-astro-cid-qgrrgaau>Services</span> <span class="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300" data-astro-cid-qgrrgaau> new</span> </a> </li> </ul> </div> <li class="mt-12 lg:mt-0" data-astro-cid-qgrrgaau> <a href="#contact" class="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max" data-astro-cid-qgrrgaau> <span class="relative text-sm font-semibold text-white" data-astro-cid-qgrrgaau> Get Started</span> </a> </li> </div> </div> ` })} </nav> </header> `;
}, "/home/rjx/Github/HT-Electronic-Service/src/components/AppHeader.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "/home/rjx/Github/HT-Electronic-Service/node_modules/.pnpm/@vercel+speed-insights@1.0.10/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta name="description" content="HT Electricals - One Stop solution for all your needs"><title>HT Electical Services</title><script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script><script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script><link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap" rel="stylesheet">', '</head> <body class="bg-white dark:bg-gray-900" data-astro-cid-sckkx6r4> ', " ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "SpeedInsights", $$Index$1, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "AppHeader", $$AppHeader, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "AppFooter", $$AppFooter, { "data-astro-cid-sckkx6r4": true }));
}, "/home/rjx/Github/HT-Electronic-Service/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroSection;
  return renderTemplate`${maybeRenderHead()}<div class="relative" id="home"> <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"> <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div> <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div> </div> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="relative pt-36 ml-auto"> <div class="lg:w-2/3 text-center mx-auto"> <h1 class="text-gray-900 dark:text-white font-bold text-4xl md:text-6xl xl:text-7xl">Are you finding electrician in mahisagar? <span class="text-primary dark:text-white">Just dial & get best service</span></h1> <h2 id="nameTxt" class="text-gray-900 dark:text-white mt-8 font-bold text-center text-3xl md:text-4xl" id="about">
Hii I'm Harsh Thakor
</h2> <p class="mt-2 text-gray-700 dark:text-gray-300">I am the owner of HT Electricians, an electrical service business in Mahisagar, Gujarat. Our services include installation, repair, maintenance, and troubleshooting for both residential and commercial customers. Our experienced electricians use the latest tools and techniques to provide high-quality service. From simple repairs to complex installations, we handle all types of electrical needs in a timely and cost-effective manner. We stand behind our work and offer a satisfaction guarantee. Contact us to learn more about our services.</p> <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6"> <a href="#contact" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"> <span class="relative text-base font-semibold text-white">Get started</span> </a> <a href="#Services" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"> <span class="relative text-base font-semibold text-primary dark:text-white"> Learn more </span> </a> </div> <div class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"> <div class="text-left"> <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Lowest visit charges</h6> <!-- <p class="mt-2 text-gray-500">Some text here</p> --> </div> <div class="text-left"> <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Installation Service</h6> <!-- <p class="mt-2 text-gray-500">Some text here</p> --> </div> <div class="text-left"> <h6 class="text-lg font-semibold text-gray-700 dark:text-white">Repairing Service</h6> <!-- <p class="mt-2 text-gray-500">Some text here</p> --> </div> </div> </div> <div class="mt-12 grid grid-cols-3 place-items-center"> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"> <a href="https://youtube.com/@Harshthakor22923?si=ZbAWWxST-GnNws4B" target="_blank"> <img src="./images/clients/yt-icon.svg" class="h-12 w-auto mx-auto transition-all duration-100 hover:scale-125" loading="lazy" alt="client logo"></a> </div> <div class="p-4 grayscale transition duration-200 hover:grayscale-0"><a href="https://www.instagram.com/htelectricals?igsh=bDY0dGdqc2R4b3Fw" target="_blank"> <img src="./images/clients/insta-icon.svg" class="h-12 w-auto mx-auto transition-all duration-100 hover:scale-125" loading="lazy" alt="client logo"></a> </div> <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0"> <a href="https://api.whatsapp.com/send?phone=919913013728" target="_blank"> <img src="./images/clients/whatsapp-icon.svg" class="h-9 w-auto m-auto transition-all duration-100 hover:scale-125" loading="lazy" alt="client logo"></a> </div> <!-- <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                  <img src="./images/clients/linkedin-icon.svg" class="h-9 w-auto m-auto transition-all duration-100 hover:scale-125" loading="lazy" alt="client logo" />
                </div> --> </div> </div> ` })} </div>`;
}, "/home/rjx/Github/HT-Electronic-Service/src/components/HeroSection.astro", void 0);

const $$Astro$2 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const serviceList = [
    {
      name: "Air Conditioner",
      description: "Cooling appliance for regulating room temperature",
      URL: "/images/Services/s5.webp"
    },
    {
      name: "Fridge",
      description: "Refrigeration unit for storing perishable items",
      URL: "/images/Services/s6.webp"
    },
    {
      name: "Washing Machine",
      description: "Device for automating clothes cleaning",
      URL: "/images/Services/Washing.jpeg"
    },
    {
      name: "RO Water Plant",
      description: "Water Purification System",
      URL: "/images/Services/RO.jpg"
    },
    {
      name: "Geyser ( Electical or Gas )",
      description: "Water heater for providing hot water",
      URL: "/images/Services/geyser.jpg"
    },
    {
      name: "Light Fitting",
      description: "Fixture for installing light bulbs",
      URL: "/images/Services/Light.jpeg"
    },
    {
      name: "Celling Fan",
      description: "Rotating blades for air circulation in rooms",
      URL: "/images/Services/s4.png"
    },
    {
      name: "Stand Fan",
      description: "Portable fan with adjustable height",
      URL: "/images/Services/standfan.jpg"
    },
    {
      name: "Mixture",
      description: "Appliance for mixing ingredients in cooking",
      URL: "/images/Services/mixer.webp"
    },
    {
      name: "Laptop",
      description: "Portable computer for personal use",
      URL: "/images/Services/Laptop.jpeg"
    },
    {
      name: "Computer",
      description: "Electronic device for processing data",
      URL: "/images/Services/Computer.jpeg"
    },
    {
      name: "Atta Maker",
      description: "Also known as ghar-ghanti service is provided",
      URL: "/images/Services/ATTA.jpeg"
    },
    {
      name: "Water Motor",
      description: "Device for pumping water, commonly used in wells.",
      URL: "/images/Services/Motar.jpeg"
    },
    {
      name: "CCTV Installation & Maintenance",
      description: "Security camera setup and upkeep",
      URL: "/images/Services/CCTV.jpeg"
    },
    {
      name: "Dish TV Service",
      description: "Satellite television service provider",
      URL: "/images/Services/Dish.jpeg"
    },
    {
      name: "Microwave Oven",
      description: "Appliance for cooking and reheating",
      URL: "/images/Services/Oven.jpeg"
    },
    {
      name: "Solar Cleaning",
      description: "Maintenance service for solar panels",
      URL: "/images/Services/Solar.jpeg"
    },
    {
      name: "Cooler",
      description: "Air cooling device, often used in hot climates",
      URL: "/images/Services/Cooler.jpeg"
    },
    {
      name: "Hand Blender",
      description: "Handheld device for blending and mixing",
      URL: "/images/Services/blender.jpg"
    },
    {
      name: "Printer",
      description: "Printer Repair and maintenance service is provided",
      URL: "/images/Services/printer.jpg"
    },
    {
      name: "Plumbing Services",
      description: "Plumbing Repair and maintenance service is provided",
      URL: "/images/Services/Plumber.jpeg"
    },
    {
      name: "Gas Stove",
      description: "Gas Stove Repair and maintenance service is provided",
      URL: "/images/Services/Gas stove.jpeg"
    },
    {
      name: "Pressure Pump",
      description: "Pressure Pump Repair and maintenance service is provided",
      URL: "/images/Services/Pressure Pump.jpeg"
    },
    {
      name: "LED TV",
      description: "LED TV Repair and maintenance service is provided",
      URL: "/images/Services/LED.jpeg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="Services"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="mb-12 space-y-2 text-center"> <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Our services ⚡</h2> <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
Expert Electrical Services for Your Home or Business
</p> </div> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${serviceList.map((item) => renderTemplate`<div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10"> <div class="relative overflow-hidden rounded-xl"> <img${addAttribute(item.URL, "src")} alt="art cover" loading="lazy" width="1000" height="667" class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"> </div> <div class="mt-6 relative"> <h3 class="text-2xl font-semibold text-gray-800 dark:text-white"> ${item.name} </h3> <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300"> ${item.description} </p> </div> </div>`)} </div> ` })}</div>  `;
}, "/home/rjx/Github/HT-Electronic-Service/src/components/Services.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactUs;
  return renderTemplate`${maybeRenderHead()}<div id="contact"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="mb-12 space-y-2 text-center"> <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Contact Us</h2> <p class="lg:mx-auto lg:w-6/12 text-gray-800  dark:text-gray-300">
Get in Touch! ✨
</p> </div> <div class="flex flex-wrap items-center justify-between"> <div class="w-full md:w-1/4 h-full flex flex-col items-center justify-center mt-4 md:mt-0 text-white"> <div class="details mb-14 text-center text-gray-800 dark:text-white"> <a href="https://maps.app.goo.gl/79UkCEyy8kvCDSN89" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result2, "ion-icon", "ion-icon", { "name": "location-sharp", "class": "text-3xl " })} <div class="topic text-lg font-medium mt-3">Address</div> <div class="text-gray-800 dark:text-white mt-2">Nana Sonela, Lunawada</div> <div class="">Mahisagar - 389230</div> </a> </div> <div class="details mb-14 text-center text-gray-800 dark:text-white mt-2"> <a href="tel:+91 63529 85058" target="_blank"> ${renderComponent($$result2, "ion-icon", "ion-icon", { "name": "call", "class": "text-3xl" })} <div class="topic text-lg font-medium mt-3">Phone</div> <div class=""> +91 63529 85058 </div> </a> </div> <div class="details text-center text-gray-800 dark:text-white"> <a href="mailto:thakorharshch@gmail.com" target="_blank"> ${renderComponent($$result2, "ion-icon", "ion-icon", { "name": "mail", "class": "text-3xl" })} <div class="topic text-lg font-medium mt-3">Email</div> <div class="text-gray-800 dark:text-white mt-2">thakorharshch@gmail.com</div> </a> </div> </div> <div class="w-full md:w-3/4 pl-10"> <div class="topic-text text-3xl font-bold text-primary mb-6">Send us a message</div> <p class="mb-6 dark:text-white ">If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p> <form method="POST" action="https://formsubmit.io/send/thakorharsh9796@gmail.com" class="mb-10 dark:text-white"> <div class="flex flex-col mb-4"> <label for="name" class="text-gray-800 dark:text-white">Name</label> <input required type="text" id="name" name="name" placeholder="Enter your name" class="border border-solid border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-primary bg-white dark:bg-gray-800"> </div> <div class="flex flex-col mb-4"> <label for="email" class="text-gray-800 dark:text-white">Email</label> <input required type="email" id="email" name="email" placeholder="Enter your email" class="border border-solid border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-primary bg-white dark:bg-gray-800"> </div> <div class="flex flex-col mb-4"> <label for="message" class="text-gray-800 dark:text-white">Message</label> <textarea required id="message" name="message" rows="6" placeholder="Message" class="border border-solid border-gray-400 rounded-lg py-2 px-4 focus:outline-none focus:border-primary bg-white dark:bg-gray-800"></textarea> </div> <button type="submit" class="py-2 px-5 bg-primary text-white font-bold rounded-lg hover:bg-primary transition duration-300">Send Now</button> </form> </div> </div> ` })} </div>`;
}, "/home/rjx/Github/HT-Electronic-Service/src/components/ContactUs.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to HT-Electricals." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-40 mb-40"> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "ContactUs", $$ContactUs, {})} </main> ` })}`;
}, "/home/rjx/Github/HT-Electronic-Service/src/pages/index.astro", void 0);

const $$file = "/home/rjx/Github/HT-Electronic-Service/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
