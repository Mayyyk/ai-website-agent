import React from "react";
import solutionSection from "./solution-section.json";

const App = () => {
    return (
        <div>
            {/* Render Header */}
            {solutionSection.header && (
                <header className={solutionSection.header.classes}>
                    <div className={solutionSection.header.content.container.classes}>
                        <div className={solutionSection.header.content.container.logo.typography.classes}>
                            {solutionSection.header.content.container.logo.text}
                        </div>
                        <nav className={solutionSection.header.content.container.nav.classes}>
                            {solutionSection.header.content.container.nav.items.map((item, index) => (
                                <a key={index} className={item.typography.classes} href="#">
                                    {item.text}
                                </a>
                            ))}
                            <button className={solutionSection.header.content.container.nav.cta.classes}>
                                {solutionSection.header.content.container.nav.cta.text}
                            </button>
                        </nav>
                    </div>
                </header>
            )}

            {/* Render Hero Section */}
            {solutionSection.hero && (
                <section className={solutionSection.hero.classes}>
                    <div className={solutionSection.hero.content.container.classes}>
                        <h1 className={solutionSection.hero.content.container.content.headline.typography.classes}>
                            {solutionSection.hero.content.container.content.headline.text}
                        </h1>
                        <p className={solutionSection.hero.content.container.content.bodyText.typography.classes}>
                            {solutionSection.hero.content.container.content.bodyText.text}
                        </p>
                        <button className={solutionSection.hero.content.container.content.cta.classes}>
                            {solutionSection.hero.content.container.content.cta.text}
                        </button>
                    </div>
                </section>
            )}

            {/* Render Main Headline */}
            {solutionSection.mainHeadline && (
                <section className={solutionSection.mainHeadline.classes}>
                    <h2 className={solutionSection.mainHeadline.content.title.typography.classes}>
                        {solutionSection.mainHeadline.content.title.text}
                    </h2>
                    <h3 className={solutionSection.mainHeadline.content.subtitle.typography.classes}>
                        {solutionSection.mainHeadline.content.subtitle.text}
                    </h3>
                    <p className={solutionSection.mainHeadline.content.description.typography.classes}>
                        {solutionSection.mainHeadline.content.description.text}
                    </p>
                </section>
            )}
        </div>
    );
};

export default App;
