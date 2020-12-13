import styled, { css } from 'styled-components';
import { shade } from 'polished';

const titleHome = css`
  color: ${props => props.theme.colors.primary};
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 32px;

  @media (max-width: 1140px) {
    font-size: 40px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
    line-height: 30px;
    margin-bottom: 24px;
  }
`;

const marginBottomHome = css`
  margin-bottom: 128px;

  @media (max-width: 1140px) {
    margin-bottom: 64px;
  }
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  min-height: 100%;
  align-items: stretch;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const TextHome = styled.article`
  flex: 0 0 50%;

  .fixed-scroll {
    width: 50%;
    position: fixed;
    padding: 0 64px;
  }

  p {
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 32px;

    &:last-of-type {
      margin-bottom: 24px;
    }
  }

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 64px;
    line-height: 74px;
    font-weight: 900;
    margin: 0 0 24px;
  }

  .current-stack {
    display: flex;

    li {
      list-style: none;

      &:not(:last-child) {
        margin-right: 24px;
      }
    }
  }

  @media (max-width: 1140px) {
    .fixed-scroll {
      padding-right: 32px;
    }

    h1 {
      font-size: 56px;
      line-height: 64px;
    }

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media (max-width: 960px) {
    .fixed-scroll {
      position: static;
      width: 100%;
      padding: 0 48px;
      margin-bottom: 64px;
    }
  }

  @media (max-width: 767px) {
    .fixed-scroll {
      padding: 0 32px;
    }

    h1 {
      font-size: 40px;
      line-height: 50px;
    }

    .current-stack {
      display: flex;

      li {
        list-style: none;
        width: 32px;

        img {
          max-width: 100%;
          height: auto;
        }

        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
  }
`;

export const Content = styled.section`
  padding: 0 64px;
  flex: 1;

  @media (max-width: 1140px) {
    padding-left: 32px;
  }

  @media (max-width: 960px) {
    padding: 0 32px;
  }
`;

export const PhotoSocial = styled.div`
  background: url(/assets/svg/checkered.svg) no-repeat;
  display: flex;
  align-items: flex-end;
  width: 552px;
  ${marginBottomHome};

  .photo {
    margin: 81px 0 0 auto;
  }

  @media (max-width: 1400px) {
    width: 460px;

    .photo {
      margin-top: 161px;
      width: 184px;
    }
  }

  @media (max-width: 1140px) {
    width: 368px;
    position: relative;

    .photo {
      margin-top: 81px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  @media (max-width: 960px) {
    margin: 0 auto 64px;
  }

  @media (max-width: 767px) {
    width: auto;
    margin: 0 -32px 64px;

    .photo {
      right: auto;
      left: 184px;
    }
  }
`;

export const Social = styled.div`
  p {
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    margin-bottom: 24px;

    span {
      color: #666;
      text-decoration: line-through;
    }
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  a {

    .custom-fill {
      fill: ${props => props.theme.colors.text};
      transition: all .1s linear;
    }

    .custom-stroke {
      stroke: ${props => props.theme.colors.text};
      transition: all .1s linear;
    }

    &:hover {
      .custom-fill {
        fill: ${props => props.theme.colors.primary};
      }

      .custom-stroke {
        stroke: ${props => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 1140px) {
    margin-top: 252px;
  }

  @media (max-width: 1140px) {
    margin-left: 32px;
  }
`;

export const LatestPosts = styled.section`
  ${marginBottomHome};

  h2 {
    ${titleHome};
  }
`;

export const RecentProjects = styled.section`
  ${marginBottomHome};

  h2 {
    ${titleHome};
  }

  .hover-effect:hover a {
    opacity: 0.25;
  }
`;

export const Project = styled.article`
  margin-bottom: 8px;

  a {
    background: ${props => props.theme.colors.card};
    color: #fff;
    display: block;
    padding: 24px;
    transition: all .1s linear;

    &:hover {
      background: ${props => shade(0.15, props.theme.colors.card)};
      opacity: 1 !important;
    }
  }

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
  }

  p {
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }

  span {
    color: ${props => props.theme.colors.textSecondary};
    display: flex;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Now = styled.section`
  ${marginBottomHome};

  h4 {
    ${titleHome};
  }

  p {
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 32px;

    a {
      color: #fff;
      border-bottom: 1px dotted #fff;
      padding-bottom: 2px;
      transition: all .1s linear;

      &:hover {
        border-bottom-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
      }
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (max-width: 1140px) {
    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
