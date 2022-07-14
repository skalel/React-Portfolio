import styled from "styled-components";
import { shade } from "polished";
import PropTypes from "prop-types";

const ContentStyle = styled.div`
  border: 1px solid ${shade(0.2, "#373333")};
  border-radius: 15px;
  width: 100%;
  padding: 16px;
  & > hr {
    margin: 12px -4px;
  }
  & > ul {
    list-style-type: none;
    & > li {
      text-align: center;
    }
  }
  @media screen and (min-width: 811px) {
    margin: 4px 16px;
  }
  @media screen and (max-width: 810px) {
    margin: 8px 0px;
  }
`;

function Content({ children }) {
  return <ContentStyle>{children}</ContentStyle>;
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
