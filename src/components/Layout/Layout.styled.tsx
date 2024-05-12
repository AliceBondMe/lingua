import styled from "styled-components";

interface MainProps {
  $isHome: boolean;
}

export const Main = styled.main<MainProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 68px);
  margin: 0;
  overflow-x: hidden;
  padding: 0px 12px 12px 12px;
  background-color: ${({ $isHome }) =>
    $isHome ? "var(--bg-main)" : "var(--bg-secondary)"};

  @media screen and (min-width: 768px) {
    padding: 0px 20px 20px 20px;
  }
`;
