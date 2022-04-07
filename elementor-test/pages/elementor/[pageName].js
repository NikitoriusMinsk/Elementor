import React from 'react'
import renderNode from '/functions/renderNode'

export default function CustomPage({ page }) {
  return (
    <div>
        {renderNode(page)}
    </div>
  )
}

export async function getStaticProps({ params }) {
    const { pageName } = params;
    const page = await (await fetch(`${process.env.API}/page?name=${pageName}`, {method: 'GET'})).json()

    return {
        props: {
            page: page,
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    const pages = await (await fetch(`${process.env.API}/pages`, {method: 'GET'})).json()
    const paths = pages.map(pageName => ({ params: { pageName } }))

    return {
        paths,
        fallback: 'blocking',
    }
}