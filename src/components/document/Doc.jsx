// Doc.jsx component
import React from 'react';
import styles from './Doc.module.css';

const Doc = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Preparing For Your Tattoo</h1>
      <p className={styles.text}>If you are going to be tattooed in an area where you have a lot of body hair, Please shave 48 hours before. Make sure to lotion the area for one week leading up to your tattoo appointment, also during that week make sure to drink plenty of water or coconut water so you are well hydrated. these make for a smooth tattooing exspeirence.
      < br/>
      < br/>
Try to get a good restful sleep the night before your appointment. We don't want you exhausted. Do not party the night before. No Alcohol, the night before and Day of your tattoo keep the partying to a minimum.
< br/>
< br/>
Eat something an a Hour before your appointment time. Don't come with a completely empty stomach. Protein is good. Do not eat a lot of sugars & avoid smoked or heavily processed meats like hot dogs, spam or sausage. Sodium nitrates & sugars can make you swell more. Eat something relatively healthy.
< br/>
< br/>
If your tattoo is going to take 2 hours or more it is good to bring some fruit juice, a couple of apples, bananas, power bar or something to eat just in case you get hungry during your tattoo session. Your body burns a lot of fuel during a tattoo and you may want to replenish yourself.
< br/>
< br/>
Wear something appropriate. Remember what part of your body we need access to. Darker colors are better. Don't wear something brand new and/or white, as we are likely to get some ink on it. Avoid tight clothing.</p>
      <a href="/Assets/ConsentForm.jpeg" download className={styles.downloadLink}>
        Consent and Release Form
      </a>
    </div>
  );
};

export default Doc;
