'use client'
import { useEffect, useState } from 'react'
import { Computer } from './computer'

export default function Home() {
  const roles = ['software engineer', 'startup founder', 'angel investor']
  const maxRoleLength = Math.max(...roles.map((role) => role.length))
  const [role, setRole] = useState(roles[0])
  const [changing, setChanging] = useState(false)
  const [computerEnabled, setComputerEnabled] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === '.') {
        setComputerEnabled(!computerEnabled)
      }
    }
    document.addEventListener('keypress', handleKeyPress)
  }, [computerEnabled, setComputerEnabled])

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
    <main className="flex flex-col m-4 py-2 space-y-6 w-full max-w-2xl">
      <header className="flex justify-between items-center">
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

      <section className="flex-col space-y-4 justify-start">
        <h2 className="text-2xl font-bold">some projects:</h2>

        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/fmiras/potterscript"
              target="_blank"
              className="hover:underline"
            >
              PotterScript
            </a>
            <span className="text-sm text-gray-400">
              {' '}
              a programming language for the wizarding world{' '}
            </span>
          </li>
          <li>
            <a href="https://pluggy.ai" target="_blank" className="hover:underline">
              Pluggy
            </a>
            {/* my first tech startup */}
            <span className="text-sm text-gray-400"> my first technology startup </span>
          </li>
        </ul>
      </section>

      <Computer visible={computerEnabled} />

      {/* Blog */}
      {/* <section className="flex-col space-y-4 justify-start">
        <h2 className="text-2xl font-bold">some logs:</h2>
        <ul className="space-y-2">
          <li>
            <a
              href="https://github.com/fmiras/potterscript"
              target="_blank"
              className="hover:underline"
            >
              PotterScript
            </a>
            <span className="text-sm text-gray-400">
              {' '}
              a programming language for the wizarding world{' '}
            </span>
          </li>
          <li>
            <a href="https://pluggy.ai" target="_blank" className="hover:underline">
              Pluggy
            </a>
            <span className="text-sm text-gray-400"> my first technology startup </span>
          </li>
        </ul>
      </section> */}
    </main>
  )
}
