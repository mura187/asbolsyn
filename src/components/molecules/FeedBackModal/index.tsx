import React, { useState } from 'react';
import { FeedBackModalTypes } from 'src/components/molecules/FeedBackModal/types';
import './indes.scss';
import Typography from 'src/components/atoms/Typography';
import feedbackActions from 'src/store/feedback/actions';
import { connect } from 'react-redux';
import { ReactComponent as CloseIcon  } from 'src/assets/images/icons/close.svg';

function FeedBackModal(props: FeedBackModalTypes.IProps) {
  const { createFeedback, dealId, onCloseClick } = props;
  const [ratingNum, setRatingNum] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const onSubmitClick = () => {
    createFeedback && createFeedback({
      value: +ratingNum,
      text: description,
      anon: 0,
    }, dealId);
  };

  return (
    <div className="feedback-modal container">
      <div className="d-flex flex-column">
        <CloseIcon  className="close-icon" onClick={onCloseClick}/>
        <Typography variant="h1">Оставить отзыв</Typography>
        <div className="d-flex flex-column mt-32 mb-32">
          <Typography variant="text" className="mb-10">Рейтинг от 0 до 5:</Typography>
          <input
            value={ratingNum}
            onChange={e => setRatingNum(e.target.value)}
            className="feedback-modal__amount"
          />
        </div>
        <div className="d-flex flex-column mt-32 mb-32">
          <Typography variant="text" className="mb-10">Комментарий:</Typography>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button
          className="feedback-modal__button" type="submit"
          onClick={onSubmitClick}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return ({
  });
};

const mapDispatchToProps = {
  createFeedback: feedbackActions.createFeedback,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBackModal);
