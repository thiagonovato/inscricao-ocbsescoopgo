import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";
import SiteLayout from "../pages/_layouts/site";

import { store } from "../store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  auth,
  ...rest
}) {
  const signed = store.getState().auth.signed;

  if (!signed && isPrivate) {
    return <Redirect to="/signin" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/adm/noticias" />;
  }

  // const Layout = signed ? DefaultLayout : AuthLayout;
  const Layout =
    auth || isPrivate ? (signed ? DefaultLayout : AuthLayout) : SiteLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  auth: false
};
