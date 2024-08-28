/* eslint-disable react/prop-types */

export default function Button(props) {
  return <button {...props}>{props.children}</button>;
}
