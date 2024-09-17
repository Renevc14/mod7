import Logo from "./Default/components/Logo";
import Description from "./Default/components/Description";
import OpenLink from "../components/OpenLink";
import LessonInfo from "../components/LessonInfo";
import Contador from "./Default/components/Contador";

const Default = () => {
    return (
        <div className="App-header">
            <Contador />
            <Logo />
            <Description />
            <OpenLink 
                title="Learn React" 
                url="https://react.dev/" 
            />
            <OpenLink 
                title="Mi proyecto react (Github)" 
                url="https://github.com/Renevc14/mod7" 
            />
            <LessonInfo 
                number="1" 
                title="Introducción a react y estructura de proyecto" 
            />
            <LessonInfo 
                number="2" 
                title="Context API para la gestión del estado global en aplicaciones react" 
            />
        </div>
    );
};

export default Default;