import * as React from 'react';

type Props = {
  offset: number;
  onButtonClick: (offset: number) => void;
}

const ShowMore: React.FC<Props> = (props: Props) => {
  const {offset, onButtonClick} = props;

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
