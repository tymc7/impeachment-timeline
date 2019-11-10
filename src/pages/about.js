import React  from 'react';
import Layout from '../components/layout';
import SEO    from '../components/seo';


export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <section className="card">
        <h1>Thanks for reading!</h1>
        <p>The impeachment inquiry into Donald J. Trump seems to have happened fairly quickly, but by compiling into a linear timeline, you can see how the events have transpired over many months.</p>
        <p>The goal of this timeline is to provide information in chronological order along with resources for people to learn more on their own.</p>
        <p style={{ marginBottom: 0 }}>If you would like to contribute, please contact me at <a href="mailto:info@impeachment.dev">info@impeachment.dev</a>.</p>
      </section>
    </Layout>
  );
}
