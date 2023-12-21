import React, { Children } from 'react';
import { cloudBox } from './word-cloud.module.css'
import seededShuffle from '../util/seeded-shuffle.js'

function Word({ fontSize, writingMode, children }) {
    let gridRowEnd = 'span 1';
    let gridColumnEnd = 'span 1';
    
    if (writingMode === 'vertical-lr') {
      gridRowEnd = `span ${fontSize}`;
    }
    else {
      gridColumnEnd = `span ${fontSize}`;
    }

    return (
      <div style={{ fontSize: `${fontSize}em`, writingMode: writingMode, gridRowEnd: gridRowEnd, gridColumnEnd: gridColumnEnd }}>
        {children}
      </div>
    );
}

export default function WordCloud({ children }) {
  let shuffledChildren = seededShuffle(Children.toArray(children), 2448314);
  let maxEmphasis = Math.max(...shuffledChildren.map(child => child.props.rank));
  
  let cloudWords = shuffledChildren.map((child, index) => {
    let fontSize = (maxEmphasis - child.props.rank) + 1;
    let writingMode = ((index + 1) % 2 == 0) ? 'vertical-lr' : 'horizontal-tb';
    return <Word key={child.props.children.toLowerCase()} fontSize={fontSize} writingMode={writingMode}>{child}</Word>;
  });

  return <div className={cloudBox}>{cloudWords}</div>;
};
