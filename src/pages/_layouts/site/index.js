import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/site/Header";

export default function SiteLayout({ children }) {
  return (
    <div class="container">
      <Header />
      {children}
    </div>
  );
}

SiteLayout.propTypes = {
  children: PropTypes.element.isRequired
};
