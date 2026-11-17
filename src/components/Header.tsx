import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [toolsMobileOpen, setToolsMobileOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { name: "Apple Store", href: "/brands/apple", items: ["iPhone", "iPad", "MacBook", "Mac mini", "Apple Adapter", "AirPods", "EarPods", "Apple Watch", "AirTag", "iMac", "Mac Studio", "AirPods Max"] },
    { name: "Phones", href: "/category/mobile-phone", items: ["iPhone", "Samsung", "Google", "Motorola", "Xiaomi", "Honor", "OnePlus", "iQOO", "realme", "Nothing", "Huawei", "Oppo", "vivo", "Nokia"] },
    { name: "Tablets", href: "/category/tablet", items: ["iPad", "Xiaomi Pad", "Samsung Tab", "Amazon Tab", "HONOR Tab", "Smart Pen", "Hubs & Docks", "Cover & Cases", "Screen Protectors"] },
    { name: "Desktop", href: "/category/desktop", items: ["Desktop Offer", "Gaming PC", "Brand PC", "All-in-One PC", "Mini PC", "Mac mini", "iMac"] },
    { name: "Laptops", href: "/category/laptops", items: ["MacBook", "Gaming Laptop", "Ultrabook", "Business Laptop", "Chromebook"] },
    { name: "Accessories", href: "/category/earbuds", items: ["Earbuds", "Earphone", "Neckband", "Headphone", "Power Bank", "Wireless Charger", "Mobile Charger", "Adapter", "Phone Cooler"] },
    { name: "Sound", href: "/category/speakers", items: ["Speakers", "Soundbar", "Bluetooth Speaker", "Home Theater"] },
    { name: "Watch", href: "/category/smart-watch", items: ["Apple Watch", "Smart Watch", "Fitness Tracker", "Watch Straps"] },
    { name: "Fitness", href: "/category/fitness", items: ["Treadmill", "Smart Scale", "Massage Gun"] },
    { name: "Smart Home", href: "/category/smart-home", items: ["IP Camera", "Smart Light", "Smart Plug", "Robot Vacuum"] },
    { name: "Gadgets", href: "/category/gadgets", items: ["Drone", "Gimbal", "Action Camera", "Projector"] },
    { name: "Everyday", href: "/category/everyday", items: ["Backpack", "Water Purifier", "Shaver & Trimmer"] },
    { name: "Network", href: "/category/router", items: ["Wi-Fi Router", "Mesh Wi-Fi", "Starlink", "NAS"] },
  ];

  return (
    <>
      <header className={"print:hidden sticky top-0 w-full z-20"}>
        <div className={"bg-black text-white"}>
          <div className={"container flex justify-between items-center py-4 [@media(min-width:1440px)]:max-w-[1440px]"}>
            <div className="flex items-center gap-3">
              <button
                className={"xl:hidden size-6"}
                type="button"
                aria-label={mobileMenuOpen ? "Close" : "Open"}
                onClick={() => setMobileMenuOpen(o => !o)}
                data-testid="mobile-hamburger-btn"
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                )}
              </button>
              <a className={"h-auto w-36 xl:w-full"} href="/" data-testid="header-logo-link">
                <img style={{ color: "transparent" }} alt="Apple Gadgets" loading="lazy" width="142" height="44" decoding="async" src="/site-assets/05f5714c2cbca7fc.webp" />
              </a>
            </div>

            <form className={"hidden xl:flex items-center justify-center h-12 overflow-hidden rounded-full bg-white border border-gray-300 lg:w-[484px] 2xl:w-[584px]"}>
              <label className={"sr-only"} htmlFor="search">Search</label>
              <input className={"w-full text-gray-900 h-full py-2 px-3 border-0 outline-0 bg-transparent"} id="search" type="text" placeholder="Search product, brand, and more..." name="search" defaultValue="" />
              <button className={"w-17.5 h-10 my-1 mr-1 rounded-quarter bg-orange-500 grid place-items-center"} type="submit">
                <svg className="text-white size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </form>

            <div className="flex items-center gap-5">
              <div className={"hidden xl:flex items-center xl:gap-2 2xl:gap-4 3xl:gap-6"}>
                <a className={"text-sm 3xl:text-base font-semibold hover:text-orange-500"} href="/blog" data-testid="header-blog-link">Blog</a>
                <a className={"text-sm 3xl:text-base font-semibold hover:text-orange-500"} href="/pre-order" data-testid="header-pre-order-link">Pre-order</a>
                <a className={"flex items-center text-sm 3xl:text-base font-semibold text-gradient-header [-webkit-text-fill-color:transparent]"} href="/offer" data-testid="header-offer-link">
                  <svg className="h-4 w-4 mr-1" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H14.5V14.5C14.5 14.7652 14.3946 15.0196 14.2071 15.2071C14.0196 15.3946 13.7652 15.5 13.5 15.5H9.75V6H10ZM6.25 6V15.5H2.5C2.23478 15.5 1.98043 15.3946 1.79289 15.2071C1.60536 15.0196 1.5 14.7652 1.5 14.5V6H6.25Z" fill="#FFAD39" />
                    <path d="M6 3V6H0.75C0.617513 5.9996 0.490566 5.9468 0.396884 5.85312C0.303201 5.75943 0.250396 5.63249 0.25 5.5V3.5C0.250396 3.36751 0.303201 3.24057 0.396884 3.14688C0.490566 3.0532 0.617513 3.0004 0.75 3H6ZM15.75 3.5V5.5C15.7496 5.63249 15.6968 5.75943 15.6031 5.85312C15.5094 5.9468 15.3825 5.9996 15.25 6H10V3H15.25C15.3825 3.0004 15.5094 3.0532 15.6031 3.14688C15.6968 3.24057 15.7496 3.36751 15.75 3.5Z" fill="#FEBD55" />
                    <path d="M9.25 2.5V3H6.75V2.5C6.7504 2.36751 6.8032 2.24057 6.89688 2.14688C6.99057 2.0532 7.11751 2.0004 7.25 2H8.75C8.88249 2.0004 9.00943 2.0532 9.10312 2.14688C9.1968 2.24057 9.2496 2.36751 9.25 2.5Z" fill="#CB3541" />
                    <path d="M6.25 6H9.75V15.5H6.25V6Z" fill="#CB3541" />
                    <path d="M10 3V6H6V3H9.25H10Z" fill="#FF6161" />
                  </svg>
                  Offers
                </a>

                {/* Desktop Category dropdown */}
                <div className="relative" aria-label="Category dropdown" onMouseLeave={() => setCategoryDropdownOpen(false)}>
                  <button
                    className={"flex items-center gap-1.5 rounded-full h-10 bg-gray-800 text-white px-4 py-2.5 text-xs 3xl:text-sm font-semibold shadow-sm hover:bg-gray-700 transition-colors"}
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={categoryDropdownOpen}
                    onClick={() => setCategoryDropdownOpen(o => !o)}
                    onMouseEnter={() => setCategoryDropdownOpen(true)}
                    data-testid="desktop-category-dropdown-btn"
                  >
                    Category
                    <svg className={"transition-transform duration-200 " + (categoryDropdownOpen ? "rotate-180" : "")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <div
                    className={"absolute right-0 xl:left-0 top-full z-30 pt-2 w-56 " + (categoryDropdownOpen ? "block" : "hidden")}
                    role="menu"
                    data-testid="desktop-category-dropdown-menu"
                  >
                    <div className={"flex flex-col rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5 max-h-80 overflow-y-auto"}>
                      {categories.map(cat => (
                        <a
                          key={cat.name}
                          className={"flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-500"}
                          href={cat.href}
                          role="menuitem"
                        >
                          {cat.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Tools dropdown */}
                <div className="relative" aria-label="button" onMouseLeave={() => setToolsOpen(false)}>
                  <button
                    className={"flex items-center gap-1.5 rounded-full h-10 bg-gradient-to-r from-[#6B7FFF] via-[#F27F20] to-[#BE27FF] text-white px-4 py-2.5 text-xs 3xl:text-sm font-semibold shadow-sm cursor-pointer"}
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={toolsOpen}
                    onClick={() => setToolsOpen(o => !o)}
                    onMouseEnter={() => setToolsOpen(true)}
                    data-testid="desktop-tools-dropdown-btn"
                  >
                    Tools
                    <svg className={"transition-transform duration-200 " + (toolsOpen ? "rotate-180" : "")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div
                    className={"absolute right-0 xl:left-0 top-full z-30 pt-2 w-56 " + (toolsOpen ? "block" : "hidden")}
                    role="menu"
                    data-testid="desktop-tools-dropdown-menu"
                  >
                    <div className={"flex flex-col rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5"}>
                      <a className={"flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-500"} href="/tools/pc-builder" role="menuitem" data-testid="tools-pc-builder-link">
                        <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                        PC Builder
                      </a>
                      <a className={"flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-500"} href="/btu-calculator" role="menuitem" data-testid="tools-btu-calculator-link">
                        <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" strokeWidth="1.25"><path d="M13.3346 2.5C15.2837 2.5 16.2582 2.5 16.9697 2.94706C17.3407 3.18017 17.6545 3.49389 17.8876 3.86491C18.3346 4.57639 18.3346 5.55092 18.3346 7.5C18.3346 9.44908 18.3346 10.4236 17.8876 11.1351C17.6545 11.5061 17.3407 11.8198 16.9697 12.0529C16.2582 12.5 15.2837 12.5 13.3346 12.5H6.66797C4.71889 12.5 3.74436 12.5 3.03288 12.0529C2.66186 11.8198 2.34814 11.5061 2.11503 11.1351C1.66797 10.4236 1.66797 9.44908 1.66797 7.5C1.66797 5.55092 1.66797 4.57639 2.11503 3.86491C2.34814 3.49389 2.66186 3.18017 3.03288 2.94706C3.74436 2.5 4.71889 2.5 6.66797 2.5H13.3346Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /><path d="M5.83203 10H14.1654" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>
                        BTU Calculator
                      </a>
                      <a className={"flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-500"} href="/compare" role="menuitem" data-testid="tools-compare-link">
                        <svg className="shrink-0" strokeWidth="1.25" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5H2.65856C1.65277 5 1.14987 5 1.02472 4.69134C0.899565 4.38268 1.25517 4.01942 1.96637 3.29289L4.21091 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /><path d="M1 11H13.3414C14.3472 11 14.8501 11 14.9753 11.3087C15.1004 11.6173 14.7448 11.9806 14.0336 12.7071L11.7891 15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Compare Product
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className={"relative text-white hover:text-orange-500 border border-gray-400 size-10 2xl:size-12 rounded-full place-items-center hidden md:grid"} type="button" aria-label="Wishlist">
                  <svg className={"size-5 2xl:size-6"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>

                {/* Mobile Tools dropdown */}
                <div className={"relative xl:hidden"} aria-label="button" onMouseLeave={() => setToolsMobileOpen(false)}>
                  <button
                    className={"flex items-center gap-1.5 rounded-full h-10 bg-gradient-to-r from-[#6B7FFF] via-[#F27F20] to-[#BE27FF] text-white px-4 py-2.5 text-xs 3xl:text-sm font-semibold shadow-sm"}
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={toolsMobileOpen}
                    onClick={() => setToolsMobileOpen(o => !o)}
                    onMouseEnter={() => setToolsMobileOpen(true)}
                    data-testid="mobile-tools-dropdown-btn"
                  >
                    Tools
                    <svg className={"transition-transform duration-200 " + (toolsMobileOpen ? "rotate-180" : "")} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div className={"absolute right-0 top-full z-30 pt-2 w-56 " + (toolsMobileOpen ? "block" : "hidden")} role="menu">
                    <div className={"flex flex-col rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5"}>
                      <a className={"flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-500"} href="/tools/pc-builder" role="menuitem">
                        <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                        PC Builder
                      </a>
                      <a className={"flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-500"} href="/btu-calculator" role="menuitem">
                        <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none" strokeWidth="1.25"><path d="M13.3346 2.5C15.2837 2.5 16.2582 2.5 16.9697 2.94706C17.3407 3.18017 17.6545 3.49389 17.8876 3.86491C18.3346 4.57639 18.3346 5.55092 18.3346 7.5C18.3346 9.44908 18.3346 10.4236 17.8876 11.1351C17.6545 11.5061 17.3407 11.8198 16.9697 12.0529C16.2582 12.5 15.2837 12.5 13.3346 12.5H6.66797C4.71889 12.5 3.74436 12.5 3.03288 12.0529C2.66186 11.8198 2.34814 11.5061 2.11503 11.1351C1.66797 10.4236 1.66797 9.44908 1.66797 7.5C1.66797 5.55092 1.66797 4.57639 2.11503 3.86491C2.34814 3.49389 2.66186 3.18017 3.03288 2.94706C3.74436 2.5 4.71889 2.5 6.66797 2.5H13.3346Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /><path d="M5.83203 10H14.1654" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" /></svg>
                        BTU Calculator
                      </a>
                      <a className={"flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors text-gray-900 hover:bg-orange-50 hover:text-orange-500"} href="/compare" role="menuitem">
                        <svg className="shrink-0" strokeWidth="1.25" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5H2.65856C1.65277 5 1.14987 5 1.02472 4.69134C0.899565 4.38268 1.25517 4.01942 1.96637 3.29289L4.21091 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /><path d="M1 11H13.3414C14.3472 11 14.8501 11 14.9753 11.3087C15.1004 11.6173 14.7448 11.9806 14.0336 12.7071L11.7891 15" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Compare Product
                      </a>
                    </div>
                  </div>
                </div>

                <a className={"relative text-white hover:text-orange-500 border border-gray-400 size-10 rounded-full xl:hidden grid place-items-center"} href="/cart">
                  <svg className="size-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19C8 18.4696 7.78929 17.9609 7.41421 17.5858C7.03914 17.2107 6.53043 17 6 17C5.46957 17 4.96086 17.2107 4.58579 17.5858C4.21071 17.9609 4 18.4696 4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 17H6V3H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 5L20 6L19 13H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className={"absolute top-1 right-1 xl:top-1.5 xl:right-1.5 bg-orange-500 text-white text-xs rounded-full size-4 xl:size-5 flex items-center justify-center"}>0</span>
                </a>
              </div>
            </div>
          </div>

          <div className={"xl:hidden relative pb-2"}>
            <form className={"container flex gap-3 items-center [@media(min-width:1440px)]:max-w-[1440px]"}>
              <div className="relative flex-1">
                <label className={"sr-only"} htmlFor="query">Search</label>
                <input className={"w-full border px-3 ring-offset-background text-start h-10 text-gray-900 bg-white border-gray-700 rounded-full pr-8 pl-4 py-2 text-sm"} id="query" placeholder="Search product, brand, and more..." name="query" defaultValue="" />
                <button className={"absolute top-1/2 right-2 -translate-y-1/2 w-11 h-8 rounded-quarter bg-orange-500 grid place-items-center"} type="submit">
                  <svg className="text-white size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile bottom navigation bar */}
        <div className={"fixed xl:hidden bg-white backdrop-blur shadow-[0px_0px_10px_rgb(0_0_0_/_10%)] bottom-0 left-0 right-0 z-40"}>
          <div className={"shadow-md pt-3 pb-1.5 grid items-center gap-4 [grid-template-columns:repeat(4,minmax(0px,1fr))]"}>
            <a className={"text-xs font-normal flex flex-col gap-1.5 items-center text-orange-500"} href="/">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99932 21L7.74868 17.4911C7.61394 15.6046 9.10803 14 10.9993 14C12.8906 14 14.3847 15.6046 14.25 17.4911L13.9993 21" stroke="currentColor" strokeWidth="1.5" />
                <path d="M1.35139 12.2135C0.998371 9.91624 0.821861 8.76763 1.25617 7.74938C1.69047 6.73112 2.65403 6.03443 4.58114 4.64106L6.02099 3.6C8.41829 1.86667 9.61694 1 11 1C12.3831 1 13.5817 1.86667 15.979 3.6L17.4189 4.64106C19.346 6.03443 20.3095 6.73112 20.7438 7.74938C21.1781 8.76763 21.0016 9.91624 20.6486 12.2135L20.3476 14.1724C19.8471 17.4289 19.5969 19.0572 18.429 20.0286C17.2611 21 15.5537 21 12.1388 21H9.86119C6.44633 21 4.73891 21 3.571 20.0286C2.40309 19.0572 2.15287 17.4289 1.65243 14.1724L1.35139 12.2135Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span>Home</span>
            </a>

            <button
              className={"text-xs font-normal text-gray-600 flex flex-col gap-1.5 items-center cursor-pointer"}
              type="button"
              onClick={() => setMobileMenuOpen(o => !o)}
              data-testid="mobile-bottom-category-btn"
            >
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2C11 1.44772 11.4477 1 12 1H16C16.5523 1 17 1.44772 17 2V6C17 6.55228 16.5523 7 16 7H12C11.4477 7 11 6.55228 11 6V2Z" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 12C1 11.4477 1.44772 11 2 11H6C6.55228 11 7 11.4477 7 12V16C7 16.5523 6.55228 17 6 17H2C1.44772 17 1 16.5523 1 16V12Z" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 14C11 14.7956 11.3161 15.5587 11.8787 16.1213C12.4413 16.6839 13.2044 17 14 17C14.7956 17 15.5587 16.6839 16.1213 16.1213C16.6839 15.5587 17 14.7956 17 14C17 13.2044 16.6839 12.4413 16.1213 11.8787C15.5587 11.3161 14.7956 11 14 11C13.2044 11 12.4413 11.3161 11.8787 11.8787C11.3161 12.4413 11 13.2044 11 14Z" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 4C1 4.39397 1.0776 4.78407 1.22836 5.14805C1.37913 5.51203 1.6001 5.84274 1.87868 6.12132C2.15726 6.3999 2.48797 6.62087 2.85195 6.77164C3.21593 6.9224 3.60603 7 4 7C4.39397 7 4.78407 6.9224 5.14805 6.77164C5.51203 6.62087 5.84274 6.3999 6.12132 6.12132C6.3999 5.84274 6.62087 5.51203 6.77164 5.14805C6.9224 4.78407 7 4.39397 7 4C7 3.60603 6.9224 3.21593 6.77164 2.85195C6.62087 2.48797 6.3999 2.15726 6.12132 1.87868C5.84274 1.6001 5.51203 1.37913 5.14805 1.22836C4.78407 1.0776 4.39397 1 4 1C3.60603 1 3.21593 1.0776 2.85195 1.22836C2.48797 1.37913 2.15726 1.6001 1.87868 1.87868C1.6001 2.15726 1.37913 2.48797 1.22836 2.85195C1.0776 3.21593 1 3.60603 1 4Z" stroke="#737373" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Category</span>
            </button>

            <a className={"text-xs font-normal text-gray-600 flex flex-col gap-1.5 items-center"} href="/offer">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12.581 7.74219H18.3875V18.7099C18.3875 19.0521 18.2515 19.3803 18.0095 19.6223C17.7676 19.8643 17.4394 20.0003 17.0972 20.0003H12.2584V7.74219H12.581ZM7.74231 7.74219V20.0003H2.9036C2.56139 20.0003 2.23319 19.8643 1.99121 19.6223C1.74923 19.3803 1.61328 19.0521 1.61328 18.7099V7.74219H7.74231Z" fill="#FFAD39" />
                <path d="M7.41935 3.87109V7.74206H0.645161C0.474211 7.74155 0.310408 7.67341 0.189527 7.55253C0.0686467 7.43165 0.000510557 7.26785 0 7.0969V4.51626C0.000510557 4.3453 0.0686467 4.1815 0.189527 4.06062C0.310408 3.93974 0.474211 3.8716 0.645161 3.87109H7.41935ZM20 4.51626V7.0969C19.9995 7.26785 19.9314 7.43165 19.8105 7.55253C19.6896 7.67341 19.5258 7.74155 19.3548 7.74206H12.5806V3.87109H19.3548C19.5258 3.8716 19.6896 3.93974 19.8105 4.06062C19.9314 4.1815 19.9995 4.3453 20 4.51626Z" fill="#FEBD55" />
              </svg>
              <span>Offer</span>
            </a>

            <button className={"text-xs font-normal text-gray-600 flex flex-col gap-1.5 items-center xl:hidden"} type="button">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 16C8.8317 13.5578 13.1432 13.4428 15.5 16M13.4951 8.5C13.4951 9.88071 12.3742 11 10.9915 11C9.60885 11 8.48797 9.88071 8.48797 8.5C8.48797 7.11929 9.60885 6 10.9915 6C12.3742 6 13.4951 7.11929 13.4951 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>Sign In</span>
            </button>
          </div>
        </div>

        {/* Desktop category nav bar */}
        <nav className={"relative shadow-sm hidden xl:block"}>
          <div className={"relative z-10 bg-white"}>
            <div className={"container flex items-center justify-center gap-1 3xl:gap-2.5 [@media(min-width:1440px)]:max-w-[1440px]"}>
              {categories.map(cat => (
                <div
                  key={cat.name}
                  className="relative flex gap-1 items-center group py-2"
                  onMouseEnter={() => setActiveCategory(cat.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <a
                    className={"text-xs 3xl:text-[13px] md:font-semibold xl:font-medium py-2 3xl:py-4 text-gray-900 group-hover:text-orange-500 transition-colors block duration-300"}
                    href={cat.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(c => c === cat.name ? null : cat.name);
                    }}
                  >
                    {cat.name}
                  </a>
                  <svg className={"stroke-gray-900 group-hover:stroke-orange-500 group-hover:rotate-180 group-hover:ease-in-out group-hover:duration-200 " + (activeCategory === cat.name ? "rotate-180" : "")} strokeWidth="1.5" width="20" height="20" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                  <div
                    className={"absolute bg-gray-100 shadow rounded-xl w-[200px] top-[90%] flex-col animated fadeInUp left-0 z-30 " + (activeCategory === cat.name ? "flex" : "hidden group-hover:flex")}
                  >
                    {cat.items.map(item => (
                      <span key={item} className="relative">
                        <a className={"text-xs 3xl:text-sm font-medium transition-colors p-2 flex items-center justify-between rounded duration-300 hover:text-orange-500 hover:bg-orange-50"} href={cat.href}>
                          {item}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Category Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-category-drawer">
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute left-0 top-0 h-full w-72 bg-white overflow-y-auto z-10 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-gray-900">Categories</span>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded hover:bg-gray-100 cursor-pointer"
                data-testid="mobile-drawer-close-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4 flex flex-col gap-2">
              <a href="/" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Home</a>
              <a href="/brands/apple" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Apple Store</a>
              <a href="/category/mobile-phone" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Phones</a>
              <a href="/category/tablet" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Tablets</a>
              <a href="/category/laptops" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Laptops</a>
              <a href="/category/desktop" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Desktop</a>
              <a href="/category/earbuds" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Accessories</a>
              <a href="/category/speakers" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Sound</a>
              <a href="/category/smart-watch" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Watch</a>
              <hr className="my-2" />
              <div className="font-semibold text-xs text-gray-500 uppercase px-3 py-1">Quick Links</div>
              <a href="/blog" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Blog</a>
              <a href="/pre-order" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Pre-order</a>
              <a href="/offer" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">Offers</a>
              <a href="/tools/pc-builder" className="py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-orange-500 font-medium text-gray-900">PC Builder</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export const ImportedHeader = Header;
