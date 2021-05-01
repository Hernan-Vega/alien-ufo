import PropTypes from "prop-types";
import "./Layout.scss";

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export { Layout };
