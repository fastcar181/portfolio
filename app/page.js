import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{backgroundImage: "url('/background.jpg')"}}>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">Hi! I'm Grace!</h1>
        <h1 className="text-3xl font-bold text-center sm:text-left">Welcome to my CS portfolio!</h1>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/about"
            rel="noopener noreferrer"
          >
            <Image
              src="/mmb1.png"
              alt="White bear holding a heart"
              width={20}
              height={20}
            />
            About
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
          href="www.linkedin.com/in/grace-le-a8a146221"
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
