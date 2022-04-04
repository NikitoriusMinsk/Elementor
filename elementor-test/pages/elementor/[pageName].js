import React from 'react'
import renderNode from '/functions/renderNode'

export default function customPage({ page }) {
  return (
    <div>
        {renderNode(page)}
    </div>
  )
}

export async function getStaticProps({ params }) {
    const pages = await (await fetch(`${process.env.API}/pages`, {method: 'GET'})).json()

    return {
        props: {
            page: pages[params.pageName],
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const pages = await (await fetch(`${process.env.API}/pages`, {method: 'GET'})).json()
    const paths = Object.keys(pages).map(pageName => ({ params: { pageName } }))

    return {
        paths,
        fallback: 'blocking',
    }
}