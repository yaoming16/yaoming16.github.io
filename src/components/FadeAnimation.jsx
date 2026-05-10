import { useEffect, useRef, useState } from "react";

const FadeInScroll = ({ children, title = false }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Stop observing once it's visible to keep it there
          observer.unobserve(domRef.current);
        }
      });
    });

    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${title ? "fade-in-title" : "fade-in-section"} ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInScroll;
