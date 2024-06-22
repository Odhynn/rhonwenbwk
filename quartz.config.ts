import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🍁 Rhonwynbwk",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "odhynn.github.io/rhonwynbwk",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Ubuntu",
        body: "Ubuntu",
        code: "Ubuntu",
      },
      colors: {
        lightMode: {
          light: "#F9F5D7", // page background
          lightgray: "#EBDBB1", // borders
          gray: "#D4C3A1", // graph links, heavier borders
          darkgray: "#3C3836", // body text
          dark: "#427A57", // header text and icons
          secondary: "#D65C0D", // link colour, current graph node
          tertiary: "#CB231C", // hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // internal link background, highlighted text
        },
        darkMode: {
          light: "#1C1F20",
          lightgray: "#3C3836",
          gray: "#928373",
          darkgray: "#EBDBB1",
          dark: "#679D69",
          secondary: "#FE7F18",
          tertiary: "#FB4934",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
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
      // Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
