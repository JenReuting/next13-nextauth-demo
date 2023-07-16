import Link from 'next/link'


const Header = () => {
    return (
        <header className='flex h-24 flex-col justify-center bg-stone-100'>
        <nav className='container'>
          <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
            <li className='text-sm'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-sm'>
              <Link href='/protected/server'>Protected Server Page</Link>
            </li>
            <li className='text-sm'>
              <Link href='/protected/client'>Protected Client Page</Link>
            </li>
            <li>
              <SignInButton />
            </li>
          </ul>
        </nav>
      </header>
    )