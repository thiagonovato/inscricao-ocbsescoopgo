import React from "react";
import PropTypes from "prop-types";

import Header from "../../../components/site/Header";

import { Wrapper } from "./styles";

export default function SiteLayout({ children }) {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
}

SiteLayout.propTypes = {
  children: PropTypes.element.isRequired
};
