import { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "./assets/logow.png";
import React from "react";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src={logo} alt="Enso Logo" width="32" height="32" />

      <span style={{ marginLeft: ".4em", fontWeight: 600 }}>Enso API Docs</span>
    </>
  ),
  navigation: {
    prev: true,
    next: true,
  },
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com/invite/enso-finance",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Enso Shortcuts Registry Docs",
  },
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Enso Docs",
      };
    }
  },

  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta
          property="og:url"
          content={`https://docs.enso.finance.com${asPath}`}
        />
        <meta
          property="og:title"
          content={frontMatter.title || "Enso Shortcuts API"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description || "The Enso Shortcuts API documentation"
          }
        />
      </>
    );
  },
};

export default config;
