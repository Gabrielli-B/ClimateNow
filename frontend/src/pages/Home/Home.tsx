import{Navbar} from "../../components/Navbar/Navbar";
import {Hero} from "../../components/Hero/Hero";
import {FeatureCard} from "../../components/FeatureCard/FeatureCard";
import iconWeather from "../assets/icon_weather.avif";
import iconLeaf from "../assets/icon_leaf.avif";
import iconCity from "../assets/icon_city.png";
import "./Home.css";

export function Home(){
    return(
        <div className="container">

            <section className="hero-section">
                <Navbar/>
                <Hero/>    
            </section>
            

            <section className="features">
                <FeatureCard 
                    icon={iconWeather}
                    title="Clima em tempo real"
                    description="Dados atualizados das principais cidades."
                />  

                <FeatureCard
                    icon={iconLeaf}
                    title="Consciência ambiental"
                    description="Informação para decisões conscientes."
                />

                <FeatureCard
                    icon ={iconCity}
                    title="Escolha sua cidade"
                    description="Acompanhe a previsão do tempo de forma simples." 
                />
                              
            </section>
        </div>
    );
}