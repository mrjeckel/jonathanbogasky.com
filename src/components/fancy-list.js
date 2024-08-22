import React from 'react';
import { listBox, interactiveList } from './fancy-list.module.css';

export function ChildList({ data }) {
  console.log(data);
  let listItems = Object.entries(data).map(([key, value]) => {
    let itemKey = `${data.name}`

    if (key === 'name') {
      return (
        <li key={itemKey}>
          <h3>
            <a href={data.url} target='_blank' rel='noreferrer noopener'>{data.name}</a>
          </h3>
        </li>
      );
    } else if (key !== 'url' && value !== null) {
        if (key === 'positions') {
          return (
            value.map((posItem) => (
              <li key={`${data.name}.${value.title}`}>
                <ChildList data={posItem} />
              </li>
            )
          ));
        } else {
        return <li key={itemKey}>{value}</li>;
      }
    }
  }).filter(item => item !== undefined);

  return <ul>{listItems}</ul>;
}

export default function FancyList({ jsonData }) {
  let fancyList = jsonData.content.map(data => {
    return (
      <li key={data.name} className={interactiveList}>
        <ChildList data={data} />
      </li>
    )
  });

  return (
    <div className={listBox}>
      <h2>{jsonData.title}</h2>
      <ul>{fancyList}</ul>
    </div>
  );
}
