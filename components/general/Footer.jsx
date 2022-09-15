<<<<<<< HEAD
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../common/Logo'
import { footerMenu } from '../../maps/menu'

export default function Header() {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <div className="section">
                        <div className="container left">
                            <Link href='/'><a className='margin'>
                                <Logo></Logo>
                            </a></Link>
                        </div>
                        <p className="footnote container left">
                            Nomis is a wallet scoring and credentials protocol which helps on-chain developers build better DeFi products.
                        </p>
                        <nav className="container left">
                            <ul>
                                {footerMenu.map((item, idx) => (
                                    <li key={`menu item ${idx}`}>
                                        <Link href={item.link}><a className="footnote underline">{item.title}</a></Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="container left">
                            <Link href='mailto:gm@nomis.cc'><a className="footnote underline">gm@nomis.cc</a></Link>
                        </div>
                        <p className="footnote container left">
                        2022 © Nomis. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
=======
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../common/Logo'
import { footerMenu } from '../../maps/menu'

export default function Header() {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <div className="section">
                        <div className="container left">
                            <Link href='/'><a className='margin'>
                                <Logo></Logo>
                            </a></Link>
                        </div>
                        <p className="footnote container left">
                            Nomis is a wallet scoring and credentials protocol which helps on-chain developers build better DeFi products.
                        </p>
                        <nav className="container left">
                            <ul>
                                {footerMenu.map((item, idx) => (
                                    <li key={`menu item ${idx}`}>
                                        <Link href={item.link}><a className="footnote underline">{item.title}</a></Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="container left">
                            <Link href='mailto:gm@nomis.cc'><a className="footnote underline">gm@nomis.cc</a></Link>
                        </div>
                        <p className="footnote container left">
                        2022 © Nomis. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
>>>>>>> 1adbfdf (Improvements)
}