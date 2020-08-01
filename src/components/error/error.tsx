import * as React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

type Props = {
  error: string;
}

const Error: React.FC<Props> = (props: Props) => {
  const {error} = props;

  return (
    <React.Fragment>
      <Header />
      <section className="catalog">
        <div className="page-content">
          <div className="error-wrapper">
            <p className="error-message">
              {error}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Error;
