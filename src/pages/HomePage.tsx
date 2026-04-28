import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import Specialities from '../components/Specialities';
import Metrics from '../components/Metrics';
import Process from '../components/Process';
import Companies from '../components/Companies';
import Plans from '../components/Plans';
import About from '../components/About';
import Quality from '../components/Quality';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

export default function HomePage() {

    return (
        <main className="max-w-7xl mx-auto">
            <Hero />
            <Problem />
            <div id="services">
                <Services />
            </div>
            <div id="specialities">
                <Specialities />
            </div>
            <Metrics />
            <Process />
            <div id="companies">
                <Companies />
            </div>
            <div id="plans">
                <Plans />
            </div>
            <div id="about">
                <About />
            </div>
            <Quality />
            <Reviews />
            <div id="contact">
                <Contact />
            </div>
        </main>
    );
}