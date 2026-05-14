import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowLeft, ArrowUpRight } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import type { BlogPost, BlogSection } from '@/src/data/blog';
import { BLOG_POSTS } from '@/src/data/blog';

function renderSection(section: BlogSection, index: number) {
  switch (section.type) {
    case 'intro':
      return (
        <p key={index} className="text-base leading-relaxed text-ink-700 sm:text-lg">
          {section.body}
        </p>
      );

    case 'h2':
      return (
        <div key={index} className="mt-10 first:mt-0">
          <h2 className="font-display text-2xl uppercase leading-tight tracking-tight text-ink-900 sm:text-3xl">
            {section.heading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-700">{section.body}</p>
        </div>
      );

    case 'h2list':
      return (
        <div key={index} className="mt-10 first:mt-0">
          <h2 className="font-display text-2xl uppercase leading-tight tracking-tight text-ink-900 sm:text-3xl">
            {section.heading}
          </h2>
          {section.intro && (
            <p className="mt-3 text-base leading-relaxed text-ink-700">{section.intro}</p>
          )}
          <ul className="mt-5 space-y-5">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-4 border-l-2 border-hi-700 pl-4">
                <div>
                  {item.heading && (
                    <p className="font-display text-base uppercase tracking-tight text-ink-900 sm:text-lg">
                      {item.heading}
                    </p>
                  )}
                  <p className={`text-sm leading-relaxed text-ink-600 sm:text-base ${item.heading ? 'mt-1' : ''}`}>
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );


    case 'image':
      return (
        <figure key={index} className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden bg-ink-900/10">
            <Image
              src={section.src}
              alt={section.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-wider2 text-ink-500">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'callout':
      return (
        <div key={index} className="mt-10 border border-hi-700/30 bg-hi/5 px-6 py-5">
          <p className="text-sm font-medium leading-relaxed text-ink-800 sm:text-base">{section.body}</p>
        </div>
      );

    case 'cta':
      return null; // Handled separately at page level

    default:
      return null;
  }
}

interface Props {
  post: BlogPost;
}

export default function BlogPostTemplate({ post }: Props) {
  const ctaSection = post.sections.find(s => s.type === 'cta') as Extract<BlogSection, { type: 'cta' }> | undefined;
  const relatedPosts = (post.relatedSlugs ?? [])
    .map(slug => BLOG_POSTS[slug])
    .filter(Boolean);

  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink-900 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20">
          {post.heroImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                priority
                className="object-cover object-[center_30%] sm:object-center"
                sizes="100vw"
              />
              <div
                className="absolute inset-0 lg:hidden"
                style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.55) 0%, rgba(31,41,55,0.70) 100%)' }}
              />
              <div
                className="absolute inset-0 hidden lg:block"
                style={{ background: 'linear-gradient(105deg, rgba(31,41,55,0.72) 0%, rgba(31,41,55,0.58) 50%, rgba(31,41,55,0.35) 100%)' }}
              />
            </div>
          )}
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-20" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[340px] w-[340px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider2 text-bone-400">
              <Link href="/" className="hover:text-hi transition-colors">Home</Link>
              <span className="opacity-40">›</span>
              <Link href="/blog" className="hover:text-hi transition-colors">Blog</Link>
              <span className="opacity-40">›</span>
              <span className="text-hi line-clamp-1">{post.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="border border-hi/40 px-2 py-1 font-mono text-[9px] uppercase tracking-wider2 text-hi">
                {post.tag}
              </span>
              <span className="font-mono text-[10px] text-bone-400">{post.date}</span>
            </div>

            <h1
              className="max-w-3xl font-display uppercase leading-[0.88] tracking-tightest text-bone-200"
              style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
            >
              {post.title}
            </h1>
          </div>
        </section>

        {/* ── ARTICLE BODY ─────────────────────────────────────────────── */}
        <section className="bg-bone-100 py-16 text-ink-900 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_340px]">

              {/* Main content */}
              <article className="space-y-6">
                {post.sections
                  .filter(s => s.type !== 'cta')
                  .map((section, i) => renderSection(section, i))}

                {/* Back to blog */}
                <div className="mt-12 border-t border-ink-900/10 pt-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-ink-900 hover:text-hi-700 transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to All Articles
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">

                {/* CTA box */}
                {ctaSection && (
                  <div className="bg-ink-900 p-6 text-bone-200">
                    <div className="mb-1 font-mono text-[9px] uppercase tracking-wider2 text-hi">/ Have a Question?</div>
                    <h3 className="font-display text-xl uppercase leading-tight tracking-tight text-bone-200">
                      {ctaSection.heading}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-bone-300">{ctaSection.body}</p>
                    <a
                      href="tel:3606686561"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-hi px-5 py-4 font-display text-base uppercase tracking-wider text-ink-900 hover:-translate-y-0.5 transition-all"
                    >
                      <Phone className="h-4 w-4" />
                      (360) 668-6561
                    </a>
                    <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-wider text-bone-400">
                      24/7 · Licensed &amp; Insured
                    </p>
                  </div>
                )}

                {/* Related posts */}
                {relatedPosts.length > 0 && (
                  <div className="border border-ink-900/10 p-6">
                    <div className="mb-4 font-mono text-[9px] uppercase tracking-wider2 text-ink-500">Related Articles</div>
                    <ul className="space-y-4">
                      {relatedPosts.map(related => (
                        <li key={related.slug} className="border-b border-ink-900/10 pb-4 last:border-0 last:pb-0">
                          <Link
                            href={`/blog/${related.slug}`}
                            className="group flex items-start gap-2 text-sm font-medium leading-snug text-ink-900 hover:text-hi-700 transition-colors"
                          >
                            <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform group-hover:rotate-12" />
                            {related.title}
                          </Link>
                          <span className="mt-1 block font-mono text-[9px] uppercase tracking-wider text-ink-400">
                            {related.tag} · {related.date}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Trust strip */}
                <div className="border border-ink-900/10 p-5">
                  <div className="font-mono text-[9px] uppercase tracking-wider2 text-ink-500 mb-3">A Wesco Septic</div>
                  <ul className="space-y-1.5 text-xs text-ink-600">
                    <li>★★★★★ 4.8 Google / 400+ Reviews</li>
                    <li>Licensed &amp; Insured</li>
                    <li>Family-Owned Since 1989</li>
                    <li>Snohomish · King · Island County</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
