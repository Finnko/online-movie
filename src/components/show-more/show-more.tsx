import * as React from 'react';

type Props = {
  offset: number,
  onButtonClick: (offset: number) => void,
}

const ShowMore:React.FC<Props> = ({offset, onButtonClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onButtonClick(offset)}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
