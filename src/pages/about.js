import React  from "react"
import Layout from "../components/layout"
import SEO    from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
    <SEO title="About" />
    <section className="card">
    <h1>Thanks for stopping by!</h1>
      <p>With everything happening so quickly regarding the impeachment inquiry, I was having trouble compiling a good timeline of events that could be easily updated and shared. I built this quick site to help alliviate that and hope to keep it as updated as possible.</p>
      <p>If you would like to contribute, please email me at <a href="mailto:info@impeachment.dev">info@impeachment.dev</a>, or <a href="https://github.com/tylerbmcsilva/impeachment-2019" target="_blank" rel="noopener noreferrer">open a pull request on Github</a>.</p>
    </section>
  </Layout>
  );
}
