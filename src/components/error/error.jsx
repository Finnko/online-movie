import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

const Error = ({error}) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
