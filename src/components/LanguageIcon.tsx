interface LanguageIconProps {
    image: string;
    alt: string;
    language: string;
}

const LanguageIcon = (props: LanguageIconProps) => {
    return (
            <img
                className="tech-icon"
                src={`${props.image}-256.webp`}
                srcSet={`${props.image}-128.webp 128w, ${props.image}-256.webp 256w`}
                sizes="(min-width: 900px) 128px, 64px"
                alt={props.alt}
                width={256}
                height={256}
            />
    );
}

export default LanguageIcon;
