import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "dianneth",
    pageTitleSuffix: "⊹₊˚⋅",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google", tagId: "G-4KPK6R1TWD",
    },
    locale: "en-US",
    baseUrl: "garden.dnmurillo.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Exo 2",
        body: "Atkinson Hyperlegible Next",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f9f4fd",
          lightgray: "#fbeaff",
          gray: "#8c6f93",
          darkgray: "#5d4467",
          dark: "#4e3971",
          secondary: "#623369",
          tertiary: "#965bb9",
          highlight: "#8f54a91f",
          textHighlight: "#e6ccf5e8",
        },
         darkMode: {
          light: "#140d1a",
          lightgray: "#2b1d33",
          gray: "#7e6b8d",
          darkgray: "#a695b9",
          dark: "#b8abc5",
          secondary: "#9b699a",
          tertiary: "#c58ee7",
          highlight: "#6c3b794d",
          textHighlight: "#3f2d57a3"
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
