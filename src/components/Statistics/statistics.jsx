import React from "react";
import styles from "./statistics.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass,
  faHandshake,
  faUsers,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatItem = ({ end, suffix, title, icon }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statIcon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.statNumber}>
        <CountUp end={inView ? end : 0} duration={1.5} suffix={suffix} />
      </div>
      <div className={styles.statText}>{title}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className={styles.statisticsSection}>
      <StatItem
        end={10}
        suffix="+"
        title="Years in the Industry"
        icon={faHourglass}
      />
      <StatItem end={3192} title="Client Relationships" icon={faHandshake} />
      <StatItem end={204070} title="Tattoos Done" icon={faUsers} />
      <StatItem end={6173} title="Members" icon={faChalkboardTeacher} />
    </div>
  );
};

export default Statistics;
