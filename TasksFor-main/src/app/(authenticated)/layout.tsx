'use client';

import '../globals.scss'
import './home.scss'
import ActiveLinkButton from '../../../components/activeLinkButton/activeLinkButton';

// export const metadata = {
//   title: 'Home | TasksFor',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }: { children: React.ReactNode } ) {

  return (
    <html lang="en">
      <body>
        <header>
          <h1>TasksFor</h1>
          <nav>
            <ul>
              <ActiveLinkButton title={'Inicio'} href={'/'} />
              <ActiveLinkButton title={'Quadro'} href={'/tasks'} />
              <ActiveLinkButton title={'Equipe'} href={'/users'} />
              <ActiveLinkButton title={'Logout'} href={'/login'} />
            </ul>
          </nav>
        </header>

        <main>
          { children }
        </main>
      </body>
    </html>
  )
}
