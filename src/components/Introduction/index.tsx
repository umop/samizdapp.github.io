import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import Friendship from "./friendship";
import InternetFire from "./internet-fire";
import SproutingUp from "./sprouting-up";

export const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <h2>The Internet. Reimagined.</h2>

      <section>
        <p>
          Worrying trends among internet services have become existential
          threats to humanity. Internet giants run manipulative advertising
          networks, censor thoughts that go against their interests, and deploy
          combative algorithms designed to drive us mad. We are unable to talk
          with each other about the most basic of ideas.
        </p>

        <InternetFire />
      </section>

      <section>
        <p>
          Alternative centralized platforms that challenge the established
          players are vulnerable to the same capture through being forced to
          compete over network effect.
          <br />
          <br /> Decentralized platforms avoid capture but are often too
          technically challenging to be massively adopted.
        </p>

        <SproutingUp />
      </section>

      <section>
        <p>
          We envision a decentralized network that solves both capture and
          technical difficulty. A network of people who each own a physical
          chunk of the internet and choose the platforms they host and the
          people they interact with.
        </p>

        <Friendship />
      </section>
    </div>
  );
};

export default Introduction;
