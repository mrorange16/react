import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div>
      <CommentDetail
        name="Marcos"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      />
      <CommentDetail
        name="Vinicio"
        description="Placeat, in sed? Et, porro? Expedita vero,"
      />
      <CommentDetail
        name="Gonzalez"
        description="nesciunt quia doloremque praesentium obcaecati."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
