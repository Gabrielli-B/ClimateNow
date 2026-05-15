import "./FeatureCard.css"

type FeatureCardProps = {
    icon: string;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({icon,title,description,}: FeatureCardProps){
    return(
        <div className="card">
            <h3>
                <img src={icon} alt="" className="card-icon"/>
                {title}
            </h3>

            <p>{description}</p>
        </div>
    );
}