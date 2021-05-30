/* eslint-disable */

import * as React from "react";
import { useTabs } from "./Tabs";
import styled from 'styled-components'

const StyledTabButton = styled.div`
    cursor: pointer;
    width: 100%;
    display: inline-block;
    background-color: #354a63;
    color: white;
    text-align: center;
    transition: .25s ease;
    border: none;
    padding: 10px;
    border-radius: 12px 12px 0 0;

    &:hover {
        background-color: #233142;
    }

    &:focus {
        background-color: #233142;
    }
`

const ActiveTabButton = styled.div`
    cursor: pointer;
    width: 100%;
    display: inline-block;
    background-color: #233142;
    color: white;
    text-align: center;
    transition: .25s ease;
    border: none;
    padding: 10px;
    border-radius: 12px 12px 0 0;
`

export interface ITabProps {
  /**
   * Unique label of Tab to show when clicked.
   */
  label: string;
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab: React.FC<ITabProps> = props => {
  const { activeTab, setActiveTab } = useTabs();
  return (
    activeTab == props.label ? (
        <ActiveTabButton onClick={() => setActiveTab(props.label)} >
            {props.children}
        </ActiveTabButton>
    ) : (
        <StyledTabButton onClick={() => setActiveTab(props.label)} >
            {props.children}
        </StyledTabButton>
    )
  );
};
