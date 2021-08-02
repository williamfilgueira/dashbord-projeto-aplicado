import React from "react";
import styled from "styled-components";
import theme from "../../global/theme";

export default function Avatar({ src, small, mediaSize, circle }) {
  return (
    <ImageContainer circle={circle} small={small} mediaSize={mediaSize}>
      <Image src={src} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  @media screen and (max-width: ${theme.breakpoints.sm}) {
    width: ${(props) => (props.small ? "80px" : "100px")};
    height: ${(props) => (props.small ? "80px" : "100px")};
    border-radius: ${(props) => (props.circle ? "65px" : "20px")};
  }
  width: ${(props) => (props.small ? "80px" : "120px")};
  height: ${(props) => (props.small ? "80px" : "120px")};
  border-radius: ${(props) => (props.circle ? "80px" : "20px")};
  overflow: hidden;
`;

const Image = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;
