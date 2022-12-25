import styled from "styled-components";

const FeaturedWrapper = styled.section`
  width: 90%;
  margin-inline: auto;

  & h2 {
    font-size: 1.7em;
    font-weight: 500;
  }
  & p {
    font-size: 1em;
    line-height: 1.4;
    margin-block: 1em 2em;
  }

  & ul {
    --gap: 0;
    margin-block: 3rem 1rem;
    & li {
      border-top: 1px solid hsl(var(--color-text-light), 0.4);
      padding-block: 1.2em;
      color: hsl(var(--color-text-light));
      position: relative;
      &:last-child {
        border-bottom: 1px solid hsl(var(--color-text-light), 0.4);
      }
      & a {
        font-size: 1.2rem;
        letter-spacing: 1.1px;
        margin: 0;

        &::after {
          content: "";
          position: absolute;
          opacity: 0;
          width: 50%;
          height: 4px;
          background-color: hsl(var(--color-secondary));
          bottom: 0;
          left: 50%;
          transform: translateX(-100%);
          transition: transform 500ms ease-in-out, opacity 350ms linear;
        }

        &.active {
          color: hsl(var(--color-text-dark));
          &::after {
            display: block;
            transform: translateX(-50%);
            opacity: 1;
          }
        }
      }
    }
    @media screen and (min-width: 850px) {
      flex-direction: row;
      justify-content: center;
      width: max-content;
      border-bottom: 1px solid hsl(var(--color-text-light), 0.8);
      margin-inline: auto;
      gap: 2rem;
      & li {
        border-top: 0;

        &:last-child {
          border-bottom: 0;
        }

        & a {
          &::after {
            width: 100%;
          }
        }
      }
    }
  }

  & .feature {
    position: relative;
    z-index: 1000;
    & .bg {
      left: -5rem;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
    }
    & img {
      max-width: 90%;
      margin-block: 5rem;
    }
    & h3 {
      font-size: 1.5rem;
    }
    & p {
      font-size: 1em;
      line-height: 1.6;
      margin-block: 0.3em 5rem;
    }
    & .info-btn {
      display: none;
    }
    @media screen and (min-width: 850px) {
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: space-around;
      text-align: left;
      & .info-btn {
        display: block;
        margin-top: 2rem;
      }
      & .content {
        /* flex: 1; */
        /* margin-inline: auto; */
      }
      & p {
        flex: 1;
        margin: 0;
      }
      & .bg {
        transform: translateY(50%);
      }
    }
  }
`;

export default FeaturedWrapper;
