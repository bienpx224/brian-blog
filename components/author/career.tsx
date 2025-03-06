import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { Image } from '~/components/ui/image'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { GrowingUnderline } from '~/components/ui/growing-underline'

const EXPERIENCES = [
  {
    org: 'Sotalabs Studio',
    url: 'https://sotalabs.com',
    logo: '/static/images/sotalabs-logo.png',
    start: 'Jan 2022',
    end: 'Present',
    title: 'Technical Lead',
    icon: 'briefcase',
    event: 'career-sotalabs',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Lead development teams and manage project lifecycles for fintech, AI, and gaming projects
          </li>
          <li>
            Built{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://stock.zenai.ai.vn/home">
              ZenAI Stock Analysis Platform
            </a>{' '}
            - AI-powered stock market analysis platform with real-time data processing
          </li>
          <li>
            Developed multiple successful Telegram Mini Apps games including{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/PlinkoMasterBot/plinkomaster?startapp=SCZ7Q0">
              Plinko Master
            </a>{' '}
            and{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/TeleMiniAppBrianBot/coinmaster?startapp=j8JsMNITqq">
              Coin Master
            </a>
          </li>
          <li>
            Built{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://arcade.pacman.meme/#/">
              Pacman Arcade
            </a>{' '}
            - A GameFi project on Blast blockchain network
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Sotatek Company',
    url: 'https://www.sotatek.com',
    logo: '/static/images/sotatek-logo.png',
    start: 'Mar 2022',
    end: 'Dec 2022',
    title: 'Game Developer',
    icon: 'man-technologist',
    event: 'career-sotatek',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developed{' '}
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.bunicorn.island">
              Bunicorn Island
            </a>{' '}
            - A GameFi project on BSC Network
          </li>
          <li>
            Responsible for ensuring features, quality, and project release according to plan
          </li>
          <li>
            Implemented game optimization techniques for textures, asset bundles, and lazy loading
          </li>
        </ul>
      )
    },
  },
  {
    org: 'VCCorp',
    url: 'https://vccorp.vn',
    logo: '/static/images/vccorp-logo.png',
    start: 'Sep 2018',
    end: 'Feb 2022',
    title: 'Mobile Developer',
    icon: 'man-technologist',
    event: 'career-vccorp',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developed and published multiple casual and puzzle games on mobile stores
          </li>
          <li>
            Developed library SDKs for Android applications using Java & C++, JNI in Lotus Social Network Project
          </li>
          <li>
            Led game development teams and managed multiple successful game launches
          </li>
        </ul>
      )
    },
  },
  {
    org: 'Ha Noi University of Science and Technology',
    url: 'https://www.hust.edu.vn/',
    logo: '/static/images/hust-logo.png',
    start: 'Aug 2014',
    end: 'Aug 2018',
    title: 'Bachelor in Information Technology and Communication',
    icon: 'man-student',
    event: 'career-hust',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Graduated with a degree in <strong>Information Technology and Communication</strong>
          </li>
          <li>
            Focused on software development and computer science fundamentals
          </li>
        </ul>
      )
    },
  },
]

export function CareerTimeline() {
  return (
    <ul className="m-0 list-none p-0">
      {EXPERIENCES.map((exp, idx) => (
        <li key={exp.url} className="m-0 p-0">
          <TimelineItem exp={exp} last={idx === EXPERIENCES.length - 1} />
        </li>
      ))}
    </ul>
  )
}

function TimelineItem({ exp, last }: { exp: (typeof EXPERIENCES)[0]; last?: boolean }) {
  let { org, title, icon, url, logo, start, end, event, details: Details } = exp
  return (
    <div
      className={clsx(
        'group/timeline-item',
        'relative -mx-3 flex flex-row items-start gap-3 rounded-lg p-3',
        'cursor-pointer bg-transparent transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        !last && [
          'before:absolute before:left-9 before:top-15',
          'before:h-full before:w-px',
          'before:bg-gray-300 dark:before:bg-gray-500',
        ]
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="h-12 w-12 shrink-0 rounded-md"
        style={{ objectFit: 'contain' }}
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-expand`}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={`${event}-collapse`}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <Link
                href={url}
                className="text-base font-medium text-gray-900 dark:text-gray-100"
              >
                {org}
              </Link>
              <span className="hidden text-gray-400 dark:text-gray-500 md:inline">&middot;</span>
              <span className="hidden text-gray-500 dark:text-gray-400 md:inline">{title}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 md:hidden">{title}</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {start} - {end}
            </span>
          </div>
        </summary>
        <div className="mt-3">
          <Details />
        </div>
      </details>
    </div>
  )
}
