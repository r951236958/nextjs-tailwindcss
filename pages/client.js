import Layout from '../components/layout'

export default function Page() {
  return (
    <Layout>
      <h1 className="text-white text-3xl">Client Side Rendering</h1>
      <p className="text-white my-4">
        This page uses the{' '}
        <span className="text-teal">
          <strong>useSession()</strong>
        </span>{' '}
        React Hook in the{' '}
        <span className="text-teal">
          <strong>&lt;/Header&gt;</strong>
        </span>{' '}
        component.
      </p>
      <p className="text-white my-4">
        The{' '}
        <span className="text-teal">
          <strong>useSession()</strong>
        </span>{' '}
        React Hook easy to use and allows pages to render very quickly.
      </p>
      <p className="text-white my-4">
        The advantage of this approach is that session state is shared between
        pages by using the{' '}
        <span className="text-teal">
          <strong>Provider</strong>
        </span>{' '}
        in{' '}
        <span className="text-teal">
          <strong>_app.js</strong>
        </span>{' '}
        so that navigation between pages using{' '}
        <span className="text-teal">
          <strong>useSession()</strong>
        </span>{' '}
        is very fast.
      </p>
      <p className="text-white my-4">
        The disadvantage of{' '}
        <span className="text-teal">
          <strong>useSession()</strong>
        </span>{' '}
        is that it requires client side JavaScript.
      </p>
    </Layout>
  )
}
