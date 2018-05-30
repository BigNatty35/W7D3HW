import React from 'react';
import GiphysIndex from './giphys_index';


function GiphysIndexItem({giphy}) {
  return (
    <li>
      <img src={giphy.images.fixed_height.url} />
    </li>
  )
}

export default GiphysIndexItem;
