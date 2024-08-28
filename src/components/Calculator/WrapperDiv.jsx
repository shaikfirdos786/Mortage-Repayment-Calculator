/* eslint-disable react/prop-types */

export default function WrapperDiv({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}
