import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.PageTitle(),
    Component.Navigation(),
    // Component.Search(), // Removed per questionnaire requirement
    Component.LanguageSwitcher(),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "ReFi Provence": "https://refidao.github.io/ReFi-Provence",
      "LinkedIn": "https://www.linkedin.com/company/refi-provence/",
      "Telegram": "https://t.me/refipaca",
      "Twitter/X": "https://x.com/ReFi_Provence",
      "YouTube": "https://youtube.com/@ReFiProvence",
      "ReFi DAO": "https://refidao.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}
