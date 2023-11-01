import Link from "next/link"

export default function Home() {
  return (
    <section className="w-full px-12 sm:px-4">
      <div className="container px-4 md:px-6">
        <nav className="flex justify-end p-4">
          <div className="flex gap-4">
            <Link className="text-zinc-900 dark:text-zinc-100" href="#">
              Rakuten Web Search
            </Link>
          </div>
        </nav>
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <img
            alt="RWS Bot"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="550"
          />
          <div className="flex flex-col justify-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">RWS Bot</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rakuten Web Search Bot</h2>
              <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Simplify your Scrum activities and keep track of your system's status with real-time alerts using RWS
                Bot.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <svg
                  className=" mr-2 inline-block h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Automate standup, grooming, and retrospective meetings.
              </li>
              <li>
                <svg
                  className=" mr-2 inline-block h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Monitor your system's status with push alerts.
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="#"
              >
                <svg
                  className=" mr-2 inline-block h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                Chat with RWS Bot
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Rakuten Web Search Group. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
