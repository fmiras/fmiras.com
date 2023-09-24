'use client'
import { useState } from 'react'

export default function Home() {
  const roles = ['software engineer', 'startup founder', 'angel investor']
  const [role, setRole] = useState(roles[0])
  const [changing, setChanging] = useState(false)

  const handleMouseOver = () => {
    if (changing) {
      return
    }

    let iteration = 0
    let interval: any = null
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const newRole = roles[Math.floor(Math.random() * roles.length)]

    clearInterval(interval)

    interval = setInterval(() => {
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
      }

      iteration += 1 / 3
    }, 30)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold" onMouseOver={handleMouseOver}>
        you can call me {'"'}fefo{'"'}, i{"'"}m a <span id="role">{role}.</span>
      </h1>
    </main>
  )
}
