interface LanguageIconProps {
    image: string;
    alt: string;
    language: string;
}

const LanguageIcon = (props: LanguageIconProps) => {
    return (
            <img className="tech-icon" src={props.image} alt={props.alt} width={256} height={256}/>
    );
}

export default LanguageIcon;
