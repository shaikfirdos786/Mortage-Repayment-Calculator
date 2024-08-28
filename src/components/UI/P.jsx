/* eslint-disable react/prop-types */

export default function P(props) {
  return <p {...props}>{props.children}</p>;
}
