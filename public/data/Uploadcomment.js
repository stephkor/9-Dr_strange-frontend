import React from 'react';
import CommentForm from './CommentForm';
import '../Pages/Main/Main.scss';

class Uploadcomment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      commentArr: [],
    };
  }
  // 사용자가 입력한 comment input값으로 setState 해주는 이벤트
  setCommentHandler = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };
  // 게시 data get 이벤트
  handleData = () => {
    fetch('http://10.58.3.167:8000/comment/')
      .then((res) => res.json())
      .then((res) => this.setState({ commentArr: res.comments }));
  };
  // mount 직후에 서버에서 댓글 가져오기 - 한번만 실행
  componentDidMount() {
    this.handleData();
  }
  // 게시 버튼 클릭했을 때 댓글창 추가 이벤트 + 백앤드 서버에도 전솔
  addFormHandler = () => {
    // 댓글 POST
    fetch('http://10.58.3.167:8000/comment/', {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('access_token'), // access_token을 Authorization로 백앤드한테 보내줌
      },
      body: JSON.stringify({
        comments: this.state.userInput, // userInput을 comment로 백앤드한테 보내줌
      }),
    }).then(() => {
      // 댓글을 새로 쓸때마다, 서버에 댓글 post 하고 get 해옴!
      if (this.state.userInput) {
        this.setState({ userInput: '' }, () => this.handleData()); // handleData는 콜백 함수로 들어옴 (함수의 인자로 들어간 함수)
      }
    });
  };
  // Enter 눌렀을 때 댓글창 추가 이벤트
  pressEnterHandler = (e) => {
    if (e.key === 'Enter') {
      this.addFormHandler();
    }
  };
  // 댓글 클릭시 댓글 삭제 이벤트
  commentDelHandler = (index) => {
    this.setState({
      commentArr: this.state.commentArr.filter((_, idx) => idx !== index),
    });
  };
  render() {
    return (
      <>
        <div className='more_comment'>
          <a href=''>댓글 {this.state.commentArr.length + 2}개 모두 보기</a>
        </div>

        <div className='comments'>
          <CommentForm name='kdg21' tag='@solmii_dev' comment='치킨이,,,참,,,맛있겠읍니다,,,@>->-' />
          <CommentForm name='dooreplay' tag='@wecode' comment='열코딩 화이팅!!' />
          {this.state.commentArr.map((userInput, idx) => (
            <CommentForm name='Wecoder' comment={userInput} key={idx} index={idx} commentDelHandler={this.commentDelHandler} />
          ))}
        </div>
        <div className='comment_day'>
          <p>1일 전</p>
        </div>

        <div className='upload_comment'>
          <input placeholder='댓글 달기...' value={this.state.userInput} onKeyPress={this.pressEnterHandler} onChange={this.setCommentHandler} />
          <button className={this.state.userInput ? 'comment_btn_abled' : 'comment_btn_disabled'} onClick={this.addFormHandler}>
            게시
          </button>
        </div>
      </>
    );
  }
}
export default Uploadcomment;
