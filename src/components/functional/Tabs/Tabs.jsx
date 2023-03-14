import React from "react";
import { Tab } from "../Tab/Tab";

import styles from './styles.module.css'

export const Tabs = ({ tabs, onTabClick, activeIndex }) => {
  return (
    <div className={styles.tabs_layout}>
      {tabs.map(({ title }, index) => (
        <Tab
          title={title}
          onClick={() => onTabClick(index)}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
};
