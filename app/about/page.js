import Image from "next/image";

export default function About() {
    return (
      <div className="bg-gray-100 text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cover bg-center bg-no-repeat md:bg-fixed" style={{backgroundImage: "url('/background.jpg')", backgroundSize: "cover"}} >
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold text-center sm:text-left">About Me</h1>
          <p className="text-xl text-center sm:text-left">Hi! I'm Grace Le, a second-year computer science student with a concentration in Artificial Intelligence and Machine Learning at Carleton University! Once I am finished with my second year, I will be doing an 8 month co-op as a Junior Developer at Global Affairs Canada! I made this portfolio because I wasn't happy with my previous one, so I decided to learn Next.js to create a portfolio I'm proud of. This portfolio is currently in its early stages, and I am so excited to expand on this, creating a dynamic and fluid page that reflects who I am as a person!</p>
          <h1 className="text-4xl font-bold text-center sm:text-left">Programming Skillset</h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 px-4 py-8">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="h-16"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="h-16"/>               
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="h-16"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="h-16"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="h-16"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" className="h-16"/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="h-16" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="h-16"/>
          </div>
          <h1 className="text-4xl font-bold text-center sm:text-left">Personal Interests</h1>
          <p className="text-xl text-center sm:text-left">Aside from coding, I have a lot of hobbies and interests that make life more interesting! I enjoy cooking (and trying new foods), casually reading, listening to music, playing games, watching TV shows and movies, and staying active! I could talk about this for ages, but I'll drop a few of my favourite things (at the moment) so you can get to know me a little better!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/04mlpyRplis2yvf18EwaeN?utm_source=generator" width="100%" height="100" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/"
              rel="noopener noreferrer"
            >
              <Image
                src="/mmb1.png"
                alt="White bear holding a heart"
                width={20}
                height={20}
              />
              Home
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/projects"
              rel="noopener noreferrer"
            >
              <Image
                src="/mmb2.png"
                alt="Brown bear reading a book"
                width={20}
                height={20}
              />
              Projects
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/contact"
              rel="noopener noreferrer"
            >
              <Image
                src="/mmb3.png"
                alt="White bear wearing a brown suit"
                width={20}
                height={20}
              />
              Contact
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/fastcar181"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="GitHub icon"
              width={16}
              height={16}
            />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:gracele@cmail.carleton.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/outlook.svg"
              alt="Outlook icon"
              width={16}
              height={16}
            />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/grace-le-a8a146221"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={16}
              height={16}
            />
          </a>
        </footer>
      </div>
    );
}
