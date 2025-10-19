import type { Project } from "../types/types";
import octoconvoHomepage from "../assets/images/homepage-octoconvo.png";
import octoconvoSignupPage from "../assets/images/signup-octoconvo.png";
import octoconvoProfileModal from "../assets/images/profile-octoconvo.png";
import octoconvoFriendModal from "../assets/images/friend-octoconvo.png";
import octoconvoNotificationModal from "../assets/images/notification-octoconvo.png";
import octoconvoExplorePage from "../assets/images/explore-octoconvo.png";
import octoconvoCommunityPage from "../assets/images/community-octoconvo.png";
import octoconvoCreateCommunityModal from "../assets/images/create-community-octoconvo.png";
import octoconvoDMPage from "../assets/images/dm-octoconvo.png";
import octoconvo404Page from "../assets/images/404-octoconvo.png";
import octoconvoDemo from "../assets/videos/octoconvo-demo.mp4";
import { techs } from "./techStack";

const projects: Project[] = [
	{
		title: { content: "Octoconvo", styles: "from-fg-1 to-brand-4" },
		about: `A real-time chatting application with a community and friend system.
		You can send messages and images, customise your profile, explore, join, and
		create communities, explore people and add friends and receive notifications
		in real-time.`,
		previews: [
			{
				url: octoconvoHomepage,
				description: "Octoconvo Homepage",
				alt: "Octoconvo homepage screenshot",
				type: "image/png",
			},
			{
				url: octoconvoSignupPage,
				description: "Octoconvo login page",
				alt: "Octoconvo login page screenshot",
				type: "image/png",
			},
			{
				url: octoconvoProfileModal,
				description: "Octoconvo profile modal",
				alt: "Octoconvo profile modal screenshot",
				type: "image/png",
			},
			{
				url: octoconvoFriendModal,
				description: "Octoconvo friend modal",
				alt: "Octoconvo friend modal screenshot",
				type: "image/png",
			},
			{
				url: octoconvoNotificationModal,
				description: "Octoconvo notification modal",
				alt: "Octoconvo notification modal screenshot",
				type: "image/png",
			},
			{
				url: octoconvoExplorePage,
				description: "Octoconvo explore page",
				alt: "Octoconvo explore page screenshot",
				type: "image/png",
			},
			{
				url: octoconvoCommunityPage,
				description: "Octoconvo community page",
				alt: "Octoconvo community page screenshot",
				type: "image/png",
			},
			{
				url: octoconvoCreateCommunityModal,
				description: "Octoconvo create community modal",
				alt: "Octoconvo create community modal screenshot",
				type: "image/png",
			},
			{
				url: octoconvoDMPage,
				description: "Octoconvo direct message page",
				alt: "Octoconvo direct message page screenshot",
				type: "image/png",
			},
			{
				url: octoconvo404Page,
				description: "Octoconvo 404 Not Found page",
				alt: "Octoconvo 404 Not Found page screenshot",
				type: "image/png",
			},
			{
				url: octoconvoDemo,
				description: "Octoconvo features demo",
				alt: "",
				type: "video/mp4",
			},
		],
		techStack: [
			techs.typescript,
			techs.nodeJS,
			techs.express,
			techs.postgreSQL,
			techs.tailwindCSS,
			techs.nextJS,
			techs.react,
			techs.tanstackQuery,
			techs.tailwindCSS,
			techs.jest,
			techs.inkscape,
			techs.figma,
		],
	},
];

export default projects;
