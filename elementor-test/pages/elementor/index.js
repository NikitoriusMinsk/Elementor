import Link from 'next/link'
import React from 'react'
import getPagesList from '../../requests/getPagesList'

export default function index({ links }) {
  return (
    <div className='container'>
        {
            links.map(link => (
                <Link href={link.href} key={link.name}>
                    <a>{link.name}</a>
                </Link>
            ))
        }
    </div>
  )
}

export async function getStaticProps({ params }) {
    const pages = await getPagesList()
    const links = pages.map(page => {
        const pageName = page.replace('.json', '')

        return { 
            href: `/elementor/${pageName}`,
            name: pageName 
        }
    })


    return {
        props: {
            links: links
        },
        revalidate: 10
    }
}