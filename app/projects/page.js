import Image from "next/image";

export default function Projects() {
    return (
        <div className="bg-gray-100 text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" style={{backgroundImage: "url('/background.jpg')"}}>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1 className="text-4xl font-bold text-center sm:text-left">Projects</h1>
            <p className="text-xl text-center sm:text-left">You can check out my projects below! I'm always working on something, so this page will be updated very frequently. I am also planning on adding live demos for these!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <img src="/2D-Game-Demonstration.gif" alt="Project Screenshot" className="w-full h-48 object-cover rounded-t-lg" />
                    <h3 className="text-2xl font-bold mt-4">2D Top-Down Pixel Game in Unity</h3>
                    <p className="text-gray-700 mt-2">Status: WIP</p>
                    <p className="text-gray-700 mt-2">This is a simple 2D game that is currently in its (very) early stages. I'm currently working on this, and I'm having such a blast learning how to develop games. I am expecting to finish it February 14 and will publish a live demo of it!</p>
                    <p className="text-gray-700 mt-2">Languages: C#</p>
                    <p className="text-gray-700 mt-2">Technologies: Unity</p>
                    <div className="mt-4 flex gap-4">
                        <a href="https://github.com/fastcar181/Love-Letter-Delivery" className="text-blue-500 hover:underline">GitHub Repo</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <img src="/Steam-Stats-Demonstration.png" alt="Project Screenshot" className="w-full h-48 object-cover rounded-t-lg" />
                    <h3 className="text-2xl font-bold mt-4">Steam API Integration Application</h3>
                    <p className="text-gray-700 mt-2">Status: Complete</p>
                    <p className="text-gray-700 mt-2">This is a simple application that lets the user enter their Steam ID to lookup some stats, notably their list of games and playtimes for each. The profiles are saved to a database where it can be accessed later and a graph, relating to a player's preferred genre, can be generated and viewed. While it is complete, I am currently trying to turn this project from an API integration project to an API development one before I deploy it!</p>
                    <p className="text-gray-700 mt-2">Languages: Python, SQL</p>
                    <p className="text-gray-700 mt-2">Technologies: Streamlit</p>
                    <div className="mt-4 flex gap-4">
                        <a href="https://github.com/fastcar181/steam-statistics" className="text-blue-500 hover:underline">GitHub Repo</a>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <img src="/Robot-Program-Demonstration.png" alt="Project Screenshot" className="w-full h-48 object-cover rounded-t-lg" />
                    <h3 className="text-2xl font-bold mt-4">Robot Delivery Program</h3>
                    <p className="text-gray-700 mt-2">Status: Complete</p>
                    <p className="text-gray-700 mt-2">This was a final collaborative project for a second-year robotics course where the goal was to have three robots deliver two jars of three different colours. This involved figuring out a search algorithm, collision-free navigation, and the use of state machines for the logic of the program.</p>
                    <p className="text-gray-700 mt-2">Languages: Java</p>
                    <p className="text-gray-700 mt-2">Technologies: Webots</p>
                </div>
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
                href="/about"
                rel="noopener noreferrer"
              >
                <Image
                  src="/mmb2.png"
                  alt="Brown bear reading a book"
                  width={20}
                  height={20}
                />
                About
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
  