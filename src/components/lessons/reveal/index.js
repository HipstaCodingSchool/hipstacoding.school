import styled from "styled-components";
import { pickLine } from "./utils";
import RevealCode from "./RevealCode";
import RevealHtmlEditor from "./RevealHtmlEditor";
import RevealCssEditor from "./RevealCssEditor";

export const Image = styled.img`
  width: auto;
  height: ${props => props.height};
  position: ${props => props.position};
  left: ${props => props.left};
`;

export const Relative = styled.div`
  position: relative;
  display: inline-block;
`;

export const ImgIcon = styled.img`
  height: 54px;
  display: inline-block;
  vertical-align: top;
  margin: 0 5px !important;
`;

export const ImgContainer = styled.div`
  margin: 0 auto;
  width: ${props => props.width};
`;

export const Fragment = ({ className = "fragment", children, ...props }) => {
  if (className) className += " fragment";
  return <children.type {...children.props} {...props} className={className} />;
};

export const AnimatedCode = ({
  children,
  language,
  lines,
  numbers = true,
  className = "",
  ...props
}) => {
  if (language) className += `language-${language}`;
  if (lines) children = pickLine(children, lines);
  return (
    <pre {...props}>
      <RevealCode className={className} data-line-numbers={numbers}>
        {children}
      </RevealCode>
    </pre>
  );
};

export default {
  Image,
  Relative,
  ImgIcon,
  ImgContainer,
  Fragment,
  AnimatedCode,
  RevealHtmlEditor,
  RevealCssEditor,
};
