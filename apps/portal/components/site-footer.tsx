import { siteConfig } from "@/config/site";

export const SiteFooter = () => {
  return (
    <footer className="border-input border border-solid py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          Built by{" "}
          <a
            href={siteConfig.author.site}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            murshidazher
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};
