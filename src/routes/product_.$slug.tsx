import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/index.css?raw";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/product_/$slug")({
  head: () => ({
    meta: [
      { title: "iPhone 18 Pro Max Price in Bangladesh | Apple Gadgets" },
      { name: "description", content: "Buy iPhone 18 Pro Max at the best price in Bangladesh from Apple Gadgets with official warranty, fast delivery, and EMI options." },
    ],
  }),
  staticData: {
    importedDocument: {
      html: { className: "__variable_0ad60f __variable_1ffc5a", lang: "en" },
      body: { className: "" },
    },
  },
  component: ProductDetailPage,
});

const COLOR_VARIANTS = [
  { id: "black", name: "Black Titanium", hex: "#1c1c1e", image: "/site-assets/50377dc64034e0ea.webp" },
  { id: "burgundy", name: "Burgundy", hex: "#581825", image: "/site-assets/50377dc64034e0ea.webp" },
  { id: "glacier", name: "Glacier Blue", hex: "#9bb0c1", image: "/site-assets/50377dc64034e0ea.webp" },
  { id: "silver", name: "Natural Silver", hex: "#e2e4e5", image: "/site-assets/50377dc64034e0ea.webp" },
] as const;

type ColorVariant = (typeof COLOR_VARIANTS)[number];

function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(COLOR_VARIANTS[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const cashPrice = 225999;
  const regularPrice = 232000;
  const discountAmount = regularPrice - cashPrice;
  const sku = "AGL147422";

  // Reviews state
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Tanvir Ahmed",
      rating: 5,
      date: "14 November 2026",
      verified: true,
      comment: "Super fast delivery from Apple Gadgets! The titanium build feels incredibly premium, and the camera zoom is out of this world.",
    },
    {
      id: 2,
      author: "Rafiqul Islam",
      rating: 5,
      date: "08 November 2026",
      verified: true,
      comment: "Best pricing in BD for the official Hong Kong dual SIM variant. Battery easily lasts 2 full days of heavy usage.",
    },
    {
      id: 3,
      author: "Sadia Chowdhury",
      rating: 5,
      date: "02 November 2026",
      verified: true,
      comment: "Loving the new Glacier Blue finish! The display is bright enough even in direct noon sunlight. 10/10 recommendation.",
    },
  ]);

  const [newReviewAuthor, setNewReviewAuthor] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev = {
      id: Date.now(),
      author: newReviewAuthor.trim(),
      rating: newReviewRating,
      date: "Just now",
      verified: true,
      comment: newReviewComment.trim(),
    };
    setReviews([newRev, ...reviews]);
    setNewReviewAuthor("");
    setNewReviewComment("");
    showToast("Review submitted successfully!");
  };

  return (
    <>
      <style>{capturedCSS}</style>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <Header />

        {/* Toast Alert */}
        {toastMessage && (
          <div className="fixed top-20 right-6 z-50 bg-[var(--background-primary,#f27f20)] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span className="font-semibold text-sm">{toastMessage}</span>
          </div>
        )}

        {/* Breadcrumb Navigation - perfectly aligned to container */}
        <nav className="bg-gray-50 border-b border-gray-200 py-3 text-xs md:text-sm" data-testid="product-breadcrumbs">
          <div className="container [@media(min-width:1440px)]:max-w-[1440px] flex items-center gap-2 text-gray-500 overflow-x-auto whitespace-nowrap">
            <a href="/" className="hover:text-[var(--background-primary,#f27f20)] transition-colors">Home</a>
            <span>&gt;</span>
            <a href="/category/mobile-phone" className="hover:text-[var(--background-primary,#f27f20)] transition-colors">Mobile Phone</a>
            <span>&gt;</span>
            <a href="/brands/apple" className="hover:text-[var(--background-primary,#f27f20)] transition-colors">iPhone</a>
            <span>&gt;</span>
            <span className="text-gray-900 font-medium">iPhone 18 Pro Max</span>
          </div>
        </nav>

        {/* Main Content Container matching Homepage margins */}
        <main className="container [@media(min-width:1440px)]:max-w-[1440px] py-6 md:py-10">
          {/* Top Product Fold (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Gallery */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Main Image Card */}
              <div className="w-full bg-white rounded-2xl border border-gray-200 p-6 flex items-center justify-center relative aspect-square shadow-xs group">
                <span className="absolute top-4 left-4 bg-[#e6f9ed] text-[#00a650] text-xs font-bold px-2.5 py-1 rounded-md">
                  Save ৳ {discountAmount.toLocaleString()}
                </span>
                <img
                  src={selectedColor.image}
                  alt={`iPhone 18 Pro Max - ${selectedColor.name}`}
                  className="max-h-[380px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  data-testid="main-product-image"
                />
              </div>

              {/* Thumbnail Row */}
              <div className="flex items-center gap-3 mt-4 w-full justify-center">
                {COLOR_VARIANTS.map((c) => {
                  const isActive = selectedColor.id === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`size-16 rounded-xl border p-1 bg-white cursor-pointer transition-all ${
                        isActive
                          ? "border-2 border-[var(--background-primary,#f27f20)] ring-2 ring-[var(--background-primary,#f27f20)]/20"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      title={c.name}
                      data-testid={`thumbnail-${c.id}`}
                    >
                      <img src={c.image} alt={c.name} className="w-full h-full object-contain" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Product Meta & Actions */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Brand */}
              <div className="border-b border-gray-100 pb-3">
                <a href="/brands/apple" className="text-sm font-semibold text-gray-700 hover:text-[var(--background-primary,#f27f20)] inline-flex items-center gap-1.5">
                  <span className="text-base"></span> Apple
                </a>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3" data-testid="product-title">
                iPhone 18 Pro Max
              </h1>

              {/* Price Section */}
              <div className="mt-4 p-4 rounded-xl bg-gray-50 border border-gray-100 flex flex-wrap items-center gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl md:text-3xl font-extrabold text-black" data-testid="cash-price">
                    ৳ {cashPrice.toLocaleString()}
                  </span>
                </div>
                <span className="text-sm text-gray-400 line-through">
                  ৳ {regularPrice.toLocaleString()}
                </span>
                <span className="bg-[#e6f9ed] text-[#00a650] text-xs font-bold px-2 py-0.5 rounded-full">
                  ৳ {discountAmount.toLocaleString()} OFF
                </span>
              </div>

              {/* Availability & SKU */}
              <div className="flex items-center gap-6 mt-3 text-xs md:text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-700 font-semibold">Availability: In Stock</span>
                </div>
                <div className="text-gray-400">|</div>
                <div>Product Code: <span className="font-semibold text-gray-800" data-testid="sku-code">{sku}</span></div>
              </div>

              <div className="border-t border-gray-200 my-4" />

              {/* Color Selector */}
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider block mb-2">
                  Color: <span className="text-gray-900 font-bold" data-testid="selected-color-label">{selectedColor.name}</span>
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {COLOR_VARIANTS.map((col) => {
                    const isSelected = selectedColor.id === col.id;
                    return (
                      <button
                        key={col.id}
                        type="button"
                        onClick={() => setSelectedColor(col)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border cursor-pointer transition-all ${
                          isSelected
                            ? "border-[var(--background-primary,#f27f20)] bg-orange-50/50 text-[var(--background-primary,#f27f20)] ring-1 ring-[var(--background-primary,#f27f20)]"
                            : "border-gray-200 text-gray-700 hover:border-gray-300 bg-white"
                        }`}
                        data-testid={`color-select-${col.id}`}
                      >
                        <span className="size-3.5 rounded-full border border-black/10 shrink-0" style={{ backgroundColor: col.hex }} />
                        <span>{col.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Short Description (4-5 bullet points under color) */}
              <div className="mt-5 p-4 bg-gray-50 border border-gray-200/70 rounded-xl" data-testid="short-description">
                <p className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2.5">Key Highlights</p>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--background-primary,#f27f20)] mt-0.5 font-bold shrink-0">•</span>
                    <span><strong>Display:</strong> 6.9-Inch LTPO Super Retina XDR OLED, 120Hz ProMotion, 3,000 nits peak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--background-primary,#f27f20)] mt-0.5 font-bold shrink-0">•</span>
                    <span><strong>Processor:</strong> Apple A20 Pro (2nm) Chip engineered for on-device Apple Intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--background-primary,#f27f20)] mt-0.5 font-bold shrink-0">•</span>
                    <span><strong>Camera:</strong> Pro 48MP Triple Fusion Array with variable mechanical aperture &amp; 5x optical zoom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--background-primary,#f27f20)] mt-0.5 font-bold shrink-0">•</span>
                    <span><strong>Build:</strong> Aerospace-grade Grade 5 Titanium frame with Ceramic Shield 2 &amp; IP68 resistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--background-primary,#f27f20)] mt-0.5 font-bold shrink-0">•</span>
                    <span><strong>Battery:</strong> 5,391 mAh all-day capacity, 25W MagSafe wireless &amp; fast USB-C charging</span>
                  </li>
                </ul>
              </div>

              {/* Quantity Stepper & Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {/* Stepper */}
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden h-12 bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-4 text-gray-500 hover:text-black hover:bg-gray-100 h-full cursor-pointer text-base font-bold transition-colors"
                    aria-label="Decrease quantity"
                    data-testid="qty-minus-btn"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-gray-900" data-testid="qty-display">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(q => q + 1)}
                    className="px-4 text-gray-500 hover:text-black hover:bg-gray-100 h-full cursor-pointer text-base font-bold transition-colors"
                    aria-label="Increase quantity"
                    data-testid="qty-plus-btn"
                  >
                    +
                  </button>
                </div>

                {/* Shop Now */}
                <button
                  type="button"
                  onClick={() => showToast(`Proceeding to checkout with ${quantity} iPhone 18 Pro Max`)}
                  className="flex-1 min-w-[140px] h-12 bg-[var(--background-primary,#f27f20)] hover:brightness-95 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  data-testid="shop-now-btn"
                >
                  Shop Now
                </button>

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={() => showToast(`Added ${quantity} iPhone 18 Pro Max to your cart!`)}
                  className="flex-1 min-w-[140px] h-12 bg-white hover:bg-orange-50 text-[var(--background-primary,#f27f20)] border-2 border-[var(--background-primary,#f27f20)] font-bold rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                  data-testid="add-to-cart-btn"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  Add To Cart
                </button>

                {/* Wishlist */}
                <button
                  type="button"
                  onClick={() => {
                    setIsWishlisted(w => !w);
                    showToast(isWishlisted ? "Removed from Wishlist" : "Saved to Wishlist!");
                  }}
                  className={`size-12 rounded-xl border grid place-items-center cursor-pointer transition-colors ${
                    isWishlisted ? "bg-red-50 border-red-300 text-red-500" : "bg-white border-gray-300 text-gray-500 hover:text-red-500 hover:border-red-300"
                  }`}
                  title="Wishlist"
                  aria-label="Add to Wishlist"
                  data-testid="wishlist-btn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================================
              DESCRIPTION & REVIEWS TABS (Matches website vibes & primary color variable)
             ========================================================================= */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            {/* Website style tabs bar */}
            <div className="flex border-b border-gray-200 gap-2 mb-8">
              <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`px-6 py-3 font-bold text-sm tracking-wide transition-all cursor-pointer rounded-t-lg flex items-center gap-2 ${
                  activeTab === "description"
                    ? "bg-[var(--background-primary,#f27f20)] text-white shadow-xs"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                data-testid="tab-description-btn"
              >
                Description
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`px-6 py-3 font-bold text-sm tracking-wide transition-all cursor-pointer rounded-t-lg flex items-center gap-2 ${
                  activeTab === "reviews"
                    ? "bg-[var(--background-primary,#f27f20)] text-white shadow-xs"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                data-testid="tab-reviews-btn"
              >
                Reviews ({reviews.length})
              </button>
            </div>

            {/* Tab 1: Description */}
            {activeTab === "description" && (
              <div className="space-y-10" data-testid="tab-description-content">
                {/* Specification Headline and Bullet List */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    iPhone 18 Pro Max Specification
                  </h2>

                  <ul className="space-y-3.5 text-sm md:text-base text-gray-700 leading-relaxed">
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Brand:</strong> Apple</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Model:</strong> iPhone 18 Pro Max</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Product Type:</strong> Flagship Titanium Smartphone</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Display Size &amp; Type:</strong> 6.9-Inch LTPO Super Retina XDR OLED, 120Hz ProMotion</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Display Resolution:</strong> 1320 x 2868 Pixels (~460 ppi density)</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Wireless Connectivity:</strong> Wi-Fi 7 (802.11be), Bluetooth 6.0, Ultra Wideband 2, NFC</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Audio Hardware:</strong> Spatial Audio Stereo Loudspeakers &amp; Studio-Quality Microphones</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Chipset &amp; Processor:</strong> Apple A20 Pro (2nm), Hexa-core CPU, 7-core GPU, 16-core Neural Engine</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Main Camera System:</strong> 48MP Wide Fusion (Variable Physical Aperture) + 48MP Periscope Telephoto (5x Optical Zoom) + 48MP Ultra Wide with Macro</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Front Selfie Camera:</strong> 18MP Ultra Wide with Center Stage &amp; 4K@60fps Dolby Vision</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Operating System:</strong> iOS 27 with Apple Intelligence</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Memory &amp; RAM:</strong> 12GB Unified High-Speed RAM</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Storage Options:</strong> 256GB, 512GB, 1TB, 2TB High-Speed NVMe</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>SIM Capability:</strong> Nano-SIM + eSIM / Dual Physical SIM / Dual eSIM (Region Dependent)</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Biometric &amp; Sensors:</strong> Face ID, LiDAR Scanner, Barometer, High Dynamic Range Gyro, Accelerometer</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Water &amp; Dust Resistance:</strong> IP68 Waterproof Rated (Submersible up to 6 meters for 30 minutes)</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Battery &amp; Power:</strong> 5,391 mAh All-Day Battery Life, 50% charge in 20 minutes (PD3.2)</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Charging Method:</strong> USB-C 3.2 Gen 2 (up to 10Gbps), 25W MagSafe Wireless Charging, Qi2</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Available Colors:</strong> Black Titanium, Burgundy, Glacier Blue, Natural Silver</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Weight &amp; Dimensions:</strong> 249 g, 163.4 x 78 x 8.8 mm</span>
                    </li>
                    <li className="flex items-baseline gap-2">
                      <span className="text-gray-400 font-bold">•</span>
                      <span><strong>Certifications:</strong> Emergency SOS via Satellite, Crash Detection, Roadside Assistance</span>
                    </li>
                  </ul>
                </section>

                {/* Features Headline and Descriptive Paragraphs */}
                <section className="pt-6 border-t border-gray-100">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                    iPhone 18 Pro Max Features
                  </h2>

                  <div className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        Aerospace-Grade Grade 5 Titanium Design
                      </h3>
                      <p>
                        Crafted with high-strength Grade 5 titanium, the iPhone 18 Pro Max combines featherlight weight with supreme structural rigidity. Micro-blasted matte finishes repel fingerprints while refined contoured borders guarantee a seamless, comfortable grip in your hand.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        Expansive 6.9-Inch Super Retina XDR with Dynamic Island
                      </h3>
                      <p>
                        Enjoy ultra-smooth visuals powered by 120Hz ProMotion adaptive refresh rate technology. Capable of peaking up to an astonishing 3,000 nits under intense sunlight, the edge-to-edge display provides cinematic HDR viewing and razor-sharp clarity for high-end multimedia and creative workflows.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        Revolutionary Apple A20 Pro Silicon &amp; Apple Intelligence
                      </h3>
                      <p>
                        Built on an advanced 2-nanometer architecture, the Apple A20 Pro chip sets unprecedented performance benchmarks with console-grade hardware-accelerated ray tracing and a 16-core Neural Engine designed for deeply private, real-time on-device artificial intelligence.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        Pro 48MP Triple Fusion Camera System
                      </h3>
                      <p>
                        Featuring an innovative variable physical aperture primary sensor, 5x periscope telephoto lens, and enhanced 48MP ultra-wide sensor, you can shoot studio-caliber 48MP spatial photos and buttery-smooth 4K 120fps Dolby Vision cinematic footage in any lighting environment.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        All-Day 5,391 mAh Battery with 25W MagSafe
                      </h3>
                      <p>
                        An optimized thermal substructure and expanded cell density grant upwards of 33 hours of continuous video playback. Paired with high-speed USB-C 3.2 Gen 2 transfer speeds (10Gbps) and 25W Qi2 MagSafe wireless charging, keeping powered throughout demanding days is effortless.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Tab 2: Reviews */}
            {activeTab === "reviews" && (
              <div className="space-y-10" data-testid="tab-reviews-content">
                {/* Review Score Summary */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl md:text-5xl font-extrabold text-gray-900">5.0</div>
                    <div>
                      <div className="flex text-amber-400 text-xl">★★★★★</div>
                      <p className="text-xs text-gray-500 mt-1">Based on {reviews.length} verified customer reviews</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const formEl = document.getElementById("review-form");
                      formEl?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-2.5 bg-[var(--background-primary,#f27f20)] hover:brightness-95 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Write a Review
                  </button>
                </div>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviews.map((rev) => (
                    <div key={rev.id} className="p-5 border border-gray-100 rounded-xl bg-white shadow-2xs space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900 text-sm">{rev.author}</span>
                          {rev.verified && (
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                              Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-400">{rev.date}</span>
                      </div>
                      <div className="flex text-amber-400 text-xs">
                        {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>

                {/* Write Review Form */}
                <form id="review-form" onSubmit={handleReviewSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">Leave a Customer Review</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={newReviewAuthor}
                        onChange={(e) => setNewReviewAuthor(e.target.value)}
                        placeholder="e.g. Mahfuz Rahman"
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-[var(--background-primary,#f27f20)]"
                        data-testid="review-name-input"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Rating *</label>
                      <select
                        value={newReviewRating}
                        onChange={(e) => setNewReviewRating(Number(e.target.value))}
                        className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-[var(--background-primary,#f27f20)]"
                        data-testid="review-rating-select"
                      >
                        <option value={5}>5 Stars - Excellent</option>
                        <option value={4}>4 Stars - Very Good</option>
                        <option value={3}>3 Stars - Average</option>
                        <option value={2}>2 Stars - Poor</option>
                        <option value={1}>1 Star - Terrible</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Your Review *</label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewComment}
                      onChange={(e) => setNewReviewComment(e.target.value)}
                      placeholder="Share your experience with this device..."
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-[var(--background-primary,#f27f20)]"
                      data-testid="review-comment-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[var(--background-primary,#f27f20)] hover:brightness-95 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                    data-testid="submit-review-btn"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Related Products Carousel Section */}
          <section className="mt-20 pt-10 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Related Apple Products</h2>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Explore other flagship smartphones and popular accessories</p>
              </div>
              <a href="/category/mobile-phone" className="text-xs md:text-sm font-semibold text-[var(--background-primary,#f27f20)] hover:underline">
                View All &gt;
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  title: "iPhone 18 Pro",
                  price: "৳ 199,999",
                  regular: "৳ 205,000",
                  img: "/site-assets/eac03d553f5915ce.webp",
                  slug: "iphone-18-pro",
                },
                {
                  title: "iPhone Duo",
                  price: "৳ 149,999",
                  regular: "৳ 155,000",
                  img: "/site-assets/c8a1fb9c64f49da1.webp",
                  slug: "iphone-duo",
                },
                {
                  title: "iPhone 17 Pro Max",
                  price: "৳ 182,999",
                  regular: "৳ 189,000",
                  img: "/site-assets/50377dc64034e0ea.webp",
                  slug: "iphone-17-pro-max",
                },
                {
                  title: "iPhone 16 Plus",
                  price: "৳ 118,999",
                  regular: "৳ 124,000",
                  img: "/site-assets/eac03d553f5915ce.webp",
                  slug: "iphone-16-plus",
                },
              ].map((p) => (
                <div key={p.slug} className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow bg-white">
                  <div>
                    <a href={`/product/${p.slug}`} className="block aspect-square mb-3 relative overflow-hidden rounded-xl">
                      <img src={p.img} alt={p.title} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                    </a>
                    <a href={`/product/${p.slug}`} className="text-sm font-bold text-gray-900 hover:text-[var(--background-primary,#f27f20)] line-clamp-1">
                      {p.title}
                    </a>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-base font-extrabold text-black">{p.price}</span>
                      <span className="text-xs text-gray-400 line-through">{p.regular}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href={`/product/${p.slug}`}
                      className="flex-1 py-2 bg-orange-50 hover:bg-[var(--background-primary,#f27f20)] text-[var(--background-primary,#f27f20)] hover:text-white text-xs font-bold rounded-lg text-center transition-colors"
                    >
                      View
                    </a>
                    <button
                      type="button"
                      onClick={() => showToast(`Added ${p.title} to cart!`)}
                      className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:text-[var(--background-primary,#f27f20)] hover:border-[var(--background-primary,#f27f20)] transition-colors cursor-pointer"
                      title="Add to cart"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Sticky Bottom Bar on Mobile */}
        <aside className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200 py-3 px-4 shadow-lg lg:hidden" aria-label="Mobile purchase bar">
          <div className="container [@media(min-width:1440px)]:max-w-[1440px] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <img src={selectedColor.image} alt="iPhone 18 Pro Max" className="size-10 object-contain shrink-0" />
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-900 truncate">iPhone 18 Pro Max</p>
                <p className="text-xs font-extrabold text-[var(--background-primary,#f27f20)]">৳ {cashPrice.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => showToast("Added to Cart!")}
                className="px-4 py-2 border-2 border-[var(--background-primary,#f27f20)] text-[var(--background-primary,#f27f20)] text-xs font-bold rounded-lg cursor-pointer whitespace-nowrap"
              >
                Add To Cart
              </button>
              <button
                type="button"
                onClick={() => showToast("Proceeding to checkout!")}
                className="px-4 py-2 bg-[var(--background-primary,#f27f20)] text-white text-xs font-bold rounded-lg cursor-pointer whitespace-nowrap"
              >
                Shop Now
              </button>
            </div>
          </div>
        </aside>

        <Footer />
      </div>
    </>
  );
}
