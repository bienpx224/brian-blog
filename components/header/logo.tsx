import { Link } from '~/components/ui/link'
import { SITE_METADATA } from '~/data/site-metadata'

export function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-1">
      <img
        src="/static/images/logo.png"
        alt="Brian's Logo"
        className="h-8 w-8 rounded-full"
      />
      <span className="hidden font-medium sm:block">
        {SITE_METADATA.headerTitle}
      </span>
    </Link>
  )
}
