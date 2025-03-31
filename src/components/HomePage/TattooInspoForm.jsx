import React, { useState } from 'react';
import styles from './TattooInspoForm.module.css';

export default function TattooInspoForm() {
    const [formData, setFormData] = useState({
        style: '',
        theme: '',
        placement: '',
    });

    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/scrapeInspo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
        setResults(data.results);
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                    Style:
                    <select name="style" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="blackwork">Blackwork</option>
                        <option value="realism">Realism</option>
                        <option value="neo-traditional">Neo-Traditional</option>
                        <option value="minimal">Minimal</option>
                    </select>
                </label>
                <label>
                    Theme:
                    <input type="text" name="theme" placeholder="E.g. nature, spiritual" onChange={handleChange} required />
                </label>
                <label>
                    Placement:
                    <input type="text" name="placement" placeholder="E.g. forearm, back" onChange={handleChange} required />
                </label>
                <button type="submit">Get Inspiration</button>
            </form>

            {results.length > 0 && (
                <div className={styles.results}>
                    <h2>Results:</h2>
                    <div className={styles.grid}>
                        {results.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <img src={item.image} alt="tattoo inspo" />
                                <p>{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
