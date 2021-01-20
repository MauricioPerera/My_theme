import tw from "twin.macro"
import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero/hero_1"
import Layout from "../components/layout"

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`
export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Welcome" />
        <Main>
          <Hero />
        </Main>
      </Wrapper>
    </Layout>
  )
}
