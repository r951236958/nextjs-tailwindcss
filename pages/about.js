import TopBar from '../components/TopBar'
import Hero from '../components/Hero'

export const CodeZone = () => (
  <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
    <pre className="language-shell">
      <code className="language-shell">
        <span className="token function">npm</span>{' '}
        <span className="token function">install</span> tailwindcss postcss
        autoprefixer
      </code>
    </pre>
  </div>
)

const codeSimple = `<pre><code class="language-pug" data-dependencies="less">
:less
	foo {
		color: @red;
	}
</code><pre>
`

const npminstallCode = `npm install tailwindcss postcss autoprefixer`

const markdownCode = `The C# code will be highlighted __after__ the rest of this document.

\`\`\`csharp
public class Foo : IBar<int> {
	public string Baz { get; set; } = "foo";
}
\`\`\`

The CSS code will be highlighted with this document because CSS has already been loaded.

\`\`\`css
a:hover {
	color: green !important;
}
\`\`\`
`

export default function about() {
  return (
    <div>
      <TopBar />
      <div className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">
          About Page
        </h1>
      </div>
      <Hero />
      <div className="my-6 rounded-xl overflow-hidden bg-gray-800">
        <pre>
          <code className="language-shell">{npminstallCode}</code>
        </pre>
      </div>
      <div className="my-10">
        <div className="mx-auto py-16 px-4">
          <pre>
            <code className="language-html">{codeSimple}</code>
          </pre>
        </div>
      </div>
      <div className="my-10">
        <div className="mx-auto py-16 px-4">
          <pre>
            <code className="language-markdown">{markdownCode}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
