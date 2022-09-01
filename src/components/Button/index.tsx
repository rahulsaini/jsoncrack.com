import React from "react";
import styled, { DefaultTheme } from "styled-components";

enum ButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "BLURPLE",
  DANGER = "DANGER",
  SUCCESS = "SEAGREEN",
  WARNING = "ORANGE",
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  status?: keyof typeof ButtonType;
  block?: boolean;
}

function getButtonStatus(status: keyof typeof ButtonType, theme: DefaultTheme) {
  return theme[ButtonType[status]];
}

const StyledButton = styled.button<{
  status: keyof typeof ButtonType;
  block: boolean;
}>`
  display: flex;
  align-items: center;
  background: ${({ status, theme }) => getButtonStatus(status, theme)};
  color: #ffffff;
  padding: 8px 16px;
  min-width: 60px;
  min-height: 32px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  font-family: "Catamaran", sans-serif;
  width: ${({ block }) => (block ? "100%" : "fit-content")};
  height: 40px;
  background-image: none;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  div {
    white-space: normal;
    margin: 0 auto;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  status,
  block = false,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      status={status ?? "PRIMARY"}
      block={block}
      {...props}
    >
      <StyledButtonContent>{children}</StyledButtonContent>
    </StyledButton>
  );
};
