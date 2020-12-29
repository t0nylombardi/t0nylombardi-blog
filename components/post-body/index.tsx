import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  content: string;
};

const PostBody = ({ language, value }) => {
  return (
    <div>
      <SyntaxHighlighter language={language} style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default PostBody;
