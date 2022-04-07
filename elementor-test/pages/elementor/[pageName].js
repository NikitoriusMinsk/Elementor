import React from 'react'
import getPage from '../../requests/getPage';
import getPagesList from '../../requests/getPagesList';
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
    const page = await getPage(pageName);

    return {
        props: {
            page: page,
        },
        revalidate: 10
    }
}

export async function getStaticPaths() {
    let pages = await getPagesList()
    pages = pages.map(pageName => pageName.replace('.json', ''));
    const paths = pages.map(pageName => ({ params: { pageName } }))

    return {
        paths,
        fallback: 'blocking',
    }
}