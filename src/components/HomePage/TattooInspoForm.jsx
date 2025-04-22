import React, { useState } from 'react';
import styles from './TattooInspoForm.module.css';

export default function TattooInspoForm() {
    const [formData, setFormData] = useState({
        style: '',
        theme: '',
        placement: '',
    });

    const [results, setResults] = useState([]);
    const [zoomedImage, setZoomedImage] = useState(null);

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

        try {
            const data = await res.json();
            setResults(Array.isArray(data.results) ? data.results : []);
        } catch (error) {
            console.error('Failed to parse results:', error);
            setResults([]);
        }
    };

    const proxyImg = (url) => `/api/proxy-image?url=${encodeURIComponent(url)}`;

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
                <button type="submit" className={styles.button}>Get Inspiration</button>
            </form>

            {results.length > 0 && (
                <div className={styles.results}>
                    <h2>Results:</h2>
                    <div className={styles.grid}>
                        {results.map((item, index) => (
                            <div key={index} className={styles.card}>
                                <img
                                    src={proxyImg(item.image)}
                                    alt="tattoo inspo"
                                    className={styles.clickableImage}
                                    onClick={() => setZoomedImage(item.image)}
                                />
                                <p>{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {zoomedImage && (
                <div className={styles.modal} onClick={() => setZoomedImage(null)}>
                    <img
                        src={proxyImg(zoomedImage)}
                        alt="Zoomed tattoo"
                        className={styles.modalImage}
                    />
                </div>
            )}
        </div>
    );
}
