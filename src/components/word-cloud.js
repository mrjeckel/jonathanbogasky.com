import React, { useEffect, Children } from 'react';
import { cloudBox } from './word-cloud.module.css'

function Word({ fontSize, children }) {
    let textContent = Children.only(children).props.children;
    return <p id={textContent.toLowerCase()} style={{ fontSize: `${fontSize}em`, gridArea: textContent.toLowerCase() }}>{textContent}</p>;
}
function WordCloud({ children }) {
  let maxEmphasis = 0
  let cloudWords = []

  Children.forEach(children, (child) => {
    if (child.props.precedence > maxEmphasis) {
      maxEmphasis = child.props.precedence;
    }
  });

  Children.forEach(children, (child) => {
    let fontSize = (maxEmphasis - child.props.precedence) + 1;
    cloudWords.push(<Word key={child.props.children} fontSize={fontSize}>{child}</Word>);
  });

  console.log(cloudWords);
  return <div className={cloudBox}>{cloudWords}</div>;
};

export {
    Word,
    WordCloud
};
