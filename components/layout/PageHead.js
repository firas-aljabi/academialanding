import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Academia - Business Consulting NextJS Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead