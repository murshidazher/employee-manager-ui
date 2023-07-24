import { MainNav } from "./main-nav";

export const SiteHeader = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 bg-background/95 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
      </div>
    </header>
  );
};
