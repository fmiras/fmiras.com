'use client'

type App = {
  name: string
  url: string
  referral?: string
  description?: string
}

const apps: App[] = [
  {
    name: 'Arc',
    url: 'https://arc.net',
    referral: 'https://arc.net/gift/44e54a85',
    description: 'Best browser I have ever used. And I have used a lot of browsers.'
  },
  {
    name: 'Warp',
    url: 'https://warp.dev',
    referral: 'https://app.warp.dev/referral/7QEY9W',
    description: 'The terminal where I can hack the most.'
  },
  {
    name: 'Raycast',
    url: 'https://raycast.com',
    description: 'The replacement for Spotlight I have been waiting for.'
  },
  {
    name: 'Inkdrop',
    url: 'https://inkdrop.app',
    referral: 'https://www.inkdrop.app/?r=pF2up08Pc',
    description: 'The only note-taking app I have ever used. Markdown-based.'
  },
  {
    name: 'Visual Studio Code',
    url: 'https://code.visualstudio.com',
    description: 'I used to be in love with VSCode. Now this is just what I use.'
  },
  {
    name: 'Cron',
    url: 'https://cron.com',
    description: 'Just better than Google Calendar.'
  }
]

export default function Home() {
  return (
    <main className="flex flex-col space-y-6 w-full max-w-2xl px-4 py-8 md:py-32">
      <header className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4">federico miras</h1>

        <nav className="flex justify-end space-x-4">
          <a
            href="https://twitter.com/fefomiras"
            target="_blank"
            className="hover:underline text-sm"
          >
            twitter
          </a>
          <a href="https://github.com/fmiras" target="_blank" className="hover:underline text-sm">
            github
          </a>
        </nav>
      </header>

      <div className="border-t border-gray-200 my-8" />

      <section>
        <h2 className="text-2xl font-bold">software i use:</h2>
        <ul className="flex flex-col space-y-2 mt-5">
          {apps.map((app) => (
            <a
              href={app.url}
              target="_blank"
              className="rounded-md p-2 transition-colors duration-300 ease-in-out cursor-pointer hover:shadow-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:font-bold"
            >
              <li key={app.name}>{app.name}</li>
            </a>
          ))}
        </ul>
      </section>
    </main>
  )
}
