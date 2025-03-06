import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { SITE_METADATA } from '~/data/site-metadata'

const LINKS = [
  {
    title: 'AI Stock Analysis',
    href: 'https://stock.zenai.ai.vn/home',
    description: 'Real-time stock market analysis powered by AI',
  },
  {
    title: 'Telegram Games',
    href: 'https://t.me/PlinkoMasterBot/plinkomaster?startapp=SCZ7Q0',
    description: 'Collection of engaging games built for Telegram platform',
  },
  {
    title: 'GameFi Projects',
    href: 'https://arcade.pacman.meme/#/',
    description: 'Blockchain games with play-to-earn mechanics',
  },
  {
    title: 'Mobile Games',
    href: 'https://play.google.com/store/apps/dev?id=5518484502338036041',
    description: 'Casual and puzzle games for mobile platforms',
  },
]

export function Links() {
  return (
    <div className="flex flex-col gap-3">
      {LINKS.map(({ title, href, description }) => (
        <Link
          key={href}
          href={href}
          className="group flex flex-col gap-0.5 text-base text-zinc-600 no-underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <span className="font-medium text-zinc-900 group-hover:text-primary-500 dark:text-zinc-100 dark:group-hover:text-primary-400">
            {title}
          </span>
          <span className="line-clamp-2">{description}</span>
        </Link>
      ))}
    </div>
  )
}
