import React from 'react';
import styled from "styled-components"
import NightIcon from "@material-ui/icons/NightsStay"
import DayIcon from "@material-ui/icons/WbSunnyOutlined"


export default function Toggle({ theme, toggleTheme }) {
  return (
    <Wrapper>
      <Label>
        <Input checked={theme === "dark"} onChange={() => toggleTheme()}/>
        <IconWrapper active={theme === "light"} >
          <DayIcon fontSize="small" />
        </IconWrapper>
        <IconWrapper active={theme === "dark"} >
          <NightIcon fontSize="small" />
        </IconWrapper>
      </Label>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid ${({theme}) => theme.accent};
  overflow: hidden;

`

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({theme}) => theme.text};
  top: ${({active}) => active ? "0" : "100%"};
  transition: all 0.3s ease;
  border-radius: 50%;
`


const Input = styled.input.attrs(props => ({
  type: "checkbox"
}))`
  position: absolute;
  opacity: 0;
  width:0;
  height:0;
`


