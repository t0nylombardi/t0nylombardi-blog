import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface MarkdownProps {
  content: any;
  needsElipses?: boolean;
}

const MarkdownContent = (props: MarkdownProps) => {
  console.log('elipses', props.needsElipses);
  const CHARLENGTH = 175;

  const renderers = {
    code: ({ language, value }: any) => {
      return (
        <SyntaxHighlighter
          style={dracula}
          language={language}
          children={value}
        />
      );
    },
  };

  let mc = props.content;

  if (props.needsElipses) {
    if (mc.length > CHARLENGTH) {
      mc = mc.substring(0, CHARLENGTH - 3) + '...';
    }
  }
  return <Markdown renderers={renderers} children={mc} />;
};

export default MarkdownContent;
