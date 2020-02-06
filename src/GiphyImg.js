import React from 'react';

function GiphyImg({source}) {
    return(
        <img src={source.url} />
    );
}

export default GiphyImg;