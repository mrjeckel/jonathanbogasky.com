import React from 'react';
import { listBox, interactiveList } from './fancy-list.module.css';

export function ChildList({ data }) {
      let listItems = Object.entries(data).map(([key, value]) => {
        let itemKey = `${data.name}.${key}`

        if (key == 'name'){
          return (
            <li key={itemKey}>
              <h3>
                <a href={data.url} target='_blank' rel='noreferrer noopener'>{data.name}</a>
              </h3>
            </li>
          );
        }
        else if (key !== 'name' && key !=='url') {
          return <li key={itemKey}>{value}</li>;
        }
      });

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
