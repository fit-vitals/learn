import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ReportWebVitalsSnippet() {
  const codeString = `
  export function reportWebVitals(metric) {
    // These metrics can be sent to any analytics service
    console.log(metric)
  }
  `;
  return (
    <div className="max-w-xs md:max-w-2xl">
      <SyntaxHighlighter language="javascript" style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
