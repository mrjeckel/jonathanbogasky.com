import React, { Children } from 'react';
import { cloudBox } from './word-cloud.module.css'

function Word({ fontSize, writingMode, children }) {
    let textContent = Children.only(children).props.children;
    let p_key = textContent.toLowerCase();
    return <p id={p_key} style={{ fontSize: `${fontSize}em`, writingMode: writingMode, gridArea: p_key }}>{textContent}</p>;
}
export default function WordCloud({ children }) {
  let sortedChildren = Children.toArray(children).sort(a => -a.props.rank);
  let maxEmphasis = Math.max(...sortedChildren.map(child => child.props.rank))

  let cloudWords = sortedChildren.map((child, index) => {
    let fontSize = (maxEmphasis - child.props.rank) + 1;
    let writingMode = ((index + 1) % 3 == 0) ? 'vertical-lr' : 'horizontal-tb';
    return <Word key={child.props.children.toLowerCase()} fontSize={fontSize} writingMode={writingMode}>{child}</Word>;
  });

  let gridTemplate = cloudWords.map((word, index) => {
    if (index % 2 == 0 && index < cloudWords.length - 1) {
      return Array(word.props.fontSize).fill(word.key).concat(Array(cloudWords[index + 1].props.fontSize).fill(cloudWords[index + 1].key));
    }
  }).filter(Boolean)
  console.log(gridTemplate);

  let longestRow = Math.max(...gridTemplate.map(row => row.length))
  gridTemplate = gridTemplate.map(row => {
    return row.concat(Array((longestRow - row.length)).fill('.'));
  }).map(row => { return `'${row.join(" ")}'` });
  
  console.log(gridTemplate.join('\n'));
  return <div className={cloudBox} style={{ gridTemplate: `${gridTemplate.join('\n')}` }}>{cloudWords}</div>;
};
