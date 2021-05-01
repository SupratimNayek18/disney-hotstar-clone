import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Recommends() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://i0.wp.com/www.investrecords.com/wp-content/uploads/2020/09/Disney-Hotstar-Hostages-Season-2-.jpg?fit=660%2C353&ssl=1"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://i.pinimg.com/736x/aa/30/93/aa3093c534e0308ff87c81ab6b0852b5.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://mypostercollection.com/wp-content/uploads/2018/08/Frozen-Poster-15.jpg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/3896/953896-h"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
}

export default Recommends;

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
  }
  :hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
