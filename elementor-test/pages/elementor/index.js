import Link from 'next/link'
import React from 'react'

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
    const pages = await (await fetch(`${process.env.API}/pages`, {method: 'GET'})).json()
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