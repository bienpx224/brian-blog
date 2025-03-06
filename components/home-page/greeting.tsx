import clsx from 'clsx'
import { Twemoji } from '~/components/ui/twemoji'

export function Greeting() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Hi, I'm Brian 👋
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I'm a Software Engineer & Technical Lead specializing in AI/ML integration, full-stack development, and game development. 
        Currently leading development teams at Sotalabs Studio, where we build innovative solutions in fintech, AI, and gaming sectors.
      </p>
    </div>
  )
}
