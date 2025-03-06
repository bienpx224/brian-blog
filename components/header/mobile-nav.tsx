'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { clsx } from 'clsx'
import { Menu, X } from 'lucide-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'
import { HEADER_NAV_LINKS, MORE_NAV_LINKS } from '~/data/navigation'
import { SITE_METADATA } from '~/data/site-metadata'
import { Logo } from './logo'

const HEADER_LINKS = [
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About',
    href: '/about',
  },
]

export function MobileNav() {
  let [navShow, setNavShow] = useState(false)
  let navRef = useRef(null)

  let onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <>
      <button
        className="sm:hidden"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        data-umami-event="mobile-nav-toggle"
      >
        <Menu className="h-6 w-6" />
      </button>
      <Transition show={navShow} as={Fragment}>
        <Dialog onClose={onToggleNav} className="fixed inset-0 z-30 sm:hidden">
          <TransitionChild
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <DialogPanel className="fixed inset-0 z-40 h-full w-full bg-white/95 p-4 dark:bg-gray-800/95">
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  className="h-8 w-8 rounded-lg p-1"
                  aria-label="Toggle Menu"
                  onClick={onToggleNav}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav ref={navRef} className="fixed mt-8 h-full w-full">
                <div className="flex flex-col items-center space-y-8">
                  {HEADER_LINKS.map(({ title, href }) => (
                    <Link
                      key={title}
                      href={href}
                      className="text-2xl font-bold tracking-widest"
                      onClick={onToggleNav}
                    >
                      {title}
                    </Link>
                  ))}
                  <Link
                    href={SITE_METADATA.github}
                    className="text-2xl font-bold tracking-widest"
                    onClick={onToggleNav}
                  >
                    GitHub
                  </Link>
                  <Link
                    href={SITE_METADATA.linkedin}
                    className="text-2xl font-bold tracking-widest"
                    onClick={onToggleNav}
                  >
                    LinkedIn
                  </Link>
                </div>
              </nav>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
