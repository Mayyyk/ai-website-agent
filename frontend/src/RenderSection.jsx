import React from "react";

const RenderSection = ({ section }) => {
    if (!section) return null;

    return (
        <section className={section.classes}>
            <div className={section.content.container.classes}>
                {/* Render Headline */}
                {section.content.container.content.headline && (
                    <h1 className={section.content.container.content.headline.typography.classes}>
                        {section.content.container.content.headline.text}
                    </h1>
                )}
                {/* Render Body Text */}
                {section.content.container.content.bodyText && (
                    <p className={section.content.container.content.bodyText.typography.classes}>
                        {section.content.container.content.bodyText.text}
                    </p>
                )}
                {/* Render Call-to-Action */}
                {section.content.container.content.cta && (
                    <button className={section.content.container.content.cta.classes}>
                        {section.content.container.content.cta.text}
                    </button>
                )}
            </div>
        </section>
    );
};

export default RenderSection;
