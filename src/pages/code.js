import Layout from 'components/layout'
import Prism from 'prismjs'

// The code snippet you want to highlight, as a string
//const code = `var data = 1;`;

export const CodeZone = () => (
	<div className="my-6 bg-gray-800 rounded-xl overflow-hidden">
		<pre className="language-shell">
			<code className="language-shell">
				<span className="token function">npm</span>{' '}
				<span className="token function">install</span> tailwindcss postcss
				autoprefixer
			</code>
		</pre>
	</div>
)

const htmlCode = `<pre><code className="language-pug" data-dependencies="less">
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

export default function Code() {
	React.useEffect(() => {
		Prism.highlightAll()
	}, [])

	return (
		<Layout>
			<div className="relative px-4 w-full">
				<div className="py-10">
					<h1 className="text-center text-white text-5xl">About Page</h1>
				</div>

				<div className="max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
					<div className="my-6 rounded-xl overflow-hidden">
						<pre>
							<code className="language-shell">{npminstallCode}</code>
						</pre>
					</div>
					<div className="my-10">
						<div className="mx-auto px-4 py-16">
							<pre>
								<code className="language-html">{htmlCode}</code>
							</pre>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
