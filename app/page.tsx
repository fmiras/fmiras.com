'use client'
import { useEffect, useState } from 'react'
import { Computer } from './computer'
import { CoffeeMachine } from './coffee-machine'
import { Gameboy } from './gameboy'

declare var window: Window & { keyboard: string[] }

type Project = {
  name: string
  url: string
  description: string
}

const projects = [
  // {
  //   name: 'GameGirl',
  //   url: 'https://github.com/fmiras/gamegirl',
  //   description: 'Classic Nintendo Game Boy emulator written in Rust, compiled to WebAssembly.'
  // },
  {
    name: 'Scale AI',
    url: 'https://scale.com',
    description: 'we deliver high quality training data for all type of AI models'
  },
  {
    name: 'PotterScript',
    url: 'https://github.com/fmiras/potterscript',
    description: 'a programming language for the wizarding world.'
  },
  {
    name: 'superoptimizer',
    url: 'https://github.com/fmiras/superoptimizer',
    description: 'bun-based superoptimizer of made-up assembly.'
  },
  {
    name: 'Pluggy',
    url: 'https://pluggy.ai',
    description: 'my first technology startup. An Open Banking API for Brazil.'
  }
]

export default function Home() {
  const roles = ['software engineer', 'startup founder', 'angel investor']
  const maxRoleLength = Math.max(...roles.map((role) => role.length))
  const [role, setRole] = useState(roles[0])
  const [changing, setChanging] = useState(false)

  const [computerEnabled, setComputerEnabled] = useState(false)
  const [coffeeEnabled, setCoffeeEnabled] = useState(false)
  const [gameboyEnabled, setGameboyEnabled] = useState(false)

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (window.keyboard.join('').toLowerCase().endsWith('coffee')) {
        setCoffeeEnabled(true)
      }

      if (window.keyboard.join('').toLowerCase().endsWith('gameboy')) {
        setGameboyEnabled(true)
      }

      if (event.key === '.') {
        setComputerEnabled(true)
      }

      if (event.key === 'Escape') {
        setComputerEnabled(false)
      }
    }

    document.addEventListener('keyup', handleKeyUp)
  }, [])

  const handleMouseOver = () => {
    if (changing) {
      return
    }

    let iteration = 0
    let interval: any = null
    const letters = 'abcdefghijklmnopqrstuvwxyz'

    // avoid same role as current
    const possibleRoles = roles.filter((candidateRole) => candidateRole !== role)
    const newRole = possibleRoles[Math.floor(Math.random() * possibleRoles.length)]

    clearInterval(interval)

    interval = setInterval(() => {
      setChanging(true)
      setRole(
        newRole
          .split('')
          .map((_letter, index) => {
            if (index < iteration) {
              return newRole[index]
            }

            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join('')
      )

      if (iteration >= newRole.length) {
        clearInterval(interval)
        setChanging(false)
      }

      iteration += 1 / 3
    }, 30)
  }

  return (
    <main className="flex flex-col space-y-6 w-full max-w-2xl px-4 py-8 md:py-16">
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

      <p className="text-2xl font-bold" onMouseOver={handleMouseOver}>
        you can call me {'"'}fefo{'"'}, i{"'"}m a{' '}
        <span id="role">{role.padEnd(maxRoleLength, ' ')}</span>
      </p>

      <div className="border-t border-gray-200 my-8" />

      <section className="flex-col justify-start">
        <h2 className="text-2xl font-bold my-6 p-2">some projects:</h2>

        <ul className="flex flex-col space-y-4">
          {projects.map((project: Project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              className="rounded-md p-2 transition-colors duration-300 ease-in-out cursor-pointer hover:shadow-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:font-bold"
            >
              <li>
                {' '}
                {project.name}
                <br />
                <span
                  className="text-sm text-gray-400
                "
                >{` ${project.description}`}</span>
              </li>
            </a>
          ))}
        </ul>
      </section>

      <section className="flex flex-row space-y-8 justify-end">
        {coffeeEnabled && <CoffeeMachine />}
        {gameboyEnabled && <Gameboy />}
      </section>

      <Computer visible={computerEnabled} />
    </main>
  )
}
