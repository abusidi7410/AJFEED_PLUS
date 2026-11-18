import { useEffect } from "react";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getProductBySlug } from "./data/products";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import { RouterProvider, useRouter } from "./router/Router";

function AppRoutes() {
  const { path } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [path]);

  let page;

  if (path === "/") {
    page = <HomePage />;
  } else if (path === "/about") {
    page = <AboutPage />;
  } else if (path === "/products") {
    page = <ProductsPage />;
  } else if (path.startsWith("/products/")) {
    const slug = decodeURIComponent(path.slice("/products/".length));
    const product = getProductBySlug(slug);
    page = product ? <ProductDetailPage product={product} /> : <NotFoundPage />;
  } else if (path === "/contact") {
    page = <ContactPage />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-950 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <div key={path} className="animate-page-in">
          {page}
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppRoutes />
    </RouterProvider>
  );
}
