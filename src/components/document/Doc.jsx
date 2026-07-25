import React from "react";
import Link from "next/link";
import styles from "./Doc.module.css";

const preparation = [
  "Shave the tattoo area 48 hours before your appointment if needed.",
  "Moisturize the area and stay well hydrated during the week before.",
  "Get a full night of sleep and avoid alcohol the night before and on the day of your appointment.",
  "Eat a balanced meal about an hour before your session. Protein is a great choice.",
  "For sessions longer than two hours, bring water and a light snack.",
  "Wear comfortable, darker clothing that gives easy access to the tattoo area.",
];

const healing = [
  "Follow your artist's aftercare instructions exactly.",
  "Keep the tattoo clean and moisturized as directed.",
  "Avoid picking, scratching, swimming, and direct sun exposure while it heals.",
  "Choose loose, clean clothing around the tattooed area.",
];

const Doc = () => (
  <main className={styles.container}>
    <header className={styles.intro}>
      <p className={styles.eyebrow}>Your appointment guide</p>
      <h1 className={styles.title}>Prep &amp; Heal</h1>
      <p className={styles.lede}>A simple guide to help you arrive prepared and support a smooth healing process.</p>
    </header>

    <section className={styles.guides} aria-label="Tattoo preparation and healing guidance">
      <article className={styles.card}>
        <p className={styles.cardLabel}>Before your appointment</p>
        <h2>Prepare for your tattoo</h2>
        <ul>
          {preparation.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>

      <article className={styles.card}>
        <p className={styles.cardLabel}>After your appointment</p>
        <h2>Healing essentials</h2>
        <ul>
          {healing.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </article>
    </section>

    <section className={styles.consent}>
      <div>
        <p className={styles.eyebrow}>Before you arrive</p>
        <h2>Consent &amp; Release Form</h2>
        <p>Review and download the form before your appointment so you know what to expect.</p>
      </div>
      <a href="/Assets/ConsentForm.jpeg" download className={styles.primaryAction}>Download the form</a>
    </section>

    <section className={styles.help}>
      <div>
        <p className={styles.eyebrow}>Need a hand?</p>
        <h2>Have a question before your appointment?</h2>
      </div>
      <Link href="/booking" className={styles.secondaryAction}>Book a consultation</Link>
    </section>
  </main>
);

export default Doc;
