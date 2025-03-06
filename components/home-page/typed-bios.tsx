'use client'

import { TypeAnimation } from 'react-type-animation'
import { Twemoji } from '~/components/ui/twemoji'

const BIOS = [
  'I build AI-powered solutions 🤖',
  1000,
  'I develop games for fun 🎮',
  1000,
  'I write about tech 📝',
  1000,
  'I create scalable applications 🚀',
  1000,
  'I lead development teams 👨‍💻',
  1000,
  'I optimize performance ⚡',
  1000,
  'I solve real-world problems 🌟',
  1000,
]

export function TypedBios() {
  return (
    <TypeAnimation
      sequence={BIOS}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-neutral-900 dark:text-neutral-200"
    />
  )
}
