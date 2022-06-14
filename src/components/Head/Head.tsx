import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
};

const Head = (props: Props) => {
  const { title, description } = props;
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name={description} />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Head;
