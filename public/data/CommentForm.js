import React from 'react';
import HeartBtn from './HeartBtn';
import '../Pages/Main/Main.scss';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='comment_form'>
        <a className='comment_id' href=''>
          {this.props.name}
        </a>
        <a className='comment_tag' href=''>
          {this.props.tag}
        </a>
        <span onClick={() => this.props.commentDelHandler(this.props.index)}>{this.props.comment}</span>
        <div className='comment_like'>
          <HeartBtn width='12' height='12' />
        </div>
      </div>
    );
  }
}
export default CommentForm;
