import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

interface NavigateOptions {
  replace?: boolean;
}

interface RouterValue {
  path: string;
  navigate: (to: string, options?: NavigateOptions) => void;
}

const RouterContext = createContext<RouterValue | null>(null);

function normalizePath(value: string): string {
  const path = (value.split("?")[0] || "/").split("#")[0] || "/";
  if (path.length > 1 && path.endsWith("/")) {
    return path.replace(/\/+$/, "");
  }
  return path;
}

function isExternal(to: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(to);
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((to: string, options: NavigateOptions = {}) => {
    const targetPath = normalizePath(to);
    const currentPath = normalizePath(window.location.pathname);

    if (options.replace || targetPath === currentPath) {
      window.history.replaceState({}, "", to);
    } else {
      window.history.pushState({}, "", to);
    }

    setPath(targetPath);

    const hashIndex = to.indexOf("#");
    const hash = hashIndex >= 0 ? to.slice(hashIndex) : "";

    window.requestAnimationFrame(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterValue {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const external = isExternal(to);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      external ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === "_blank"
    ) {
      return;
    }

    if (to.startsWith("#")) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
