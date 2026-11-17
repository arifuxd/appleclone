export function Footer() {
  return (
    <footer className={"bg-black print:hidden text-white mt-20 pt-12 mb-15 md:mb-0"}>
      <div className={"container relative pb-12 md:pb-20 overflow-hidden [@media(min-width:1440px)]:max-w-[1440px]"}>
        <div className="grid gap-6 [@media(min-width:1200px)]:grid-cols-[1fr_520px]">
          <div className="grid gap-6 [@media(min-width:768px)]:[grid-template-columns:repeat(2,minmax(0px,1fr))]">
            <div>
              <figure className="mb-6">
                <a className="flex items-center" href="/">
                  <img style={{ color: "transparent" }} alt="Apple Gadgets" loading="lazy" width="245" height="76" decoding="async" src="/site-assets/05f5714c2cbca7fc.webp" />
                </a>
              </figure>
              <div className={"space-y-3"}>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className={"text-base font-medium"}>Phone Number</span>
                </div>
                <a className={"text-gray-400 text-sm ml-6 block w-max"} href="tel:09678148148">09678148148</a>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className={"text-base font-medium"}>Email Address</span>
                </div>
                <a className={"text-gray-400 text-sm ml-6 block w-max"} href="mailto:contact@applegadgetsbd.com">contact@applegadgetsbd.com</a>
              </div>
              <div className="flex gap-3 mt-8">
                <a className={"block py-3 px-6 bg-gray-900 rounded-lg"} href="https://apps.apple.com/us/app/apple-gadgets-tech-shopping/id6738599022" target="_blank" rel="noreferrer">
                  <span className="text-xs text-gray-400 block">Download on the</span>
                  <span className="text-sm font-semibold text-white">Apple Store</span>
                </a>
                <a className={"block py-3 px-6 bg-gray-900 rounded-lg"} href="https://play.google.com/store/apps/details?id=com.agl.agl_app" target="_blank" rel="noreferrer">
                  <span className="text-xs text-gray-400 block">GET IT ON</span>
                  <span className="text-sm font-semibold text-white">Google Play</span>
                </a>
              </div>
            </div>

            <div className="flex-1">
              <p className={"text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider"}>LOCATION</p>
              <div className={"space-y-4"}>
                <a className="flex group" href="/outlet">
                  <svg className="h-4 w-4 text-orange-500 mt-1 shrink-0" width="14" height="17" viewBox="0 0 14 17" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 0.74C3.37 0.74 0.44 3.71 0.44 7.36c0 2.1 0.83 3.73 2.44 5.16 1.04 0.92 2.92 2.89 3.64 4.08 0.1 0.16 0.28 0.27 0.48 0.27s0.37-0.1 0.48-0.26c0.77-1.18 2.62-3.18 3.65-4.1 1.6-1.42 2.44-3.05 2.44-5.15C13.56 3.71 10.63 0.74 7 0.74zm0.03 9.19c1.45 0 2.63-1.18 2.63-2.63 0-1.45-1.18-2.63-2.63-2.63-1.45 0-2.63 1.18-2.63 2.63 0 1.45 1.18 2.63 2.63 2.63z" />
                  </svg>
                  <div className="ml-2">
                    <p className={"text-sm md:text-base font-medium group-hover:text-orange-400 transition-colors"}>Apple Gadgets - Basement 2, Shop 26, Bashundhara City</p>
                    <p className="mt-0.5 text-xs text-gray-500">Basement 2, Shop 26</p>
                  </div>
                </a>
                <a className="flex group" href="/outlet">
                  <svg className="h-4 w-4 text-orange-500 mt-1 shrink-0" width="14" height="17" viewBox="0 0 14 17" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 0.74C3.37 0.74 0.44 3.71 0.44 7.36c0 2.1 0.83 3.73 2.44 5.16 1.04 0.92 2.92 2.89 3.64 4.08 0.1 0.16 0.28 0.27 0.48 0.27s0.37-0.1 0.48-0.26c0.77-1.18 2.62-3.18 3.65-4.1 1.6-1.42 2.44-3.05 2.44-5.15C13.56 3.71 10.63 0.74 7 0.74zm0.03 9.19c1.45 0 2.63-1.18 2.63-2.63 0-1.45-1.18-2.63-2.63-2.63-1.45 0-2.63 1.18-2.63 2.63 0 1.45 1.18 2.63 2.63 2.63z" />
                  </svg>
                  <div className="ml-2">
                    <p className={"text-sm md:text-base font-medium group-hover:text-orange-400 transition-colors"}>Apple Gadgets - Level 5, Block A, Shop 4-5, Bashundhara City</p>
                    <p className="mt-0.5 text-xs text-gray-500">Level 5, Block A, Shop 4-5</p>
                  </div>
                </a>
                <a className="flex group" href="/outlet">
                  <svg className="h-4 w-4 text-orange-500 mt-1 shrink-0" width="14" height="17" viewBox="0 0 14 17" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 0.74C3.37 0.74 0.44 3.71 0.44 7.36c0 2.1 0.83 3.73 2.44 5.16 1.04 0.92 2.92 2.89 3.64 4.08 0.1 0.16 0.28 0.27 0.48 0.27s0.37-0.1 0.48-0.26c0.77-1.18 2.62-3.18 3.65-4.1 1.6-1.42 2.44-3.05 2.44-5.15C13.56 3.71 10.63 0.74 7 0.74zm0.03 9.19c1.45 0 2.63-1.18 2.63-2.63 0-1.45-1.18-2.63-2.63-2.63-1.45 0-2.63 1.18-2.63 2.63 0 1.45 1.18 2.63 2.63 2.63z" />
                  </svg>
                  <div className="ml-2">
                    <p className={"text-sm md:text-base font-medium group-hover:text-orange-400 transition-colors"}>Apple Gadgets - Level 4, Zone A, Shop 28D, Jamuna Future Park</p>
                    <p className="mt-0.5 text-xs text-gray-500">Level 4, Zone A, Shop 28D</p>
                  </div>
                </a>
                <a className={"inline-block text-sm pl-6 font-medium text-orange-500 hover:underline"} href="/outlet">See All Outlets</a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 [grid-template-columns:repeat(2,minmax(0px,1fr))]">
            <div>
              <p className={"text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider"}>About Us</p>
              <div className="flex flex-col gap-2.5">
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/about-us">About Us</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/corporate">Corporate</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/tracking">Order Tracking</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/blog">Blog</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/press-coverage">Press Coverage</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/career">Careers</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/contact-us">Contact Us</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/faq">FAQs</a>
              </div>
            </div>
            <div>
              <p className={"text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider"}>Policy</p>
              <div className="flex flex-col gap-2.5">
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/privacy-policy">Privacy Policy</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/emi-policy">EMI and Payment Policy</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/warranty-policy">Warranty Policy</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/exchange-policy">Exchange Policy</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/delivery-terms-and-conditions">Delivery Policy</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/pre-order-policy">Pre-Order Policy</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/refund-policy">Refund Policy</a>
                <a className={"text-sm text-gray-400 hover:text-white transition-colors"} href="/page/apple-gadgets-return-policy">Return Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div className={"my-10 py-6 border-y border-y-gray-800 flex flex-col md:flex-row lg:items-center justify-between gap-4"}>
          <div className={"space-y-0.5 order-2 md:order-1"}>
            <p className={"text-sm text-gray-400"}>© 2026 Apple Gadgets. All Rights Reserved.</p>
            <p className={"text-sm text-gray-400"}>Developed by <span className={"font-medium text-orange-500 underline"}>Nextlab</span></p>
          </div>
          <div className={"flex items-center gap-3 order-1 md:order-2"}>
            <a className={"bg-green-600 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold hover:bg-green-700 transition-colors"} href="https://wa.me/+8801711105888" target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
            </a>
            <a className={"border border-gray-600 hover:border-transparent hover:bg-[#1877F2] text-white rounded-full size-8 grid place-items-center transition-colors text-xs font-bold"} href="https://www.facebook.com/applegadgetsltd" target="_blank" rel="noreferrer">
              f
            </a>
            <a className={"border border-gray-600 hover:border-transparent hover:bg-[#E1306C] text-white rounded-full size-8 grid place-items-center transition-colors text-xs font-bold"} href="https://www.instagram.com/applegadgetsltd/" target="_blank" rel="noreferrer">
              ig
            </a>
            <a className={"border border-gray-600 hover:border-transparent hover:bg-[#0077B5] text-white rounded-full size-8 grid place-items-center transition-colors text-xs font-bold"} href="https://www.linkedin.com/company/applegadgets/" target="_blank" rel="noreferrer">
              in
            </a>
            <a className={"border border-gray-600 hover:border-transparent hover:bg-red-600 text-white rounded-full size-8 grid place-items-center transition-colors text-xs font-bold"} href="https://www.youtube.com/@AppleGadgetsLtd" target="_blank" rel="noreferrer">
              yt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export const ImportedFooter = Footer;
