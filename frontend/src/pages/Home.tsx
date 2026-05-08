import{Navbar} from "../components/Navbar";
import {Hero} from "../components/Hero";
import {FeatureCard} from "../components/FeatureCard";

export function Home(){
    return(
        <div className="container">
            <Navbar/>

            <Hero/>

            <section className="features">
                <FeatureCard
                    icon="🌤"
                    title="Clima em tempo real"
                    description="Dados atualizados das principais cidades."
                />  

                <FeatureCard
                    icon="🌱"
                    title="Consciência ambiental"
                    description="Informação para decisões conscientes."
                />
                              
            </section>
        </div>
    );
}