import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { BLOG_LIST } from '@/src/data/blog';

export const metadata: Metadata = {
  title: 'Septic Tips & Resources | A Wesco Septic Blog',
  description: 'Septic system tips, maintenance advice, and expert guidance from A Wesco Septic — serving Snohomish County, King County, and Camano Island since 1989.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = BLOG_LIST;
  return (
    <>
      <TopBar />
      <Header />
      <main className="pb-[80px] md:pb-0">

        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-24 lg:pt-20">
          {/* Hero photo background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/canyon-hero.webp"
              alt="Awesco Septic team member at the Grand Canyon"
              fill
              priority
              className="object-cover object-bottom"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(31,41,55,0.48) 0%, rgba(31,41,55,0.62) 100%)' }}
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{ background: 'linear-gradient(105deg, rgba(31,41,55,0.58) 0%, rgba(31,41,55,0.40) 50%, rgba(31,41,55,0.25) 100%)' }}
            />
          </div>
          <div className="bg-grid-dark absolute inset-0 z-[1] opacity-20" aria-hidden />
          <div className="absolute left-0 top-0 z-[1] h-1 w-full bg-hi" aria-hidden />
          <div
            className="absolute -right-32 -top-32 z-[1] hidden h-[340px] w-[340px] rotate-12 bg-hi opacity-90 lg:block"
            style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 70%, 0 100%)' }}
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">
            <p className="eyebrow mb-4">/ Septic Tips & Resources</p>
            <h1
              className="font-display uppercase leading-[0.85] tracking-tightest text-bone-200"
              style={{ fontSize: 'clamp(52px, 7vw, 100px)' }}
            >
              <span className="block">STRAIGHT</span>
              <span className="block text-hi">ANSWERS</span>
              <span className="block text-bone-400">FROM THE FIELD.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-bone-300">
              Tips, guides, and honest advice from a team that&rsquo;s been in the septic business
              since 1989. No fluff — just what you need to know to keep your system running.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-bone-100 py-16 text-ink-900 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6">
            <div className="grid grid-cols-1 gap-px bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden bg-bone-100 transition-colors hover:bg-ink-900 hover:text-bone-200"
                >
                  {post.heroImage && (
                    <div className="relative aspect-[16/10] bg-ink-900/10">
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between p-8 lg:p-10">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="border border-ink-900/20 px-2 py-1 font-mono text-[9px] uppercase tracking-wider2 text-ink-600 group-hover:border-hi group-hover:text-hi">
                          {post.tag}
                        </span>
                        <span className="font-mono text-[10px] text-ink-400 group-hover:text-bone-400">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl uppercase leading-tight tracking-tight text-ink-900 group-hover:text-bone-200 lg:text-3xl">
                        {post.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-ink-600 group-hover:text-bone-300">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-2 font-display text-sm uppercase tracking-wider text-ink-900 group-hover:text-hi">
                      Read Article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink-900 py-16 text-bone-200">
          <div className="mx-auto max-w-[1400px] px-6 text-center">
            <p className="eyebrow justify-center mb-4">/ Have a Question?</p>
            <h2 className="font-display text-4xl uppercase leading-[0.9] tracking-tightest sm:text-5xl mb-6">
              We Answer the Phone.<br />
              <span className="text-hi">24/7.</span>
            </h2>
            <a
              href="tel:3606686561"
              className="inline-flex items-center gap-2 bg-hi px-8 py-5 font-display text-2xl uppercase tracking-wider text-ink-900 hover:-translate-y-0.5 transition-all"
            >
              (360) 668-6561
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
