import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n, ValidLocale } from "../i18n"
import { FullSlug } from "../util/path"

const SUPPORTED_LOCALES: ValidLocale[] = ["fr-FR", "en-US"]
const LOCALE_PREFIXES: Record<ValidLocale, string> = {
  "fr-FR": "fr",
  "en-US": "en",
}
const LOCALE_NAMES: Record<ValidLocale, string> = {
  "fr-FR": "FR",
  "en-US": "EN",
}

function getCurrentLanguage(slug: FullSlug): ValidLocale {
  // Try to detect from slug first
  const segments = slug.split("/").filter((s: string) => s.length > 0)
  const firstSegment = segments[0]
  
  // Check if first segment is a language code
  if (firstSegment === "fr") return "fr-FR"
  if (firstSegment === "en") return "en-US"
  
  // If slug doesn't have language prefix, try to detect from window location (client-side)
  if (typeof window !== "undefined") {
    const path = window.location.pathname
    if (path.startsWith("/fr/") || path === "/fr") return "fr-FR"
    if (path.startsWith("/en/") || path === "/en") return "en-US"
  }
  
  // Default to French if no language prefix
  return "fr-FR"
}

function getLanguagePath(slug: FullSlug, targetLocale: ValidLocale): string {
  // Remove any existing language prefix from slug
  let cleanPath = slug
    .replace(/^(fr|en)\//, '')
    .replace(/\/index$/, '')
    .replace(/^index$/, '')
  
  // Normalize path
  if (cleanPath && !cleanPath.startsWith('/')) cleanPath = '/' + cleanPath
  if (!cleanPath) cleanPath = '/'
  
  // For French (default), use root or path without prefix
  if (targetLocale === 'fr-FR') {
    return cleanPath === '/' ? '/' : cleanPath
  }
  
  // For English, add /en prefix
  return '/en' + (cleanPath === '/' ? '' : cleanPath)
}

const LanguageSwitcher: QuartzComponent = ({ displayClass, cfg, fileData }: QuartzComponentProps) => {
  const currentLocale = cfg.locale
  const currentSlug = fileData.slug || ("index" as FullSlug)
  const langCopy = i18n(currentLocale).components.languageSwitcher
  
  // Detect actual current language from slug or config locale
  let actualLang = getCurrentLanguage(currentSlug)
  // If slug doesn't have language info, use config locale
  if (actualLang === "fr-FR" && currentLocale !== "fr-FR") {
    actualLang = currentLocale as ValidLocale
  }
  
  return (
    <div class={classNames(displayClass, "language-switcher")}>
      <div class="language-switcher__container">
        {SUPPORTED_LOCALES.map((locale) => {
          const isActive = locale === actualLang
          // Generate initial path - will be updated by client-side script
          let path = getLanguagePath(currentSlug, locale)
          // If we're building for a specific locale and slug is just "index",
          // generate better initial paths
          if (currentSlug === "index" && currentLocale === locale) {
            const prefix = LOCALE_PREFIXES[locale]
            path = prefix === "fr" ? "/" : `/${prefix}/`
          } else if (currentSlug === "index") {
            const prefix = LOCALE_PREFIXES[locale]
            path = prefix === "fr" ? "/" : `/${prefix}/`
          }
          const localeName = LOCALE_NAMES[locale]
          
          return (
            <a
              href={path}
              class={`language-switcher__option ${isActive ? "language-switcher__option--active" : ""}`}
              aria-label={`${langCopy.selectLanguage}: ${localeName}`}
              aria-current={isActive ? "page" : undefined}
              data-locale={locale}
            >
              {localeName}
            </a>
          )
        })}
      </div>
    </div>
  )
}

LanguageSwitcher.css = `
.language-switcher {
  display: flex;
  align-items: center;
}

.language-switcher__container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--action-btn-bg, color-mix(in srgb, var(--light) 95%, rgba(255, 255, 255, 0.6)));
  border: var(--action-btn-border, 1px solid var(--gray));
  border-radius: 0.375rem;
  padding: 0.125rem;
  box-shadow: var(--action-btn-shadow, 0 1px 2px rgba(0, 0, 0, 0.05));
}

.language-switcher__option {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 1.75rem;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--darkgray);
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease, color 0.15s ease;
  border: none;
  background: transparent;
  cursor: pointer;
  box-sizing: border-box;
}

.language-switcher__option:hover {
  background: var(--highlight);
  color: var(--dark);
}

.language-switcher__option--active {
  background: var(--dark) !important;
  color: var(--light) !important;
  font-weight: 600;
  width: 2rem;
  height: 1.75rem;
  padding: 0;
}

.language-switcher__option--active:hover {
  background: var(--darkgray) !important;
  color: var(--light) !important;
  width: 2rem;
  height: 1.75rem;
}

.language-switcher__option--active,
.language-switcher__option--active:hover,
.language-switcher__option--active:focus,
.language-switcher__option--active:visited {
  color: var(--light) !important;
}

@media (max-width: 640px) {
  .language-switcher__option {
    width: 1.75rem;
    height: 1.5rem;
    font-size: 0.8125rem;
  }
  
  .language-switcher__option--active,
  .language-switcher__option--active:hover {
    width: 1.75rem;
    height: 1.5rem;
  }
}
`

LanguageSwitcher.afterDOMLoaded = `
(function() {
  function updateLanguageSwitcherLinks() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.language-switcher__option');
    
    // Extract clean path without language prefix
    let cleanPath = currentPath
      .replace(/^\\/(fr|en)(\\/|$)/, '/')
      .replace(/\\/$/, '') || '/';
    
    links.forEach(function(link) {
      const locale = link.getAttribute('data-locale');
      let newPath;
      
      if (locale === 'fr-FR') {
        newPath = cleanPath;
      } else if (locale === 'en-US') {
        newPath = '/en' + (cleanPath === '/' ? '' : cleanPath);
      }
      
      link.href = newPath;
    });
  }
  
  // Update links on page load
  updateLanguageSwitcherLinks();
  
  // Update links on navigation (for SPA behavior)
  document.addEventListener('nav', updateLanguageSwitcherLinks);
})();
`

export default (() => LanguageSwitcher) satisfies QuartzComponentConstructor

