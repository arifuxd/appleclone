import { Header as ImportedHeader } from "../components/Header";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/pre-order.css?raw";

export const Route = createFileRoute("/pre-order")({
  head: () => ({ meta: [{ title: "Pre Order AppleGadgets" }] }),
  staticData: { importedDocument: { html: { "className": "__variable_0ad60f __variable_1ffc5a", "lang": "en" }, body: { "className": "", "data-site-import-popup-incomplete": "limit" } } },
  component: Index,
});

function Index() {
  const [showPromo, setShowPromo] = useState(true);
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
          <div className={"\x62g-white \x66ont-bold rounded-full relative w-10 h-10 flex items-center [&]:justify-center"}>
            <img className="p-1" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="logo" loading="lazy" decoding="async" sizes="100vw" srcSet="/site-assets/9b6b4f065c6400e9.bin 640w, /site-assets/9b6b4f065c6400e9.bin 750w, /site-assets/9b6b4f065c6400e9.bin 828w, /site-assets/9b6b4f065c6400e9.bin 1080w, /site-assets/9b6b4f065c6400e9.bin 1200w, /site-assets/9b6b4f065c6400e9.bin 1920w, /site-assets/9b6b4f065c6400e9.bin 2048w, /site-assets/9b6b4f065c6400e9.bin 3840w" src="/site-assets/9b6b4f065c6400e9.bin" />
          </div>
          <div className="flex-1">
            <p className={"\x74ext-xs"}>Enjoy BDT 300 Off Instantly!</p>
            <p className={"text-[11px] \x6ceading-[\x314px] text-gray-600"}>Download our app and save BDT 300 on purchases over BDT 5000!</p>
          </div>
          <a className={"text-white \x62g-orange-500 \x66ont-medium \x70y-1.\x35 \x70x-4 rounded-full \x74ext-sm"} href="https://cutt.ly/ag-app">Open</a>
        </div>
      </div>
      <ImportedHeader />
      <main className="mt-8">
        <div className={"\x6dx-4 \x6dd:\x6dx-auto [@media(min-width:768px)]:max-w-[660px]"}>
          <h2 className={"\x74ext-2xl \x6cg:\x74ext-7xl \x66ont-bold text-gray-900 [&]:text-center"}>Looking for Somethings Different?</h2>
          <form className={"\x73pace-y-5 mt-5 \x6dd:\x6dt-8"}>
            <div className={"\x73pace-y-1.\x35"}>
              <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70 block"} htmlFor="_R_2pav5ubrktb_-form-item">Product Information <span className="text-red-500">*</span></label>
              <input className={"h-10 w-full rounded-md \x62order \x62order-gray-400 \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50"} placeholder="Enter product name/URL" id="_R_2pav5ubrktb_-form-item" aria-describedby="_R_2pav5ubrktb_-form-item-description" aria-invalid="false" name="product_info" defaultValue="" />
            </div>
            <div className={"\x73pace-y-1.\x35"}>
              <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70 block"} htmlFor="_R_4pav5ubrktb_-form-item">Your Name <span className="text-red-500">*</span></label>
              <input className={"h-10 w-full rounded-md \x62order \x62order-gray-400 \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50"} placeholder="Enter your name" id="_R_4pav5ubrktb_-form-item" aria-describedby="_R_4pav5ubrktb_-form-item-description" aria-invalid="false" name="customer_name" defaultValue="" />
            </div>
            <div className={"\x73pace-y-1.\x35 w-full"}>
              <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70 block"} htmlFor="_R_6pav5ubrktb_-form-item">Email <span className="text-red-500">*</span></label>
              <input className={"h-10 w-full rounded-md \x62order \x62order-gray-400 \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50"} placeholder="Enter Email" id="_R_6pav5ubrktb_-form-item" aria-describedby="_R_6pav5ubrktb_-form-item-description" aria-invalid="false" name="customer_email" defaultValue="" />
            </div>
            <div className="flex items-end gap-2.5">
              <div className={"\x73pace-y-1.\x35 w-full"}>
                <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70 block"} htmlFor="_R_18pav5ubrktb_-form-item">Phone Number <span className="text-red-500">*</span></label>
                <input className={"h-10 w-full rounded-md \x62order \x62order-gray-400 \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50"} placeholder="Enter Phone Number" id="_R_18pav5ubrktb_-form-item" aria-describedby="_R_18pav5ubrktb_-form-item-description" aria-invalid="false" name="customer_phone" defaultValue="" />
              </div>
              <button className={"\x62g-orange-500 text-white \x74ext-xs \x66ont-semibold \x70x-4 \x70y-3 rounded-lg \x64isabled:\x63ursor-not-allowed \x64isabled:\x62g-orange-400/\x380 mb-0 [&]:whitespace-nowrap"} type="button">Send OTP</button>
            </div>
            <div className={"\x73pace-y-1.\x35"}>
              <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70 block"} htmlFor="_R_cpav5ubrktb_-form-item">Address</label>
              <input className={"h-10 w-full rounded-md \x62order \x62order-gray-400 \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50"} placeholder="Enter address" id="_R_cpav5ubrktb_-form-item" aria-describedby="_R_cpav5ubrktb_-form-item-description" aria-invalid="false" name="customer_address" defaultValue="" />
            </div>
            <div className={"\x73pace-y-1.\x35"}>
              <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70 block"} htmlFor="_R_epav5ubrktb_-form-item">Upload Product Image <span className="text-red-500">*</span></label>
              <div className={"\x73pace-y-2 h-full"}>
                <div className="h-full">
                  <label className={"relative flex flex-col items-center p-4 \x62order-2 \x62order-dashed rounded-lg cursor-pointer \x62g-white w-full transition-colors \x62order-gray-300 [&]:justify-center"} htmlFor="dropzone-file">
                    <div className={"[&]:text-center"}>
                      <div className={"p-2.5 \x62g-gray-200 \x62order \x62order-gray-200 rounded-full \x6dx-auto [max-width:min-content]"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 13v8" />
                          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                          <path d="m8 17 4-4 4 4" />
                        </svg>
                      </div>
                      <p className={"\x74ext-sm text-gray-900 mt-3"}><span className={"text-orange-500 \x66ont-semibold"}>Click to upload</span> or drag and drop</p>
                      <p className={"\x74ext-xs text-gray-500 mt-2"}>JPG, or PNG · Max 5 MB</p>
                    </div>
                  </label>
                  <input className={"h-10 w-full rounded-md \x62order \x62order-gray-400 \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 hidden"} type="file" id="dropzone-file" accept=".jpg,.png" />
                </div>
              </div>
            </div>
            <div className={"\x73pace-y-1.\x35 flex gap-1.5"}>
              <input className={"rounded-md \x62order \x62order-gray-400 \x62g-background \x70x-3 \x70y-2 \x74ext-sm \x72ing-offset-background \x66ile:\x62order-0 \x66ile:\x62g-transparent \x66ile:\x74ext-sm \x66ile:\x66ont-medium \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x63ursor-not-allowed disabled:opacity-50 size-4.5 [accent-color:rgb(242,127,32)] [&:hover]:[accent-color:rgb(242,127,32)]"} type="checkbox" id="_R_gpav5ubrktb_-form-item" aria-describedby="_R_gpav5ubrktb_-form-item-description" aria-invalid="false" />
              <label className={"\x74ext-sm \x66ont-medium \x6ceading-none \x70eer-disabled:\x63ursor-not-allowed \x70eer-disabled:\x6fpacity-70 !\x6dt-0 text-gray-700"} htmlFor="_R_gpav5ubrktb_-form-item">I hereby accept the terms and conditions of pre-order and read the{" "}<a className="underline" href="/page/page-c55c6e410fa1e482" target="_blank">pre-order terms and conditions</a>{" "}carefully.</label>
            </div>
            <button className={"\x64isabled:\x63ursor-not-allowed \x74ext-sm \x66ont-medium transition-colors \x66ocus-visible:\x6futline-none \x66ocus-visible:\x72ing-1 \x64isabled:\x70ointer-events-none disabled:opacity-50 [&\x5fsvg]:\x70ointer-events-none \x62g-orange-500 text-white \x73hadow h-9 \x70x-4 \x70y-2 rounded-lg inline-flex items-center w-full rounded-quarter [&]:justify-center [&]:whitespace-nowrap"} disabled type="submit">Submit</button>
          </form>
        </div>
      </main>
      <ImportedFooter />
      {showPromo && (
        <div
          className={"\x62g-black/\x340 \x62ackdrop-blur-sm fixed inset-0 z-[100] grid place-items-center cursor-pointer [overflow-y:auto]"}
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

function ImportedFooter() {
  return (
    <footer className={"\x62g-black \x70rint:\x68idden text-white mt-20 pt-12 mb-15 \x6dd:\x6db-0"}>
      <div className={"\x63ontainer relative pb-12 \x6dd:\x70b-20 overflow-hidden [@media(min-width:1440px)]:max-w-[1440px]"}>
        <div className="grid gap-6 [@media(min-width:1200px)]:grid-cols-[1fr_520px]">
          <div className="grid gap-6 [@media(min-width:768px)]:[grid-template-columns:repeat(2,minmax(0px,1fr))]">
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
          <div className="grid gap-6 [grid-template-columns:repeat(2,minmax(0px,1fr))]">
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
        <div className={"\x6dy-12 \x70y-6 \x62order-y \x62order-y-gray-800 flex flex-col \x6dd:\x66lex-row \x6cg:\x69tems-center relative z-10 [&]:justify-between"}>
          <div className={"mt-4 \x6dd:\x6dt-0 \x73pace-y-0.\x35 \x6frder-2 \x6dd:\x6frder-1"}>
            <p className={"\x74ext-sm text-gray-400"}>© 2026 Apple Gadgets. All Rights Reserved.</p>
            <a className={"\x74ext-sm text-gray-400"} href="https://www.wenextlab.com" target="_blank">Developed by{" "}<span className={"\x66ont-medium text-orange-500 underline [text-underline-offset:2px]"}>Nextlab</span></a>
          </div>
          <div className={"flex \x73pace-x-3 \x6frder-1 \x6dd:\x6frder-2"}>
            <a className={"\x62g-green-500 text-white p-2 rounded-full flex items-center [&]:justify-center"} href="https://wa.me/+8801711105888?text=Hi, is there anyone to assist me?" target="_blank">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.49985 0.541326C4.5523 0.541326 0.541518 4.55211 0.541518 9.49966C0.541518 10.7337 0.791411 11.9111 1.24395 12.9825C1.36266 13.2636 1.44269 13.4536 1.49614 13.5995C1.55067 13.7484 1.55832 13.8022 1.55928 13.8161C1.5647 13.8944 1.5449 14.0008 1.40977 14.5058L0.562756 17.6714C0.505063 17.8871 0.566743 18.1171 0.724576 18.2749C0.88241 18.4328 1.11244 18.4944 1.32806 18.4368L4.49371 17.5897C4.99873 17.4546 5.10513 17.4348 5.18339 17.4402C5.19727 17.4412 5.25112 17.4488 5.4 17.5034C5.54595 17.5568 5.73589 17.6369 6.01697 17.7556C7.08845 18.2081 8.26577 18.458 9.49985 18.458C14.4474 18.458 18.4582 14.4472 18.4582 9.49966C18.4582 4.55211 14.4474 0.541326 9.49985 0.541326ZM6.97726 4.70801L6.90004 4.70793C6.50032 4.70725 6.13158 4.70663 5.76893 4.87227C5.50547 4.99262 5.28129 5.19708 5.11805 5.40129C4.95481 5.6055 4.80475 5.8692 4.74539 6.15271C4.66403 6.54132 4.73113 6.83702 4.80291 7.15333L4.81282 7.19708C5.17492 8.80065 6.02144 10.373 7.32378 11.6754C8.62612 12.9777 10.1985 13.8242 11.8021 14.1863L11.8458 14.1963C12.1621 14.268 12.4578 14.3351 12.8465 14.2538C13.13 14.1944 13.3937 14.0443 13.5979 13.8811C13.8021 13.7179 14.0065 13.4937 14.1269 13.2302C14.2925 12.8676 14.2919 12.4988 14.2912 12.0991L14.2912 12.0219C14.2912 11.8383 14.2855 11.529 14.1664 11.2431C14.0241 10.9017 13.7309 10.6202 13.2714 10.5482L13.2666 10.5475L13.266 10.5474C12.6967 10.4582 12.264 10.3903 11.9579 10.3458C11.8046 10.3236 11.6774 10.3063 11.5779 10.295C11.4961 10.2857 11.3836 10.274 11.2894 10.2795C10.8815 10.3034 10.557 10.4689 10.3057 10.6411C10.1457 10.7507 9.97193 10.8975 9.83526 11.0129L9.83525 11.0129C9.78157 11.0583 9.73362 11.0988 9.69449 11.1303C9.43623 11.3382 9.30711 11.4422 9.14752 11.4516C9.12115 11.4532 9.08951 11.4524 9.06326 11.4495C8.90436 11.4319 8.79013 11.33 8.56166 11.126C8.4415 11.0188 8.32342 10.9073 8.20766 10.7915C8.0919 10.6757 7.98038 10.5577 7.87312 10.4375L7.87311 10.4375C7.66918 10.209 7.56722 10.0948 7.5497 9.93591C7.5468 9.90965 7.546 9.87801 7.54755 9.85164C7.55698 9.69205 7.66094 9.56293 7.86888 9.30468C7.90037 9.26556 7.94085 9.21763 7.98617 9.16398L7.98622 9.16391L7.98623 9.1639C8.10166 9.02723 8.24845 8.85344 8.35805 8.6935C8.53028 8.44218 8.69576 8.11771 8.71964 7.70974C8.72515 7.6156 8.71347 7.50305 8.70418 7.42126C8.69287 7.32175 8.6756 7.19455 8.65332 7.04129C8.60881 6.73509 8.54098 6.30226 8.45172 5.73274L8.4517 5.73259L8.45169 5.73254L8.45095 5.7278C8.37893 5.26826 8.09749 4.9751 7.75601 4.8328C7.47017 4.71368 7.1609 4.70801 6.97726 4.70801Z" fill="currentColor" />
              </svg>
              <span className={"\x74ext-xs ml-1.5"}>WhatsApp</span>
            </a>
            <a className={"text-white \x62order \x62order-gray-400 \x68over:\x62order-transparent rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center \x68over:\x74ransition-colors \x68over:\x62g-[#\x31877F2]"} href="https://www.facebook.com/applegadgetsltd" target="_blank">
              <span className={"\x73r-only [&]:whitespace-nowrap [clip:rect(0px,0px,0px,0px)] [overflow:hidden]"}>Facebook</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.09589 9.88026C4.10358 9.88026 3.89648 10.0693 3.89648 10.9752V12.6175C3.89648 13.5234 4.10358 13.7124 5.09589 13.7124H7.4947V20.2819C7.4947 21.1877 7.7018 21.3768 8.6941 21.3768H11.0929C12.0852 21.3768 12.2923 21.1877 12.2923 20.2819V13.7124H14.9858C15.7384 13.7124 15.9323 13.5789 16.1391 12.9183L16.6531 11.276C17.0073 10.1444 16.789 9.88026 15.4999 9.88026H12.2923V7.14299C12.2923 6.53829 12.8293 6.04809 13.4917 6.04809H16.9054C17.8977 6.04809 18.1048 5.85903 18.1048 4.95318V2.76336C18.1048 1.85751 17.8977 1.66846 16.9054 1.66846H13.4917C10.1797 1.66846 7.4947 4.11949 7.4947 7.14299V9.88026H5.09589Z" fill="white" />
              </svg>
            </a>
            <a className={"\x62order \x62order-gray-400 \x68over:\x62order-transparent transition-colors \x68over:\x62g-[#\x451306C] text-white rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center"} href="https://www.instagram.com/applegadgetsltd/" target="_blank">
              <span className={"\x73r-only [&]:whitespace-nowrap [clip:rect(0px,0px,0px,0px)] [overflow:hidden]"}>Instagram</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.34 6.06596C17.1027 6.06596 16.8707 6.13634 16.6733 6.26819C16.476 6.40005 16.3222 6.58747 16.2313 6.80674C16.1405 7.02601 16.1168 7.26729 16.1631 7.50007C16.2094 7.73284 16.3236 7.94666 16.4915 8.11449C16.6593 8.28231 16.8731 8.3966 17.1059 8.4429C17.3387 8.4892 17.5799 8.46544 17.7992 8.37461C18.0185 8.28379 18.2059 8.12998 18.3378 7.93264C18.4696 7.7353 18.54 7.50329 18.54 7.26596C18.54 6.9477 18.4136 6.64247 18.1885 6.41743C17.9635 6.19239 17.6583 6.06596 17.34 6.06596ZM21.94 8.48596C21.9206 7.65626 21.7652 6.83536 21.48 6.05596C21.2257 5.38909 20.83 4.78524 20.32 4.28596C19.8248 3.77338 19.2196 3.38013 18.55 3.13596C17.7727 2.84212 16.9508 2.68317 16.12 2.66596C15.06 2.60596 14.72 2.60596 12 2.60596C9.28 2.60596 8.94 2.60596 7.88 2.66596C7.04915 2.68317 6.22734 2.84212 5.45 3.13596C4.78168 3.38261 4.17693 3.77552 3.68 4.28596C3.16743 4.78113 2.77418 5.3864 2.53 6.05596C2.23616 6.8333 2.07721 7.65511 2.06 8.48596C2 9.54596 2 9.88596 2 12.606C2 15.326 2 15.666 2.06 16.726C2.07721 17.5568 2.23616 18.3786 2.53 19.156C2.77418 19.8255 3.16743 20.4308 3.68 20.926C4.17693 21.4364 4.78168 21.8293 5.45 22.076C6.22734 22.3698 7.04915 22.5287 7.88 22.546C8.94 22.606 9.28 22.606 12 22.606C14.72 22.606 15.06 22.606 16.12 22.546C16.9508 22.5287 17.7727 22.3698 18.55 22.076C19.2196 21.8318 19.8248 21.4385 20.32 20.926C20.8322 20.4285 21.2283 19.8242 21.48 19.156C21.7652 18.3766 21.9206 17.5557 21.94 16.726C21.94 15.666 22 15.326 22 12.606C22 9.88596 22 9.54596 21.94 8.48596ZM20.14 16.606C20.1327 17.2407 20.0178 17.8697 19.8 18.466C19.6403 18.9012 19.3839 19.2944 19.05 19.616C18.7256 19.9465 18.3332 20.2024 17.9 20.366C17.3037 20.5837 16.6748 20.6987 16.04 20.706C15.04 20.756 14.67 20.766 12.04 20.766C9.41 20.766 9.04 20.766 8.04 20.706C7.38089 20.7183 6.72459 20.6168 6.1 20.406C5.68578 20.234 5.31136 19.9787 5 19.656C4.66809 19.3347 4.41484 18.9411 4.26 18.506C4.01586 17.9011 3.88044 17.2579 3.86 16.606C3.86 15.606 3.8 15.236 3.8 12.606C3.8 9.97596 3.8 9.60596 3.86 8.60596C3.86448 7.95701 3.98295 7.3139 4.21 6.70596C4.38605 6.28387 4.65627 5.90762 5 5.60596C5.30381 5.26213 5.67929 4.98905 6.1 4.80596C6.70955 4.586 7.352 4.47104 8 4.46596C9 4.46596 9.37 4.40596 12 4.40596C14.63 4.40596 15 4.40596 16 4.46596C16.6348 4.47324 17.2637 4.5882 17.86 4.80596C18.3144 4.97461 18.7223 5.2488 19.05 5.60596C19.3777 5.91314 19.6338 6.28869 19.8 6.70596C20.0223 7.31489 20.1373 7.95774 20.14 8.60596C20.19 9.60596 20.2 9.97596 20.2 12.606C20.2 15.236 20.19 15.606 20.14 16.606ZM12 7.47596C10.9858 7.47793 9.99496 7.78048 9.15265 8.34538C8.31035 8.91027 7.65438 9.71215 7.26763 10.6497C6.88089 11.5873 6.78072 12.6184 6.97979 13.6129C7.17886 14.6073 7.66824 15.5205 8.38608 16.2369C9.10392 16.9534 10.018 17.441 11.0129 17.6381C12.0077 17.8352 13.0387 17.7331 13.9755 17.3445C14.9123 16.9559 15.7129 16.2984 16.2761 15.455C16.8394 14.6116 17.14 13.6201 17.14 12.606C17.1413 11.9311 17.0092 11.2626 16.7512 10.6389C16.4933 10.0153 16.1146 9.44877 15.6369 8.97201C15.1592 8.49525 14.5919 8.11764 13.9678 7.86089C13.3436 7.60414 12.6749 7.47332 12 7.47596ZM12 15.936C11.3414 15.936 10.6976 15.7407 10.15 15.3748C9.60234 15.0088 9.17552 14.4888 8.92348 13.8803C8.67144 13.2718 8.6055 12.6023 8.73398 11.9563C8.86247 11.3103 9.17963 10.717 9.64533 10.2513C10.111 9.78558 10.7044 9.46843 11.3503 9.33994C11.9963 9.21145 12.6659 9.2774 13.2743 9.52944C13.8828 9.78148 14.4029 10.2083 14.7688 10.7559C15.1347 11.3035 15.33 11.9473 15.33 12.606C15.33 13.0433 15.2439 13.4763 15.0765 13.8803C14.9092 14.2843 14.6639 14.6514 14.3547 14.9606C14.0454 15.2698 13.6784 15.5151 13.2743 15.6825C12.8703 15.8498 12.4373 15.936 12 15.936Z" fill="white" />
              </svg>
            </a>
            <a className={"\x62order \x62order-gray-400 \x68over:\x62order-transparent transition-colors \x68over:\x62g-[#\x30077B5] text-white rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center"} href="https://www.linkedin.com/company/applegadgets/" target="_blank">
              <span className={"\x73r-only [&]:whitespace-nowrap [clip:rect(0px,0px,0px,0px)] [overflow:hidden]"}>LinkedIn</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6004 22.2027V15.1707C21.6004 11.7147 20.8564 9.07471 16.8244 9.07471C14.8804 9.07471 13.5844 10.1307 13.0564 11.1387H13.0084V9.38671H9.19238V22.2027H13.1764V15.8427C13.1764 14.1627 13.4884 12.5547 15.5524 12.5547C17.5924 12.5547 17.6164 14.4507 17.6164 15.9387V22.1787H21.6004V22.2027Z" fill="white" />
                <path d="M2.71289 9.38721H6.69689V22.2032H2.71289V9.38721Z" fill="white" />
                <path d="M4.70439 3.00439C3.43239 3.00439 2.40039 4.03639 2.40039 5.30839C2.40039 6.58039 3.43239 7.63639 4.70439 7.63639C5.97639 7.63639 7.00839 6.58039 7.00839 5.30839C7.00839 4.03639 5.97639 3.00439 4.70439 3.00439Z" fill="white" />
              </svg>
            </a>
            <a className={"\x62order \x62order-gray-400 \x68over:\x62order-transparent transition-colors \x68over:\x62g-red-500 text-white rounded-full size-8 \x6cg:\x73ize-10.\x35 grid place-items-center"} href="https://www.youtube.com/@AppleGadgetsLtd">
              <span className={"\x73r-only [&]:whitespace-nowrap [clip:rect(0px,0px,0px,0px)] [overflow:hidden]"}>YouTube</span>
              <svg className={"size-4.5 \x6cg:\x73ize-5.\x35"} width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M11.9996 4C11.9996 4 4.48791 4.00004 2.60984 4.49427C1.60161 4.77104 0.771037 5.60154 0.494268 6.62953C3.86211e-05 8.5076 0 12.4019 0 12.4019C0 12.4019 3.86211e-05 16.316 0.494268 18.1743C0.771037 19.2023 1.58184 20.0131 2.60984 20.2898C4.50768 20.8038 11.9996 20.8038 11.9996 20.8038C11.9996 20.8038 19.512 20.8038 21.3901 20.3095C22.4181 20.0328 23.2289 19.222 23.5056 18.194C23.9999 16.3159 23.9999 12.4216 23.9999 12.4216C23.9999 12.4216 24.0196 8.5076 23.5056 6.62953C23.2289 5.60154 22.4181 4.79073 21.3901 4.51396C19.512 3.99996 11.9996 4 11.9996 4ZM9.60771 8.80418L15.8547 12.4019L9.60771 15.9996V8.80418Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
        <figure className={"absolute inset-0 h-20 \x6dd:\x68-56 z-0 [&]:self-end"}>
          <img style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} alt="footer-bg" loading="lazy" decoding="async" sizes="100vw" srcSet="/site-assets/2cae60018dc7df0c.webp 640w, /site-assets/72d34208ac438aee.webp 750w, /site-assets/09530dcd5bae8f78.webp 828w, /site-assets/f7ab7af9c072065f.webp 1080w, /site-assets/9c91f797145d71a4.webp 1200w, /site-assets/ee124756b95513db.webp 1920w, /site-assets/ee124756b95513db.webp 2048w, /site-assets/ee124756b95513db.webp 3840w" src="/site-assets/ee124756b95513db.webp" />
        </figure>
      </div>
      <div className={"fixed bottom-24 \x6dd:\x62ottom-20 right-3 \x6dd:\x72ight-10 z-20"} />
    </footer>
  );
}
