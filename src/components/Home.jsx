import { useEffect, useRef } from "react";
import yogendra1 from "./yogendra1.jpg";

export default function Home() {
    const homeRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show-3d");
                    } else {
                        entry.target.classList.remove("show-3d");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = homeRef.current.querySelectorAll("h3, h1, p, .Contact-home");
        elements.forEach((el) => {
            el.classList.add("hidden-3d"); // Initially hidden with 3D effect
            observer.observe(el);
        });

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="home" ref={homeRef}>
            <div className="home-about">
                <h3>Hey, I'm Yogendra Bairwa</h3>
                <h1>Full Stack <br /> Developer</h1>
                <p>I am a full-stack and Python developer, transforming ideas into innovative solutions with clean, efficient, and dynamic code.</p>
                <a href="#contact" className="Contact-home">Contact Me</a>
            </div>
            <div className="home-img-1">
                <img src={yogendra1} alt="Yogendra Bairwa" className="home-img floating-img" />
            </div>
        </div>
    );
}
