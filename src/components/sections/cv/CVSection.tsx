export default function CVSection() {
  return (
    <section id="cv" className="relative py-28 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="
            rounded-2xl
            bg-black/40 backdrop-blur-sm border border-orange-600
            px-8 py-14
            transition-colors
            hover:border-orange-500/50
          "
        >
          {/* Content */}
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-white">Download my CV</h3>

            <p className="mt-3 text-white/70">
              Download my CV and learn more about my experience, skills and the
              way I approach software development.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row text-center sm:justify-center">
              {/* Primary */}
              <a
                href="/cv/Antonio_Carvajal_CV_EN.pdf"
                download
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  bg-orange-600
                  border border-orange-700/60
                  px-6 py-3
                  text-sm font-medium text-white
                  transition-colors
                 hover:bg-orange-500 hover:brightness-110

                "
              >
                Download in English
              </a>

              {/* Secondary */}
              <a
                href="/cv/Antonio_Carvajal_CV_ES.pdf"
                download
                className="
                  inline-flex items-center justify-center
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  px-6 py-3
                  text-sm font-medium text-gray-300
                  transition-colors
                  hover:bg-white/10 hover:text-white
                "
              >
                Download in Spanish
              </a>
            </div>
            {/* Footer micro-copy */}
            <p className="mt-8 text-xs text-white/40">Last updated · 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
