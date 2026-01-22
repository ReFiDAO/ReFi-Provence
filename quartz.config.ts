import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration for ReFi Provence
 *
 * Site: ReFi Provence
 * Base URL: refidao.github.io/refi-provence
 * Default Locale: fr-FR (French)
 * Multi-language: fr-FR (default), en-US
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */

// Support environment variables for multi-language builds
const LOCALE = (process.env.QUARTZ_LOCALE as string) || "fr-FR"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "ReFi Provence",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: LOCALE as any,
    baseUrl: "https://refidao.github.io/ReFi-Provence",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Outfit",
        body: "Sora",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f6e2",
          lightgray: "#f0edd8",
          gray: "#8F9A9E",
          darkgray: "#024b5a",
          dark: "#024b5a",
          secondary: "#1fb5cb",
          tertiary: "#024b5a",
          highlight: "rgba(31, 181, 203, 0.15)",
          textHighlight: "rgba(31, 181, 203, 0.25)",
        },
        darkMode: {
          light: "#0a1a1f",
          lightgray: "#151f24",
          gray: "#6B7A8F",
          darkgray: "#b8d4da",
          dark: "#e6f5f8",
          secondary: "#1fb5cb",
          tertiary: "#4dd4e8",
          highlight: "rgba(31, 181, 203, 0.15)",
          textHighlight: "rgba(31, 181, 203, 0.25)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
