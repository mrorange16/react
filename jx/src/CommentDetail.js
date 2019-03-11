import React from 'react';
import ReactDOM from 'react-dom';

const CommentDetail = props => {
  return (
    <div className="card d-inline-block" style={{ width: '15rem' }}>
      <img
        className="card-img-top"
        src="https://picsum.photos/100"
        alt="Card cap"
      />
      <div className="card-body">
        <h4 class="card-title">{props.name}</h4>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default CommentDetail;
