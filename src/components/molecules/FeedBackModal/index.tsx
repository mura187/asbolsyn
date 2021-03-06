import React, { useState } from 'react';
import { connect } from 'react-redux';
import feedbackActions from 'src/store/feedback/actions';

import Typography from 'src/components/atoms/Typography';
import StarRating from 'react-svg-star-rating';

import { FeedBackModalTypes } from 'src/components/molecules/FeedBackModal/types';
import { ReactComponent as CloseIcon  } from 'src/assets/images/icons/close.svg';
import './indes.scss';

function FeedBackModal(props: FeedBackModalTypes.IProps) {
  const { createFeedback, dealId, onCloseClick } = props;
  const [ratingNum, setRatingNum] = useState<number>(0);
  const [description, setDescription] = useState<string>('');

  const onSubmitClick = () => {
    createFeedback && createFeedback({
      value: +ratingNum,
      text: description,
      anon: 0,
    }, dealId);
  };

  const onRatingInputChange = (newRating: number) => {
    setRatingNum(newRating);
  };

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <div className="feedback-modal container">
      <div className="d-flex flex-column">
        <CloseIcon  className="close-icon" onClick={onCloseClick}/>
        <Typography variant="h1">Оставить отзыв</Typography>
        <div className="d-flex flex-column mt-32 mb-32">
          <Typography variant="textmed" className="mb-10">Рейтинг от 0 до 5:</Typography>
          <StarRating
            handleOnClick={onRatingInputChange}
            count={5}
            initialRating={0}
          />
        </div>
        <div className="d-flex flex-column mt-32 mb-32">
          <Typography variant="textmed" className="mb-10">Комментарий:</Typography>
          <textarea
            value={description}
            className="feedback-modal__textarea"
            onChange={onTextareaChange}
          />
        </div>
        <button
          disabled={ratingNum < 1 && description.length < 1}
          className="feedback-modal__button" type="submit"
          onClick={onSubmitClick}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  createFeedback: feedbackActions.createFeedback,
};

export default connect(null, mapDispatchToProps)(FeedBackModal);
