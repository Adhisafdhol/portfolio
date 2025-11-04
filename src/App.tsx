import "./App.css";
import HeroHeader from "./components/HeroHeader";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectsSection";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

function App() {
	return (
		<>
			<HeroHeader />
			<SkillsSection />
			<ProjectSection />
			<AboutMe />
			<ContactMe />
		</>
	);
}

export default App;
