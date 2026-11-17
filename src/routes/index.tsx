import { Header as ImportedHeader } from "../components/Header";
import { Fragment } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Smartphones, Gadgets \u0026 Premium Accessories | Apple Gadgets" }] }),
  staticData: { importedDocument: { html: { "className": "__variable_0ad60f __variable_1ffc5a", "lang": "en" }, body: { "className": "", "data-site-import-popup-incomplete": "limit", "data-site-import-responsive-incomplete": "class-range-budget" } } },
  component: Index,
});

function Index() {
  const [activeSlide0, setActiveSlide0] = useState(0);
  const [activeSlide1, setActiveSlide1] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const [activeSlide3, setActiveSlide3] = useState(0);
  const [activeSlide4, setActiveSlide4] = useState(0);
  const [activeSlide5, setActiveSlide5] = useState(0);
  const [showPromo, setShowPromo] = useState(true);
  const carouselContent0 = (<>
{activeSlide5 === 0 && <Fragment key={0}>
<div className="overflow-hidden h-full">
  <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white mt-6"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap \x62g-black text-white"} type="button">Hot Deals</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide5(index => (index + 1 + 2) % 2); }} type="button">Air Fryer</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Induction Cooker</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Mixer Grinder &amp; Blender</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Microwave Oven</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">TV</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Air Conditioner</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Washing Machine</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Station</button>
  </div>
</div>
</Fragment>}
{activeSlide5 === 1 && <Fragment key={1}>
<div className="overflow-hidden h-full">
  <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white mt-6"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Hot Deals</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide5(index => (index + 1 + 2) % 2); }} type="button">Air Fryer</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Induction Cooker</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Mixer Grinder &amp; Blender</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Microwave Oven</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">TV</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Air Conditioner</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Washing Machine</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Station</button>
  </div>
</div>
</Fragment>}
</>);
  const carouselContent1 = (<>
{activeSlide4 === 0 && <Fragment key={0}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Apple Exclusive</span> <span className={"\x74ext-gradient"}>2026</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center text-gray-600 \x62order \x62order-gray-600 \x63ursor-not-allowed"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide4(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" type="button" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide4(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-18-pro-max">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone 18 Pro Max" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/50377dc64034e0ea.webp 640w, /site-assets/50377dc64034e0ea.webp 3840w" src="/site-assets/50377dc64034e0ea.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone 18 Pro Max</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 191,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳197,000</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 5,001 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-18-pro">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone 18 Pro" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/eac03d553f5915ce.webp 640w, /site-assets/eac03d553f5915ce.webp 3840w" src="/site-assets/eac03d553f5915ce.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone 18 Pro</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 175,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳179,999</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-duo">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone Duo" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/c8a1fb9c64f49da1.webp 640w, /site-assets/c8a1fb9c64f49da1.webp 3840w" src="/site-assets/c8a1fb9c64f49da1.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone Duo</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 315,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳320,000</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,001 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-airpods-5">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple AirPods 5" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2aefc5de44078818.webp 640w, /site-assets/2aefc5de44078818.webp 3840w" src="/site-assets/2aefc5de44078818.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple AirPods 5</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 17,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳22,499</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,500 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-watch-series-12">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple Watch Series 12" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/30b2dd2532f47519.webp 640w, /site-assets/30b2dd2532f47519.webp 3840w" src="/site-assets/30b2dd2532f47519.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple Watch Series 12</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 52,499</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳57,499</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 5,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-watch-ultra-4">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple Watch Ultra 4" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/7a488c55cd4aef32.webp 640w, /site-assets/7a488c55cd4aef32.webp 3840w" src="/site-assets/7a488c55cd4aef32.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple Watch Ultra 4</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,000</span>
          <div className="min-h-8" />
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
{activeSlide4 === 1 && <Fragment key={1}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Apple Exclusive</span> <span className={"\x74ext-gradient"}>2026</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide4(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide4(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(-296px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-18-pro-max">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone 18 Pro Max" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/50377dc64034e0ea.webp 640w, /site-assets/50377dc64034e0ea.webp 3840w" src="/site-assets/50377dc64034e0ea.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone 18 Pro Max</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 191,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳197,000</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 5,001 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-18-pro">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone 18 Pro" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/eac03d553f5915ce.webp 640w, /site-assets/eac03d553f5915ce.webp 3840w" src="/site-assets/eac03d553f5915ce.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone 18 Pro</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 175,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳179,999</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-duo">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone Duo" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/c8a1fb9c64f49da1.webp 640w, /site-assets/c8a1fb9c64f49da1.webp 3840w" src="/site-assets/c8a1fb9c64f49da1.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone Duo</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 315,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳320,000</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,001 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-airpods-5">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple AirPods 5" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2aefc5de44078818.webp 640w, /site-assets/2aefc5de44078818.webp 3840w" src="/site-assets/2aefc5de44078818.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple AirPods 5</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 17,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳22,499</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,500 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-watch-series-12">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple Watch Series 12" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/30b2dd2532f47519.webp 640w, /site-assets/30b2dd2532f47519.webp 3840w" src="/site-assets/30b2dd2532f47519.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple Watch Series 12</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 52,499</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳57,499</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 5,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-watch-ultra-4">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple Watch Ultra 4" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/7a488c55cd4aef32.webp 640w, /site-assets/7a488c55cd4aef32.webp 3840w" src="/site-assets/7a488c55cd4aef32.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple Watch Ultra 4</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,000</span>
          <div className="min-h-8" />
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
{activeSlide4 === 2 && <Fragment key={2}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Apple Exclusive</span> <span className={"\x74ext-gradient"}>2026</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide4(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center text-gray-600 \x62order \x62order-gray-600 \x63ursor-not-allowed"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide4(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(-416px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-18-pro-max">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone 18 Pro Max" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/50377dc64034e0ea.webp 640w, /site-assets/50377dc64034e0ea.webp 3840w" src="/site-assets/50377dc64034e0ea.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone 18 Pro Max</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 191,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳197,000</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 5,001 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-18-pro">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone 18 Pro" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/eac03d553f5915ce.webp 640w, /site-assets/eac03d553f5915ce.webp 3840w" src="/site-assets/eac03d553f5915ce.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone 18 Pro</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 175,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳179,999</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/iphone-duo">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone Duo" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/c8a1fb9c64f49da1.webp 640w, /site-assets/c8a1fb9c64f49da1.webp 3840w" src="/site-assets/c8a1fb9c64f49da1.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>iPhone Duo</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 315,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳320,000</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,001 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-airpods-5">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple AirPods 5" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2aefc5de44078818.webp 640w, /site-assets/2aefc5de44078818.webp 3840w" src="/site-assets/2aefc5de44078818.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple AirPods 5</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 17,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳22,499</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,500 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-watch-series-12">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple Watch Series 12" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/30b2dd2532f47519.webp 640w, /site-assets/30b2dd2532f47519.webp 3840w" src="/site-assets/30b2dd2532f47519.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple Watch Series 12</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 52,499</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳57,499</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 5,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/apple-watch-ultra-4">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Apple Watch Ultra 4" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/7a488c55cd4aef32.webp 640w, /site-assets/7a488c55cd4aef32.webp 3840w" src="/site-assets/7a488c55cd4aef32.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Apple Watch Ultra 4</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,000</span>
          <div className="min-h-8" />
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
</>);
  const carouselContent2 = (<>
{activeSlide3 === 0 && <Fragment key={0}>
<div className="overflow-hidden h-full">
  <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white mt-6"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap \x62g-black text-white"} type="button">Special PC</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Motherboard</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">CPU</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Graphics Card</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">SSD</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">RAM</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Cpu Cooler</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Supply</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Monitor</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Casing</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide3(index => (index + 1 + 2) % 2); }} type="button">Mouse</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Keyboard</button>
  </div>
</div>
</Fragment>}
{activeSlide3 === 1 && <Fragment key={1}>
<div className="overflow-hidden h-full">
  <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white mt-6"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Special PC</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Motherboard</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">CPU</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Graphics Card</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">SSD</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">RAM</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Cpu Cooler</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Supply</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Monitor</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Casing</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide3(index => (index + 1 + 2) % 2); }} type="button">Mouse</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Keyboard</button>
  </div>
</div>
</Fragment>}
</>);
  const carouselContent3 = (<>
{activeSlide3 === 0 && <Fragment key={0}>
<div className="overflow-hidden h-full">
  <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white mt-6"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Special PC</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Motherboard</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">CPU</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Graphics Card</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">SSD</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">RAM</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Cpu Cooler</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Supply</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Monitor</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Casing</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide3(index => (index + 1 + 2) % 2); }} type="button">Mouse</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Keyboard</button>
  </div>
</div>
</Fragment>}
{activeSlide3 === 1 && <Fragment key={1}>
<div className="overflow-hidden h-full">
  <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white mt-6"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Special PC</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Motherboard</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">CPU</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Graphics Card</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">SSD</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">RAM</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Cpu Cooler</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Supply</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Monitor</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Casing</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide3(index => (index + 1 + 2) % 2); }} type="button">Mouse</button>
    <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Keyboard</button>
  </div>
</div>
</Fragment>}
</>);
  const carouselContent4 = (<>
{activeSlide2 === 0 && <Fragment key={0}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">AG</span> <span className={"\x74ext-gradient"}>Computers</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center text-gray-600 \x62order \x62order-gray-600 \x63ursor-not-allowed"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide2(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" disabled type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide2(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Tab Slider" aria-roledescription="carousel" data-site-import-carousel-root="1">{carouselContent2}</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-3-2200g-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 3 2200G Budget Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/8b62e05b64d2f543.webp 640w, /site-assets/8b62e05b64d2f543.webp 3840w" src="/site-assets/8b62e05b64d2f543.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 3 2200G Budget Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 22,222</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳24,399</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,177 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-5-2400g-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 5 2400G Budget Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/366fc7f35c379afb.webp 640w, /site-assets/366fc7f35c379afb.webp 3840w" src="/site-assets/366fc7f35c379afb.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 5 2400G Budget Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 27,777</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳29,100</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,323 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/intel-10th-gen-core-i3-10105-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Intel 10th Gen Core i3 10105 Budget Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/d9b3fced08ea10bd.webp 640w, /site-assets/d9b3fced08ea10bd.webp 3840w" src="/site-assets/d9b3fced08ea10bd.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Intel 10th Gen Core i3 10105 Budget Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 33,333</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳36,800</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,467 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/intel-14th-gen-core-i3-14100-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Intel 14th Gen Core i3 14100 Budget Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/308817e96bc9bff9.webp 640w, /site-assets/308817e96bc9bff9.webp 3840w" src="/site-assets/308817e96bc9bff9.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Intel 14th Gen Core i3 14100 Budget Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 37,777</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳40,000</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,223 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-5-pro-5650ge-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 5 PRO 5650GE Budget Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/62f1ead2ae7503a6.webp 640w, /site-assets/62f1ead2ae7503a6.webp 3840w" src="/site-assets/62f1ead2ae7503a6.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 5 PRO 5650GE Budget Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 38,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳39,400</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 401 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-5-5500-with-rx-580-gaming-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 5 5500 with RX 580 Gaming PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/344eb23e7b5de502.webp 640w, /site-assets/344eb23e7b5de502.webp 3840w" src="/site-assets/344eb23e7b5de502.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 5 5500 with RX 580 Gaming PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 62,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳63,750</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 751 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-5-5600-with-rx-580-gaming-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 5 5600 with RX 580 Gaming PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/309b5b00a48b55e4.webp 640w, /site-assets/309b5b00a48b55e4.webp 3840w" src="/site-assets/309b5b00a48b55e4.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 5 5600 with RX 580 Gaming PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 71,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳72,100</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 101 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-5-8400f-with-rtx-3050-gaming-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 5 8400F with RTX 3050 Gaming PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/1a71ca77bdaf1cde.webp 3840w" src="/site-assets/1a71ca77bdaf1cde.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 5 8400F with RTX 3050 Gaming PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 103,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳104,400</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 401 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-5-8500g-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 5 8500G Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/6519fd9c33dac3e9.webp 3840w" src="/site-assets/6519fd9c33dac3e9.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 5 8500G Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 56,499</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳56,700</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 201 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/intel-10th-gen-core-i3-10100-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Intel 10th Gen Core i3 10100 Budget Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/7ac77bb209f86a4d.webp 3840w" src="/site-assets/7ac77bb209f86a4d.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Intel 10th Gen Core i3 10100 Budget Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 35,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳36,250</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 251 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/intel-12th-gen-core-i5-12400-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Intel 12th Gen Core i5-12400 Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e05fa48b9e3f7f3a.webp 3840w" src="/site-assets/e05fa48b9e3f7f3a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Intel 12th Gen Core i5-12400 Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 43,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳44,450</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 451 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/amd-ryzen-5-3400g-desktop-pc">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="AMD Ryzen 5 3400G Budget Desktop PC" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/f05584bbdc45609f.webp 3840w" src="/site-assets/f05584bbdc45609f.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>AMD Ryzen 5 3400G Budget Desktop PC</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 28,999</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳31,150</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,151 OFF</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
{activeSlide2 === 1 && <Fragment key={1}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">AG</span> <span className={"\x74ext-gradient"}>Computers</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide2(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide2(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Tab Slider" aria-roledescription="carousel" data-site-import-carousel-root="1">{carouselContent3}</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(-296px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/a4tech-op-620d-2x-click-optical-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="A4TECH OP-620D 2X Click Optical Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/d5fa97a5101de434.webp 3840w" src="/site-assets/d5fa97a5101de434.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>A4TECH OP-620D 2X Click Optical Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 525</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/a4tech-op-720-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="A4TECH OP-720 Optical Wired Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/d52ecb9ed18b3b5e.webp 3840w" src="/site-assets/d52ecb9ed18b3b5e.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>A4TECH OP-720 Optical Wired Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 420</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/jedel-gwh-110-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Jedel GWH-110 Tri-Mode Ergonomic Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/4f27bd28a159e948.webp 3840w" src="/site-assets/4f27bd28a159e948.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Jedel GWH-110 Tri-Mode Ergonomic Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,250</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/logitech-b100-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Logitech B100 Optical USB Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/86f8505804fc25f9.webp 3840w" src="/site-assets/86f8505804fc25f9.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Logitech B100 Optical USB Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 449</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/logitech-b175-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Logitech B175 Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/22299cf33c03feeb.webp 3840w" src="/site-assets/22299cf33c03feeb.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Logitech B175 Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 820</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/wiwu-wm103-magic-mice-rechargeable-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="WiWU WM103 Magic Mice Rechargeable Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/cdfedecb58e61382.webp 3840w" src="/site-assets/cdfedecb58e61382.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>WiWU WM103 Magic Mice Rechargeable Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,950</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳2,450</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 500 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/t-wolf-x7-tri-mode-gaming-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="T-WOLF X7 Tri-mode Gaming Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/458eed125f0e6269.webp 3840w" src="/site-assets/458eed125f0e6269.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>T-WOLF X7 Tri-mode Gaming Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,499</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳1,850</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 351 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/a4tech-bloody-p91s-rgb-gaming-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="A4TECH Bloody P91S RGB Gaming Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/81b6564352668d6c.webp 3840w" src="/site-assets/81b6564352668d6c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>A4TECH Bloody P91S RGB Gaming Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 2,350</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/ugreen-m331-dual-mode-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="UGREEN M331 Dual Mode Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5afeae29a5620bc.webp 3840w" src="/site-assets/e5afeae29a5620bc.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>UGREEN M331 Dual Mode Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,000</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳1,400</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 400 OFF</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
{activeSlide2 === 2 && <Fragment key={2}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">AG</span> <span className={"\x74ext-gradient"}>Computers</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide2(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide2(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Tab Slider" aria-roledescription="carousel" data-site-import-carousel-root="1">{carouselContent3}</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(-592px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/a4tech-op-620d-2x-click-optical-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="A4TECH OP-620D 2X Click Optical Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/d5fa97a5101de434.webp 3840w" src="/site-assets/d5fa97a5101de434.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>A4TECH OP-620D 2X Click Optical Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 525</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/a4tech-op-720-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="A4TECH OP-720 Optical Wired Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/d52ecb9ed18b3b5e.webp 3840w" src="/site-assets/d52ecb9ed18b3b5e.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>A4TECH OP-720 Optical Wired Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 420</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/jedel-gwh-110-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Jedel GWH-110 Tri-Mode Ergonomic Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/4f27bd28a159e948.webp 3840w" src="/site-assets/4f27bd28a159e948.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Jedel GWH-110 Tri-Mode Ergonomic Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,250</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/logitech-b100-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Logitech B100 Optical USB Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/86f8505804fc25f9.webp 3840w" src="/site-assets/86f8505804fc25f9.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Logitech B100 Optical USB Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 449</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/logitech-b175-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Logitech B175 Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/22299cf33c03feeb.webp 3840w" src="/site-assets/22299cf33c03feeb.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Logitech B175 Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 820</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/wiwu-wm103-magic-mice-rechargeable-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="WiWU WM103 Magic Mice Rechargeable Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/cdfedecb58e61382.webp 3840w" src="/site-assets/cdfedecb58e61382.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>WiWU WM103 Magic Mice Rechargeable Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,950</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳2,450</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 500 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/t-wolf-x7-tri-mode-gaming-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="T-WOLF X7 Tri-mode Gaming Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/458eed125f0e6269.webp 3840w" src="/site-assets/458eed125f0e6269.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>T-WOLF X7 Tri-mode Gaming Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,499</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳1,850</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 351 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/a4tech-bloody-p91s-rgb-gaming-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="A4TECH Bloody P91S RGB Gaming Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/81b6564352668d6c.webp 3840w" src="/site-assets/81b6564352668d6c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>A4TECH Bloody P91S RGB Gaming Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 2,350</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/ugreen-m331-dual-mode-wireless-mouse">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="UGREEN M331 Dual Mode Wireless Mouse" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5afeae29a5620bc.webp 3840w" src="/site-assets/e5afeae29a5620bc.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>UGREEN M331 Dual Mode Wireless Mouse</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,000</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳1,400</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 400 OFF</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
</>);
  const carouselContent5 = (<>
{activeSlide1 === 0 && <Fragment key={0}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Exclusive</span> <span className={"\x74ext-gradient"}>Deals</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center text-gray-600 \x62order \x62order-gray-600 \x63ursor-not-allowed"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide1(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" disabled type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide1(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-blz-dspbl-03blaze-blender">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision  BLZ- DSPBL 03Blaze Blender (Couple Choice)" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e392df708a847869.webp 640w, /site-assets/e392df708a847869.webp 3840w" src="/site-assets/e392df708a847869.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision  BLZ- DSPBL 03Blaze Blender (Couple Choice)</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,619</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳2,700</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,081 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/minister-mi-ekx-180-electric-kettle">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Minister MI-EKX 180 Electric Kettle - 1.8L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/f6b51fa6eb0c413e.webp 640w, /site-assets/f6b51fa6eb0c413e.webp 3840w" src="/site-assets/f6b51fa6eb0c413e.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Minister MI-EKX 180 Electric Kettle - 1.8L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 699</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳1,074</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 375 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/minister-split-inv-m18k410ge-fc-inverter-air-conditioner">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Minister Split INV-M18K410GE-FC Inverter Air Conditioner - 1.5 Ton" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5795b91b3b56627.webp 640w, /site-assets/e5795b91b3b56627.webp 3840w" src="/site-assets/e5795b91b3b56627.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Minister Split INV-M18K410GE-FC Inverter Air Conditioner - 1.5 Ton</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 41,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳82,785</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 40,885 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-es30h-ck3-bd-30-litre-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier ES30H-CK3(BD) 30 Litre Geyser" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/b2b1f7453417d456.webp 640w, /site-assets/b2b1f7453417d456.webp 3840w" src="/site-assets/b2b1f7453417d456.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier ES30H-CK3(BD) 30 Litre Geyser</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 9,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,300</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-hwm80-1269s6-top-load-automatic-washing-machine">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier HWM80-1269S6 Top Load Automatic Washing Machine - 8KG" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/142bf2a9cc189043.webp 640w, /site-assets/142bf2a9cc189043.webp 3840w" src="/site-assets/142bf2a9cc189043.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier HWM80-1269S6 Top Load Automatic Washing Machine - 8KG</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 22,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳29,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 7,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-pro-25ge-microwave">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Pro 25GE Microwave - 25L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/765ef3392d0e7483.webp 640w, /site-assets/765ef3392d0e7483.webp 3840w" src="/site-assets/765ef3392d0e7483.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Pro 25GE Microwave - 25L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 15,390</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳18,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,600 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/tcl-43s5k-43-inch-fhd-qled-smart-google-tv">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="TCL 43S5K 43-Inch FHD QLED Smart Google TV" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/0e52b1d3c8bf0312.webp 640w, /site-assets/0e52b1d3c8bf0312.webp 3840w" src="/site-assets/0e52b1d3c8bf0312.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>TCL 43S5K 43-Inch FHD QLED Smart Google TV</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 37,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳46,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 9,100 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-wfb-2b6-gdel-sc-refrigerator">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton WFB-2B6-GDEL-SC Inverter Refrigerator - 252L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/dd135cc071a508fe.webp 3840w" src="/site-assets/dd135cc071a508fe.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton WFB-2B6-GDEL-SC Inverter Refrigerator - 252L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 37,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳46,590</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 8,600 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/midea-msi-18crn-inverter-ac">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Midea MSI-18CRN Inverter Air Conditioner - 1.5 TON" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5790da8fe8ea61a.webp 3840w" src="/site-assets/e5790da8fe8ea61a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Midea MSI-18CRN Inverter Air Conditioner - 1.5 TON</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 53,999</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/hisense-as-18tw4rgskb02du-smart-compact-inverter-air-conditioner">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Hisense AS-18TW4RGSKB02DU Smart Compact Inverter Air Conditioner - 1.5 Ton" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2c3c9249dd01f6ed.webp 3840w" src="/site-assets/2c3c9249dd01f6ed.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Hisense AS-18TW4RGSKB02DU Smart Compact Inverter Air Conditioner - 1.5 Ton</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 44,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳74,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 30,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-wcf-1b5-gdel-xx-chest-freezer">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton WCF-1B5-GDEL-XX Chest Freezer - 125L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/9d7ebfa68ef07415.webp 3840w" src="/site-assets/9d7ebfa68ef07415.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton WCF-1B5-GDEL-XX Chest Freezer - 125L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 24,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳28,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-crystal-pro-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton Crystal Pro Geyser - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/7a47cf14dac029fb.webp 3840w" src="/site-assets/7a47cf14dac029fb.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton Crystal Pro Geyser - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 9,790</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,300</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,510 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/rfl-rozana-electric-geyser-40-l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="RFL Rozana Electric Geyser - 40L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/78d13631b7c7c32c.webp 3840w" src="/site-assets/78d13631b7c7c32c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>RFL Rozana Electric Geyser - 40L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,200</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,710 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-pro-30ge-microwave">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Pro 30GE Microwave - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/47eeb292950cc7a0.webp 3840w" src="/site-assets/47eeb292950cc7a0.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Pro 30GE Microwave - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 17,790</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳21,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,200 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-convection-black-mirror-microwave-oven">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Convection Black Mirror Microwave Oven - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/ba88d69fe2d79416.webp 3840w" src="/site-assets/ba88d69fe2d79416.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Convection Black Mirror Microwave Oven - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 24,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳30,490</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 6,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/hitachi-ltl-08m00-gg-washing-machine">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Hitachi LTL 08M00 GG Top Load Washing Machine - 8KG" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2d52eba2f234009a.webp 3840w" src="/site-assets/2d52eba2f234009a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Hitachi LTL 08M00 GG Top Load Washing Machine - 8KG</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 33,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳45,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 12,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/shameem-tropica-standard-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Shameem Tropica standard Geyser (Floor Type)" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/df2317a496ceab78.webp 3840w" src="/site-assets/df2317a496ceab78.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Shameem Tropica standard Geyser (Floor Type)</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 8,715</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳10,500</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,785 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/philips-na12000-air-fryer-4-2l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="PHILIPS NA120/00 Air Fryer 4.2L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/bfd549d1f8688793.webp 3840w" src="/site-assets/bfd549d1f8688793.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>PHILIPS NA120/00 Air Fryer 4.2L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 7,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 6,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-es40h-ck3-bd-40-litre-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier ES40H-CK3(BD) 40 Litre Geyser" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/8a164d663663eaef.webp 3840w" src="/site-assets/8a164d663663eaef.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier ES40H-CK3(BD) 40 Litre Geyser</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳14,800</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,810 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-40a3-hilife-infrared-cooker-2200-w">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="VISION 40A3 HiLife Infrared Cooker - 2200W" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/6da7d4b9d7420d8a.webp 3840w" src="/site-assets/6da7d4b9d7420d8a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>VISION 40A3 HiLife Infrared Cooker - 2200W</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 3,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳5,050</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,060 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-rel-50-05-ss-double-pot-rice-cooker-3-l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision REL-50-05 Stainless Steel Double Pot Rice Cooker - 3L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/68600ee1367fa88c.webp 3840w" src="/site-assets/68600ee1367fa88c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision REL-50-05 Stainless Steel Double Pot Rice Cooker - 3L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 2,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳3,750</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 860 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-j5-microwave-oven">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision J5 Microwave Oven - 20L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/cba2c67ec20eea4b.webp 3840w" src="/site-assets/cba2c67ec20eea4b.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision J5 Microwave Oven - 20L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 8,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳11,600</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,610 OFF</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
{activeSlide1 === 1 && <Fragment key={1}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Exclusive</span> <span className={"\x74ext-gradient"}>Deals</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide1(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide1(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(-296px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-blz-dspbl-03blaze-blender">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision  BLZ- DSPBL 03Blaze Blender (Couple Choice)" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e392df708a847869.webp 640w, /site-assets/e392df708a847869.webp 3840w" src="/site-assets/e392df708a847869.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision  BLZ- DSPBL 03Blaze Blender (Couple Choice)</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,619</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳2,700</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,081 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/minister-mi-ekx-180-electric-kettle">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Minister MI-EKX 180 Electric Kettle - 1.8L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/f6b51fa6eb0c413e.webp 640w, /site-assets/f6b51fa6eb0c413e.webp 3840w" src="/site-assets/f6b51fa6eb0c413e.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Minister MI-EKX 180 Electric Kettle - 1.8L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 699</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳1,074</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 375 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/minister-split-inv-m18k410ge-fc-inverter-air-conditioner">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Minister Split INV-M18K410GE-FC Inverter Air Conditioner - 1.5 Ton" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5795b91b3b56627.webp 640w, /site-assets/e5795b91b3b56627.webp 3840w" src="/site-assets/e5795b91b3b56627.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Minister Split INV-M18K410GE-FC Inverter Air Conditioner - 1.5 Ton</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 41,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳82,785</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 40,885 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-es30h-ck3-bd-30-litre-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier ES30H-CK3(BD) 30 Litre Geyser" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/b2b1f7453417d456.webp 640w, /site-assets/b2b1f7453417d456.webp 3840w" src="/site-assets/b2b1f7453417d456.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier ES30H-CK3(BD) 30 Litre Geyser</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 9,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,300</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-hwm80-1269s6-top-load-automatic-washing-machine">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier HWM80-1269S6 Top Load Automatic Washing Machine - 8KG" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/142bf2a9cc189043.webp 640w, /site-assets/142bf2a9cc189043.webp 3840w" src="/site-assets/142bf2a9cc189043.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier HWM80-1269S6 Top Load Automatic Washing Machine - 8KG</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 22,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳29,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 7,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-pro-25ge-microwave">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Pro 25GE Microwave - 25L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/765ef3392d0e7483.webp 640w, /site-assets/765ef3392d0e7483.webp 3840w" src="/site-assets/765ef3392d0e7483.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Pro 25GE Microwave - 25L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 15,390</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳18,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,600 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/tcl-43s5k-43-inch-fhd-qled-smart-google-tv">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="TCL 43S5K 43-Inch FHD QLED Smart Google TV" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/0e52b1d3c8bf0312.webp 640w, /site-assets/0e52b1d3c8bf0312.webp 3840w" src="/site-assets/0e52b1d3c8bf0312.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>TCL 43S5K 43-Inch FHD QLED Smart Google TV</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 37,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳46,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 9,100 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-wfb-2b6-gdel-sc-refrigerator">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton WFB-2B6-GDEL-SC Inverter Refrigerator - 252L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/dd135cc071a508fe.webp 3840w" src="/site-assets/dd135cc071a508fe.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton WFB-2B6-GDEL-SC Inverter Refrigerator - 252L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 37,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳46,590</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 8,600 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/midea-msi-18crn-inverter-ac">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Midea MSI-18CRN Inverter Air Conditioner - 1.5 TON" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5790da8fe8ea61a.webp 3840w" src="/site-assets/e5790da8fe8ea61a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Midea MSI-18CRN Inverter Air Conditioner - 1.5 TON</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 53,999</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/hisense-as-18tw4rgskb02du-smart-compact-inverter-air-conditioner">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Hisense AS-18TW4RGSKB02DU Smart Compact Inverter Air Conditioner - 1.5 Ton" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2c3c9249dd01f6ed.webp 3840w" src="/site-assets/2c3c9249dd01f6ed.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Hisense AS-18TW4RGSKB02DU Smart Compact Inverter Air Conditioner - 1.5 Ton</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 44,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳74,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 30,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-wcf-1b5-gdel-xx-chest-freezer">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton WCF-1B5-GDEL-XX Chest Freezer - 125L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/9d7ebfa68ef07415.webp 3840w" src="/site-assets/9d7ebfa68ef07415.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton WCF-1B5-GDEL-XX Chest Freezer - 125L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 24,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳28,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-crystal-pro-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton Crystal Pro Geyser - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/7a47cf14dac029fb.webp 3840w" src="/site-assets/7a47cf14dac029fb.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton Crystal Pro Geyser - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 9,790</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,300</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,510 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/rfl-rozana-electric-geyser-40-l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="RFL Rozana Electric Geyser - 40L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/78d13631b7c7c32c.webp 3840w" src="/site-assets/78d13631b7c7c32c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>RFL Rozana Electric Geyser - 40L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,200</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,710 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-pro-30ge-microwave">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Pro 30GE Microwave - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/47eeb292950cc7a0.webp 3840w" src="/site-assets/47eeb292950cc7a0.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Pro 30GE Microwave - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 17,790</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳21,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,200 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-convection-black-mirror-microwave-oven">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Convection Black Mirror Microwave Oven - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/ba88d69fe2d79416.webp 3840w" src="/site-assets/ba88d69fe2d79416.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Convection Black Mirror Microwave Oven - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 24,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳30,490</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 6,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/hitachi-ltl-08m00-gg-washing-machine">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Hitachi LTL 08M00 GG Top Load Washing Machine - 8KG" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2d52eba2f234009a.webp 3840w" src="/site-assets/2d52eba2f234009a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Hitachi LTL 08M00 GG Top Load Washing Machine - 8KG</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 33,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳45,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 12,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/shameem-tropica-standard-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Shameem Tropica standard Geyser (Floor Type)" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/df2317a496ceab78.webp 3840w" src="/site-assets/df2317a496ceab78.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Shameem Tropica standard Geyser (Floor Type)</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 8,715</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳10,500</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,785 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/philips-na12000-air-fryer-4-2l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="PHILIPS NA120/00 Air Fryer 4.2L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/bfd549d1f8688793.webp 3840w" src="/site-assets/bfd549d1f8688793.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>PHILIPS NA120/00 Air Fryer 4.2L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 7,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 6,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-es40h-ck3-bd-40-litre-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier ES40H-CK3(BD) 40 Litre Geyser" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/8a164d663663eaef.webp 3840w" src="/site-assets/8a164d663663eaef.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier ES40H-CK3(BD) 40 Litre Geyser</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳14,800</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,810 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-40a3-hilife-infrared-cooker-2200-w">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="VISION 40A3 HiLife Infrared Cooker - 2200W" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/6da7d4b9d7420d8a.webp 3840w" src="/site-assets/6da7d4b9d7420d8a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>VISION 40A3 HiLife Infrared Cooker - 2200W</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 3,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳5,050</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,060 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-rel-50-05-ss-double-pot-rice-cooker-3-l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision REL-50-05 Stainless Steel Double Pot Rice Cooker - 3L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/68600ee1367fa88c.webp 3840w" src="/site-assets/68600ee1367fa88c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision REL-50-05 Stainless Steel Double Pot Rice Cooker - 3L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 2,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳3,750</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 860 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-j5-microwave-oven">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision J5 Microwave Oven - 20L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/cba2c67ec20eea4b.webp 3840w" src="/site-assets/cba2c67ec20eea4b.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision J5 Microwave Oven - 20L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 8,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳11,600</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,610 OFF</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
{activeSlide1 === 2 && <Fragment key={2}>
<div className="flex items-center justify-between">
  <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Exclusive</span> <span className={"\x74ext-gradient"}>Deals</span></h2>
  <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide1(index => (index + -1 + 3) % 3); }} aria-label="Prev Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
    <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide1(index => (index + 1 + 3) % 3); }} aria-label="Next Button" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</div>
<div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
  <div className="overflow-hidden h-full">
    <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(-592px, 0px, 0px)" }}>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-blz-dspbl-03blaze-blender">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision  BLZ- DSPBL 03Blaze Blender (Couple Choice)" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e392df708a847869.webp 640w, /site-assets/e392df708a847869.webp 3840w" src="/site-assets/e392df708a847869.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision  BLZ- DSPBL 03Blaze Blender (Couple Choice)</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 1,619</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳2,700</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,081 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/minister-mi-ekx-180-electric-kettle">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Minister MI-EKX 180 Electric Kettle - 1.8L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/f6b51fa6eb0c413e.webp 640w, /site-assets/f6b51fa6eb0c413e.webp 3840w" src="/site-assets/f6b51fa6eb0c413e.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Minister MI-EKX 180 Electric Kettle - 1.8L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 699</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳1,074</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 375 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/minister-split-inv-m18k410ge-fc-inverter-air-conditioner">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Minister Split INV-M18K410GE-FC Inverter Air Conditioner - 1.5 Ton" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5795b91b3b56627.webp 640w, /site-assets/e5795b91b3b56627.webp 3840w" src="/site-assets/e5795b91b3b56627.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Minister Split INV-M18K410GE-FC Inverter Air Conditioner - 1.5 Ton</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 41,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳82,785</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 40,885 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-es30h-ck3-bd-30-litre-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier ES30H-CK3(BD) 30 Litre Geyser" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/b2b1f7453417d456.webp 640w, /site-assets/b2b1f7453417d456.webp 3840w" src="/site-assets/b2b1f7453417d456.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier ES30H-CK3(BD) 30 Litre Geyser</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 9,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,300</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-hwm80-1269s6-top-load-automatic-washing-machine">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier HWM80-1269S6 Top Load Automatic Washing Machine - 8KG" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/142bf2a9cc189043.webp 640w, /site-assets/142bf2a9cc189043.webp 3840w" src="/site-assets/142bf2a9cc189043.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier HWM80-1269S6 Top Load Automatic Washing Machine - 8KG</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 22,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳29,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 7,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-pro-25ge-microwave">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Pro 25GE Microwave - 25L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/765ef3392d0e7483.webp 640w, /site-assets/765ef3392d0e7483.webp 3840w" src="/site-assets/765ef3392d0e7483.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Pro 25GE Microwave - 25L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 15,390</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳18,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,600 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/tcl-43s5k-43-inch-fhd-qled-smart-google-tv">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="TCL 43S5K 43-Inch FHD QLED Smart Google TV" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/0e52b1d3c8bf0312.webp 640w, /site-assets/0e52b1d3c8bf0312.webp 3840w" src="/site-assets/0e52b1d3c8bf0312.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>TCL 43S5K 43-Inch FHD QLED Smart Google TV</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 37,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳46,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 9,100 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-wfb-2b6-gdel-sc-refrigerator">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton WFB-2B6-GDEL-SC Inverter Refrigerator - 252L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/dd135cc071a508fe.webp 3840w" src="/site-assets/dd135cc071a508fe.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton WFB-2B6-GDEL-SC Inverter Refrigerator - 252L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 37,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳46,590</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 8,600 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/midea-msi-18crn-inverter-ac">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Midea MSI-18CRN Inverter Air Conditioner - 1.5 TON" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e5790da8fe8ea61a.webp 3840w" src="/site-assets/e5790da8fe8ea61a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Midea MSI-18CRN Inverter Air Conditioner - 1.5 TON</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 53,999</span>
          <div className="min-h-8" />
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/hisense-as-18tw4rgskb02du-smart-compact-inverter-air-conditioner">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Hisense AS-18TW4RGSKB02DU Smart Compact Inverter Air Conditioner - 1.5 Ton" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2c3c9249dd01f6ed.webp 3840w" src="/site-assets/2c3c9249dd01f6ed.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Hisense AS-18TW4RGSKB02DU Smart Compact Inverter Air Conditioner - 1.5 Ton</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 44,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳74,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 30,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-wcf-1b5-gdel-xx-chest-freezer">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton WCF-1B5-GDEL-XX Chest Freezer - 125L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/9d7ebfa68ef07415.webp 3840w" src="/site-assets/9d7ebfa68ef07415.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton WCF-1B5-GDEL-XX Chest Freezer - 125L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 24,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳28,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/walton-crystal-pro-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Walton Crystal Pro Geyser - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/7a47cf14dac029fb.webp 3840w" src="/site-assets/7a47cf14dac029fb.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Walton Crystal Pro Geyser - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 9,790</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,300</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,510 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/rfl-rozana-electric-geyser-40-l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="RFL Rozana Electric Geyser - 40L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/78d13631b7c7c32c.webp 3840w" src="/site-assets/78d13631b7c7c32c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>RFL Rozana Electric Geyser - 40L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,200</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,710 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-pro-30ge-microwave">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Pro 30GE Microwave - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/47eeb292950cc7a0.webp 3840w" src="/site-assets/47eeb292950cc7a0.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Pro 30GE Microwave - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 17,790</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳21,990</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 4,200 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/whirlpool-magicook-convection-black-mirror-microwave-oven">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Whirlpool Magicook Convection Black Mirror Microwave Oven - 30L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/ba88d69fe2d79416.webp 3840w" src="/site-assets/ba88d69fe2d79416.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Whirlpool Magicook Convection Black Mirror Microwave Oven - 30L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 24,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳30,490</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 6,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/hitachi-ltl-08m00-gg-washing-machine">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Hitachi LTL 08M00 GG Top Load Washing Machine - 8KG" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2d52eba2f234009a.webp 3840w" src="/site-assets/2d52eba2f234009a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Hitachi LTL 08M00 GG Top Load Washing Machine - 8KG</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 33,900</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳45,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 12,000 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/shameem-tropica-standard-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Shameem Tropica standard Geyser (Floor Type)" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/df2317a496ceab78.webp 3840w" src="/site-assets/df2317a496ceab78.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Shameem Tropica standard Geyser (Floor Type)</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 8,715</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳10,500</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,785 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/philips-na12000-air-fryer-4-2l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="PHILIPS NA120/00 Air Fryer 4.2L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/bfd549d1f8688793.webp 3840w" src="/site-assets/bfd549d1f8688793.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>PHILIPS NA120/00 Air Fryer 4.2L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 7,490</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳13,900</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 6,410 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/haier-es40h-ck3-bd-40-litre-geyser">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Haier ES40H-CK3(BD) 40 Litre Geyser" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/8a164d663663eaef.webp 3840w" src="/site-assets/8a164d663663eaef.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Haier ES40H-CK3(BD) 40 Litre Geyser</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 10,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳14,800</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 3,810 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-40a3-hilife-infrared-cooker-2200-w">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="VISION 40A3 HiLife Infrared Cooker - 2200W" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/6da7d4b9d7420d8a.webp 3840w" src="/site-assets/6da7d4b9d7420d8a.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>VISION 40A3 HiLife Infrared Cooker - 2200W</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 3,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳5,050</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,060 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-rel-50-05-ss-double-pot-rice-cooker-3-l">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision REL-50-05 Stainless Steel Double Pot Rice Cooker - 3L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/68600ee1367fa88c.webp 3840w" src="/site-assets/68600ee1367fa88c.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision REL-50-05 Stainless Steel Double Pot Rice Cooker - 3L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 2,890</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳3,750</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 860 OFF</p>
            </div>
          </div>
        </div>
      </article>
      <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
        <a className={"mb-3 \x6dd:\x6db-2"} href="/product/vision-j5-microwave-oven">
          <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
            <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Vision J5 Microwave Oven - 20L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/cba2c67ec20eea4b.webp 3840w" src="/site-assets/cba2c67ec20eea4b.webp" />
          </div>
          <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Vision J5 Microwave Oven - 20L</p>
        </a>
        <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
          <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 8,990</span>
          <div className="min-h-8">
            <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
              <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳11,600</span>
              <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 2,610 OFF</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</Fragment>}
</>);
  const carouselContent6 = (<>
{activeSlide0 === 0 && <Fragment key={0}>
<div className={"overflow-hidden h-full absolute inset-0 \x6cg:\x73tatic"}>
  <div className="flex h-full" style={{ transform: "translate3d(-2807px, 0px, 0px)" }}>
    <a className="flex-[0_0_100%] mr-0.5" style={{ transform: "translate3d(0px, 0px, 0px)" }} href={"/offer/11-11-mega-shopping-fest?collections=404&page=1"}>
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Geyser-Offer-7014" loading="eager" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/aff10b2cc5f796fa.webp 384w, /site-assets/a91ce547431b73b5.webp 640w, /site-assets/7b5ed050757fd39f.webp 750w, /site-assets/51b98fd04a323055.webp 828w, /site-assets/58c2670bbfa8f02a.webp 1080w, /site-assets/efed6dcaebfbbeeb.webp 1200w, /site-assets/1828ab4c29669618.webp 1920w, /site-assets/1828ab4c29669618.webp 2048w, /site-assets/1828ab4c29669618.webp 3840w" src="/site-assets/1828ab4c29669618.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/11-11-mega-shopping-fest">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Web-Slider-6572" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/2873f2950515e0c1.webp 384w, /site-assets/b8aea1f2e8809f25.webp 640w, /site-assets/cfaa10910e294b63.webp 750w, /site-assets/59cb84abb51ba86b.webp 828w, /site-assets/84f5e02cccac1778.webp 1080w, /site-assets/da7a2dcc68145d96.webp 1200w, /site-assets/f72cf1b496739d4b.webp 1920w, /site-assets/f72cf1b496739d4b.webp 2048w, /site-assets/f72cf1b496739d4b.webp 3840w" src="/site-assets/f72cf1b496739d4b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/page/11-campaign-terms-and-conditions">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Web-Slider-7785" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9afb983758427793.webp 384w, /site-assets/d33fdf1064b5b679.webp 640w, /site-assets/486fdbc17e6551aa.webp 750w, /site-assets/c7c4a6e40179bfb1.webp 828w, /site-assets/031006dd18cdb2d3.webp 1080w, /site-assets/0591f01dc664b1e4.webp 1200w, /site-assets/d9af16b4664ca3a4.webp 1920w, /site-assets/d9af16b4664ca3a4.webp 2048w, /site-assets/d9af16b4664ca3a4.webp 3840w" src="/site-assets/d9af16b4664ca3a4.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/category/special-pc">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Special-PC---2.jpg-1329" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9fb81fa953441b7b.webp 384w, /site-assets/3c48d29f6833022e.webp 640w, /site-assets/d3aa5a0e60cb4790.webp 750w, /site-assets/f12ea1f9582e9ecc.webp 828w, /site-assets/3ee140c67846aed5.webp 1080w, /site-assets/f40ebff14e42acb6.webp 1200w, /site-assets/548c861589819b5b.webp 1920w, /site-assets/548c861589819b5b.webp 2048w, /site-assets/548c861589819b5b.webp 3840w" src="/site-assets/548c861589819b5b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/product/iphone-duo">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone-Duo-5279" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/65823d54302e3f89.webp 384w, /site-assets/beef1b261c5bc848.webp 640w, /site-assets/34512b963fc06d9c.webp 750w, /site-assets/62ed04248738435c.webp 828w, /site-assets/65bbf970585fb5ca.webp 1080w, /site-assets/a2405d267f1b5389.webp 1200w, /site-assets/2166e060f025fd1e.webp 1920w, /site-assets/2166e060f025fd1e.webp 2048w, /site-assets/2166e060f025fd1e.webp 3840w" src="/site-assets/2166e060f025fd1e.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/zero-percent-emi-on-iphone-17-and-18-series">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"City-&-EBL-0-EMI-5726"} loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/22c91de3fbca6c7c.webp 384w, /site-assets/c6587f34e0a1ed4f.webp 640w, /site-assets/19ce84e522d307ee.webp 750w, /site-assets/2bb8e26a9aa5ce78.webp 828w, /site-assets/ea27a86b923f1b5f.webp 1080w, /site-assets/8c902c666d767298.webp 1200w, /site-assets/e6df86148587ee43.webp 1920w, /site-assets/e6df86148587ee43.webp 2048w, /site-assets/e6df86148587ee43.webp 3840w" src="/site-assets/e6df86148587ee43.webp" />
      </figure>
    </a>
  </div>
</div>
<button className={"w-8 h-8 rounded-full place-items-center absolute left-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 6) % 6); }} aria-label="Prev Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
</button>
<button className={"w-8 h-8 rounded-full place-items-center absolute right-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 6) % 6); }} aria-label="Next Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
</button>
<div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 1" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 2" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 3" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 4" />
  <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 5" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 6" />
</div>
</Fragment>}
{activeSlide0 === 1 && <Fragment key={1}>
<div className={"overflow-hidden h-full absolute inset-0 \x6cg:\x73tatic"}>
  <div className="flex h-full" style={{ transform: "translate3d(0.02px, 0px, 0px)" }}>
    <a className="flex-[0_0_100%] mr-0.5" style={{ transform: "translate3d(0px, 0px, 0px)" }} href={"/offer/11-11-mega-shopping-fest?collections=404&page=1"}>
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Geyser-Offer-7014" loading="eager" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/aff10b2cc5f796fa.webp 384w, /site-assets/a91ce547431b73b5.webp 640w, /site-assets/7b5ed050757fd39f.webp 750w, /site-assets/51b98fd04a323055.webp 828w, /site-assets/58c2670bbfa8f02a.webp 1080w, /site-assets/efed6dcaebfbbeeb.webp 1200w, /site-assets/1828ab4c29669618.webp 1920w, /site-assets/1828ab4c29669618.webp 2048w, /site-assets/1828ab4c29669618.webp 3840w" src="/site-assets/1828ab4c29669618.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/11-11-mega-shopping-fest">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Web-Slider-6572" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/2873f2950515e0c1.webp 384w, /site-assets/b8aea1f2e8809f25.webp 640w, /site-assets/cfaa10910e294b63.webp 750w, /site-assets/59cb84abb51ba86b.webp 828w, /site-assets/84f5e02cccac1778.webp 1080w, /site-assets/da7a2dcc68145d96.webp 1200w, /site-assets/f72cf1b496739d4b.webp 1920w, /site-assets/f72cf1b496739d4b.webp 2048w, /site-assets/f72cf1b496739d4b.webp 3840w" src="/site-assets/f72cf1b496739d4b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/page/11-campaign-terms-and-conditions">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Web-Slider-7785" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9afb983758427793.webp 384w, /site-assets/d33fdf1064b5b679.webp 640w, /site-assets/486fdbc17e6551aa.webp 750w, /site-assets/c7c4a6e40179bfb1.webp 828w, /site-assets/031006dd18cdb2d3.webp 1080w, /site-assets/0591f01dc664b1e4.webp 1200w, /site-assets/d9af16b4664ca3a4.webp 1920w, /site-assets/d9af16b4664ca3a4.webp 2048w, /site-assets/d9af16b4664ca3a4.webp 3840w" src="/site-assets/d9af16b4664ca3a4.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/category/special-pc">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Special-PC---2.jpg-1329" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9fb81fa953441b7b.webp 384w, /site-assets/3c48d29f6833022e.webp 640w, /site-assets/d3aa5a0e60cb4790.webp 750w, /site-assets/f12ea1f9582e9ecc.webp 828w, /site-assets/3ee140c67846aed5.webp 1080w, /site-assets/f40ebff14e42acb6.webp 1200w, /site-assets/548c861589819b5b.webp 1920w, /site-assets/548c861589819b5b.webp 2048w, /site-assets/548c861589819b5b.webp 3840w" src="/site-assets/548c861589819b5b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/product/iphone-duo">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone-Duo-5279" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/65823d54302e3f89.webp 384w, /site-assets/beef1b261c5bc848.webp 640w, /site-assets/34512b963fc06d9c.webp 750w, /site-assets/62ed04248738435c.webp 828w, /site-assets/65bbf970585fb5ca.webp 1080w, /site-assets/a2405d267f1b5389.webp 1200w, /site-assets/2166e060f025fd1e.webp 1920w, /site-assets/2166e060f025fd1e.webp 2048w, /site-assets/2166e060f025fd1e.webp 3840w" src="/site-assets/2166e060f025fd1e.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/zero-percent-emi-on-iphone-17-and-18-series">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"City-&-EBL-0-EMI-5726"} loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/22c91de3fbca6c7c.webp 384w, /site-assets/c6587f34e0a1ed4f.webp 640w, /site-assets/19ce84e522d307ee.webp 750w, /site-assets/2bb8e26a9aa5ce78.webp 828w, /site-assets/ea27a86b923f1b5f.webp 1080w, /site-assets/8c902c666d767298.webp 1200w, /site-assets/e6df86148587ee43.webp 1920w, /site-assets/e6df86148587ee43.webp 2048w, /site-assets/e6df86148587ee43.webp 3840w" src="/site-assets/e6df86148587ee43.webp" />
      </figure>
    </a>
  </div>
</div>
<button className={"w-8 h-8 rounded-full place-items-center absolute left-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 6) % 6); }} aria-label="Prev Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
</button>
<button className={"w-8 h-8 rounded-full place-items-center absolute right-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 6) % 6); }} aria-label="Next Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
</button>
<div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
  <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 1" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 2" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 3" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 4" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 5" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 6" />
</div>
</Fragment>}
{activeSlide0 === 2 && <Fragment key={2}>
<div className={"overflow-hidden h-full absolute inset-0 \x6cg:\x73tatic"}>
  <div className="flex h-full" style={{ transform: "translate3d(-1870.99px, 0px, 0px)" }}>
    <a className="flex-[0_0_100%] mr-0.5" style={{ transform: "translate3d(0px, 0px, 0px)" }} href={"/offer/11-11-mega-shopping-fest?collections=404&page=1"}>
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Geyser-Offer-7014" loading="eager" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/aff10b2cc5f796fa.webp 384w, /site-assets/a91ce547431b73b5.webp 640w, /site-assets/7b5ed050757fd39f.webp 750w, /site-assets/51b98fd04a323055.webp 828w, /site-assets/58c2670bbfa8f02a.webp 1080w, /site-assets/efed6dcaebfbbeeb.webp 1200w, /site-assets/1828ab4c29669618.webp 1920w, /site-assets/1828ab4c29669618.webp 2048w, /site-assets/1828ab4c29669618.webp 3840w" src="/site-assets/1828ab4c29669618.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/11-11-mega-shopping-fest">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Web-Slider-6572" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/2873f2950515e0c1.webp 384w, /site-assets/b8aea1f2e8809f25.webp 640w, /site-assets/cfaa10910e294b63.webp 750w, /site-assets/59cb84abb51ba86b.webp 828w, /site-assets/84f5e02cccac1778.webp 1080w, /site-assets/da7a2dcc68145d96.webp 1200w, /site-assets/f72cf1b496739d4b.webp 1920w, /site-assets/f72cf1b496739d4b.webp 2048w, /site-assets/f72cf1b496739d4b.webp 3840w" src="/site-assets/f72cf1b496739d4b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/page/11-campaign-terms-and-conditions">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Web-Slider-7785" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9afb983758427793.webp 384w, /site-assets/d33fdf1064b5b679.webp 640w, /site-assets/486fdbc17e6551aa.webp 750w, /site-assets/c7c4a6e40179bfb1.webp 828w, /site-assets/031006dd18cdb2d3.webp 1080w, /site-assets/0591f01dc664b1e4.webp 1200w, /site-assets/d9af16b4664ca3a4.webp 1920w, /site-assets/d9af16b4664ca3a4.webp 2048w, /site-assets/d9af16b4664ca3a4.webp 3840w" src="/site-assets/d9af16b4664ca3a4.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/category/special-pc">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Special-PC---2.jpg-1329" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9fb81fa953441b7b.webp 384w, /site-assets/3c48d29f6833022e.webp 640w, /site-assets/d3aa5a0e60cb4790.webp 750w, /site-assets/f12ea1f9582e9ecc.webp 828w, /site-assets/3ee140c67846aed5.webp 1080w, /site-assets/f40ebff14e42acb6.webp 1200w, /site-assets/548c861589819b5b.webp 1920w, /site-assets/548c861589819b5b.webp 2048w, /site-assets/548c861589819b5b.webp 3840w" src="/site-assets/548c861589819b5b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/product/iphone-duo">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone-Duo-5279" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/65823d54302e3f89.webp 384w, /site-assets/beef1b261c5bc848.webp 640w, /site-assets/34512b963fc06d9c.webp 750w, /site-assets/62ed04248738435c.webp 828w, /site-assets/65bbf970585fb5ca.webp 1080w, /site-assets/a2405d267f1b5389.webp 1200w, /site-assets/2166e060f025fd1e.webp 1920w, /site-assets/2166e060f025fd1e.webp 2048w, /site-assets/2166e060f025fd1e.webp 3840w" src="/site-assets/2166e060f025fd1e.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/zero-percent-emi-on-iphone-17-and-18-series">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"City-&-EBL-0-EMI-5726"} loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/22c91de3fbca6c7c.webp 384w, /site-assets/c6587f34e0a1ed4f.webp 640w, /site-assets/19ce84e522d307ee.webp 750w, /site-assets/2bb8e26a9aa5ce78.webp 828w, /site-assets/ea27a86b923f1b5f.webp 1080w, /site-assets/8c902c666d767298.webp 1200w, /site-assets/e6df86148587ee43.webp 1920w, /site-assets/e6df86148587ee43.webp 2048w, /site-assets/e6df86148587ee43.webp 3840w" src="/site-assets/e6df86148587ee43.webp" />
      </figure>
    </a>
  </div>
</div>
<button className={"w-8 h-8 rounded-full place-items-center absolute left-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 6) % 6); }} aria-label="Prev Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
</button>
<button className={"w-8 h-8 rounded-full place-items-center absolute right-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 6) % 6); }} aria-label="Next Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
</button>
<div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 1" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 2" />
  <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 3" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 4" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 5" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 6" />
</div>
</Fragment>}
{activeSlide0 === 3 && <Fragment key={3}>
<div className={"overflow-hidden h-full absolute inset-0 \x6cg:\x73tatic"}>
  <div className="flex h-full" style={{ transform: "translate3d(-3741.9px, 0px, 0px)" }}>
    <a className="flex-[0_0_100%] mr-0.5" style={{ transform: "translate3d(0px, 0px, 0px)" }} href={"/offer/11-11-mega-shopping-fest?collections=404&page=1"}>
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Geyser-Offer-7014" loading="eager" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/aff10b2cc5f796fa.webp 384w, /site-assets/a91ce547431b73b5.webp 640w, /site-assets/7b5ed050757fd39f.webp 750w, /site-assets/51b98fd04a323055.webp 828w, /site-assets/58c2670bbfa8f02a.webp 1080w, /site-assets/efed6dcaebfbbeeb.webp 1200w, /site-assets/1828ab4c29669618.webp 1920w, /site-assets/1828ab4c29669618.webp 2048w, /site-assets/1828ab4c29669618.webp 3840w" src="/site-assets/1828ab4c29669618.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/11-11-mega-shopping-fest">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Web-Slider-6572" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/2873f2950515e0c1.webp 384w, /site-assets/b8aea1f2e8809f25.webp 640w, /site-assets/cfaa10910e294b63.webp 750w, /site-assets/59cb84abb51ba86b.webp 828w, /site-assets/84f5e02cccac1778.webp 1080w, /site-assets/da7a2dcc68145d96.webp 1200w, /site-assets/f72cf1b496739d4b.webp 1920w, /site-assets/f72cf1b496739d4b.webp 2048w, /site-assets/f72cf1b496739d4b.webp 3840w" src="/site-assets/f72cf1b496739d4b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/page/11-campaign-terms-and-conditions">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Web-Slider-7785" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9afb983758427793.webp 384w, /site-assets/d33fdf1064b5b679.webp 640w, /site-assets/486fdbc17e6551aa.webp 750w, /site-assets/c7c4a6e40179bfb1.webp 828w, /site-assets/031006dd18cdb2d3.webp 1080w, /site-assets/0591f01dc664b1e4.webp 1200w, /site-assets/d9af16b4664ca3a4.webp 1920w, /site-assets/d9af16b4664ca3a4.webp 2048w, /site-assets/d9af16b4664ca3a4.webp 3840w" src="/site-assets/d9af16b4664ca3a4.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/category/special-pc">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Special-PC---2.jpg-1329" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9fb81fa953441b7b.webp 384w, /site-assets/3c48d29f6833022e.webp 640w, /site-assets/d3aa5a0e60cb4790.webp 750w, /site-assets/f12ea1f9582e9ecc.webp 828w, /site-assets/3ee140c67846aed5.webp 1080w, /site-assets/f40ebff14e42acb6.webp 1200w, /site-assets/548c861589819b5b.webp 1920w, /site-assets/548c861589819b5b.webp 2048w, /site-assets/548c861589819b5b.webp 3840w" src="/site-assets/548c861589819b5b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/product/iphone-duo">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone-Duo-5279" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/65823d54302e3f89.webp 384w, /site-assets/beef1b261c5bc848.webp 640w, /site-assets/34512b963fc06d9c.webp 750w, /site-assets/62ed04248738435c.webp 828w, /site-assets/65bbf970585fb5ca.webp 1080w, /site-assets/a2405d267f1b5389.webp 1200w, /site-assets/2166e060f025fd1e.webp 1920w, /site-assets/2166e060f025fd1e.webp 2048w, /site-assets/2166e060f025fd1e.webp 3840w" src="/site-assets/2166e060f025fd1e.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/zero-percent-emi-on-iphone-17-and-18-series">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"City-&-EBL-0-EMI-5726"} loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/22c91de3fbca6c7c.webp 384w, /site-assets/c6587f34e0a1ed4f.webp 640w, /site-assets/19ce84e522d307ee.webp 750w, /site-assets/2bb8e26a9aa5ce78.webp 828w, /site-assets/ea27a86b923f1b5f.webp 1080w, /site-assets/8c902c666d767298.webp 1200w, /site-assets/e6df86148587ee43.webp 1920w, /site-assets/e6df86148587ee43.webp 2048w, /site-assets/e6df86148587ee43.webp 3840w" src="/site-assets/e6df86148587ee43.webp" />
      </figure>
    </a>
  </div>
</div>
<button className={"w-8 h-8 rounded-full place-items-center absolute left-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 6) % 6); }} aria-label="Prev Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
</button>
<button className={"w-8 h-8 rounded-full place-items-center absolute right-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 6) % 6); }} aria-label="Next Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
</button>
<div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 1" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 2" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 3" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 4" />
  <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 5" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 6" />
</div>
</Fragment>}
{activeSlide0 === 4 && <Fragment key={4}>
<div className={"overflow-hidden h-full absolute inset-0 \x6cg:\x73tatic"}>
  <div className="flex h-full" style={{ transform: "translate3d(-935.2px, 0px, 0px)" }}>
    <a className="flex-[0_0_100%] mr-0.5" style={{ transform: "translate3d(0px, 0px, 0px)" }} href={"/offer/11-11-mega-shopping-fest?collections=404&page=1"}>
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Geyser-Offer-7014" loading="eager" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/aff10b2cc5f796fa.webp 384w, /site-assets/a91ce547431b73b5.webp 640w, /site-assets/7b5ed050757fd39f.webp 750w, /site-assets/51b98fd04a323055.webp 828w, /site-assets/58c2670bbfa8f02a.webp 1080w, /site-assets/efed6dcaebfbbeeb.webp 1200w, /site-assets/1828ab4c29669618.webp 1920w, /site-assets/1828ab4c29669618.webp 2048w, /site-assets/1828ab4c29669618.webp 3840w" src="/site-assets/1828ab4c29669618.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/11-11-mega-shopping-fest">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Web-Slider-6572" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/2873f2950515e0c1.webp 384w, /site-assets/b8aea1f2e8809f25.webp 640w, /site-assets/cfaa10910e294b63.webp 750w, /site-assets/59cb84abb51ba86b.webp 828w, /site-assets/84f5e02cccac1778.webp 1080w, /site-assets/da7a2dcc68145d96.webp 1200w, /site-assets/f72cf1b496739d4b.webp 1920w, /site-assets/f72cf1b496739d4b.webp 2048w, /site-assets/f72cf1b496739d4b.webp 3840w" src="/site-assets/f72cf1b496739d4b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/page/11-campaign-terms-and-conditions">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Web-Slider-7785" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9afb983758427793.webp 384w, /site-assets/d33fdf1064b5b679.webp 640w, /site-assets/486fdbc17e6551aa.webp 750w, /site-assets/c7c4a6e40179bfb1.webp 828w, /site-assets/031006dd18cdb2d3.webp 1080w, /site-assets/0591f01dc664b1e4.webp 1200w, /site-assets/d9af16b4664ca3a4.webp 1920w, /site-assets/d9af16b4664ca3a4.webp 2048w, /site-assets/d9af16b4664ca3a4.webp 3840w" src="/site-assets/d9af16b4664ca3a4.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/category/special-pc">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Special-PC---2.jpg-1329" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9fb81fa953441b7b.webp 384w, /site-assets/3c48d29f6833022e.webp 640w, /site-assets/d3aa5a0e60cb4790.webp 750w, /site-assets/f12ea1f9582e9ecc.webp 828w, /site-assets/3ee140c67846aed5.webp 1080w, /site-assets/f40ebff14e42acb6.webp 1200w, /site-assets/548c861589819b5b.webp 1920w, /site-assets/548c861589819b5b.webp 2048w, /site-assets/548c861589819b5b.webp 3840w" src="/site-assets/548c861589819b5b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/product/iphone-duo">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone-Duo-5279" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/65823d54302e3f89.webp 384w, /site-assets/beef1b261c5bc848.webp 640w, /site-assets/34512b963fc06d9c.webp 750w, /site-assets/62ed04248738435c.webp 828w, /site-assets/65bbf970585fb5ca.webp 1080w, /site-assets/a2405d267f1b5389.webp 1200w, /site-assets/2166e060f025fd1e.webp 1920w, /site-assets/2166e060f025fd1e.webp 2048w, /site-assets/2166e060f025fd1e.webp 3840w" src="/site-assets/2166e060f025fd1e.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/zero-percent-emi-on-iphone-17-and-18-series">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"City-&-EBL-0-EMI-5726"} loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/22c91de3fbca6c7c.webp 384w, /site-assets/c6587f34e0a1ed4f.webp 640w, /site-assets/19ce84e522d307ee.webp 750w, /site-assets/2bb8e26a9aa5ce78.webp 828w, /site-assets/ea27a86b923f1b5f.webp 1080w, /site-assets/8c902c666d767298.webp 1200w, /site-assets/e6df86148587ee43.webp 1920w, /site-assets/e6df86148587ee43.webp 2048w, /site-assets/e6df86148587ee43.webp 3840w" src="/site-assets/e6df86148587ee43.webp" />
      </figure>
    </a>
  </div>
</div>
<button className={"w-8 h-8 rounded-full place-items-center absolute left-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 6) % 6); }} aria-label="Prev Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
</button>
<button className={"w-8 h-8 rounded-full place-items-center absolute right-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 6) % 6); }} aria-label="Next Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
</button>
<div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 1" />
  <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 2" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 3" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 4" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 5" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 6" />
</div>
</Fragment>}
{activeSlide0 === 5 && <Fragment key={5}>
<div className={"overflow-hidden h-full absolute inset-0 \x6cg:\x73tatic"}>
  <div className="flex h-full" style={{ transform: "translate3d(-1870.96px, 0px, 0px)" }}>
    <a className="flex-[0_0_100%] mr-0.5" style={{ transform: "translate3d(0px, 0px, 0px)" }} href={"/offer/11-11-mega-shopping-fest?collections=404&page=1"}>
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Geyser-Offer-7014" loading="eager" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/aff10b2cc5f796fa.webp 384w, /site-assets/a91ce547431b73b5.webp 640w, /site-assets/7b5ed050757fd39f.webp 750w, /site-assets/51b98fd04a323055.webp 828w, /site-assets/58c2670bbfa8f02a.webp 1080w, /site-assets/efed6dcaebfbbeeb.webp 1200w, /site-assets/1828ab4c29669618.webp 1920w, /site-assets/1828ab4c29669618.webp 2048w, /site-assets/1828ab4c29669618.webp 3840w" src="/site-assets/1828ab4c29669618.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/11-11-mega-shopping-fest">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Web-Slider-6572" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/2873f2950515e0c1.webp 384w, /site-assets/b8aea1f2e8809f25.webp 640w, /site-assets/cfaa10910e294b63.webp 750w, /site-assets/59cb84abb51ba86b.webp 828w, /site-assets/84f5e02cccac1778.webp 1080w, /site-assets/da7a2dcc68145d96.webp 1200w, /site-assets/f72cf1b496739d4b.webp 1920w, /site-assets/f72cf1b496739d4b.webp 2048w, /site-assets/f72cf1b496739d4b.webp 3840w" src="/site-assets/f72cf1b496739d4b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/page/11-campaign-terms-and-conditions">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Web-Slider-7785" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9afb983758427793.webp 384w, /site-assets/d33fdf1064b5b679.webp 640w, /site-assets/486fdbc17e6551aa.webp 750w, /site-assets/c7c4a6e40179bfb1.webp 828w, /site-assets/031006dd18cdb2d3.webp 1080w, /site-assets/0591f01dc664b1e4.webp 1200w, /site-assets/d9af16b4664ca3a4.webp 1920w, /site-assets/d9af16b4664ca3a4.webp 2048w, /site-assets/d9af16b4664ca3a4.webp 3840w" src="/site-assets/d9af16b4664ca3a4.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/category/special-pc">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Special-PC---2.jpg-1329" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/9fb81fa953441b7b.webp 384w, /site-assets/3c48d29f6833022e.webp 640w, /site-assets/d3aa5a0e60cb4790.webp 750w, /site-assets/f12ea1f9582e9ecc.webp 828w, /site-assets/3ee140c67846aed5.webp 1080w, /site-assets/f40ebff14e42acb6.webp 1200w, /site-assets/548c861589819b5b.webp 1920w, /site-assets/548c861589819b5b.webp 2048w, /site-assets/548c861589819b5b.webp 3840w" src="/site-assets/548c861589819b5b.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/product/iphone-duo">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone-Duo-5279" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/65823d54302e3f89.webp 384w, /site-assets/beef1b261c5bc848.webp 640w, /site-assets/34512b963fc06d9c.webp 750w, /site-assets/62ed04248738435c.webp 828w, /site-assets/65bbf970585fb5ca.webp 1080w, /site-assets/a2405d267f1b5389.webp 1200w, /site-assets/2166e060f025fd1e.webp 1920w, /site-assets/2166e060f025fd1e.webp 2048w, /site-assets/2166e060f025fd1e.webp 3840w" src="/site-assets/2166e060f025fd1e.webp" />
      </figure>
    </a>
    <a className="flex-[0_0_100%] mr-0.5" href="/offer/zero-percent-emi-on-iphone-17-and-18-series">
      <figure className="relative h-full w-full">
        <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt={"City-&-EBL-0-EMI-5726"} loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/22c91de3fbca6c7c.webp 384w, /site-assets/c6587f34e0a1ed4f.webp 640w, /site-assets/19ce84e522d307ee.webp 750w, /site-assets/2bb8e26a9aa5ce78.webp 828w, /site-assets/ea27a86b923f1b5f.webp 1080w, /site-assets/8c902c666d767298.webp 1200w, /site-assets/e6df86148587ee43.webp 1920w, /site-assets/e6df86148587ee43.webp 2048w, /site-assets/e6df86148587ee43.webp 3840w" src="/site-assets/e6df86148587ee43.webp" />
      </figure>
    </a>
  </div>
</div>
<button className={"w-8 h-8 rounded-full place-items-center absolute left-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + -1 + 6) % 6); }} aria-label="Prev Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
</button>
<button className={"w-8 h-8 rounded-full place-items-center absolute right-2 top-1/2 \x2dtranslate-y-1/\x32 hidden \x73m:\x66lex justify-center \x62g-white text-gray-900"} onClick={event => { event.preventDefault(); event.stopPropagation(); setActiveSlide0(index => (index + 1 + 6) % 6); }} aria-label="Next Button">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
</button>
<div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 1" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 2" />
  <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 3" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 4" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 5" />
  <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 6" />
</div>
</Fragment>}
</>);
  return (
    <>
      <style>{capturedCSS}</style>
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
      <div className={"\x62g-white \x70rint:\x68idden \x73m:\x68idden rounded-xl \x73hadow-lg overflow-hidden z-50 flex items-center \x70y-2"}>
        <button className={"p-1 rounded-full \x68over:\x62g-gray-100"} type="button" aria-label="Close">
          <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div className="flex items-center gap-2 flex-1 pr-2">
          <div className={"\x62g-white \x66ont-bold rounded-full relative w-10 h-10 flex items-center justify-center"}>
            <img className="p-1" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="logo" loading="lazy" decoding="async" sizes="100vw" srcSet="/site-assets/9b6b4f065c6400e9.bin 640w, /site-assets/9b6b4f065c6400e9.bin 750w, /site-assets/9b6b4f065c6400e9.bin 828w, /site-assets/9b6b4f065c6400e9.bin 1080w, /site-assets/9b6b4f065c6400e9.bin 1200w, /site-assets/9b6b4f065c6400e9.bin 1920w, /site-assets/9b6b4f065c6400e9.bin 2048w, /site-assets/9b6b4f065c6400e9.bin 3840w" src="/site-assets/9b6b4f065c6400e9.bin" />
          </div>
          <div className="flex-1">
            <p className={"\x74ext-xs"}>Claim BDT 300 Off Today!</p>
            <p className={"text-[11px] \x6ceading-[\x314px] text-gray-600"}>Download our app and save BDT 300 on purchases over BDT 5000!</p>
          </div>
          <a className={"text-white \x62g-orange-500 \x66ont-medium \x70y-1.\x35 \x70x-4 rounded-full \x74ext-sm"} href="https://cutt.ly/ag-app">Open</a>
        </div>
      </div>
      <ImportedHeader />
      <main className={"\x63ontainer [@media(min-width:1440px)]:max-w-[1440px]"}>
        <section className={"grid grid-cols-2 \x6cg:\x67rid-cols-10 gap-2 \x6cg:\x67ap-6 mt-4 \x6cg:\x6dt-8"} data-site-import-carousel-root="4">
          <div className={"relative overflow-hidden rounded-lg \x6cg:\x72ow-span-2 col-span-2 \x6cg:\x63ol-span-7 pb-[55.25%] \x6cg:\x70b-0"} aria-label="Hero Slider" aria-roledescription="carousel" data-site-import-carousel-root="0">{carouselContent6}</div>
          <a className={"\x6cg:\x63ol-span-3 relative flex pb-[57.25%] \x33xl:\x70b-[\x358.\x325%]"} href="/offer/happy-hour">
            <img className="rounded-lg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Happy-Hour---Top-Right-3997" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/82a5b5d2ab056122.webp 384w, /site-assets/94b01cad3dba3a54.webp 640w, /site-assets/9a1d3be3edb4b625.webp 750w, /site-assets/06c31afc1b425a07.webp 828w, /site-assets/b6f217480608c051.webp 1080w, /site-assets/1bc03c026f03f6bb.webp 1200w, /site-assets/0a4c24852aeaf722.webp 1920w, /site-assets/0a4c24852aeaf722.webp 2048w, /site-assets/0a4c24852aeaf722.webp 3840w" src="/site-assets/0a4c24852aeaf722.webp" />
          </a>
          <a className={"\x6cg:\x63ol-span-3 relative flex pb-[57.25%] \x33xl:\x70b-[\x358.\x325%]"} href="/product/minister-split-inv-m18k410ge-fc-inverter-air-conditioner">
            <img className="rounded-lg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Market-Best-Price---Top-Right.jpg-5171" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/72167982fde4b281.webp 384w, /site-assets/ca6947d8eeb8b4b8.webp 640w, /site-assets/e5d8b49b7d3bfcb3.webp 1920w, /site-assets/e5d8b49b7d3bfcb3.webp 3840w" src="/site-assets/e5d8b49b7d3bfcb3.webp" />
          </a>
        </section>
        <ImportedSection />
        <ImportedSectionFeaturedCategories />
        <section className="mb-10" data-site-import-carousel-root="5">{carouselContent5}</section>
        <section className="mb-10" data-site-import-carousel-root="6">{carouselContent4}</section>
        <section className="mb-10">
          <div className="relative overflow-hidden h-full" aria-label="Banner Slider" aria-roledescription="carousel">
            <div className="overflow-hidden h-full">
              <div className="flex h-full" style={{ transform: "translate3d(0px, 0px, 0px)" }} data-site-import-responsive="692">
                <a className={"flex-[0_0_100%] relative h-0 pb-[25%] \x6cg:\x70b-[\x320.\x325%] mr-0.5 rounded-xl \x6cg:\x72ounded-3xl overflow-hidden"} style={{ transform: "translate3d(0px, 0px, 0px)" }} href="/page/exchange-policy">
                  <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Exchange-Offer-up-1-7872" loading="eager" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/829e3736cd964e57.webp 1920w, /site-assets/829e3736cd964e57.webp 3840w" src="/site-assets/829e3736cd964e57.webp" />
                </a>
                <a className={"flex-[0_0_100%] relative h-0 pb-[25%] \x6cg:\x70b-[\x320.\x325%] mr-0.5 rounded-xl \x6cg:\x72ounded-3xl overflow-hidden"} href="/page/11-campaign-terms-and-conditions">
                  <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="11.11---Web-1500-323.jpg-3054" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/ef5f91cea3aae4fa.webp 1920w, /site-assets/ef5f91cea3aae4fa.webp 3840w" src="/site-assets/ef5f91cea3aae4fa.webp" />
                </a>
              </div>
            </div>
            <div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
              <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 1" />
              <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 2" />
            </div>
          </div>
        </section>
        <section className="mb-10" data-site-import-carousel-root="7">{carouselContent1}</section>
        <section className="mb-10">
          <div className="flex items-center justify-between">
            <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Home</span> <span className={"\x74ext-gradient"}>Appliances</span></h2>
            <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
              <button className={"w-8 h-8 rounded-full grid place-items-center text-gray-600 \x62order \x62order-gray-600 \x63ursor-not-allowed"} aria-label="Prev Button" disabled type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className={"w-8 h-8 rounded-full grid place-items-center text-gray-600 \x62order \x62order-gray-600 \x63ursor-not-allowed"} aria-label="Next Button" type="button" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Tab Slider" aria-roledescription="carousel" data-site-import-carousel-root="2">{carouselContent0}</div>
          <div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
            <div className="overflow-hidden h-full">
              <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
                  <a className={"mb-3 \x6dd:\x6db-2"} href="/product/philips-na11000-1000-series-air-fryer">
                    <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                      <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Philips NA110/00 1000 Series Air Fryer - 3.2L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/53759d65e6158f44.webp 3840w" src="/site-assets/53759d65e6158f44.webp" />
                    </div>
                    <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Philips NA110/00 1000 Series Air Fryer - 3.2L</p>
                  </a>
                  <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                    <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 5,500</span>
                    <div className="min-h-8" />
                  </div>
                </article>
                <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
                  <a className={"mb-3 \x6dd:\x6db-2"} href="/product/oraimo-oaf-521a-nutrifry-s1-ultra-air-fryer">
                    <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                      <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Oraimo OAF-521A NutriFry S1 Ultra Air Fryer 6L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/d9dd24059edbf61c.webp 3840w" src="/site-assets/d9dd24059edbf61c.webp" />
                    </div>
                    <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Oraimo OAF-521A NutriFry S1 Ultra Air Fryer 6L</p>
                  </a>
                  <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                    <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 8,799</span>
                    <div className="min-h-8">
                      <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                        <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳10,360</span>
                        <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,561 OFF</p>
                      </div>
                    </div>
                  </div>
                </article>
                <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
                  <a className={"mb-3 \x6dd:\x6db-2"} href="/product/philips-na231-air-fryer">
                    <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                      <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Philips NA231 Air Fryer - 6.2L" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/041cd95dd21ac44f.webp 3840w" src="/site-assets/041cd95dd21ac44f.webp" />
                    </div>
                    <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Philips NA231 Air Fryer - 6.2L</p>
                  </a>
                  <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                    <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 11,700</span>
                    <div className="min-h-8" />
                  </div>
                </article>
                <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
                  <a className={"mb-3 \x6dd:\x6db-2"} href="/product/delonghi-fh2101-1w-idealfry-air-fryer">
                    <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                      <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="De'Longhi FH2101-1.W IdealFry Hot Air Fryer - 1.25 KG" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="" />
                    </div>
                    <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>De'Longhi FH2101-1.W IdealFry Hot Air Fryer - 1.25 KG</p>
                  </a>
                  <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                    <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 17,500</span>
                    <div className="min-h-8">
                      <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                        <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳22,500</span>
                        <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 5,000 OFF</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <ImportedSectionFeaturedProducts />
        <ImportedSectionBangladeshSTrustedTech />
      </main>
      <ImportedFooter />
      {showPromo && (
        <div
          className={"\x62g-black/\x340 \x62ackdrop-blur-sm fixed inset-0 z-[100] grid place-items-center overflow-y-auto cursor-pointer"}
          style={{ opacity: "1" }}
          onClick={() => setShowPromo(false)}
          data-testid="promo-modal-backdrop"
        >
          <div
            className={"w-full overflow-hidden cursor-default bg-transparent \x72ounded p-0 max-w-[98%] \x6dd:\x6dax-w-3xl relative \x73hadow-none"}
            style={{ opacity: "1", transform: "none" }}
            onClick={(e) => e.stopPropagation()}
            data-testid="promo-modal-content"
          >
            <button
              className={"p-1.5 \x62g-gray-600 text-white absolute left-auto right-0 top-0 z-10 \x72ounded cursor-pointer"}
              type="button"
              aria-label="Close promotion"
              onClick={() => setShowPromo(false)}
              data-testid="promo-modal-close-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <a className="block w-full h-full" href="/product/minister-split-inv-m18k410ge-fc-inverter-air-conditioner" target="_blank">
              <img style={{ color: "transparent" }} alt="popup-8789" loading="lazy" width="800" height="400" decoding="async" srcSet="/site-assets/b9508ba9273f46a5.webp 1x, /site-assets/3689f6f5e4971827.webp 2x" src="/site-assets/3689f6f5e4971827.webp" />
            </a>
          </div>
        </div>
      )}

    </>
  );
}

function ImportedSection() {
  return (
    <section className={"w-full \x62g-gray-100 \x73hadow-sm rounded-xl \x70y-6 \x70x-8 \x62order \x62order-gray-300 \x6cg:\x66lex justify-between items-center gap-3 mt-6 hidden"}>
      <div className={"flex items-center gap-3 flex-1 [&]:justify-start"}>
        <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1_6192_8110" maskUnits="userSpaceOnUse" x="-0.0400391" y="-0.634766" width="34" height="36" fill="black">
            <rect fill="white" x="-0.0400391" y="-0.634766" width="34" height="36" />
            <path d="M29.177 0.365234H10.2866C8.15673 0.365234 6.42395 2.09802 6.42395 4.22785V21.9875C3.31909 22.5618 0.959961 25.2894 0.959961 28.558C0.959961 32.2426 3.95759 35.2402 7.64218 35.2402C9.97761 35.2402 12.0367 34.0356 13.2317 32.2154H29.1769C31.3067 32.2154 33.0395 30.4826 33.0395 28.3528V4.22785C33.0395 2.09802 31.3068 0.365234 29.177 0.365234ZM7.64225 34.1152C4.57796 34.1152 2.08503 31.6223 2.08503 28.558C2.08503 25.4937 4.57796 23.0008 7.64225 23.0008C10.7065 23.0008 13.1995 25.4937 13.1995 28.558C13.1995 31.6223 10.7065 34.1152 7.64225 34.1152ZM13.2804 24.9751H14.9192C15.0256 24.9751 15.1153 25.0649 15.1153 25.1713V26.1575C15.1153 26.2639 15.0256 26.3536 14.9192 26.3536H13.9505C13.7809 25.8699 13.556 25.4073 13.2804 24.9751ZM31.9145 28.3528C31.9145 29.8624 30.6865 31.0905 29.1769 31.0905H13.8256C14.1558 30.287 14.3253 29.4267 14.3245 28.558C14.3245 28.1906 14.2942 27.8301 14.2369 27.4786H14.9191C15.6476 27.4786 16.2403 26.886 16.2403 26.1575V25.1713C16.2403 24.4428 15.6476 23.8501 14.9191 23.8501H12.3796C11.1685 22.6314 9.49203 21.8758 7.64225 21.8758C7.6111 21.8758 7.58009 21.8766 7.54902 21.877V4.22785C7.54902 2.71831 8.77709 1.49023 10.2866 1.49023H29.177C30.6865 1.49023 31.9146 2.71831 31.9146 4.22785V28.3528H31.9145ZM28.077 5.10198H11.3867C10.6582 5.10198 10.0655 5.69471 10.0655 6.42315V9.40088C10.0655 10.1293 10.6582 10.722 11.3867 10.722H28.077C28.8054 10.722 29.3981 10.1293 29.3981 9.40088V6.42315C29.3981 5.69471 28.8054 5.10198 28.077 5.10198ZM28.2731 9.40088C28.2731 9.5072 28.1833 9.59698 28.077 9.59698H11.3867C11.2803 9.59698 11.1905 9.5072 11.1905 9.40088V6.42315C11.1905 6.31677 11.2803 6.22698 11.3867 6.22698H28.077C28.1833 6.22698 28.2731 6.31677 28.2731 6.42315V9.40088ZM14.9191 13.2101H12.0837C11.3552 13.2101 10.7625 13.8028 10.7625 14.5312V15.5174C10.7625 16.2459 11.3552 16.8386 12.0837 16.8386H14.9191C15.6475 16.8386 16.2403 16.2459 16.2403 15.5174V14.5312C16.2403 13.8027 15.6476 13.2101 14.9191 13.2101ZM15.1153 15.5174C15.1153 15.6238 15.0255 15.7136 14.9191 15.7136H12.0837C11.9773 15.7136 11.8875 15.6238 11.8875 15.5174V14.5312C11.8875 14.4249 11.9773 14.3351 12.0837 14.3351H14.9191C15.0255 14.3351 15.1153 14.4249 15.1153 14.5312V15.5174ZM21.1496 13.2101H18.3141C17.5856 13.2101 16.993 13.8028 16.993 14.5312V15.5174C16.993 16.2459 17.5856 16.8386 18.3141 16.8386H21.1496C21.878 16.8386 22.4707 16.2459 22.4707 15.5174V14.5312C22.4707 13.8027 21.878 13.2101 21.1496 13.2101ZM21.3457 15.5174C21.3457 15.6238 21.2559 15.7136 21.1496 15.7136H18.3141C18.2078 15.7136 18.118 15.6238 18.118 15.5174V14.5312C18.118 14.4249 18.2078 14.3351 18.3141 14.3351H21.1496C21.2559 14.3351 21.3457 14.4249 21.3457 14.5312V15.5174ZM27.38 13.2101H24.5445C23.816 13.2101 23.2234 13.8028 23.2234 14.5312V15.5174C23.2234 16.2459 23.816 16.8386 24.5445 16.8386H27.38C28.1084 16.8386 28.7011 16.2459 28.7011 15.5174V14.5312C28.7011 13.8027 28.1084 13.2101 27.38 13.2101ZM27.5761 15.5174C27.5761 15.6238 27.4863 15.7136 27.38 15.7136H24.5445C24.4381 15.7136 24.3484 15.6238 24.3484 15.5174V14.5312C24.3484 14.4249 24.4381 14.3351 24.5445 14.3351H27.38C27.4863 14.3351 27.5761 14.4249 27.5761 14.5312V15.5174ZM14.9191 18.5301H12.0837C11.3552 18.5301 10.7625 19.1228 10.7625 19.8512V20.8375C10.7625 21.5659 11.3552 22.1586 12.0837 22.1586H14.9191C15.6475 22.1586 16.2403 21.5659 16.2403 20.8375V19.8512C16.2403 19.1227 15.6476 18.5301 14.9191 18.5301ZM15.1153 20.8375C15.1153 20.9438 15.0255 21.0336 14.9191 21.0336H12.0837C11.9773 21.0336 11.8875 20.9438 11.8875 20.8375V19.8512C11.8875 19.7449 11.9773 19.6551 12.0837 19.6551H14.9191C15.0255 19.6551 15.1153 19.7449 15.1153 19.8512V20.8375ZM21.1496 18.5301H18.3141C17.5856 18.5301 16.993 19.1228 16.993 19.8512V20.8375C16.993 21.5659 17.5856 22.1586 18.3141 22.1586H21.1496C21.878 22.1586 22.4707 21.5659 22.4707 20.8375V19.8512C22.4707 19.1227 21.878 18.5301 21.1496 18.5301ZM21.3457 20.8375C21.3457 20.9438 21.2559 21.0336 21.1496 21.0336H18.3141C18.2078 21.0336 18.118 20.9438 18.118 20.8375V19.8512C18.118 19.7449 18.2078 19.6551 18.3141 19.6551H21.1496C21.2559 19.6551 21.3457 19.7449 21.3457 19.8512V20.8375ZM27.38 18.5301H24.5445C23.816 18.5301 23.2234 19.1228 23.2234 19.8512V20.8375C23.2234 21.5659 23.816 22.1586 24.5445 22.1586H27.38C28.1084 22.1586 28.7011 21.5659 28.7011 20.8375V19.8512C28.7011 19.1227 28.1084 18.5301 27.38 18.5301ZM27.5761 20.8375C27.5761 20.9438 27.4863 21.0336 27.38 21.0336H24.5445C24.4381 21.0336 24.3484 20.9438 24.3484 20.8375V19.8512C24.3484 19.7449 24.4381 19.6551 24.5445 19.6551H27.38C27.4863 19.6551 27.5761 19.7449 27.5761 19.8512V20.8375ZM21.1496 23.8501H18.3141C17.5856 23.8501 16.993 24.4428 16.993 25.1713V26.1575C16.993 26.886 17.5856 27.4786 18.3141 27.4786H21.1496C21.878 27.4786 22.4707 26.886 22.4707 26.1575V25.1713C22.4707 24.4428 21.878 23.8501 21.1496 23.8501ZM21.3457 26.1575C21.3457 26.2639 21.2559 26.3536 21.1496 26.3536H18.3141C18.2078 26.3536 18.118 26.2639 18.118 26.1575V25.1713C18.118 25.0649 18.2078 24.9751 18.3141 24.9751H21.1496C21.2559 24.9751 21.3457 25.0649 21.3457 25.1713V26.1575ZM27.38 23.8501H24.5445C23.816 23.8501 23.2234 24.4428 23.2234 25.1713V26.1575C23.2234 26.886 23.816 27.4786 24.5445 27.4786H27.38C28.1084 27.4786 28.7011 26.886 28.7011 26.1575V25.1713C28.7011 24.4428 28.1084 23.8501 27.38 23.8501ZM27.5761 26.1575C27.5761 26.2639 27.4863 26.3536 27.38 26.3536H24.5445C24.4381 26.3536 24.3484 26.2639 24.3484 26.1575V25.1713C24.3484 25.0649 24.4381 24.9751 24.5445 24.9751H27.38C27.4863 24.9751 27.5761 25.0649 27.5761 25.1713V26.1575ZM7.40881 26.1889C7.40881 25.2269 6.62616 24.4443 5.66422 24.4443C4.7022 24.4443 3.91963 25.227 3.91963 26.1889C3.91963 27.1509 4.70227 27.9335 5.66422 27.9335C6.62616 27.9334 7.40881 27.1508 7.40881 26.1889ZM5.04463 26.1889C5.04463 25.8473 5.32257 25.5693 5.66422 25.5693C6.0058 25.5693 6.28381 25.8473 6.28381 26.1889C6.28381 26.5305 6.00587 26.8085 5.66422 26.8085C5.32257 26.8084 5.04463 26.5305 5.04463 26.1889ZM9.62028 29.1826C8.65827 29.1826 7.87569 29.9653 7.87569 30.9272C7.87569 31.8891 8.65834 32.6718 9.62028 32.6718C10.5822 32.6718 11.3649 31.8891 11.3649 30.9272C11.3648 29.9653 10.5822 29.1826 9.62028 29.1826ZM9.62028 31.5468C9.27863 31.5468 9.00069 31.2688 9.00069 30.9272C9.00069 30.5855 9.27863 30.3076 9.62028 30.3076C9.96186 30.3076 10.2399 30.5855 10.2399 30.9272C10.2398 31.2688 9.96186 31.5468 9.62028 31.5468ZM10.2486 25.8948L5.94941 31.8777C5.89731 31.9503 5.82864 32.0094 5.74911 32.0502C5.66957 32.0909 5.58146 32.1121 5.49209 32.112C5.37444 32.1121 5.25977 32.0751 5.16437 32.0062C5.04323 31.9192 4.96163 31.7876 4.93751 31.6404C4.9134 31.4932 4.94874 31.3424 5.03577 31.2212L9.33495 25.2384C9.422 25.1172 9.55362 25.0356 9.70084 25.0115C9.84806 24.9873 9.99884 25.0227 10.12 25.1097C10.2411 25.1968 10.3228 25.3284 10.3469 25.4756C10.371 25.6229 10.3356 25.7736 10.2486 25.8948Z" />
          </mask>
          <path d="M29.177 0.365234H10.2866C8.15673 0.365234 6.42395 2.09802 6.42395 4.22785V21.9875C3.31909 22.5618 0.959961 25.2894 0.959961 28.558C0.959961 32.2426 3.95759 35.2402 7.64218 35.2402C9.97761 35.2402 12.0367 34.0356 13.2317 32.2154H29.1769C31.3067 32.2154 33.0395 30.4826 33.0395 28.3528V4.22785C33.0395 2.09802 31.3068 0.365234 29.177 0.365234ZM7.64225 34.1152C4.57796 34.1152 2.08503 31.6223 2.08503 28.558C2.08503 25.4937 4.57796 23.0008 7.64225 23.0008C10.7065 23.0008 13.1995 25.4937 13.1995 28.558C13.1995 31.6223 10.7065 34.1152 7.64225 34.1152ZM13.2804 24.9751H14.9192C15.0256 24.9751 15.1153 25.0649 15.1153 25.1713V26.1575C15.1153 26.2639 15.0256 26.3536 14.9192 26.3536H13.9505C13.7809 25.8699 13.556 25.4073 13.2804 24.9751ZM31.9145 28.3528C31.9145 29.8624 30.6865 31.0905 29.1769 31.0905H13.8256C14.1558 30.287 14.3253 29.4267 14.3245 28.558C14.3245 28.1906 14.2942 27.8301 14.2369 27.4786H14.9191C15.6476 27.4786 16.2403 26.886 16.2403 26.1575V25.1713C16.2403 24.4428 15.6476 23.8501 14.9191 23.8501H12.3796C11.1685 22.6314 9.49203 21.8758 7.64225 21.8758C7.6111 21.8758 7.58009 21.8766 7.54902 21.877V4.22785C7.54902 2.71831 8.77709 1.49023 10.2866 1.49023H29.177C30.6865 1.49023 31.9146 2.71831 31.9146 4.22785V28.3528H31.9145ZM28.077 5.10198H11.3867C10.6582 5.10198 10.0655 5.69471 10.0655 6.42315V9.40088C10.0655 10.1293 10.6582 10.722 11.3867 10.722H28.077C28.8054 10.722 29.3981 10.1293 29.3981 9.40088V6.42315C29.3981 5.69471 28.8054 5.10198 28.077 5.10198ZM28.2731 9.40088C28.2731 9.5072 28.1833 9.59698 28.077 9.59698H11.3867C11.2803 9.59698 11.1905 9.5072 11.1905 9.40088V6.42315C11.1905 6.31677 11.2803 6.22698 11.3867 6.22698H28.077C28.1833 6.22698 28.2731 6.31677 28.2731 6.42315V9.40088ZM14.9191 13.2101H12.0837C11.3552 13.2101 10.7625 13.8028 10.7625 14.5312V15.5174C10.7625 16.2459 11.3552 16.8386 12.0837 16.8386H14.9191C15.6475 16.8386 16.2403 16.2459 16.2403 15.5174V14.5312C16.2403 13.8027 15.6476 13.2101 14.9191 13.2101ZM15.1153 15.5174C15.1153 15.6238 15.0255 15.7136 14.9191 15.7136H12.0837C11.9773 15.7136 11.8875 15.6238 11.8875 15.5174V14.5312C11.8875 14.4249 11.9773 14.3351 12.0837 14.3351H14.9191C15.0255 14.3351 15.1153 14.4249 15.1153 14.5312V15.5174ZM21.1496 13.2101H18.3141C17.5856 13.2101 16.993 13.8028 16.993 14.5312V15.5174C16.993 16.2459 17.5856 16.8386 18.3141 16.8386H21.1496C21.878 16.8386 22.4707 16.2459 22.4707 15.5174V14.5312C22.4707 13.8027 21.878 13.2101 21.1496 13.2101ZM21.3457 15.5174C21.3457 15.6238 21.2559 15.7136 21.1496 15.7136H18.3141C18.2078 15.7136 18.118 15.6238 18.118 15.5174V14.5312C18.118 14.4249 18.2078 14.3351 18.3141 14.3351H21.1496C21.2559 14.3351 21.3457 14.4249 21.3457 14.5312V15.5174ZM27.38 13.2101H24.5445C23.816 13.2101 23.2234 13.8028 23.2234 14.5312V15.5174C23.2234 16.2459 23.816 16.8386 24.5445 16.8386H27.38C28.1084 16.8386 28.7011 16.2459 28.7011 15.5174V14.5312C28.7011 13.8027 28.1084 13.2101 27.38 13.2101ZM27.5761 15.5174C27.5761 15.6238 27.4863 15.7136 27.38 15.7136H24.5445C24.4381 15.7136 24.3484 15.6238 24.3484 15.5174V14.5312C24.3484 14.4249 24.4381 14.3351 24.5445 14.3351H27.38C27.4863 14.3351 27.5761 14.4249 27.5761 14.5312V15.5174ZM14.9191 18.5301H12.0837C11.3552 18.5301 10.7625 19.1228 10.7625 19.8512V20.8375C10.7625 21.5659 11.3552 22.1586 12.0837 22.1586H14.9191C15.6475 22.1586 16.2403 21.5659 16.2403 20.8375V19.8512C16.2403 19.1227 15.6476 18.5301 14.9191 18.5301ZM15.1153 20.8375C15.1153 20.9438 15.0255 21.0336 14.9191 21.0336H12.0837C11.9773 21.0336 11.8875 20.9438 11.8875 20.8375V19.8512C11.8875 19.7449 11.9773 19.6551 12.0837 19.6551H14.9191C15.0255 19.6551 15.1153 19.7449 15.1153 19.8512V20.8375ZM21.1496 18.5301H18.3141C17.5856 18.5301 16.993 19.1228 16.993 19.8512V20.8375C16.993 21.5659 17.5856 22.1586 18.3141 22.1586H21.1496C21.878 22.1586 22.4707 21.5659 22.4707 20.8375V19.8512C22.4707 19.1227 21.878 18.5301 21.1496 18.5301ZM21.3457 20.8375C21.3457 20.9438 21.2559 21.0336 21.1496 21.0336H18.3141C18.2078 21.0336 18.118 20.9438 18.118 20.8375V19.8512C18.118 19.7449 18.2078 19.6551 18.3141 19.6551H21.1496C21.2559 19.6551 21.3457 19.7449 21.3457 19.8512V20.8375ZM27.38 18.5301H24.5445C23.816 18.5301 23.2234 19.1228 23.2234 19.8512V20.8375C23.2234 21.5659 23.816 22.1586 24.5445 22.1586H27.38C28.1084 22.1586 28.7011 21.5659 28.7011 20.8375V19.8512C28.7011 19.1227 28.1084 18.5301 27.38 18.5301ZM27.5761 20.8375C27.5761 20.9438 27.4863 21.0336 27.38 21.0336H24.5445C24.4381 21.0336 24.3484 20.9438 24.3484 20.8375V19.8512C24.3484 19.7449 24.4381 19.6551 24.5445 19.6551H27.38C27.4863 19.6551 27.5761 19.7449 27.5761 19.8512V20.8375ZM21.1496 23.8501H18.3141C17.5856 23.8501 16.993 24.4428 16.993 25.1713V26.1575C16.993 26.886 17.5856 27.4786 18.3141 27.4786H21.1496C21.878 27.4786 22.4707 26.886 22.4707 26.1575V25.1713C22.4707 24.4428 21.878 23.8501 21.1496 23.8501ZM21.3457 26.1575C21.3457 26.2639 21.2559 26.3536 21.1496 26.3536H18.3141C18.2078 26.3536 18.118 26.2639 18.118 26.1575V25.1713C18.118 25.0649 18.2078 24.9751 18.3141 24.9751H21.1496C21.2559 24.9751 21.3457 25.0649 21.3457 25.1713V26.1575ZM27.38 23.8501H24.5445C23.816 23.8501 23.2234 24.4428 23.2234 25.1713V26.1575C23.2234 26.886 23.816 27.4786 24.5445 27.4786H27.38C28.1084 27.4786 28.7011 26.886 28.7011 26.1575V25.1713C28.7011 24.4428 28.1084 23.8501 27.38 23.8501ZM27.5761 26.1575C27.5761 26.2639 27.4863 26.3536 27.38 26.3536H24.5445C24.4381 26.3536 24.3484 26.2639 24.3484 26.1575V25.1713C24.3484 25.0649 24.4381 24.9751 24.5445 24.9751H27.38C27.4863 24.9751 27.5761 25.0649 27.5761 25.1713V26.1575ZM7.40881 26.1889C7.40881 25.2269 6.62616 24.4443 5.66422 24.4443C4.7022 24.4443 3.91963 25.227 3.91963 26.1889C3.91963 27.1509 4.70227 27.9335 5.66422 27.9335C6.62616 27.9334 7.40881 27.1508 7.40881 26.1889ZM5.04463 26.1889C5.04463 25.8473 5.32257 25.5693 5.66422 25.5693C6.0058 25.5693 6.28381 25.8473 6.28381 26.1889C6.28381 26.5305 6.00587 26.8085 5.66422 26.8085C5.32257 26.8084 5.04463 26.5305 5.04463 26.1889ZM9.62028 29.1826C8.65827 29.1826 7.87569 29.9653 7.87569 30.9272C7.87569 31.8891 8.65834 32.6718 9.62028 32.6718C10.5822 32.6718 11.3649 31.8891 11.3649 30.9272C11.3648 29.9653 10.5822 29.1826 9.62028 29.1826ZM9.62028 31.5468C9.27863 31.5468 9.00069 31.2688 9.00069 30.9272C9.00069 30.5855 9.27863 30.3076 9.62028 30.3076C9.96186 30.3076 10.2399 30.5855 10.2399 30.9272C10.2398 31.2688 9.96186 31.5468 9.62028 31.5468ZM10.2486 25.8948L5.94941 31.8777C5.89731 31.9503 5.82864 32.0094 5.74911 32.0502C5.66957 32.0909 5.58146 32.1121 5.49209 32.112C5.37444 32.1121 5.25977 32.0751 5.16437 32.0062C5.04323 31.9192 4.96163 31.7876 4.93751 31.6404C4.9134 31.4932 4.94874 31.3424 5.03577 31.2212L9.33495 25.2384C9.422 25.1172 9.55362 25.0356 9.70084 25.0115C9.84806 24.9873 9.99884 25.0227 10.12 25.1097C10.2411 25.1968 10.3228 25.3284 10.3469 25.4756C10.371 25.6229 10.3356 25.7736 10.2486 25.8948Z" fill="#9E77ED" />
          <path d="M29.177 0.365234H10.2866C8.15673 0.365234 6.42395 2.09802 6.42395 4.22785V21.9875C3.31909 22.5618 0.959961 25.2894 0.959961 28.558C0.959961 32.2426 3.95759 35.2402 7.64218 35.2402C9.97761 35.2402 12.0367 34.0356 13.2317 32.2154H29.1769C31.3067 32.2154 33.0395 30.4826 33.0395 28.3528V4.22785C33.0395 2.09802 31.3068 0.365234 29.177 0.365234ZM7.64225 34.1152C4.57796 34.1152 2.08503 31.6223 2.08503 28.558C2.08503 25.4937 4.57796 23.0008 7.64225 23.0008C10.7065 23.0008 13.1995 25.4937 13.1995 28.558C13.1995 31.6223 10.7065 34.1152 7.64225 34.1152ZM13.2804 24.9751H14.9192C15.0256 24.9751 15.1153 25.0649 15.1153 25.1713V26.1575C15.1153 26.2639 15.0256 26.3536 14.9192 26.3536H13.9505C13.7809 25.8699 13.556 25.4073 13.2804 24.9751ZM31.9145 28.3528C31.9145 29.8624 30.6865 31.0905 29.1769 31.0905H13.8256C14.1558 30.287 14.3253 29.4267 14.3245 28.558C14.3245 28.1906 14.2942 27.8301 14.2369 27.4786H14.9191C15.6476 27.4786 16.2403 26.886 16.2403 26.1575V25.1713C16.2403 24.4428 15.6476 23.8501 14.9191 23.8501H12.3796C11.1685 22.6314 9.49203 21.8758 7.64225 21.8758C7.6111 21.8758 7.58009 21.8766 7.54902 21.877V4.22785C7.54902 2.71831 8.77709 1.49023 10.2866 1.49023H29.177C30.6865 1.49023 31.9146 2.71831 31.9146 4.22785V28.3528H31.9145ZM28.077 5.10198H11.3867C10.6582 5.10198 10.0655 5.69471 10.0655 6.42315V9.40088C10.0655 10.1293 10.6582 10.722 11.3867 10.722H28.077C28.8054 10.722 29.3981 10.1293 29.3981 9.40088V6.42315C29.3981 5.69471 28.8054 5.10198 28.077 5.10198ZM28.2731 9.40088C28.2731 9.5072 28.1833 9.59698 28.077 9.59698H11.3867C11.2803 9.59698 11.1905 9.5072 11.1905 9.40088V6.42315C11.1905 6.31677 11.2803 6.22698 11.3867 6.22698H28.077C28.1833 6.22698 28.2731 6.31677 28.2731 6.42315V9.40088ZM14.9191 13.2101H12.0837C11.3552 13.2101 10.7625 13.8028 10.7625 14.5312V15.5174C10.7625 16.2459 11.3552 16.8386 12.0837 16.8386H14.9191C15.6475 16.8386 16.2403 16.2459 16.2403 15.5174V14.5312C16.2403 13.8027 15.6476 13.2101 14.9191 13.2101ZM15.1153 15.5174C15.1153 15.6238 15.0255 15.7136 14.9191 15.7136H12.0837C11.9773 15.7136 11.8875 15.6238 11.8875 15.5174V14.5312C11.8875 14.4249 11.9773 14.3351 12.0837 14.3351H14.9191C15.0255 14.3351 15.1153 14.4249 15.1153 14.5312V15.5174ZM21.1496 13.2101H18.3141C17.5856 13.2101 16.993 13.8028 16.993 14.5312V15.5174C16.993 16.2459 17.5856 16.8386 18.3141 16.8386H21.1496C21.878 16.8386 22.4707 16.2459 22.4707 15.5174V14.5312C22.4707 13.8027 21.878 13.2101 21.1496 13.2101ZM21.3457 15.5174C21.3457 15.6238 21.2559 15.7136 21.1496 15.7136H18.3141C18.2078 15.7136 18.118 15.6238 18.118 15.5174V14.5312C18.118 14.4249 18.2078 14.3351 18.3141 14.3351H21.1496C21.2559 14.3351 21.3457 14.4249 21.3457 14.5312V15.5174ZM27.38 13.2101H24.5445C23.816 13.2101 23.2234 13.8028 23.2234 14.5312V15.5174C23.2234 16.2459 23.816 16.8386 24.5445 16.8386H27.38C28.1084 16.8386 28.7011 16.2459 28.7011 15.5174V14.5312C28.7011 13.8027 28.1084 13.2101 27.38 13.2101ZM27.5761 15.5174C27.5761 15.6238 27.4863 15.7136 27.38 15.7136H24.5445C24.4381 15.7136 24.3484 15.6238 24.3484 15.5174V14.5312C24.3484 14.4249 24.4381 14.3351 24.5445 14.3351H27.38C27.4863 14.3351 27.5761 14.4249 27.5761 14.5312V15.5174ZM14.9191 18.5301H12.0837C11.3552 18.5301 10.7625 19.1228 10.7625 19.8512V20.8375C10.7625 21.5659 11.3552 22.1586 12.0837 22.1586H14.9191C15.6475 22.1586 16.2403 21.5659 16.2403 20.8375V19.8512C16.2403 19.1227 15.6476 18.5301 14.9191 18.5301ZM15.1153 20.8375C15.1153 20.9438 15.0255 21.0336 14.9191 21.0336H12.0837C11.9773 21.0336 11.8875 20.9438 11.8875 20.8375V19.8512C11.8875 19.7449 11.9773 19.6551 12.0837 19.6551H14.9191C15.0255 19.6551 15.1153 19.7449 15.1153 19.8512V20.8375ZM21.1496 18.5301H18.3141C17.5856 18.5301 16.993 19.1228 16.993 19.8512V20.8375C16.993 21.5659 17.5856 22.1586 18.3141 22.1586H21.1496C21.878 22.1586 22.4707 21.5659 22.4707 20.8375V19.8512C22.4707 19.1227 21.878 18.5301 21.1496 18.5301ZM21.3457 20.8375C21.3457 20.9438 21.2559 21.0336 21.1496 21.0336H18.3141C18.2078 21.0336 18.118 20.9438 18.118 20.8375V19.8512C18.118 19.7449 18.2078 19.6551 18.3141 19.6551H21.1496C21.2559 19.6551 21.3457 19.7449 21.3457 19.8512V20.8375ZM27.38 18.5301H24.5445C23.816 18.5301 23.2234 19.1228 23.2234 19.8512V20.8375C23.2234 21.5659 23.816 22.1586 24.5445 22.1586H27.38C28.1084 22.1586 28.7011 21.5659 28.7011 20.8375V19.8512C28.7011 19.1227 28.1084 18.5301 27.38 18.5301ZM27.5761 20.8375C27.5761 20.9438 27.4863 21.0336 27.38 21.0336H24.5445C24.4381 21.0336 24.3484 20.9438 24.3484 20.8375V19.8512C24.3484 19.7449 24.4381 19.6551 24.5445 19.6551H27.38C27.4863 19.6551 27.5761 19.7449 27.5761 19.8512V20.8375ZM21.1496 23.8501H18.3141C17.5856 23.8501 16.993 24.4428 16.993 25.1713V26.1575C16.993 26.886 17.5856 27.4786 18.3141 27.4786H21.1496C21.878 27.4786 22.4707 26.886 22.4707 26.1575V25.1713C22.4707 24.4428 21.878 23.8501 21.1496 23.8501ZM21.3457 26.1575C21.3457 26.2639 21.2559 26.3536 21.1496 26.3536H18.3141C18.2078 26.3536 18.118 26.2639 18.118 26.1575V25.1713C18.118 25.0649 18.2078 24.9751 18.3141 24.9751H21.1496C21.2559 24.9751 21.3457 25.0649 21.3457 25.1713V26.1575ZM27.38 23.8501H24.5445C23.816 23.8501 23.2234 24.4428 23.2234 25.1713V26.1575C23.2234 26.886 23.816 27.4786 24.5445 27.4786H27.38C28.1084 27.4786 28.7011 26.886 28.7011 26.1575V25.1713C28.7011 24.4428 28.1084 23.8501 27.38 23.8501ZM27.5761 26.1575C27.5761 26.2639 27.4863 26.3536 27.38 26.3536H24.5445C24.4381 26.3536 24.3484 26.2639 24.3484 26.1575V25.1713C24.3484 25.0649 24.4381 24.9751 24.5445 24.9751H27.38C27.4863 24.9751 27.5761 25.0649 27.5761 25.1713V26.1575ZM7.40881 26.1889C7.40881 25.2269 6.62616 24.4443 5.66422 24.4443C4.7022 24.4443 3.91963 25.227 3.91963 26.1889C3.91963 27.1509 4.70227 27.9335 5.66422 27.9335C6.62616 27.9334 7.40881 27.1508 7.40881 26.1889ZM5.04463 26.1889C5.04463 25.8473 5.32257 25.5693 5.66422 25.5693C6.0058 25.5693 6.28381 25.8473 6.28381 26.1889C6.28381 26.5305 6.00587 26.8085 5.66422 26.8085C5.32257 26.8084 5.04463 26.5305 5.04463 26.1889ZM9.62028 29.1826C8.65827 29.1826 7.87569 29.9653 7.87569 30.9272C7.87569 31.8891 8.65834 32.6718 9.62028 32.6718C10.5822 32.6718 11.3649 31.8891 11.3649 30.9272C11.3648 29.9653 10.5822 29.1826 9.62028 29.1826ZM9.62028 31.5468C9.27863 31.5468 9.00069 31.2688 9.00069 30.9272C9.00069 30.5855 9.27863 30.3076 9.62028 30.3076C9.96186 30.3076 10.2399 30.5855 10.2399 30.9272C10.2398 31.2688 9.96186 31.5468 9.62028 31.5468ZM10.2486 25.8948L5.94941 31.8777C5.89731 31.9503 5.82864 32.0094 5.74911 32.0502C5.66957 32.0909 5.58146 32.1121 5.49209 32.112C5.37444 32.1121 5.25977 32.0751 5.16437 32.0062C5.04323 31.9192 4.96163 31.7876 4.93751 31.6404C4.9134 31.4932 4.94874 31.3424 5.03577 31.2212L9.33495 25.2384C9.422 25.1172 9.55362 25.0356 9.70084 25.0115C9.84806 24.9873 9.99884 25.0227 10.12 25.1097C10.2411 25.1968 10.3228 25.3284 10.3469 25.4756C10.371 25.6229 10.3356 25.7736 10.2486 25.8948Z" stroke="#9E77ED" strokeWidth="0.2" mask="url(#path-1-outside-1_6192_8110)" />
        </svg>
        <span className={"\x74ext-sm \x66ont-medium text-gray-800"}>36 Months EMI</span>
      </div>
      <div className={"flex items-center gap-3 flex-1 [&]:justify-start"}>
        <svg width="36" height="33" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36 32" xmlSpace="preserve" {...({ version: "1.1" } as any)}>
          <path fill="#DFA92B" d="M33.3,21.2c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.3L31.5,16c0-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.1  h-4.5c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v4.6c0,0.1,0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h6.4c0.1,0,0.2,0,0.3-0.1  C33.2,21.4,33.3,21.3,33.3,21.2z M27,20.3v-3.4h3.5l1.5,3.4H27L27,20.3z M13.8,28.9c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8  s0.4-0.8,0.8-0.8C13.4,28.2,13.8,28.5,13.8,28.9z M30.6,28.9c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.1-0.3,0.2  c-0.1,0-0.2,0.1-0.3,0.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8S30.6,28.5,30.6,28.9z M2.7,17.6c-0.1,0-0.3-0.1-0.4-0.2  c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.2,0.4-0.2h6.1c0.1,0,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.2,0.2,0.4  s-0.1,0.3-0.2,0.4c-0.1,0.1-0.2,0.2-0.4,0.2H2.7z M35.3,20.6L33,15.2c-0.3-0.7-1-1.2-1.9-1.2h-5.9v-2c0-1-0.8-1.7-1.7-1.7h-0.4  c0.1-0.6,0.2-1.3,0.2-1.9c0-4.5-3.7-8.2-8.2-8.2S6.9,3.9,6.9,8.4C6.9,9,7,9.6,7.1,10.3H3.7c-0.1,0-0.3,0.1-0.4,0.2s-0.2,0.2-0.2,0.4  c0,0.1,0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h3.8c0.3,0.7,0.7,1.4,1.1,2H1.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4  c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2h8.6c1.4,1.3,3.3,2,5.4,2c3.4,0,6.4-2.1,7.6-5.2h0.8c0.3,0,0.6,0.3,0.6,0.6v16.4  h-8.3c-0.3-1.3-1.4-2.3-2.8-2.3s-2.6,1-2.8,2.3h-3c-0.3,0-0.6-0.3-0.6-0.6v-7.6c0-0.1-0.1-0.3-0.2-0.4S6.2,19.7,6,19.7H1.1  c-0.1,0-0.3,0.1-0.4,0.2s-0.2,0.2-0.2,0.4s0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h4.3V28c0,1,0.8,1.7,1.7,1.7h3c0.3,1.3,1.4,2.3,2.8,2.3  s2.6-1,2.8-2.3h11.1c0.3,1.3,1.4,2.3,2.8,2.3s2.6-1,2.8-2.3H34c0.8,0,1.4-0.6,1.4-1.4v-6.7C35.4,21.1,35.4,20.9,35.3,20.6z   M15.1,15.4c-3.9,0-7.1-3.2-7.1-7.1s3.2-7.1,7.1-7.1s7.1,3.2,7.1,7.1S19,15.4,15.1,15.4z M13,30.7c-1,0-1.8-0.8-1.8-1.8  s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8S14,30.7,13,30.7z M29.8,30.7c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8  S30.7,30.7,29.8,30.7z M34,28.4h-1.4c-0.3-1.3-1.4-2.3-2.8-2.3s-2.6,1-2.8,2.3h-1.7V15.1h5.9c0.4,0,0.7,0.2,0.8,0.5l2.3,5.4  c0,0.1,0.1,0.2,0.1,0.3v2.5h-0.9c-0.5,0-1,0.4-1,1v1.7c0,0.5,0.4,1,1,1h0.9v0.6c0,0.1,0,0.2-0.1,0.2C34.2,28.4,34.1,28.4,34,28.4z   M34.3,24.9v1.4h-0.8v-1.4H34.3z M15.1,2.3C11.8,2.3,9,5,9,8.3c0,3.4,2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1C21.2,5,18.5,2.3,15.1,2.3z   M15.1,13.3c-2.7,0-5-2.2-5-5c0-2.7,2.2-5,5-5c2.7,0,5,2.2,5,5S17.8,13.3,15.1,13.3z M14.5,7.2c0-0.5,0-1,0-1.5  c0-0.3,0.3-0.7,0.7-0.6c0.2,0.1,0.3,0.2,0.3,0.6c0,0.9,0,1.8,0,2.6c0,0.1,0,0.2,0.1,0.2c0.7,0.5,1.3,0.9,1.8,1.4  c0.2,0.1,0.2,0.3,0.2,0.6c-0.1,0.3-0.5,0.5-0.8,0.2c-0.3-0.2-0.7-0.5-1-0.7c-0.3-0.2-0.7-0.6-1-0.8c-0.2-0.1-0.2-0.3-0.2-0.6  C14.5,8.2,14.5,7.8,14.5,7.2z" />
          <path fill="none" stroke="#DFA92B" strokeWidth="0.2" d="M33.3,21.2c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.3L31.5,16c0-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.1  h-4.5c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4v4.6c0,0.1,0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h6.4c0.1,0,0.2,0,0.3-0.1  C33.2,21.4,33.3,21.3,33.3,21.2z M27,20.3v-3.4h3.5l1.5,3.4H27L27,20.3z M13.8,28.9c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8  s0.4-0.8,0.8-0.8C13.4,28.2,13.8,28.5,13.8,28.9z M30.6,28.9c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.1-0.3,0.2  c-0.1,0-0.2,0.1-0.3,0.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8S30.6,28.5,30.6,28.9z M2.7,17.6c-0.1,0-0.3-0.1-0.4-0.2  c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.2,0.4-0.2h6.1c0.1,0,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.2,0.2,0.4  s-0.1,0.3-0.2,0.4c-0.1,0.1-0.2,0.2-0.4,0.2H2.7z M35.3,20.6L33,15.2c-0.3-0.7-1-1.2-1.9-1.2h-5.9v-2c0-1-0.8-1.7-1.7-1.7h-0.4  c0.1-0.6,0.2-1.3,0.2-1.9c0-4.5-3.7-8.2-8.2-8.2S6.9,3.9,6.9,8.4C6.9,9,7,9.6,7.1,10.3H3.7c-0.1,0-0.3,0.1-0.4,0.2s-0.2,0.2-0.2,0.4  c0,0.1,0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h3.8c0.3,0.7,0.7,1.4,1.1,2H1.1c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.2-0.2,0.4  c0,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.4,0.2h8.6c1.4,1.3,3.3,2,5.4,2c3.4,0,6.4-2.1,7.6-5.2h0.8c0.3,0,0.6,0.3,0.6,0.6v16.4  h-8.3c-0.3-1.3-1.4-2.3-2.8-2.3s-2.6,1-2.8,2.3h-3c-0.3,0-0.6-0.3-0.6-0.6v-7.6c0-0.1-0.1-0.3-0.2-0.4S6.2,19.7,6,19.7H1.1  c-0.1,0-0.3,0.1-0.4,0.2s-0.2,0.2-0.2,0.4s0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h4.3V28c0,1,0.8,1.7,1.7,1.7h3c0.3,1.3,1.4,2.3,2.8,2.3  s2.6-1,2.8-2.3h11.1c0.3,1.3,1.4,2.3,2.8,2.3s2.6-1,2.8-2.3H34c0.8,0,1.4-0.6,1.4-1.4v-6.7C35.4,21.1,35.4,20.9,35.3,20.6z   M15.1,15.4c-3.9,0-7.1-3.2-7.1-7.1s3.2-7.1,7.1-7.1s7.1,3.2,7.1,7.1S19,15.4,15.1,15.4z M13,30.7c-1,0-1.8-0.8-1.8-1.8  s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8S14,30.7,13,30.7z M29.8,30.7c-1,0-1.8-0.8-1.8-1.8s0.8-1.8,1.8-1.8s1.8,0.8,1.8,1.8  S30.7,30.7,29.8,30.7z M34,28.4h-1.4c-0.3-1.3-1.4-2.3-2.8-2.3s-2.6,1-2.8,2.3h-1.7V15.1h5.9c0.4,0,0.7,0.2,0.8,0.5l2.3,5.4  c0,0.1,0.1,0.2,0.1,0.3v2.5h-0.9c-0.5,0-1,0.4-1,1v1.7c0,0.5,0.4,1,1,1h0.9v0.6c0,0.1,0,0.2-0.1,0.2C34.2,28.4,34.1,28.4,34,28.4z   M34.3,24.9v1.4h-0.8v-1.4H34.3z M15.1,2.3C11.8,2.3,9,5,9,8.3c0,3.4,2.7,6.1,6.1,6.1s6.1-2.7,6.1-6.1C21.2,5,18.5,2.3,15.1,2.3z   M15.1,13.3c-2.7,0-5-2.2-5-5c0-2.7,2.2-5,5-5c2.7,0,5,2.2,5,5S17.8,13.3,15.1,13.3z" />
        </svg>
        <span className={"\x74ext-sm \x66ont-medium text-gray-800"}>Fastest Home Delivery</span>
      </div>
      <div className={"flex items-center gap-3 flex-1 [&]:justify-start"}>
        <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33.0762 23.1436C33.1855 23.1522 33.2912 23.1907 33.3818 23.2549L33.4658 23.3262C33.5426 23.4047 33.597 23.5032 33.623 23.6113L33.6396 23.7207C33.6437 23.7937 33.634 23.8668 33.6123 23.9365L33.5703 24.0391C31.2323 28.4977 27.3916 31.9493 22.7207 33.8027L22.2666 33.9766C19.9096 34.8497 17.4642 35.291 14.9834 35.291C14.8026 35.291 14.6215 35.2879 14.4404 35.2832L13.8965 35.2627C11.3746 35.1324 8.927 34.5555 6.61035 33.5488L6.30078 34.541C6.27827 34.6131 6.24298 34.6804 6.19629 34.7393L6.14648 34.7949C6.09261 34.848 6.02893 34.89 5.95996 34.9199L5.88965 34.9463C5.817 34.9677 5.74107 34.9749 5.66602 34.9688L5.5918 34.958C5.5179 34.9426 5.44785 34.9137 5.38477 34.873L5.32422 34.8291C4.25329 33.9353 2.98052 32.4733 1.99219 30.8057C1.0043 29.1387 0.296077 27.2593 0.363281 25.5312L0.371094 25.4541C0.383846 25.3776 0.411682 25.304 0.452148 25.2373L0.496094 25.1738C0.544329 25.1131 0.604164 25.0622 0.671875 25.0234L0.741211 24.9893C0.812769 24.9596 0.88985 24.9434 0.967773 24.9424L1.04492 24.9463C1.12184 24.955 1.197 24.9788 1.26562 25.0156L1.5498 25.1572C2.93017 25.8026 5.06288 26.1897 7.52344 26.2383L8.05566 26.2432L8.12793 26.2471C8.19895 26.2555 8.26789 26.2771 8.33203 26.3096C8.41772 26.3529 8.49192 26.4158 8.54883 26.4932L8.58789 26.5527C8.62342 26.6151 8.64822 26.6837 8.66016 26.7549L8.66797 26.8262C8.67028 26.8739 8.667 26.9218 8.6582 26.9688L8.64062 27.0381L8.19727 28.458C12.8995 30.6294 18.9768 30.792 24.1963 28.8584L24.7979 28.626C27.7861 27.4214 30.4664 25.6018 32.5801 23.3369L32.6621 23.2627C32.7502 23.1972 32.8553 23.1568 32.9658 23.1455L33.0762 23.1436ZM1.63965 26.5225C1.8086 27.7378 2.35414 29.0223 3.05957 30.2041C3.76311 31.3827 4.62344 32.4556 5.41895 33.252L5.64648 32.5234L5.69922 32.4033C5.72073 32.3654 5.74616 32.3295 5.77539 32.2969L5.87207 32.21C5.90749 32.1843 5.94601 32.1622 5.98633 32.1445L6.11035 32.1055C6.15318 32.0968 6.19727 32.0921 6.24121 32.0928C6.32876 32.0941 6.41503 32.1148 6.49414 32.1523L6.95117 32.3623C11.6916 34.468 16.9591 34.6365 21.8408 32.8281L22.4482 32.5918C25.3381 31.4124 27.881 29.5783 29.8994 27.2539C28.4982 28.2273 26.9779 29.0581 25.3701 29.7158L24.6221 30.0078C22.0134 30.9741 19.1585 31.4654 16.3311 31.4395L15.7666 31.4277C12.8794 31.3304 10.0895 30.6866 7.66211 29.5605L7.18164 29.3291C7.0841 29.2803 7.00136 29.2064 6.94238 29.1162L6.8916 29.0205C6.83481 28.8869 6.82693 28.7373 6.87012 28.5986L7.22656 27.4551C5.64841 27.4079 3.44451 27.2049 1.63965 26.5225ZM17 0.31543C17.1091 0.31551 17.2165 0.34501 17.3105 0.400391L28.4658 6.96484L28.5322 7.00977C28.6794 7.12485 28.7675 7.30241 28.7676 7.49219V20.6221L28.7617 20.7012C28.7549 20.7538 28.7418 20.8054 28.7217 20.8545L28.6865 20.9258C28.6468 20.9953 28.5941 21.0566 28.5312 21.1055L28.4658 21.1494L17.3105 27.7148C17.2148 27.7712 17.1073 27.7988 17 27.7988C16.9195 27.7988 16.8384 27.7837 16.7627 27.752L16.6885 27.7148L5.5332 21.1494C5.4644 21.1088 5.40442 21.0554 5.35645 20.9922L5.3125 20.9258C5.25967 20.8333 5.23143 20.7286 5.23145 20.6221V7.49219L5.2373 7.41309C5.24763 7.33431 5.27282 7.25789 5.3125 7.18848C5.36536 7.09603 5.44149 7.01894 5.5332 6.96484L16.6885 0.400391L16.7617 0.363281C16.8367 0.33165 16.918 0.31543 17 0.31543ZM6.45703 20.2705L16.3867 26.1152V14.4062L6.45703 8.56348V20.2705ZM24.8076 10.1719V14.9932L24.8018 15.0723C24.7949 15.1249 24.7818 15.1765 24.7617 15.2256L24.7266 15.2969C24.6868 15.3664 24.634 15.4277 24.5713 15.4766L24.5059 15.5215L21.2705 17.4248C21.2007 17.4659 21.1237 17.4928 21.0439 17.5039L20.9639 17.5098C20.883 17.5103 20.8029 17.4943 20.7285 17.4639L20.6553 17.4287C20.5851 17.3886 20.5237 17.335 20.4746 17.2715L20.4297 17.2041C20.3756 17.1108 20.3476 17.0044 20.3477 16.8965L20.3467 12.7979L17.6123 14.4072V26.1152L27.542 20.2725V8.56348L24.8076 10.1719ZM21.5723 12.0771V15.8252L23.582 14.6426V10.8936L21.5723 12.0771ZM7.05078 7.49219L16.999 13.3457L19.752 11.7266L9.80371 5.87207L7.05078 7.49219ZM11.0107 5.16211L20.96 11.0156L22.9873 9.82227L13.0381 3.96875L11.0107 5.16211ZM14.2471 3.25781L24.1943 9.11133L26.9473 7.49121L16.999 1.63867L14.2471 3.25781Z" fill="#39B667" stroke="#39B667" strokeWidth="0.1" />
        </svg>
        <span className={"\x74ext-sm \x66ont-medium text-gray-800"}>Exchange Facility</span>
      </div>
      <div className={"flex items-center gap-3 flex-1 [&]:justify-start"}>
        <svg width="36" height="36" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve" {...({ version: "1.1" } as any)}>
          <path fill="#FD5B67" d="M7.8,18c1,0,2.1-0.2,3.3-0.4h0.3c0.1,0,0.3,0,0.4,0h1.9c0.5,0,0.9-0.2,1.2-0.5s0.5-0.8,0.5-1.2  c0-0.3-0.1-0.6-0.2-0.8c0.6-0.3,0.9-0.9,0.9-1.6c0-0.3-0.1-0.6-0.2-0.8c0.6-0.3,1-0.9,1-1.6c0-0.6-0.3-1.1-0.8-1.5  c0.2-0.3,0.3-0.6,0.3-0.9c0-1-0.8-1.8-1.8-1.8h-3c-0.2,0-0.4,0-0.5,0.1c0.1-0.3,0.2-0.5,0.2-0.7V6.2v-2c0-2-1.6-3.6-3.6-3.6  c-0.1,0-0.3,0.1-0.4,0.2c0.1,0,0.1,0.2,0.1,0.3v2.5c0,1.5-1.2,2.3-2.4,3.2C4.7,7,4.6,7.1,4.4,7.2h-3C1.2,7.2,1.1,7.3,1,7.4  S0.8,7.7,0.8,7.8v8.3c0,0.1,0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h3C5.4,17.7,6.5,18,7.8,18z M14.2,16.3c-0.1,0.1-0.3,0.2-0.5,0.2h-1.9  c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5s0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2l0,0h0.4h1.5l0,0c0.4,0,0.6,0.3,0.6,0.6  C14.4,16,14.3,16.1,14.2,16.3z M14.5,14h-0.7h-1.5h-0.4c-0.4,0-0.6-0.3-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6h2.7c0.4,0,0.6,0.3,0.6,0.6  C15.1,13.8,14.8,14,14.5,14z M16,11c0,0.4-0.3,0.6-0.6,0.6h-4c-0.4,0-0.6-0.3-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6h4  C15.7,10.4,16,10.6,16,11z M11.8,7.9h3c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6h-3c-0.4,0-0.6-0.3-0.6-0.6  c0-0.2,0.1-0.3,0.2-0.5C11.5,8,11.7,7.9,11.8,7.9z M8.5,3.6V1.8C9.6,2,10.4,3,10.4,4.2v1.9c-0.1,0.3-0.3,0.8-0.7,1.2  c-0.1,0-0.1,0.2-0.2,0.3c0,0.1,0,0.3,0.1,0.4C10,8.5,10.1,9,10,9.4c-0.2,0.9-1.2,1.6-1.7,1.8c-0.1,0.1-0.2,0.2-0.3,0.3  c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.3s0.3,0,0.4-0.1C9,12,9.3,11.8,9.6,11.6c0.1,0.3,0.4,0.6,0.6,0.8  C10,12.7,9.9,13,9.9,13.3c0,0.5,0.2,0.9,0.5,1.2c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.3,0.1,0.5,0.2,0.8C7.7,16.9,6.4,17,5,15.8v-0.3  c0-0.3,0-0.9,0-1.6c0-1.3,0-3.3,0-5.9c0.3,0,0.4-0.1,0.6-0.2C6.9,6.8,8.5,5.7,8.5,3.6z M1.9,8.4H4c0,4.3,0,6.3,0,7.2H1.9V8.4z   M35.2,17.2c-0.2-1.6-3-2.2-5.7-1.9c-0.4,0-0.9,0.1-1.3,0.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.7-0.7-1.5-0.8-2.2-0.8l-5.6-0.3  c-0.5,0-1,0.1-1.3,0.5L8.2,25.2c-0.7,0.7-0.7,1.8,0,2.5l7.3,7.3c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.2-0.5l10.6-10.6  c0.4-0.4,0.5-0.8,0.5-1.3l-0.1-2.7c0.4,0,0.7,0,1.1-0.1c1.4-0.1,2.7-0.5,3.6-1C35.1,18.5,35.2,17.7,35.2,17.2z M27.7,23.6L17.1,34.1  c-0.2,0.2-0.6,0.2-0.9,0L9,26.9c-0.2-0.2-0.2-0.6,0-0.9l10.6-10.6c0.1-0.1,0.3-0.2,0.4-0.2l0,0l5.6,0.3c0.7,0,1.2,0.2,1.5,0.5  c0.3,0.3,0.5,0.8,0.5,1.5l0.1,1.6c-0.4,0-0.8-0.1-1.1-0.2c0.1-0.2,0.1-0.4,0.1-0.7c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9  c0,1,0.8,1.9,1.9,1.9c0.3,0,0.7-0.1,1-0.3c0.6,0.2,1.2,0.3,2,0.4l0.1,2.8C27.9,23.3,27.9,23.4,27.7,23.6z M24.3,18.4  c0,0.2,0.1,0.4,0.2,0.6c-0.2-0.1-0.4-0.4-0.4-0.6s0.1-0.4,0.2-0.5C24.3,18,24.3,18.2,24.3,18.4z M25.4,18.3c0-0.1,0-0.2,0.1-0.3  c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.1,0,0.2C25.4,18.4,25.4,18.3,25.4,18.3z M33.1,18.3c-0.8,0.4-2,0.7-3.2,0.9c-0.4,0-0.7,0.1-1,0.1  l-0.1-1.7c0-0.3,0-0.6-0.1-0.9c0.3-0.1,0.6-0.1,1-0.1c2.8-0.3,4.4,0.4,4.5,0.9C34.1,17.6,33.8,17.9,33.1,18.3z" />
          <path fill="none" stroke="#FD5B67" strokeWidth="0.2" d="M7.8,18c1,0,2.1-0.2,3.3-0.4h0.3c0.1,0,0.3,0,0.4,0h1.9c0.5,0,0.9-0.2,1.2-0.5s0.5-0.8,0.5-1.2  c0-0.3-0.1-0.6-0.2-0.8c0.6-0.3,0.9-0.9,0.9-1.6c0-0.3-0.1-0.6-0.2-0.8c0.6-0.3,1-0.9,1-1.6c0-0.6-0.3-1.1-0.8-1.5  c0.2-0.3,0.3-0.6,0.3-0.9c0-1-0.8-1.8-1.8-1.8h-3c-0.2,0-0.4,0-0.5,0.1c0.1-0.3,0.2-0.5,0.2-0.7V6.2v-2c0-2-1.6-3.6-3.6-3.6  c-0.1,0-0.3,0.1-0.4,0.2c0.1,0,0.1,0.2,0.1,0.3v2.5c0,1.5-1.2,2.3-2.4,3.2C4.7,7,4.6,7.1,4.4,7.2h-3C1.2,7.2,1.1,7.3,1,7.4  S0.8,7.7,0.8,7.8v8.3c0,0.1,0.1,0.3,0.2,0.4s0.2,0.2,0.4,0.2h3C5.4,17.7,6.5,18,7.8,18z M14.2,16.3c-0.1,0.1-0.3,0.2-0.5,0.2h-1.9  c-0.2,0-0.3-0.1-0.5-0.2c-0.1-0.1-0.2-0.3-0.2-0.5s0.1-0.3,0.2-0.5c0.1-0.1,0.3-0.2,0.5-0.2l0,0h0.4h1.5l0,0c0.4,0,0.6,0.3,0.6,0.6  C14.4,16,14.3,16.1,14.2,16.3z M14.5,14h-0.7h-1.5h-0.4c-0.4,0-0.6-0.3-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6h2.7c0.4,0,0.6,0.3,0.6,0.6  C15.1,13.8,14.8,14,14.5,14z M16,11c0,0.4-0.3,0.6-0.6,0.6h-4c-0.4,0-0.6-0.3-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6h4  C15.7,10.4,16,10.6,16,11z M11.8,7.9h3c0.4,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6h-3c-0.4,0-0.6-0.3-0.6-0.6  c0-0.2,0.1-0.3,0.2-0.5C11.5,8,11.7,7.9,11.8,7.9z M8.5,3.6V1.8C9.6,2,10.4,3,10.4,4.2v1.9c-0.1,0.3-0.3,0.8-0.7,1.2  c-0.1,0-0.1,0.2-0.2,0.3c0,0.1,0,0.3,0.1,0.4C10,8.5,10.1,9,10,9.4c-0.2,0.9-1.2,1.6-1.7,1.8c-0.1,0.1-0.2,0.2-0.3,0.3  c0,0.1,0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.3s0.3,0,0.4-0.1C9,12,9.3,11.8,9.6,11.6c0.1,0.3,0.4,0.6,0.6,0.8  C10,12.7,9.9,13,9.9,13.3c0,0.5,0.2,0.9,0.5,1.2c-0.3,0.3-0.5,0.8-0.5,1.2c0,0.3,0.1,0.5,0.2,0.8C7.7,16.9,6.4,17,5,15.8v-0.3  c0-0.3,0-0.9,0-1.6c0-1.3,0-3.3,0-5.9c0.3,0,0.4-0.1,0.6-0.2C6.9,6.8,8.5,5.7,8.5,3.6z M1.9,8.4H4c0,4.3,0,6.3,0,7.2H1.9V8.4z   M35.2,17.2c-0.2-1.6-3-2.2-5.7-1.9c-0.4,0-0.9,0.1-1.3,0.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.7-0.7-1.5-0.8-2.2-0.8l-5.6-0.3  c-0.5,0-1,0.1-1.3,0.5L8.2,25.2c-0.7,0.7-0.7,1.8,0,2.5l7.3,7.3c0.3,0.3,0.8,0.5,1.2,0.5c0.5,0,0.9-0.2,1.2-0.5l10.6-10.6  c0.4-0.4,0.5-0.8,0.5-1.3l-0.1-2.7c0.4,0,0.7,0,1.1-0.1c1.4-0.1,2.7-0.5,3.6-1C35.1,18.5,35.2,17.7,35.2,17.2z M27.7,23.6L17.1,34.1  c-0.2,0.2-0.6,0.2-0.9,0L9,26.9c-0.2-0.2-0.2-0.6,0-0.9l10.6-10.6c0.1-0.1,0.3-0.2,0.4-0.2l0,0l5.6,0.3c0.7,0,1.2,0.2,1.5,0.5  c0.3,0.3,0.5,0.8,0.5,1.5l0.1,1.6c-0.4,0-0.8-0.1-1.1-0.2c0.1-0.2,0.1-0.4,0.1-0.7c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9  c0,1,0.8,1.9,1.9,1.9c0.3,0,0.7-0.1,1-0.3c0.6,0.2,1.2,0.3,2,0.4l0.1,2.8C27.9,23.3,27.9,23.4,27.7,23.6z M24.3,18.4  c0,0.2,0.1,0.4,0.2,0.6c-0.2-0.1-0.4-0.4-0.4-0.6s0.1-0.4,0.2-0.5C24.3,18,24.3,18.2,24.3,18.4z M25.4,18.3c0-0.1,0-0.2,0.1-0.3  c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.1,0,0.2C25.4,18.4,25.4,18.3,25.4,18.3z M33.1,18.3c-0.8,0.4-2,0.7-3.2,0.9c-0.4,0-0.7,0.1-1,0.1  l-0.1-1.7c0-0.3,0-0.6-0.1-0.9c0.3-0.1,0.6-0.1,1-0.1c2.8-0.3,4.4,0.4,4.5,0.9C34.1,17.6,33.8,17.9,33.1,18.3z" />
          <path fill="#FD5B67" d="M18.4,19.5c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3C23.6,21.9,21.3,19.5,18.4,19.5z M18.4,28.9  c-2.3,0-4.2-1.9-4.2-4.1c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2C22.5,27.1,20.7,28.9,18.4,28.9z" />
          <path fill="#FD5B67" d="M17.5,24.3c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.1-0.1-0.3c0-0.2,0-0.4,0-0.6c0.3,0.2,0.5,0.5,0.8,0.7  c0,0,0,0,0-0.1c0.2-0.3,0.5-0.4,0.6-0.7c0.2-0.3,0.1-0.7-0.2-0.7c0-0.1,0.1-0.3,0.2-0.4c0,0,0,0,0.1,0c0.2-0.1,0.4,0,0.5,0.1  c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.2,0.1,0.3,0,0.6c0,0.2-0.1,0.3-0.3,0.5c-0.2,0.3-0.6,0.6-0.9,0.9c0,0,0,0,0,0.1  c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0,0,0,0.1c0,0.2,0,0.4,0,0.7l0,0c-0.2-0.2-0.4-0.4-0.6-0.6c0,0,0,0,0,0.1c-0.4,0.3-0.6,0.7-1,1.1  c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.3,0.2,0.5,0.3c0.4,0.1,0.8,0,1.2-0.1c0.1-0.1,0.2-0.2,0.3-0.1c-0.1-0.1-0.2-0.1-0.2-0.2  c-0.2-0.2-0.2-0.5-0.1-0.8c0.1-0.2,0.3-0.4,0.6-0.4c0.2-0.1,0.4,0.1,0.5,0.2c0.3,0.2,0.3,0.5,0.4,0.9c-0.1,0.4-0.2,0.8-0.6,1  c-0.7,0.5-1.4,0.6-2.2,0.4c-0.3,0-0.5-0.2-0.7-0.4C16.2,27,16,26.8,16,26.6c-0.1-0.3,0-0.6,0.2-0.8C16.6,25.2,17,24.8,17.5,24.3  C17.4,24.4,17.5,24.4,17.5,24.3z" />
        </svg>
        <span className={"\x74ext-sm \x66ont-medium text-gray-800"}>Best Price Deals</span>
      </div>
      <div className={"flex items-center gap-3 flex-1 [&]:justify-start"}>
        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6192_8133)">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.8568 32.5565L11.3012 33.3417L11.302 33.3431C11.6772 34.0106 11.4393 34.8624 10.7756 35.2372L9.20165 36.1293L9.19995 36.1302C8.53247 36.5055 7.68075 36.2675 7.30572 35.6035L2.67739 27.4254C2.29875 26.7573 2.53671 25.9048 3.20122 25.5295L4.77696 24.6374L4.77746 24.6371C5.44169 24.2619 6.29369 24.4977 6.67198 25.1619L6.67268 25.1633L7.03296 25.7998L11.1485 23.417C12.3894 22.6994 13.6574 22.2315 15.0203 22.6741C16.3452 23.1037 18.5081 24.0298 20.7156 24.4286C20.7404 24.4332 20.765 24.4394 20.7891 24.4471C21.9068 24.809 22.5863 25.9392 22.2811 27.0741C22.2354 27.2441 22.1754 27.4024 22.1017 27.5479C22.3368 27.4799 22.5669 27.3813 22.7931 27.2494L28.4052 23.981C30.4361 22.7978 31.7901 22.9266 32.5565 23.4408C33.2167 23.8837 33.5227 24.6398 33.503 25.3822C33.483 26.1323 33.1256 26.8487 32.5373 27.2109L22.354 33.4807C21.2811 34.1429 20.1058 34.2984 18.8883 33.9735L18.8877 33.9734L11.7267 32.0542L10.8568 32.5565ZM7.58927 26.7828L10.3006 31.5736L11.3645 30.9592C11.4943 30.8843 11.6484 30.864 11.7932 30.9027L19.1796 32.8824C20.0862 33.1242 20.9619 33.0127 21.7608 32.5196L21.7613 32.5193L31.9451 26.2493C32.2069 26.088 32.3422 25.7635 32.3696 25.4316C32.4119 24.9194 32.1723 24.3533 31.5386 24.2205C30.9454 24.0962 30.1105 24.2945 28.9736 24.9569L23.3618 28.2252C22.4604 28.7505 21.5157 28.8958 20.4862 28.7319L20.4842 28.7316L19.7878 28.6183C19.7798 28.617 19.772 28.6156 19.7641 28.614C18.4975 28.3539 17.3228 27.9713 16.0192 27.621C15.8746 27.5821 15.7514 27.4873 15.6766 27.3575C15.6018 27.2278 15.5816 27.0737 15.6204 26.929C15.6594 26.7844 15.7541 26.6612 15.8839 26.5864C16.0136 26.5117 16.1677 26.4915 16.3124 26.5303C17.5852 26.8723 18.7326 27.2474 19.9683 27.5028C20.5909 27.5717 21.0471 27.3145 21.1903 26.7811L21.1904 26.7809C21.3355 26.2415 20.9974 25.7186 20.4735 25.5326C18.224 25.1196 16.0222 24.1862 14.6718 23.7484L14.6715 23.7483C13.625 23.4084 12.6669 23.8436 11.714 24.3947L7.58927 26.7828ZM5.6903 25.7205L5.68995 25.7199C5.6183 25.5951 5.45814 25.5498 5.33292 25.6205L3.75767 26.5123L3.75718 26.5125C3.63245 26.583 3.58896 26.7432 3.65998 26.8685L3.66012 26.8687L8.28866 35.0472L8.28887 35.0477C8.35953 35.1728 8.52026 35.2164 8.64605 35.146L10.2187 34.2547L10.2194 34.2542C10.3446 34.1835 10.3882 34.0228 10.3176 33.8969L5.6903 25.7205ZM5.1059 26.5773C5.46308 26.5241 5.79478 26.7708 5.84793 27.128C5.89896 27.4853 5.65233 27.8191 5.29515 27.8701C4.9379 27.9233 4.60621 27.6744 4.55306 27.3173C4.50202 26.96 4.74866 26.6283 5.1059 26.5773ZM11.0607 18.2297L9.12329 17.1897C8.83735 17.0562 8.59542 16.8438 8.42593 16.5776C8.25643 16.3114 8.1664 16.0024 8.1664 15.6868V13.5411C8.1664 12.8964 8.53981 12.3109 9.1223 12.0386L9.87901 11.6325C10.2696 5.86266 15.0796 1.29688 20.9477 1.29688C26.8582 1.29688 31.6952 5.9288 32.0242 11.7575L32.547 12.0382C32.833 12.1717 33.0749 12.3841 33.2444 12.6503C33.4139 12.9165 33.5039 13.2255 33.5039 13.5411V15.6868C33.5039 16.0022 33.414 16.311 33.2447 16.5771C33.0754 16.8433 32.8337 17.0556 32.548 17.1892L31.0425 17.9973C31.0303 18.0285 31.0174 18.0594 31.0037 18.0899V20.3865C31.0037 20.6612 30.9497 20.9332 30.8445 21.187C30.7394 21.4407 30.5854 21.6713 30.3911 21.8656C30.1969 22.0598 29.9663 22.2138 29.7126 22.319C29.4588 22.4241 29.1868 22.4782 28.9121 22.4781H25.8701C25.6393 23.1482 25.003 23.6301 24.2551 23.6301H21.8732C20.9308 23.6301 20.1657 22.865 20.1657 21.9226C20.1657 20.9802 20.9308 20.2151 21.8732 20.2151H24.2551C24.9962 20.2151 25.6277 20.6882 25.8636 21.3487H28.9121C29.0385 21.3487 29.1636 21.3238 29.2804 21.2755C29.3971 21.2271 29.5032 21.1563 29.5925 21.0669C29.6819 20.9776 29.7527 20.8715 29.8011 20.7548C29.8494 20.638 29.8743 20.5129 29.8743 20.3865V19.1514C29.6489 19.2358 29.4102 19.279 29.1695 19.2787C28.0607 19.2787 27.1605 18.3785 27.1605 17.2697V11.9582C27.1605 11.0885 27.7142 10.3473 28.4879 10.0679C27.4953 6.84652 24.493 4.50285 20.9477 4.50285C17.4135 4.50285 14.419 6.83191 13.4169 10.0377C14.2376 10.2904 14.8347 11.0551 14.8347 11.9582V17.2697C14.8347 18.3785 13.9344 19.2787 12.8256 19.2787C12.0644 19.2787 11.4015 18.8544 11.0607 18.2297ZM10.8166 12.4111L9.64134 13.0419C9.63006 13.0479 9.6186 13.0536 9.60696 13.0589C9.51422 13.1008 9.43554 13.1686 9.38036 13.2542C9.32517 13.3397 9.29582 13.4393 9.29581 13.5411V15.6868C9.29582 15.7886 9.32518 15.8882 9.38036 15.9737C9.43555 16.0592 9.51423 16.127 9.60696 16.169C9.61861 16.1743 9.63012 16.1799 9.64134 16.186L10.8166 16.8168V12.4111ZM30.7789 10.7561C29.998 6.03299 25.8907 2.42629 20.9477 2.42629C15.9362 2.42629 11.7837 6.13372 11.086 10.9532C11.3386 10.5173 11.7503 10.1848 12.2414 10.0356C13.2784 6.19944 16.7856 3.37344 20.9477 3.37344C25.0992 3.37344 28.5991 6.18497 29.646 10.0061C30.1058 10.1181 30.5038 10.3885 30.7789 10.7561ZM31.1785 16.6425L32.0289 16.186C32.0402 16.1799 32.0516 16.1743 32.0633 16.169C32.156 16.127 32.2347 16.0593 32.2899 15.9737C32.3451 15.8882 32.3745 15.7886 32.3745 15.6868V13.5411C32.3745 13.4393 32.3451 13.3397 32.2899 13.2541C32.2347 13.1686 32.156 13.1008 32.0633 13.0589C32.0516 13.0536 32.0402 13.0479 32.0289 13.0419L31.1785 12.5854V16.6425ZM13.7052 11.9582C13.7052 11.4727 13.3111 11.0786 12.8256 11.0786C12.3401 11.0786 11.946 11.4727 11.946 11.9582V17.2697C11.946 17.7552 12.3401 18.1493 12.8256 18.1493C13.3111 18.1493 13.7052 17.7552 13.7052 17.2697V11.9582ZM28.2899 11.9582V17.2697C28.2899 17.7552 28.684 18.1493 29.1695 18.1493C29.6549 18.1493 30.0491 17.7552 30.0491 17.2697V11.9582C30.0491 11.4727 29.6549 11.0786 29.1695 11.0786C28.684 11.0786 28.2899 11.4727 28.2899 11.9582ZM21.8732 22.5007H24.2551C24.5741 22.5007 24.8332 22.2417 24.8332 21.9226C24.8332 21.6036 24.5741 21.3445 24.2551 21.3445H21.8732C21.5542 21.3445 21.2951 21.6036 21.2951 21.9226C21.2951 22.2417 21.5542 22.5007 21.8732 22.5007Z" fill="#F27F20" />
          </g>
          <defs>
            <clipPath id="clip0_6192_8133">
              <rect width="36" height="36" fill="white" transform="translate(0 0.802734)" />
            </clipPath>
          </defs>
        </svg>
        <span className={"\x74ext-sm \x66ont-medium text-gray-800"}>After-Sales Service</span>
      </div>
    </section>
  );
}

function ImportedSectionFeaturedCategories() {
  return (
    <section className={"mt-12 mb-5 \x6cg:\x6dt-10 \x6cg:\x6db-20"}>
      <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}>
        <span className="text-gray-900">Featured </span>
        <span className={"\x74ext-gradient"}>Categories</span>
      </h2>
      <div className={"\x6dd:\x6dax-h-full overflow-y-hidden grid grid-cols-3 \x6dd:\x67rid-cols-4 \x6cg:\x67rid-cols-8 gap-2 \x6dd:\x67ap-4 mt-10 max-h-[215px]"}>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/laptops">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Laptop" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/935dd9fbc220438d.webp 640w, /site-assets/935dd9fbc220438d.webp 3840w" src="/site-assets/935dd9fbc220438d.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Laptop</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/graphics-card">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Graphics Card" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e299778db8523b1a.webp 640w, /site-assets/e299778db8523b1a.webp 3840w" src="/site-assets/e299778db8523b1a.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Graphics Card</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/processor">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Computer Processor" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/f6b725e2a3c2829d.webp 640w, /site-assets/f6b725e2a3c2829d.webp 3840w" src="/site-assets/f6b725e2a3c2829d.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Computer Processor</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/motherboard">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Motherboard" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e45555ad96539178.webp 640w, /site-assets/e45555ad96539178.webp 3840w" src="/site-assets/e45555ad96539178.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Motherboard</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/monitor">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Monitor" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/a0adc3b2a9c439bc.webp 640w, /site-assets/a0adc3b2a9c439bc.webp 3840w" src="/site-assets/a0adc3b2a9c439bc.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Monitor</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/power-supply">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Power Supply" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/800da77efc0b423b.webp 640w, /site-assets/800da77efc0b423b.webp 3840w" src="/site-assets/800da77efc0b423b.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Power Supply</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/ram">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="RAM" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/ec53387bdf618969.webp 640w, /site-assets/ec53387bdf618969.webp 3840w" src="/site-assets/ec53387bdf618969.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>RAM</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/ssd">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="SSD" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/014fc57e3a3a4228.webp 640w, /site-assets/014fc57e3a3a4228.webp 3840w" src="/site-assets/014fc57e3a3a4228.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>SSD</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/macbook">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="MacBook" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/721648edeb08d436.webp 640w, /site-assets/721648edeb08d436.webp 3840w" src="/site-assets/721648edeb08d436.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>MacBook</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/ipad">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPad" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/533a871b8b74fb0e.webp 640w, /site-assets/533a871b8b74fb0e.webp 3840w" src="/site-assets/533a871b8b74fb0e.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>iPad</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/iphone">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="iPhone" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/9b3f0934d387772a.webp 640w, /site-assets/9b3f0934d387772a.webp 3840w" src="/site-assets/9b3f0934d387772a.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>iPhone</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/smart-watch">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Smart Watch" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/ff4d9fdcb8500ec7.webp 640w, /site-assets/ff4d9fdcb8500ec7.webp 3840w" src="/site-assets/ff4d9fdcb8500ec7.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Smart Watch</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/hd-camera">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="HD Camera" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/ab505976f6a925d1.webp 640w, /site-assets/ab505976f6a925d1.webp 3840w" src="/site-assets/ab505976f6a925d1.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>HD Camera</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/router">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Wi-Fi Router" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/ba9c585b446c353d.webp 640w, /site-assets/ba9c585b446c353d.webp 3840w" src="/site-assets/ba9c585b446c353d.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Wi-Fi Router</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/air-fryer">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Air Fryer" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/f889b5e2ca564f45.webp 640w, /site-assets/f889b5e2ca564f45.webp 3840w" src="/site-assets/f889b5e2ca564f45.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Air Fryer</p>
        </a>
        <a className={"flex flex-col items-center justify-center pt-1 \x6dd:\x70-2 group transition-shadow \x64uration-300 rounded-lg cursor-pointer \x6cast:\x68idden \x6dd:\x6cast:\x66lex"} href="/category/induction-cooker">
          <figure className={"w-16 h-16 \x6dd:\x73ize-14 relative mb-3"}>
            <img className={"[&]:object-contain"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Induction Cooker" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/3bac50320957164c.webp 640w, /site-assets/3bac50320957164c.webp 3840w" src="/site-assets/3bac50320957164c.webp" />
          </figure>
          <p className={"text-center \x74ext-xs \x66ont-medium text-gray-800"}>Induction Cooker</p>
        </a>
      </div>
      <button className={"\x74ext-base \x66ont-semibold text-gray-900 \x6dd:\x68idden w-full \x70x-6 text-center underline \x70y-3 [text-underline-offset:4px]"} type="button">See All Categories</button>
    </section>
  );
}

function ImportedSectionFeaturedProducts() {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between">
        <h2 className={"\x74ext-2xl \x6dd:\x74ext-3xl \x6cg:\x74ext-7xl \x66ont-bold"}><span className="text-gray-900">Featured</span> <span className={"\x74ext-gradient"}>Products</span></h2>
        <div className={"hidden \x6cg:\x66lex items-center gap-2"}>
          <button className={"w-8 h-8 rounded-full grid place-items-center text-gray-600 \x62order \x62order-gray-600 \x63ursor-not-allowed"} aria-label="Prev Button" disabled type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className={"w-8 h-8 rounded-full grid place-items-center \x62g-black text-white"} aria-label="Next Button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Tab Slider" aria-roledescription="carousel" data-site-import-carousel-root="3">
        <div className="overflow-hidden h-full">
          <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white mt-6"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap \x62g-black text-white"} type="button">Earbuds</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Neckband</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Headphone</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Speaker</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Smart Watch</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Adapter</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Power Bank</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Cables</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Hubs &amp; Docks</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">Stylus Pen</button>
            <button className={"\x70x-4 \x70y-2.\x35 rounded-full \x74ext-sm \x66ont-medium whitespace-nowrap text-gray-900 \x62g-gray-200"} type="button">WiFi Router</button>
          </div>
        </div>
      </div>
      <div className={"relative overflow-hidden -mr-3 \x33xl:\x2dmr-2.\x35 \x33.\x35xl:\x2dmr-12 \x34xl:\x6dr-0"} aria-label="Product Slider" aria-roledescription="carousel">
        <div className="overflow-hidden h-full">
          <div className={"flex items-stretch \x73pace-x-3 \x6cg:\x73pace-x-4 \x62g-white \x70y-10"} style={{ transform: "translate3d(0px, 0px, 0px)" }}>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/galaxy-buds4-pro">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Galaxy Buds4 Pro" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/e122d4fe56e23d0b.webp 640w, /site-assets/e122d4fe56e23d0b.webp 3840w" src="/site-assets/e122d4fe56e23d0b.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Galaxy Buds4 Pro</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 18,499</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳19,999</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,500 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/anker-soundcore-r60i-nc-tws-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Anker Soundcore R60i NC TWS Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/fb16c56df9308552.webp 640w, /site-assets/fb16c56df9308552.webp 3840w" src="/site-assets/fb16c56df9308552.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Anker Soundcore R60i NC TWS Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 2,999</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳3,450</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 451 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/anker-soundcore-liberty-5-nc-tws-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Anker Soundcore Liberty 5 ANC TWS Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/2a91ff14285570f6.webp 640w, /site-assets/2a91ff14285570f6.webp 3840w" src="/site-assets/2a91ff14285570f6.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>Anker Soundcore Liberty 5 ANC TWS Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 6,899</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳8,000</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,101 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/cmf-by-nothing-buds-pro-2-hybrid-anc-wireless-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="CMF by Nothing Buds Pro 2 Hybrid ANC Wireless Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/325c035a9218fc53.webp 640w, /site-assets/325c035a9218fc53.webp 3840w" src="/site-assets/325c035a9218fc53.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>CMF by Nothing Buds Pro 2 Hybrid ANC Wireless Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 4,999</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳5,500</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 501 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/qcy-melobuds-n20-pro-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="QCY MeloBuds N20 Pro Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/0a5aeff995f59511.webp 640w, /site-assets/0a5aeff995f59511.webp 3840w" src="/site-assets/0a5aeff995f59511.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>QCY MeloBuds N20 Pro Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 2,599</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳2,850</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 251 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/oneplus-buds-4-anc-tws-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="OnePlus Buds 4 ANC TWS Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/c06894cd8cdb692b.webp 640w, /site-assets/c06894cd8cdb692b.webp 3840w" src="/site-assets/c06894cd8cdb692b.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>OnePlus Buds 4 ANC TWS Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 7,899</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳9,000</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 1,101 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/oneplus-nord-buds-4-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="OnePlus Nord Buds 4 Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/600164944392a457.webp 640w, /site-assets/600164944392a457.webp 3840w" src="/site-assets/600164944392a457.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>OnePlus Nord Buds 4 Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 3,599</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳4,000</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 401 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/qcy-melobuds-pro-anc-tws-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="QCY HT08 MeloBuds Pro ANC TWS Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/44dcca98a69e8b2c.webp 640w, /site-assets/44dcca98a69e8b2c.webp 3840w" src="/site-assets/44dcca98a69e8b2c.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>QCY HT08 MeloBuds Pro ANC TWS Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 3,350</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳3,500</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 150 OFF</p>
                  </div>
                </div>
              </div>
            </article>
            <article className={"\x62order rounded-3xl card-shadow overflow-hidden group flex flex-col pb-3 \x6dd:\x70b-4 flex-[0_0_170px] \x73m:\x66lex-[\x30_0_30%] \x6cg:\x66lex-[\x30_0_45%] \x78l:\x66lex-[\x30_0_280px] \x73hadow-lg"}>
              <a className={"mb-3 \x6dd:\x6db-2"} href="/product/realme-buds-t500-pro-earbuds">
                <div className={"relative h-0 pb-[76.25%] \x62g-gray-100"}>
                  <img className={"object-cover \x70x-2 pt-2 \x62g-white \x72ounded-t-3xl"} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="realme Buds T500 Pro ANC TWS Earbuds" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="/site-assets/6976615bca6d7957.webp 640w, /site-assets/6976615bca6d7957.webp 3840w" src="/site-assets/6976615bca6d7957.webp" />
                </div>
                <p className={"\x70x-3 \x6dd:\x70x-4 pt-2 \x74ext-sm \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold \x6cine-clamp-2 max-h-14 \x6dd:\x6dax-h-15"}>realme Buds T500 Pro ANC TWS Earbuds</p>
              </a>
              <div className={"mt-auto \x70x-3 \x6dd:\x70x-4"}>
                <span className={"\x74ext-base \x6dd:\x74ext-lg text-gray-900 \x6ceading-6 \x66ont-semibold"}>৳ 3,499</span>
                <div className="min-h-8">
                  <div className={"flex items-center gap-2 mt-2 \x6dd:\x6dt-1"}>
                    <span className={"line-through \x74ext-xs \x6dd:\x74ext-sm \x6ceading-6 text-gray-600 \x66ont-medium"}>৳4,100</span>
                    <p className={"\x62g-green-100 text-green-600 w-max \x70x-2 \x6dd:\x70x-3 \x70y-1 \x6dd:\x70y-1.\x35 rounded-3xl text-[11px] \x66ont-medium"}>৳ 601 OFF</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionBangladeshSTrustedTech() {
  return (
    <section className={"grid grid-cols-1 \x6dd:\x67rid-cols-2 \x32xl:\x67rid-cols-3 gap-6 mt-6"}>
      <div className={"\x61ccent-1"}>
        <h1 className={"\x74ext-xl text-gray-900 \x66ont-bold mb-3"}>Bangladesh’s Trusted Tech &amp; Lifestyle E-Commerce Store</h1>
        <div className={"\x74ext-base text-gray-900"}>Apple Gadgets has grown into more than just a gadget shop. It’s now a place where you can find all kinds of tech and lifestyle essentials in one spot. From Apple devices to everyday electronics, home appliances, and travel-friendly gadgets, everything is easy to explore. We focus on keeping things simple and authentic with genuine products, reliable service, and a smooth shopping experience both online and in-store. No matter what you’re looking for, you can shop with proper support and confidence.</div>
      </div>
      <div className={"rounded-2xl overflow-hidden \x73hadow-md"}>
        <div className="relative overflow-hidden h-full" aria-label="Seo Content Slider" aria-roledescription="carousel">
          <div className="overflow-hidden h-full">
            <div className="flex h-full" style={{ transform: "translate3d(-863.5px, 0px, 0px)" }} data-site-import-responsive="1077">
              <a className="block flex-[0_0_100%]" style={{ transform: "translate3d(864px, 0px, 0px)" }} data-site-import-responsive="1078" href="/category/macbook/pro/m5">
                <figure className={"relative pb-[138%] \x6dd:\x70b-[\x3100%] h-full w-full"}>
                  <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="MacBook-Pro-M5-Pro-2968.png" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/e1d83a169cca1f07.webp 1920w, /site-assets/e1d83a169cca1f07.webp 3840w" src="/site-assets/e1d83a169cca1f07.webp" />
                </figure>
              </a>
              <a className="block flex-[0_0_100%]" href="/category/portable-power-station">
                <figure className={"relative pb-[138%] \x6dd:\x70b-[\x3100%] h-full w-full"}>
                  <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="Hithium-HeroEE-and-ecoflow-seo-slider-1X1-2088.jpg" loading="lazy" decoding="async" sizes="(min-width: 1200px) 100vw, 50vw" srcSet="/site-assets/ee82433444773a07.webp 1920w, /site-assets/ee82433444773a07.webp 3840w" src="/site-assets/ee82433444773a07.webp" />
                </figure>
              </a>
            </div>
          </div>
          <div className={"absolute bottom-4 left-1/2 \x2dtranslate-x-1/\x32 flex gap-2 z-10"} role="navigation" aria-label="Carousel dots">
            <button className={"h-1.5 rounded-full transition-all \x64uration-300 w-9 \x62g-orange-500"} type="button" aria-label="Go to slide 1" />
            <button className={"w-2 h-1.5 rounded-full transition-all \x64uration-300 \x62g-white"} type="button" aria-label="Go to slide 2" />
          </div>
        </div>
      </div>
      <div className={"\x61ccent-3"}>
        <h2 className={"\x74ext-xl text-gray-900 \x66ont-bold mb-3"}>Power Solutions &amp; Portable Energy for Everyday Needs</h2>
        <div className={"\x74ext-base text-gray-900"}>Staying powered up is important, especially when power cuts happen without warning. Our collection includes portable power stations, charger fans, power banks, and other backup options that help you stay prepared. These are useful at home, during travel, or even outdoors. All of them are built to be easy to use and dependable, so your devices keep running when you need them most.</div>
      </div>
      <div className={"\x61ccent-4"}>
        <h2 className={"\x74ext-xl text-gray-900 \x66ont-bold mb-3"}>Accessories &amp; Essentials That Power Your Devices</h2>
        <div className={"\x74ext-base text-gray-900"}>The right accessories can make your devices much easier to use every day. At Apple Gadgets, you’ll find chargers, cables, adapters, covers, screen protectors, hubs, and more, all chosen for quality and compatibility. Along with that, we also offer smartwatches, earbuds, headphones, speakers, and other useful gadgets that fit into your daily routine. These products help to improve performance, add convenience, and make your overall experience better.</div>
      </div>
      <div className={"\x61ccent-5"}>
        <h2 className={"\x74ext-xl text-gray-900 \x66ont-bold mb-3"}>Smartphones, Tablets &amp; the Complete Apple Ecosystem</h2>
        <div className={"\x74ext-base text-gray-900"}>You’ll find a wide range of smartphones and tablets from leading brands, along with the full Apple lineup. From iPhones and iPads to MacBooks, Apple Watch, and AirPods, everything is available in one place. We also store popular Android brands like Samsung, Xiaomi, OnePlus, and more, so you can choose what suits your needs and budget. All products come with proper authenticity and support, so you don’t have to worry after buying.</div>
      </div>
      <div className={"\x61ccent-6"}>
        <h2 className={"\x74ext-xl text-gray-900 \x66ont-bold mb-3"}>Home Appliances &amp; Lifestyle Electronics for Modern Living</h2>
        <div className={"\x74ext-base text-gray-900"}>Apple Gadgets now offers a wide range of home appliances and lifestyle electronics to make daily life more comfortable. From kitchen essentials like air fryers, rice cookers, and blenders to useful home products like vacuum cleaners, lighting, and heaters, you’ll find plenty of practical options. There are also travel accessories, personal care devices, and outdoor utilities that are easy to carry and use. Everything is selected to help you manage everyday tasks more easily without overcomplicating things.</div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer className={"\x62g-black \x70rint:\x68idden text-white mt-20 pt-12 mb-15 \x6dd:\x6db-0"}>
      <div className={"\x63ontainer relative pb-12 \x6dd:\x70b-20 overflow-hidden [@media(min-width:1440px)]:max-w-[1440px]"}>
        <div className="grid gap-6 [@media(min-width:1200px)]:grid-cols-[1fr_520px]">
          <div className={"grid \x6dd:\x67rid-cols-2 gap-6"}>
            <div>
              <figure className="mb-6">
                <a className="flex items-center" href="/">
                  <img style={{ color: "transparent" }} alt="AGLx11y-ezgif.com-gif-to-webp-converter" loading="lazy" width="245" height="76" decoding="async" srcSet="/site-assets/05f5714c2cbca7fc.webp 1x, /site-assets/05f5714c2cbca7fc.webp 2x" src="/site-assets/05f5714c2cbca7fc.webp" />
                </a>
              </figure>
              <div className={"\x73pace-y-3"}>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className={"\x74ext-base \x66ont-medium"}>Phone Number</span>
                </div>
                <a className={"text-gray-400 \x74ext-sm ml-6 block w-max"} href="tel:09678148148">09678148148</a>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className={"\x74ext-base \x66ont-medium"}>Email Address</span>
                </div>
                <a className={"text-gray-400 \x74ext-sm ml-6 block w-max"} href="mailto:contact@applegadgetsbd.com">contact@applegadgetsbd.com</a>
              </div>
              <div className="flex gap-3 mt-8">
                <a className={"block \x70y-3 \x70x-6 \x62g-gray-900 rounded-lg"} href="https://apps.apple.com/us/app/apple-gadgets-tech-shopping/id6738599022" target="_blank">
                  <svg width="94" height="25" viewBox="0 0 94 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.6878 9.61929L23.496 21.2403H25.3673L26.434 18.1058H30.8597L31.9264 21.2403H33.8352L29.6434 9.61929H27.6785H27.6878ZM26.8925 16.6556L28.6235 11.5561H28.6703L30.4013 16.6556H26.8925ZM39.3276 12.6789C38.785 12.6617 38.248 12.7918 37.7735 13.0554C37.299 13.319 36.9048 13.7063 36.6328 14.176H36.5954V12.7725H34.9112V24.0474H36.6516V19.8462H36.689C36.9486 20.3198 37.3366 20.7106 37.8083 20.9737C38.2799 21.2369 38.8162 21.3617 39.3556 21.3339C41.4796 21.3339 42.8925 19.6403 42.8925 17.0111C42.8925 14.3819 41.4796 12.6789 39.3276 12.6789ZM38.8597 19.8556C37.5404 19.8556 36.6422 18.714 36.6422 17.0017C36.6422 15.3175 37.5404 14.1667 38.8691 14.1667C40.2165 14.1667 41.1054 15.2895 41.1054 17.0017C41.1054 18.7421 40.2165 19.8556 38.8597 19.8556ZM48.6469 12.6789C48.1042 12.6607 47.5667 12.7903 47.092 13.054C46.6174 13.3177 46.2233 13.7056 45.9521 14.176H45.9241V12.7725H44.2399V24.0474H45.9709V19.8462H46.0176C46.2773 20.3198 46.6652 20.7106 47.1369 20.9737C47.6086 21.2369 48.1449 21.3617 48.6843 21.3339C50.8083 21.3339 52.2211 19.6403 52.2211 17.0111C52.2211 14.3819 50.7989 12.6789 48.6469 12.6789ZM48.1884 19.8556C46.8597 19.8556 45.9709 18.714 45.9709 17.0017C45.9709 15.3175 46.8597 14.1667 48.1884 14.1667C49.5451 14.1667 50.434 15.2895 50.434 17.0017C50.434 18.7421 49.5451 19.8556 48.1884 19.8556ZM65.5077 17.9C65.5077 20.0708 63.7767 21.4368 61.0258 21.4368C58.4527 21.4368 56.7124 20.1082 56.6001 18.0029H58.3779C58.5089 19.1538 59.6223 19.9117 61.1568 19.9117C62.6165 19.9117 63.6831 19.1632 63.6831 18.1152C63.6831 17.217 63.0375 16.6743 61.5311 16.3094L60.034 15.9351C57.8913 15.4298 56.8995 14.438 56.8995 12.8099C56.8995 10.8076 58.6492 9.43216 61.1287 9.43216C63.5896 9.43216 65.2738 10.8076 65.3299 12.8099H63.5709C63.4679 11.6497 62.5042 10.9479 61.11 10.9479C59.7065 10.9479 58.7521 11.6591 58.7521 12.6883C58.7521 13.5117 59.3603 13.9982 60.8574 14.3725L62.1393 14.6813C64.5252 15.2427 65.5077 16.1971 65.5077 17.9ZM69.2691 12.7725H70.8785V14.1479H69.2691V18.8263C69.2691 19.5468 69.5872 19.8836 70.2983 19.8836C70.4855 19.8836 70.6726 19.8649 70.8691 19.8462V21.2123C70.551 21.2684 70.2328 21.2965 69.9054 21.2871C68.1931 21.2871 67.5194 20.6509 67.5194 19.0041V14.1479H66.2937V12.7725H67.5194V10.7702H69.2691V12.7725ZM75.8188 12.6696C73.3861 12.6696 71.8141 14.3444 71.8141 17.0111C71.8141 19.6778 73.3673 21.3526 75.8282 21.3526C78.289 21.3526 79.8516 19.6778 79.8516 17.0111C79.8516 14.3444 78.2796 12.6696 75.8282 12.6696H75.8188ZM75.8188 19.9117C74.4153 19.9117 73.5732 18.845 73.5732 17.0111C73.5732 15.1865 74.4153 14.1012 75.8188 14.1012C77.241 14.1012 78.0738 15.1772 78.0738 17.0017C78.0738 18.845 77.2317 19.9117 75.8282 19.9117H75.8188ZM85.0165 12.6789C85.213 12.6789 85.4188 12.707 85.6153 12.7444V14.3725C85.3608 14.2948 85.0952 14.26 84.8293 14.2696C84.5774 14.2599 84.3263 14.3047 84.0933 14.4011C83.8603 14.4975 83.6509 14.643 83.4794 14.8279C83.3079 15.0127 83.1783 15.2324 83.0997 15.472C83.021 15.7115 82.995 15.9653 83.0235 16.2158V21.2403H81.2831V12.7725H82.9393V14.2134H82.9767C83.0883 13.7621 83.3521 13.363 83.7237 13.0834C84.0953 12.8039 84.5518 12.661 85.0165 12.6789ZM93.7182 17.4415V16.8427C93.7182 14.2789 92.2492 12.6696 89.91 12.6696C87.5241 12.6696 85.9802 14.3912 85.9802 17.0485C85.9802 19.6965 87.5147 21.3526 89.9849 21.3526C91.8937 21.3526 93.3907 20.2953 93.634 18.7515H91.9779C91.8252 19.1377 91.5508 19.4635 91.1962 19.6797C90.8416 19.8958 90.4262 19.9904 90.013 19.9491C89.7006 19.9582 89.3899 19.9011 89.1012 19.7816C88.8124 19.6622 88.5522 19.4831 88.3375 19.256C88.1228 19.029 87.9586 18.7591 87.8555 18.4642C87.7524 18.1692 87.7128 17.8558 87.7393 17.5444V17.4415H93.7276H93.7182ZM87.9171 15.4017C88.0782 15.0075 88.3527 14.6698 88.7058 14.4317C89.0589 14.1935 89.4747 14.0654 89.9007 14.0637C90.3237 14.0574 90.7383 14.1816 91.0882 14.4193C91.4381 14.6571 91.7063 14.9968 91.8562 15.3924C91.9498 15.6544 91.9966 15.9351 91.9779 16.2158H87.7486C87.7486 15.9351 87.8048 15.6544 87.9171 15.3924V15.4017ZM29.3065 3.6497C29.3535 3.28695 29.319 2.91829 29.2056 2.57054C29.0921 2.22279 28.9026 1.9047 28.6508 1.63942C28.3989 1.37414 28.0911 1.16834 27.7497 1.03699C27.4084 0.905641 27.042 0.852049 26.6773 0.880112H24.6562V6.45672H26.6773C28.3334 6.45672 29.2972 5.42748 29.2972 3.6497H29.3065ZM25.5264 5.67076V1.66608H26.5744C26.833 1.65298 27.0913 1.69683 27.3311 1.79453C27.5709 1.89223 27.7863 2.04139 27.9621 2.23148C28.1379 2.42158 28.2698 2.64796 28.3485 2.89464C28.4273 3.14131 28.4508 3.40227 28.4176 3.65906C28.4574 3.91787 28.4386 4.18231 28.3625 4.43288C28.2865 4.68344 28.1552 4.91374 27.9783 5.1068C27.8014 5.29987 27.5834 5.45076 27.3404 5.54837C27.0974 5.64597 26.8357 5.68779 26.5744 5.67076H25.5264ZM33.7416 2.81695C33.4602 2.50546 33.0877 2.29077 32.6771 2.20349C32.2665 2.1162 31.8388 2.16079 31.4551 2.33089C31.0713 2.50098 30.7511 2.7879 30.54 3.15074C30.3289 3.51357 30.2378 3.93378 30.2796 4.35146C30.2536 4.62892 30.2857 4.90876 30.374 5.17308C30.4623 5.43739 30.6049 5.68037 30.7924 5.88646C30.98 6.09254 31.2086 6.2572 31.4635 6.3699C31.7183 6.48259 31.9939 6.54085 32.2726 6.54093C32.5514 6.54244 32.8273 6.48517 33.0824 6.37287C33.3376 6.26057 33.5662 6.09575 33.7534 5.88916C33.9405 5.68258 34.082 5.43886 34.1687 5.17391C34.2553 4.90895 34.2852 4.62871 34.2562 4.35146C34.282 4.07395 34.2495 3.79413 34.1609 3.52989C34.0723 3.26566 33.9295 3.02283 33.7416 2.81695ZM32.2726 5.81111C31.5428 5.81111 31.1404 5.27777 31.1404 4.35146C31.1404 3.44385 31.5428 2.90116 32.2632 2.90116C32.9931 2.90116 33.4048 3.44385 33.4048 4.35146C33.4048 5.26842 32.9931 5.80175 32.2726 5.80175V5.81111ZM36.0153 6.46608L34.8551 2.25555H35.6972L36.4457 5.46491H36.5112L37.3814 2.24619H38.1767L39.0469 5.46491H39.1124L39.8609 2.24619H40.703L39.5428 6.45672H38.6726L37.8024 3.35964H37.7369L36.8761 6.45672H36.0153V6.46608ZM44.4176 3.93976C44.4176 3.26608 44.1276 2.92923 43.51 2.92923C43.2999 2.91824 43.092 2.97631 42.918 3.09457C42.7439 3.21284 42.6134 3.3848 42.5463 3.58421C42.4995 3.7152 42.4902 3.86491 42.4995 3.9959V6.45672H41.6668V2.24619H42.4714V2.91988H42.5369C42.6427 2.68065 42.8201 2.48016 43.0447 2.34608C43.2693 2.21199 43.53 2.15094 43.7907 2.17134C44.0974 2.15216 44.4017 2.23553 44.6558 2.40831C44.9099 2.58109 45.0993 2.83348 45.1942 3.12573C45.2597 3.32222 45.2785 3.52807 45.2504 3.73391V6.45672H44.4176V3.93976ZM47.4118 6.46608H46.5697V0.590053H47.4118V6.44736V6.46608ZM52.0247 2.81695C51.7433 2.50546 51.3707 2.29077 50.9601 2.20349C50.5496 2.1162 50.1219 2.16079 49.7381 2.33089C49.3544 2.50098 49.0341 2.7879 48.823 3.15074C48.612 3.51357 48.5208 3.93378 48.5627 4.35146C48.5367 4.62813 48.5686 4.90719 48.6563 5.17086C48.7441 5.43454 48.8858 5.67707 49.0723 5.88301C49.2589 6.08895 49.4863 6.2538 49.7401 6.36707C49.9938 6.48034 50.2684 6.53955 50.5463 6.54093C50.825 6.54244 51.101 6.48517 51.3561 6.37287C51.6113 6.26057 51.8399 6.09575 52.027 5.88916C52.2142 5.68258 52.3557 5.43886 52.4424 5.17391C52.529 4.90895 52.5588 4.62871 52.5299 4.35146C52.5563 4.07465 52.5251 3.79537 52.4381 3.53126C52.3511 3.26714 52.2104 3.02392 52.0247 2.81695ZM50.5463 5.81111C49.8258 5.81111 49.4235 5.27777 49.4235 4.35146C49.4235 3.44385 49.8258 2.90116 50.5463 2.90116C51.2668 2.90116 51.6785 3.44385 51.6785 4.35146C51.6785 5.26842 51.2668 5.80175 50.5556 5.80175L50.5463 5.81111ZM56.9463 6.46608V3.58421C56.9463 2.69532 56.3568 2.16198 55.2995 2.16198C54.3451 2.16198 53.6621 2.62982 53.5779 3.35029H54.3825C54.4761 3.06023 54.7942 2.88245 55.2527 2.88245C55.8235 2.88245 56.1229 3.13508 56.1229 3.58421V3.94912L54.9814 4.01462C53.9802 4.07076 53.4094 4.51052 53.4094 5.26842C53.4098 5.44635 53.4475 5.62224 53.52 5.78471C53.5926 5.94719 53.6984 6.09264 53.8307 6.21167C53.963 6.33071 54.1187 6.42068 54.2879 6.47578C54.4571 6.53089 54.636 6.54989 54.813 6.53157C55.064 6.54462 55.3141 6.49087 55.5376 6.37581C55.7611 6.26076 55.9502 6.08851 56.0855 5.8766H56.151V6.46608H56.9463ZM56.1229 4.91286C56.1123 5.04605 56.0755 5.17582 56.0145 5.29467C55.9534 5.41351 55.8694 5.51908 55.7673 5.60526C55.6738 5.68947 55.5521 5.75497 55.4211 5.79239C55.2995 5.82982 55.1592 5.83918 55.0282 5.82982C54.579 5.82982 54.2516 5.60526 54.2516 5.23099C54.2516 4.85672 54.5135 4.66959 55.0937 4.6228L56.1229 4.5573V4.91286ZM59.7907 6.53157C60.057 6.53956 60.3204 6.47499 60.5528 6.34479C60.7852 6.21458 60.9778 6.02364 61.11 5.79239H61.1755V6.45672H61.9709V0.59941H61.1381V2.92923H61.082C60.9607 2.69418 60.7746 2.49878 60.5458 2.36612C60.317 2.23347 60.055 2.16913 59.7907 2.1807C58.7241 2.1807 58.041 3.0228 58.041 4.36081C58.041 5.69883 58.7147 6.54093 59.7907 6.54093V6.53157ZM60.0247 2.92923C60.7171 2.92923 61.1568 3.48128 61.1568 4.36081C61.1568 5.24035 60.7264 5.78304 60.0247 5.78304C59.3229 5.78304 58.9018 5.2497 58.9018 4.35146C58.9018 3.46257 59.3229 2.92923 60.0247 2.92923ZM67.3978 6.54093C67.6773 6.54376 67.9543 6.48747 68.2105 6.37575C68.4668 6.26403 68.6966 6.09941 68.8848 5.89267C69.0729 5.68594 69.2153 5.44176 69.3025 5.17615C69.3897 4.91054 69.4198 4.6295 69.3907 4.35146C69.4216 4.00509 69.3617 3.65666 69.2169 3.34048C69.0722 3.0243 68.8476 2.75126 68.5653 2.54825C68.2829 2.34524 67.9526 2.21926 67.6068 2.1827C67.261 2.14614 66.9116 2.20027 66.5931 2.33976C66.2102 2.50883 65.8903 2.79413 65.6787 3.15521C65.4671 3.51628 65.3745 3.93482 65.4141 4.35146C65.3882 4.62813 65.4201 4.90719 65.5078 5.17086C65.5955 5.43454 65.7372 5.67707 65.9238 5.88301C66.1104 6.08895 66.3378 6.2538 66.5915 6.36707C66.8453 6.48034 67.1199 6.53955 67.3978 6.54093ZM66.2749 4.35146C66.2749 3.44385 66.6773 2.90116 67.3978 2.90116C68.1276 2.90116 68.5299 3.44385 68.5299 4.35146C68.5299 5.26842 68.1276 5.80175 67.4071 5.80175C66.6773 5.80175 66.2749 5.26842 66.2749 4.35146ZM71.9358 2.99473C71.8055 3.04716 71.688 3.1269 71.5911 3.22859C71.4943 3.33027 71.4204 3.45154 71.3744 3.58421C71.3369 3.7152 71.3182 3.86491 71.3369 3.9959V6.45672H70.5042V2.24619H71.2995V2.91988H71.365C71.4708 2.68065 71.6482 2.48016 71.8728 2.34608C72.0974 2.21199 72.358 2.15094 72.6188 2.17134C72.927 2.15002 73.2335 2.23237 73.4895 2.40531C73.7456 2.57825 73.9364 2.83183 74.0317 3.12573C74.0972 3.32222 74.1159 3.52807 74.0785 3.73391V6.45672H73.2457V3.93976C73.2457 3.26608 72.9557 2.92923 72.3381 2.92923C72.2071 2.92923 72.0574 2.94795 71.9358 2.99473ZM77.9521 2.96666H77.2785V2.26491H77.9521V1.19824H78.7849V2.26491H79.6925V2.96666H78.7849V5.12807C78.7849 5.57719 78.972 5.76432 79.3744 5.76432C79.4866 5.76432 79.5896 5.76432 79.6925 5.74561V6.43801C79.5444 6.4665 79.3941 6.48215 79.2434 6.48479C78.3171 6.48479 77.9521 6.1573 77.9521 5.34327V2.96666ZM81.6574 6.45672H80.8247V0.59941H81.6574V2.92923H81.7229C81.8336 2.68776 82.0161 2.48631 82.2455 2.35235C82.4749 2.21839 82.7401 2.15845 83.0048 2.1807C83.2089 2.1691 83.4131 2.20287 83.6026 2.27955C83.7922 2.35624 83.9624 2.47395 84.1011 2.62424C84.2397 2.77452 84.3434 2.95364 84.4046 3.14874C84.4658 3.34384 84.483 3.55007 84.4551 3.75263V6.46608H83.6223V3.95847C83.6223 3.28479 83.3042 2.93859 82.7241 2.93859C82.5797 2.92467 82.434 2.94353 82.2979 2.99375C82.1618 3.04397 82.0388 3.12427 81.9381 3.22865C81.8378 3.32997 81.7607 3.45192 81.7122 3.58603C81.6637 3.72014 81.645 3.86319 81.6574 4.00526V6.46608V6.45672ZM85.5966 5.18421C85.7204 5.58381 85.9708 5.93229 86.3101 6.17704C86.6494 6.42179 87.059 6.54951 87.4773 6.54093C87.8757 6.58369 88.2764 6.48539 88.6098 6.26313C88.9432 6.04088 89.1881 5.70875 89.3018 5.32456H88.5065C88.4095 5.49996 88.2625 5.64254 88.0842 5.73418C87.906 5.82582 87.7045 5.86237 87.5054 5.83918C87.2718 5.84085 87.0435 5.76965 86.8523 5.63548C86.6611 5.50131 86.5165 5.31085 86.4387 5.09064C86.3868 4.94048 86.3677 4.78097 86.3826 4.6228V4.58537H89.358V4.29532C89.358 2.96666 88.6469 2.17134 87.4773 2.17134C87.199 2.16898 86.9234 2.22634 86.6692 2.33955C86.4149 2.45275 86.1879 2.61917 86.0035 2.82757C85.819 3.03597 85.6814 3.28151 85.5999 3.54762C85.5184 3.81373 85.495 4.09422 85.5311 4.37017C85.4937 4.65087 85.5124 4.92222 85.5966 5.18421ZM86.4574 3.54678C86.5108 3.41359 86.5902 3.29231 86.6908 3.18998C86.7914 3.08764 86.9113 3.00627 87.0436 2.95058C87.1758 2.89489 87.3178 2.86598 87.4613 2.86553C87.6048 2.86508 87.747 2.89309 87.8796 2.94795C88.0783 3.03017 88.2459 3.17307 88.3585 3.35623C88.471 3.5394 88.5229 3.75345 88.5065 3.96783H86.3826C86.3826 3.81812 86.4013 3.68713 86.4574 3.54678ZM17.5077 15.5982C17.177 16.6742 16.678 17.6911 16.0293 18.6111C15.1592 19.9117 14.2516 21.1842 12.8013 21.2029C11.3977 21.2403 10.9299 20.3795 9.3112 20.3795C7.68313 20.3795 7.17787 21.1842 5.8305 21.2403C4.4457 21.2871 3.39775 19.8462 2.49015 18.555C0.684298 15.9351 -0.719211 11.1351 1.17085 7.8883C1.60495 7.10743 2.23384 6.45227 2.9963 5.9866C3.75876 5.52093 4.6288 5.26061 5.52173 5.23099C6.89716 5.20292 8.17904 6.16666 9.0305 6.16666C9.86325 6.16666 11.4445 5.01578 13.082 5.19356C13.8474 5.21806 14.5966 5.42016 15.2705 5.7839C15.9444 6.14764 16.5245 6.66306 16.965 7.28947C16.2745 7.7145 15.7023 8.30691 15.3016 9.01184C14.9009 9.71678 14.6845 10.5114 14.6726 11.3222C14.6737 12.2345 14.943 13.1263 15.4471 13.8866C15.9512 14.6469 16.6678 15.2422 17.5077 15.5982ZM10.6118 4.5573C10.0597 4.80994 9.47026 4.94093 8.86208 4.93157C8.78679 3.73866 9.18714 2.5645 9.97553 1.66608C10.7765 0.752515 11.8924 0.174505 13.1007 0.0473633C13.1943 1.27759 12.805 2.49591 12.0153 3.44385C11.641 3.91169 11.1545 4.29532 10.6118 4.5573Z" fill="white" />
                  </svg>
                </a>
                <a className={"block \x70y-3 \x70x-6 \x62g-gray-900 rounded-lg"} href="https://play.google.com/store/apps/details?id=com.agl.agl_app" target="_blank">
                  <svg width="102" height="25" viewBox="0 0 102 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5895_20604)">
                      <path d="M0.864672 0.777832C0.603095 1.03941 0.428711 1.47537 0.428711 1.99852V21.268C0.428711 21.7911 0.603095 22.2271 0.864672 22.4887L0.951864 22.5759L11.7637 11.764V11.5897L0.864672 0.777832Z" fill="url(#paint0_linear_5895_20604)" />
                      <path d="M15.3385 15.3383L11.7637 11.7634V11.589L15.3385 8.01416L15.4257 8.10135L19.6982 10.5427C20.9188 11.2403 20.9188 12.3738 19.6982 13.0713L15.3385 15.3383Z" fill="url(#paint1_linear_5895_20604)" />
                      <path d="M15.3382 15.3383L11.6761 11.6763L0.864258 22.4881C1.30022 22.9241 1.91056 22.9241 2.69529 22.5753L15.3382 15.3383Z" fill="url(#paint2_linear_5895_20604)" />
                      <path d="M15.3382 7.9264L2.6081 0.689455C1.91056 0.253494 1.21303 0.340686 0.864258 0.776647L11.7633 11.6757L15.3382 7.9264Z" fill="url(#paint3_linear_5895_20604)" />
                      <path opacity="0.2" d="M15.3384 15.2505L2.60838 22.4002C1.91084 22.8362 1.3005 22.749 0.864536 22.4002L0.777344 22.4874L0.864536 22.5746C1.3005 22.9234 1.91084 23.0106 2.60838 22.5746L15.3384 15.2505Z" fill="white" />
                      <path opacity="0.12" d="M0.864672 22.4002C0.603095 22.0514 0.428711 21.7027 0.428711 21.1795V21.2667C0.428711 21.7899 0.603095 22.2258 0.864672 22.4874V22.4002ZM19.611 12.7219L15.2514 15.1633L15.3386 15.2504L19.611 12.8091C20.2213 12.4603 20.4829 12.0243 20.4829 11.5884C20.4829 12.0243 20.2213 12.4603 19.611 12.7219Z" fill="white" />
                      <path opacity="0.25" d="M2.60851 0.865089L19.611 10.4562C20.1341 10.805 20.4829 11.1538 20.4829 11.5897C20.4829 11.1538 20.2213 10.7178 19.611 10.369L2.60851 0.690705C1.38782 -0.00683221 0.428711 0.603513 0.428711 1.99859V2.08578C0.428711 0.690705 1.38782 0.167552 2.60851 0.865089Z" fill="white" />
                      <path d="M101.485 13.2466L97.0377 23.5352H95.3811L97.0377 19.8732L94.1604 13.2466H95.9042L97.8225 17.955H97.9097L99.7407 13.2466H101.485ZM84.0461 12.7234C84.0461 14.816 82.3023 16.1239 80.4712 16.1239H78.2042V20.2219H76.5476V9.32293H80.4712C82.3023 9.32293 84.0461 10.6308 84.0461 12.7234ZM82.4767 12.7234C82.4767 11.8515 81.7791 10.8924 80.5584 10.8924H78.2042V14.6417H80.5584C81.7791 14.6417 82.4767 13.5953 82.4767 12.7234ZM93.8988 16.0367V20.2219H92.3294V19.35H92.2422C91.8934 19.9604 91.2831 20.3963 90.1496 20.3963C88.7545 20.3963 87.4466 19.4372 87.4466 17.955C87.4466 16.3855 89.0161 15.5136 90.5855 15.5136C91.3702 15.5136 91.9806 15.7751 92.2422 15.9495V15.8623C92.2422 14.9904 91.3703 14.4673 90.4983 14.4673C89.888 14.4673 89.2776 14.6417 89.0161 15.252L87.5338 14.6417C88.0569 13.5082 89.2776 12.985 90.4111 12.985C92.5037 13.0722 93.8988 14.1185 93.8988 16.0367ZM92.3294 17.2574C91.8934 17.083 91.5446 16.9086 90.8471 16.9086C90.0624 16.9086 89.1033 17.2574 89.1033 18.0421C89.1033 18.7397 89.888 19.0013 90.4111 19.0013C91.3703 19.0013 92.2422 18.3037 92.3294 17.2574ZM46.7279 16.7343C46.7279 18.8269 45.0712 20.4835 42.9786 20.4835C40.886 20.4835 39.2294 18.9141 39.2294 16.7343C39.2294 14.5545 40.886 12.985 42.9786 12.985C45.0712 12.985 46.7279 14.6417 46.7279 16.7343ZM45.1584 16.7343C45.1584 15.4264 44.1993 14.4673 43.0658 14.4673C41.9323 14.4673 40.9732 15.3392 40.9732 16.7343C40.9732 18.0421 41.9323 19.0013 43.0658 19.0013C44.1993 19.0013 45.1584 18.0421 45.1584 16.7343ZM33.3875 14.2057V15.7751H37.1368C37.0496 16.6471 36.7008 17.3446 36.2648 17.7806C35.7417 18.3037 34.8698 18.9141 33.3875 18.9141C31.0333 18.9141 29.2895 17.083 29.2895 14.7288C29.271 13.913 29.4954 13.1101 29.9343 12.4221C30.3732 11.7341 31.0067 11.1922 31.7543 10.8651C32.5019 10.538 33.3299 10.4406 34.1331 10.5851C34.9362 10.7297 35.6782 11.1098 36.2648 11.6771L37.3983 10.5436C36.3468 9.52633 34.9377 8.96271 33.4747 8.97416C30.3358 8.97416 27.6328 11.5899 27.6328 14.7288C27.6328 17.8678 30.3358 20.4835 33.4747 20.4835C35.2185 20.4835 36.4392 19.9604 37.4855 18.8269C38.5318 17.7806 38.8806 16.2983 38.8806 15.1648C38.8806 14.816 38.8806 14.4673 38.7934 14.2057H33.3875ZM54.8368 16.7343C54.8368 18.8269 53.1801 20.4835 51.0875 20.4835C50.5919 20.4955 50.099 20.4067 49.6387 20.2225C49.1784 20.0383 48.7603 19.7626 48.4098 19.412C48.0592 19.0614 47.7835 18.6433 47.5993 18.1831C47.4151 17.7228 47.3263 17.2299 47.3382 16.7343C47.3382 14.5545 48.9949 12.985 51.0875 12.985C53.1801 13.0722 54.8368 14.6417 54.8368 16.7343ZM53.2673 16.7343C53.2673 15.4264 52.3082 14.4673 51.1747 14.4673C50.0412 14.4673 49.0821 15.3392 49.0821 16.7343C49.0821 18.0421 50.0412 19.0013 51.1747 19.0013C52.3082 19.0013 53.2673 18.0421 53.2673 16.7343ZM73.0599 15.8623L68.09 17.955C68.4387 18.7397 69.0491 19.0884 69.921 19.0884C70.7929 19.0884 71.3161 18.6525 71.752 18.0421L73.0599 18.9141C72.6295 19.5879 71.9895 20.1014 71.2385 20.3757C70.4875 20.6499 69.6672 20.6696 68.9039 20.4317C68.1406 20.1938 67.4767 19.7115 67.0145 19.0591C66.5523 18.4067 66.3174 17.6205 66.3461 16.8215C66.3461 14.6417 67.9156 13.0722 69.8338 13.0722C71.752 13.0722 72.7111 14.6417 72.9727 15.4264L73.0599 15.8623ZM71.1417 15.252C70.9673 14.816 70.4441 14.4673 69.7466 14.4673C68.8747 14.4673 67.7412 15.1648 67.8284 16.6471L71.1417 15.252ZM85.0052 20.2219H86.6619V9.32293H85.0052V20.2219ZM63.8175 20.2219H65.4742V9.32293H63.8175V20.2219ZM61.1146 13.2466H62.684V19.8732C62.684 22.5761 61.0274 23.7096 59.1964 23.7096C57.3653 23.7096 56.319 22.4889 55.8831 21.5298L57.2781 20.9195C57.5397 21.5298 58.1501 22.2274 59.1092 22.2274C60.3299 22.2274 61.1146 21.4426 61.1146 20.0476V19.5244H61.0274C60.6786 19.9604 59.9811 20.3963 59.1092 20.3963C57.2781 20.3963 55.5343 18.7397 55.5343 16.7343C55.5343 14.6417 57.1909 12.985 59.1092 12.985C59.9811 12.985 60.6786 13.421 61.0274 13.8569H61.1146V13.2466ZM61.2018 16.7343C61.2018 15.4264 60.3299 14.4673 59.1964 14.4673C58.0629 14.4673 57.1037 15.4264 57.1037 16.7343C57.1037 18.0421 58.0629 19.0013 59.1964 19.0013C60.3299 19.0013 61.2018 18.0421 61.2018 16.7343ZM52.1338 4.78894C51.6106 4.26579 51.3491 3.65544 51.3491 2.87071C51.3491 2.08598 51.6106 1.47564 52.1338 0.952488C52.6569 0.342143 53.2673 0.0805664 54.052 0.0805664C54.8368 0.0805664 55.4471 0.342143 55.9703 0.865295C56.4934 1.38845 56.755 1.99879 56.755 2.78352C56.755 3.56825 56.4934 4.1786 55.9703 4.70175C55.4471 5.2249 54.8368 5.48648 54.052 5.48648C53.2673 5.57367 52.6569 5.31209 52.1338 4.78894ZM52.0466 2.87071C52.0466 3.48106 52.221 4.00421 52.657 4.35298C53.0057 4.78894 53.5289 4.96333 54.052 4.96333C54.5752 4.96333 55.0983 4.78894 55.4471 4.35298C55.7959 4.00421 56.0574 3.48106 56.0574 2.87071C56.0574 2.26037 55.8831 1.73722 55.4471 1.38845C55.0983 0.952488 54.5752 0.778103 54.052 0.778103C53.5289 0.778103 53.0057 0.952488 52.657 1.38845C52.221 1.73722 52.0466 2.26037 52.0466 2.87071ZM30.5102 5.57367C31.2949 5.57367 31.9052 5.31209 32.4284 4.78894C32.8643 4.35298 33.0387 3.74264 33.0387 3.0451V2.60914H30.5102V3.21948H32.4284C32.4284 3.65544 32.254 4.00421 31.9924 4.26579C31.6437 4.61456 31.1205 4.87613 30.5102 4.87613C29.987 4.87613 29.4638 4.70175 29.1151 4.26579C28.6791 3.91702 28.5047 3.39387 28.5047 2.78352C28.5047 2.17318 28.6791 1.65002 29.1151 1.30126C29.551 0.952488 29.987 0.690911 30.5102 0.690911C31.1205 0.690911 31.5565 0.865296 31.9052 1.30126L32.4284 0.952488C32.254 0.690911 31.9924 0.516527 31.6436 0.342143C31.2949 0.167758 30.9461 0.0805664 30.5102 0.0805664C29.7254 0.0805664 29.1151 0.342143 28.5919 0.865295C28.0688 1.38845 27.8072 1.99879 27.8072 2.78352C27.8072 3.56825 28.0688 4.1786 28.5919 4.70175C29.1151 5.31209 29.8126 5.57367 30.5102 5.57367ZM37.1368 4.78894H34.7826V3.13229H36.9624V2.52195H34.7826V0.865295H37.1368V0.254951H34.085V5.48648H37.1368V4.78894ZM40.0141 5.48648V0.865295H41.4092V0.254951H37.8343V0.865295H39.3166V5.48648H40.0141ZM44.7225 0.254951H44.0249V5.48648H44.7225V0.254951ZM47.687 5.48648V0.865295H49.1693V0.254951H45.5944V0.865295H47.0767V5.48648H47.687ZM58.3244 2.17318V1.12687L61.0274 5.39929H61.7249V0.167759H61.0274V4.26579L58.4988 0.167759H57.7141V5.39929H58.4116V2.17318H58.3244Z" fill="white" />
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_5895_20604" x1="10.7435" y1="1.78054" x2="-3.89602" y2="16.4114" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00A0FF" />
                        <stop offset="0.01" stopColor="#00A1FF" />
                        <stop offset="0.26" stopColor="#00BEFF" />
                        <stop offset="0.51" stopColor="#00D2FF" />
                        <stop offset="0.76" stopColor="#00DFFF" />
                        <stop offset="1" stopColor="#00E3FF" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_5895_20604" x1="21.2327" y1="11.6239" x2="0.140961" y2="11.6239" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFE000" />
                        <stop offset="0.41" stopColor="#FFBD00" />
                        <stop offset="0.78" stopColor="#FFA500" />
                        <stop offset="1" stopColor="#FF9C00" />
                      </linearGradient>
                      <linearGradient id="paint2_linear_5895_20604" x1="13.3763" y1="13.6294" x2="-6.45988" y2="33.4656" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF3A44" />
                        <stop offset="1" stopColor="#C31162" />
                      </linearGradient>
                      <linearGradient id="paint3_linear_5895_20604" x1="-1.89973" y1="-5.65813" x2="6.95899" y2="3.20059" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#32A071" />
                        <stop offset="0.07" stopColor="#2DA771" />
                        <stop offset="0.48" stopColor="#15CF74" />
                        <stop offset="0.8" stopColor="#06E775" />
                        <stop offset="1" stopColor="#00F076" />
                      </linearGradient>
                      <clipPath id="clip0_5895_20604">
                        <rect width="101.143" height="24" fill="white" transform="translate(0.428711 0.0473633)" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <p className={"\x74ext-sm \x66ont-semibold text-gray-500 mb-3 [&]:uppercase"}>LOCATION</p>
              <div className={"\x73pace-y-4"}>
                <a className="flex" href="/outlet/bashundhara-city-shopping-complex">
                  <svg className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 0.740723C3.37032 0.740723 0.4375 3.71127 0.4375 7.36371C0.4375 9.4598 1.27332 11.0949 2.87694 12.516C3.92025 13.4405 5.79441 15.4062 6.51971 16.5959C6.62019 16.7607 6.79817 16.8625 6.99118 16.8656C7.18419 16.8686 7.36528 16.7724 7.47087 16.6108C8.24306 15.4292 10.0898 13.4316 11.1231 12.516C12.7267 11.0949 13.5625 9.4598 13.5625 7.36371C13.5625 3.71127 10.6297 0.740723 7 0.740723ZM7.02637 9.92822C8.47611 9.92822 9.65137 8.75297 9.65137 7.30322C9.65137 5.85348 8.47611 4.67822 7.02637 4.67822C5.57662 4.67822 4.40137 5.85348 4.40137 7.30322C4.40137 8.75297 5.57662 9.92822 7.02637 9.92822Z" fill="#F9C078" />
                  </svg>
                  <div className="ml-2">
                    <p className={"\x74ext-base \x66ont-medium"}>Apple Gadgets - Basement 2, Shop 26, Bashundhara City Shopping Complex</p>
                    <p className="mt-1 text-gray-500">Basement 2, Shop 26</p>
                  </div>
                </a>
                <a className="flex" href="/outlet/apple-gadgets-level-5-block-a-shop-4-5-bashundhara-city-shopping-complex">
                  <svg className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 0.740723C3.37032 0.740723 0.4375 3.71127 0.4375 7.36371C0.4375 9.4598 1.27332 11.0949 2.87694 12.516C3.92025 13.4405 5.79441 15.4062 6.51971 16.5959C6.62019 16.7607 6.79817 16.8625 6.99118 16.8656C7.18419 16.8686 7.36528 16.7724 7.47087 16.6108C8.24306 15.4292 10.0898 13.4316 11.1231 12.516C12.7267 11.0949 13.5625 9.4598 13.5625 7.36371C13.5625 3.71127 10.6297 0.740723 7 0.740723ZM7.02637 9.92822C8.47611 9.92822 9.65137 8.75297 9.65137 7.30322C9.65137 5.85348 8.47611 4.67822 7.02637 4.67822C5.57662 4.67822 4.40137 5.85348 4.40137 7.30322C4.40137 8.75297 5.57662 9.92822 7.02637 9.92822Z" fill="#F9C078" />
                  </svg>
                  <div className="ml-2">
                    <p className={"\x74ext-base \x66ont-medium"}>Apple Gadgets - Level- 5, Block- A, Shop- 4-5. Bashundhara City Shopping Complex</p>
                    <p className="mt-1 text-gray-500">Level- 5, Block- A, Shop- 4-5</p>
                  </div>
                </a>
                <a className="flex" href="/outlet/jamuna-future-park">
                  <svg className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 0.740723C3.37032 0.740723 0.4375 3.71127 0.4375 7.36371C0.4375 9.4598 1.27332 11.0949 2.87694 12.516C3.92025 13.4405 5.79441 15.4062 6.51971 16.5959C6.62019 16.7607 6.79817 16.8625 6.99118 16.8656C7.18419 16.8686 7.36528 16.7724 7.47087 16.6108C8.24306 15.4292 10.0898 13.4316 11.1231 12.516C12.7267 11.0949 13.5625 9.4598 13.5625 7.36371C13.5625 3.71127 10.6297 0.740723 7 0.740723ZM7.02637 9.92822C8.47611 9.92822 9.65137 8.75297 9.65137 7.30322C9.65137 5.85348 8.47611 4.67822 7.02637 4.67822C5.57662 4.67822 4.40137 5.85348 4.40137 7.30322C4.40137 8.75297 5.57662 9.92822 7.02637 9.92822Z" fill="#F9C078" />
                  </svg>
                  <div className="ml-2">
                    <p className={"\x74ext-base \x66ont-medium"}>Apple Gadgets - Level 4, Zone A (West Court), Shop 28D, Jamuna Future Park</p>
                    <p className="mt-1 text-gray-500">Level 4, Zone A (West Court), Shop 28D</p>
                  </div>
                </a>
                <a className={"inline-block \x74ext-sm pl-6 \x66ont-medium text-orange-500 \x68over:\x75nderline"} href="/outlet">See All Outlet</a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className={"\x74ext-sm \x66ont-semibold text-gray-500 mb-3 [&]:uppercase"}>About Us</p>
              <div className="flex flex-col gap-3">
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/about-us">About Us</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/corporate">Corporate</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/tracking">Order Tracking</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/blog">Blog</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/press-coverage">Press Coverage</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/career">Careers</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/feedback">Complain / Advice</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/contact-us">Contact Us</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/faq?q=15">FAQs</a>
              </div>
            </div>
            <div>
              <p className={"\x74ext-sm \x66ont-semibold text-gray-500 mb-3 [&]:uppercase"}>Policy</p>
              <div className="flex flex-col gap-3">
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/privacy-policy">Privacy Policy</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/emi-policy">EMI and Payment Policy</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/warranty-policy">Warranty Policy</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/exchange-policy">Exchange Policy</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/delivery-terms-and-conditions">Delivery Policy</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/page-c55c6e410fa1e482">Pre-Order Policy</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/refund-policy">Refund Policy</a>
                <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/page/apple-gadgets-return-policy">Return Policy</a>
              </div>
            </div>
          </div>
        </div>
        <div className={"\x6dy-12 \x70y-6 \x62order-y \x62order-y-gray-800 flex flex-col \x6dd:\x66lex-row justify-between \x6cg:\x69tems-center relative z-10"}>
          <div className={"mt-4 \x6dd:\x6dt-0 \x73pace-y-0.\x35 \x6frder-2 \x6dd:\x6frder-1"}>
            <p className={"\x74ext-sm text-gray-400"}>© 2026 Apple Gadgets. All Rights Reserved.</p>
            <a className={"\x74ext-sm text-gray-400"} href="https://www.wenextlab.com" target="_blank">Developed by{" "}<span className={"\x66ont-medium text-orange-500 underline [text-underline-offset:2px]"}>Nextlab</span></a>
          </div>
          <div className={"flex \x73pace-x-3 \x6frder-1 \x6dd:\x6frder-2"}>
            <a className={"\x62g-green-500 text-white p-2 rounded-full flex items-center justify-center"} href="https://wa.me/+8801711105888?text=Hi, is there anyone to assist me?" target="_blank">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.49985 0.541326C4.5523 0.541326 0.541518 4.55211 0.541518 9.49966C0.541518 10.7337 0.791411 11.9111 1.24395 12.9825C1.36266 13.2636 1.44269 13.4536 1.49614 13.5995C1.55067 13.7484 1.55832 13.8022 1.55928 13.8161C1.5647 13.8944 1.5449 14.0008 1.40977 14.5058L0.562756 17.6714C0.505063 17.8871 0.566743 18.1171 0.724576 18.2749C0.88241 18.4328 1.11244 18.4944 1.32806 18.4368L4.49371 17.5897C4.99873 17.4546 5.10513 17.4348 5.18339 17.4402C5.19727 17.4412 5.25112 17.4488 5.4 17.5034C5.54595 17.5568 5.73589 17.6369 6.01697 17.7556C7.08845 18.2081 8.26577 18.458 9.49985 18.458C14.4474 18.458 18.4582 14.4472 18.4582 9.49966C18.4582 4.55211 14.4474 0.541326 9.49985 0.541326ZM6.97726 4.70801L6.90004 4.70793C6.50032 4.70725 6.13158 4.70663 5.76893 4.87227C5.50547 4.99262 5.28129 5.19708 5.11805 5.40129C4.95481 5.6055 4.80475 5.8692 4.74539 6.15271C4.66403 6.54132 4.73113 6.83702 4.80291 7.15333L4.81282 7.19708C5.17492 8.80065 6.02144 10.373 7.32378 11.6754C8.62612 12.9777 10.1985 13.8242 11.8021 14.1863L11.8458 14.1963C12.1621 14.268 12.4578 14.3351 12.8465 14.2538C13.13 14.1944 13.3937 14.0443 13.5979 13.8811C13.8021 13.7179 14.0065 13.4937 14.1269 13.2302C14.2925 12.8676 14.2919 12.4988 14.2912 12.0991L14.2912 12.0219C14.2912 11.8383 14.2855 11.529 14.1664 11.2431C14.0241 10.9017 13.7309 10.6202 13.2714 10.5482L13.2666 10.5475L13.266 10.5474C12.6967 10.4582 12.264 10.3903 11.9579 10.3458C11.8046 10.3236 11.6774 10.3063 11.5779 10.295C11.4961 10.2857 11.3836 10.274 11.2894 10.2795C10.8815 10.3034 10.557 10.4689 10.3057 10.6411C10.1457 10.7507 9.97193 10.8975 9.83526 11.0129L9.83525 11.0129C9.78157 11.0583 9.73362 11.0988 9.69449 11.1303C9.43623 11.3382 9.30711 11.4422 9.14752 11.4516C9.12115 11.4532 9.08951 11.4524 9.06326 11.4495C8.90436 11.4319 8.79013 11.33 8.56166 11.126C8.4415 11.0188 8.32342 10.9073 8.20766 10.7915C8.0919 10.6757 7.98038 10.5577 7.87312 10.4375L7.87311 10.4375C7.66918 10.209 7.56722 10.0948 7.5497 9.93591C7.5468 9.90965 7.546 9.87801 7.54755 9.85164C7.55698 9.69205 7.66094 9.56293 7.86888 9.30468C7.90037 9.26556 7.94085 9.21763 7.98617 9.16398L7.98622 9.16391L7.98623 9.1639C8.10166 9.02723 8.24845 8.85344 8.35805 8.6935C8.53028 8.44218 8.69576 8.11771 8.71964 7.70974C8.72515 7.6156 8.71347 7.50305 8.70418 7.42126C8.69287 7.32175 8.6756 7.19455 8.65332 7.04129C8.60881 6.73509 8.54098 6.30226 8.45172 5.73274L8.4517 5.73259L8.45169 5.73254L8.45095 5.7278C8.37893 5.26826 8.09749 4.9751 7.75601 4.8328C7.47017 4.71368 7.1609 4.70801 6.97726 4.70801Z" fill="currentColor" />
              </svg>
              <span className={"\x74ext-xs ml-1.5"}>WhatsApp</span>
            </a>
            <a className={"text-white \x62order \x62order-gray-400 \x68over:\x62order-transparent rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center \x68over:\x74ransition-colors \x68over:\x62g-[#\x31877F2]"} href="https://www.facebook.com/applegadgetsltd" target="_blank">
              <span className={"\x73r-only [clip:rect(0px,0px,0px,0px)]"}>Facebook</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.09589 9.88026C4.10358 9.88026 3.89648 10.0693 3.89648 10.9752V12.6175C3.89648 13.5234 4.10358 13.7124 5.09589 13.7124H7.4947V20.2819C7.4947 21.1877 7.7018 21.3768 8.6941 21.3768H11.0929C12.0852 21.3768 12.2923 21.1877 12.2923 20.2819V13.7124H14.9858C15.7384 13.7124 15.9323 13.5789 16.1391 12.9183L16.6531 11.276C17.0073 10.1444 16.789 9.88026 15.4999 9.88026H12.2923V7.14299C12.2923 6.53829 12.8293 6.04809 13.4917 6.04809H16.9054C17.8977 6.04809 18.1048 5.85903 18.1048 4.95318V2.76336C18.1048 1.85751 17.8977 1.66846 16.9054 1.66846H13.4917C10.1797 1.66846 7.4947 4.11949 7.4947 7.14299V9.88026H5.09589Z" fill="white" />
              </svg>
            </a>
            <a className={"\x62order \x62order-gray-400 \x68over:\x62order-transparent transition-colors \x68over:\x62g-[#\x451306C] text-white rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center"} href="https://www.instagram.com/applegadgetsltd/" target="_blank">
              <span className={"\x73r-only [clip:rect(0px,0px,0px,0px)]"}>Instagram</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.34 6.06596C17.1027 6.06596 16.8707 6.13634 16.6733 6.26819C16.476 6.40005 16.3222 6.58747 16.2313 6.80674C16.1405 7.02601 16.1168 7.26729 16.1631 7.50007C16.2094 7.73284 16.3236 7.94666 16.4915 8.11449C16.6593 8.28231 16.8731 8.3966 17.1059 8.4429C17.3387 8.4892 17.5799 8.46544 17.7992 8.37461C18.0185 8.28379 18.2059 8.12998 18.3378 7.93264C18.4696 7.7353 18.54 7.50329 18.54 7.26596C18.54 6.9477 18.4136 6.64247 18.1885 6.41743C17.9635 6.19239 17.6583 6.06596 17.34 6.06596ZM21.94 8.48596C21.9206 7.65626 21.7652 6.83536 21.48 6.05596C21.2257 5.38909 20.83 4.78524 20.32 4.28596C19.8248 3.77338 19.2196 3.38013 18.55 3.13596C17.7727 2.84212 16.9508 2.68317 16.12 2.66596C15.06 2.60596 14.72 2.60596 12 2.60596C9.28 2.60596 8.94 2.60596 7.88 2.66596C7.04915 2.68317 6.22734 2.84212 5.45 3.13596C4.78168 3.38261 4.17693 3.77552 3.68 4.28596C3.16743 4.78113 2.77418 5.3864 2.53 6.05596C2.23616 6.8333 2.07721 7.65511 2.06 8.48596C2 9.54596 2 9.88596 2 12.606C2 15.326 2 15.666 2.06 16.726C2.07721 17.5568 2.23616 18.3786 2.53 19.156C2.77418 19.8255 3.16743 20.4308 3.68 20.926C4.17693 21.4364 4.78168 21.8293 5.45 22.076C6.22734 22.3698 7.04915 22.5287 7.88 22.546C8.94 22.606 9.28 22.606 12 22.606C14.72 22.606 15.06 22.606 16.12 22.546C16.9508 22.5287 17.7727 22.3698 18.55 22.076C19.2196 21.8318 19.8248 21.4385 20.32 20.926C20.8322 20.4285 21.2283 19.8242 21.48 19.156C21.7652 18.3766 21.9206 17.5557 21.94 16.726C21.94 15.666 22 15.326 22 12.606C22 9.88596 22 9.54596 21.94 8.48596ZM20.14 16.606C20.1327 17.2407 20.0178 17.8697 19.8 18.466C19.6403 18.9012 19.3839 19.2944 19.05 19.616C18.7256 19.9465 18.3332 20.2024 17.9 20.366C17.3037 20.5837 16.6748 20.6987 16.04 20.706C15.04 20.756 14.67 20.766 12.04 20.766C9.41 20.766 9.04 20.766 8.04 20.706C7.38089 20.7183 6.72459 20.6168 6.1 20.406C5.68578 20.234 5.31136 19.9787 5 19.656C4.66809 19.3347 4.41484 18.9411 4.26 18.506C4.01586 17.9011 3.88044 17.2579 3.86 16.606C3.86 15.606 3.8 15.236 3.8 12.606C3.8 9.97596 3.8 9.60596 3.86 8.60596C3.86448 7.95701 3.98295 7.3139 4.21 6.70596C4.38605 6.28387 4.65627 5.90762 5 5.60596C5.30381 5.26213 5.67929 4.98905 6.1 4.80596C6.70955 4.586 7.352 4.47104 8 4.46596C9 4.46596 9.37 4.40596 12 4.40596C14.63 4.40596 15 4.40596 16 4.46596C16.6348 4.47324 17.2637 4.5882 17.86 4.80596C18.3144 4.97461 18.7223 5.2488 19.05 5.60596C19.3777 5.91314 19.6338 6.28869 19.8 6.70596C20.0223 7.31489 20.1373 7.95774 20.14 8.60596C20.19 9.60596 20.2 9.97596 20.2 12.606C20.2 15.236 20.19 15.606 20.14 16.606ZM12 7.47596C10.9858 7.47793 9.99496 7.78048 9.15265 8.34538C8.31035 8.91027 7.65438 9.71215 7.26763 10.6497C6.88089 11.5873 6.78072 12.6184 6.97979 13.6129C7.17886 14.6073 7.66824 15.5205 8.38608 16.2369C9.10392 16.9534 10.018 17.441 11.0129 17.6381C12.0077 17.8352 13.0387 17.7331 13.9755 17.3445C14.9123 16.9559 15.7129 16.2984 16.2761 15.455C16.8394 14.6116 17.14 13.6201 17.14 12.606C17.1413 11.9311 17.0092 11.2626 16.7512 10.6389C16.4933 10.0153 16.1146 9.44877 15.6369 8.97201C15.1592 8.49525 14.5919 8.11764 13.9678 7.86089C13.3436 7.60414 12.6749 7.47332 12 7.47596ZM12 15.936C11.3414 15.936 10.6976 15.7407 10.15 15.3748C9.60234 15.0088 9.17552 14.4888 8.92348 13.8803C8.67144 13.2718 8.6055 12.6023 8.73398 11.9563C8.86247 11.3103 9.17963 10.717 9.64533 10.2513C10.111 9.78558 10.7044 9.46843 11.3503 9.33994C11.9963 9.21145 12.6659 9.2774 13.2743 9.52944C13.8828 9.78148 14.4029 10.2083 14.7688 10.7559C15.1347 11.3035 15.33 11.9473 15.33 12.606C15.33 13.0433 15.2439 13.4763 15.0765 13.8803C14.9092 14.2843 14.6639 14.6514 14.3547 14.9606C14.0454 15.2698 13.6784 15.5151 13.2743 15.6825C12.8703 15.8498 12.4373 15.936 12 15.936Z" fill="white" />
              </svg>
            </a>
            <a className={"\x62order \x62order-gray-400 \x68over:\x62order-transparent transition-colors \x68over:\x62g-[#\x30077B5] text-white rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center"} href="https://www.linkedin.com/company/applegadgets/" target="_blank">
              <span className={"\x73r-only [clip:rect(0px,0px,0px,0px)]"}>LinkedIn</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6004 22.2027V15.1707C21.6004 11.7147 20.8564 9.07471 16.8244 9.07471C14.8804 9.07471 13.5844 10.1307 13.0564 11.1387H13.0084V9.38671H9.19238V22.2027H13.1764V15.8427C13.1764 14.1627 13.4884 12.5547 15.5524 12.5547C17.5924 12.5547 17.6164 14.4507 17.6164 15.9387V22.1787H21.6004V22.2027Z" fill="white" />
                <path d="M2.71289 9.38721H6.69689V22.2032H2.71289V9.38721Z" fill="white" />
                <path d="M4.70439 3.00439C3.43239 3.00439 2.40039 4.03639 2.40039 5.30839C2.40039 6.58039 3.43239 7.63639 4.70439 7.63639C5.97639 7.63639 7.00839 6.58039 7.00839 5.30839C7.00839 4.03639 5.97639 3.00439 4.70439 3.00439Z" fill="white" />
              </svg>
            </a>
            <a className={"\x62order \x62order-gray-400 \x68over:\x62order-transparent transition-colors \x68over:\x62g-red-500 text-white rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center"} href="https://www.youtube.com/@AppleGadgetsLtd">
              <span className={"\x73r-only [clip:rect(0px,0px,0px,0px)]"}>YouTube</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M11.9996 4C11.9996 4 4.48791 4.00004 2.60984 4.49427C1.60161 4.77104 0.771037 5.60154 0.494268 6.62953C3.86211e-05 8.5076 0 12.4019 0 12.4019C0 12.4019 3.86211e-05 16.316 0.494268 18.1743C0.771037 19.2023 1.58184 20.0131 2.60984 20.2898C4.50768 20.8038 11.9996 20.8038 11.9996 20.8038C11.9996 20.8038 19.512 20.8038 21.3901 20.3095C22.4181 20.0328 23.2289 19.222 23.5056 18.194C23.9999 16.3159 23.9999 12.4216 23.9999 12.4216C23.9999 12.4216 24.0196 8.5076 23.5056 6.62953C23.2289 5.60154 22.4181 4.79073 21.3901 4.51396C19.512 3.99996 11.9996 4 11.9996 4ZM9.60771 8.80418L15.8547 12.4019L9.60771 15.9996V8.80418Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
        <div className={"grid grid-cols-2 \x6dd:\x67rid-cols-3 \x32xl:\x67rid-cols-6 gap-6 relative z-10"}>
          <div>
            <p className={"\x74ext-sm \x66ont-semibold text-gray-500 \x6cg:\x74ext-white mb-3 [&]:uppercase"}>Mobile Phones</p>
            <div className="flex flex-col gap-3">
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/iphone">iPhone</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/samsung-mobile-phone">Samsung</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/google-mobile-phone">Google</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/motorola-mobile-phone">Motorola</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/xiaomi-mobile-phone">Xiaomi</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/iqoo-mobile-phone">iQOO</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/vivo-mobile-phone">Vivo</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/honor-mobile-phone">Honor</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/nothing-mobile-phone">Nothing</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/huawei-mobile-phone">Huawei</a>
            </div>
          </div>
          <div>
            <p className={"\x74ext-sm \x66ont-semibold text-gray-500 \x6cg:\x74ext-white mb-3 [&]:uppercase"}>Accessories</p>
            <div className="flex flex-col gap-3">
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/earbuds">Earbuds</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/earphone">Earphone</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/neckband">Neckband</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/headphone">Headphone</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/speakers">Speakers</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/power-bank">Power Bank</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/smart-watch">Smart Watch</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/mobile-charger">Mobile Charger</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/wireless-charger">Wireless Charger</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/projector">Projector</a>
            </div>
          </div>
          <div>
            <p className={"\x74ext-sm \x66ont-semibold text-gray-500 \x6cg:\x74ext-white mb-3 [&]:uppercase"}>Trending</p>
            <div className="flex flex-col gap-3">
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/ip-camera">IP Camera</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/graphics-card">Graphics Card</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/motherboard">Motherboard</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/monitor">Monitor</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/processor">Processor</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/keyboards">Keyboard</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/mouse">Mouse</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/power-supply">Power Supply</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/ram">RAM</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/storage/nas">NAS</a>
            </div>
          </div>
          <div>
            <p className={"\x74ext-sm \x66ont-semibold text-gray-500 \x6cg:\x74ext-white mb-3 [&]:uppercase"}>Best-Selling</p>
            <div className="flex flex-col gap-3">
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/macbook">MacBook</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/imac">iMac</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/ipad">iPad</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/airpods">AirPods</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/cable/lightning">Lightning Cable</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/phone-cooler">Phone Cooler</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/adapter">Adapter</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/trimmer">Trimmer</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/charger-fan">Charger Fan</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/geyser">Geyser</a>
            </div>
          </div>
          <div>
            <p className={"\x74ext-sm \x66ont-semibold text-gray-500 \x6cg:\x74ext-white mb-3 [&]:uppercase"}>Home-Appliances</p>
            <div className="flex flex-col gap-3">
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/tv">TV</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/induction-cooker">Induction Cooker</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/air-fryer">Air Fryer</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/kitchen-appliances">Kitchen Appliances</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/oven">Microwave Oven</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/air-conditioner">Air Conditioner</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/refrigerator">Refrigerator &amp; Freezer</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/washing-machine">Washing Machine</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/solar-panel">Solar Panel</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/category/water-purifier">Water Purifier</a>
            </div>
          </div>
          <div>
            <p className={"\x74ext-sm \x66ont-semibold text-gray-500 \x6cg:\x74ext-white mb-3 [&]:uppercase"}>Top-Brands</p>
            <div className="flex flex-col gap-3">
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/apple">Apple</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/samsung">Samsung</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/honor">Honor</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/oraimo">Oraimo</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/jbl">JBL</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/qcy">QCY</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/amazfit">Amazfit</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/anker">Anker</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/boat">boAt</a>
              <a className={"\x74ext-sm \x6cg:\x74ext-base \x66ont-medium \x32xl:\x77-max text-white \x6cg:\x74ext-gray-600 \x68over:\x74ext-white transition-colors"} href="/brands/sony">Sony</a>
            </div>
          </div>
        </div>
        <figure className={"absolute inset-0 h-20 \x6dd:\x68-56 z-0 [&]:self-end"}>
          <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="footer-bg" loading="lazy" decoding="async" sizes="100vw" srcSet="/site-assets/ee124756b95513db.webp 1920w, /site-assets/ee124756b95513db.webp 3840w" src="/site-assets/ee124756b95513db.webp" />
        </figure>
      </div>
      <div className={"fixed bottom-24 \x6dd:\x62ottom-20 right-3 \x6dd:\x72ight-10 z-20"} />
    </footer>
  );
}
