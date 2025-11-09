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
import battleshipLobby from "../assets/images/lobby-battleship.png";
import battleshipGameboard from "../assets/images/gameboard-battleship.png";
import { techs } from "./techStack";

const projects: Project[] = [
	{
		title: { content: "Octoconvo", styles: "from-fg-1 to-brand-4" },
		about: `Octoconvo is a real-time chatting application designed for creating
		a community driven platform. You can send messages and images, customise
		your profile, explore and create communitie and more`,
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
			techs.prisma,
			techs.nextJS,
			techs.react,
			techs.tanstackQuery,
			techs.tailwindCSS,
			techs.jest,
			techs.inkscape,
			techs.figma,
		],
		links: [
			{ text: "Codebase", url: "https://github.com/Octoconvo/octoconvo" },
		],
		contribution: [
			{
				title: "Development",
				contributions: [
					"Planned the project's initial design and specifications.",
					"Researched project branding for a cohesive design.",
					"Wrote and designed testing guidelines.",
				],
			},
			{
				title: "Design",
				contributions: [
					`Designed multiple UI components with Figma that combine
					accessibility, practicality, and a cohesive vision.`,
					"Designed and created brand assets with Inkscape.",
					`Designed interactive UX experience like state indicators,
					notifications, and hover-based styling`,
				],
			},
			{
				title: "Technical",
				contributions: [
					`Architected a hybrid event-driven architecture and 
					REST API to deliver real-time experience.`,
					`Implemented robust client and server validation including file
				validation for security and better user experience.`,
					`Implemented a real-time notification system with buffered state
					updates. This allows the component to keep the previous notification
					state after the notifications' read statuses are updated to keep the
					new notification indicator styles until the user closes the modal.`,
					`Implemented image preview functionality with canvas API for file
					inputs. The implementation successfully reduces a 20 mb image down to
					less than 100KB. This drastically improves performance and user
					experience when selecting multiple huge images.`,
					`Integrated Sharp to compress images before uploading the files to the
					Supabase file storage to reduce storage usage and improve
					performance.`,
					`Architected database schemas diagram for the system.`,
					`Implemented authentication and authorisation to prevent users from
					accessing unauthorised resources.`,
					`Wrote scripts that generate seed database data for testing the
					backend API endpoints. The scripts have three modes to be used for 
					different purposes. The 'COMPACT' mode is used for general integration
					testing, and the 'EXTENSIVE' mode is used for early performance checks by
					generating a big dataset to ensure the queries don't choke on medium
					load.`,
					`Wrote hundreds of tests with 90+% coverage to ensure system stability
					and ease refactoring and future updates.`,
					`Implemented cursor-based paginatin to explore communities, users and
					more.`,
				],
			},
		],
	},
	{
		title: {
			content: "Battleship",
			styles: "from-fg-1 to-brand-1",
		},
		about: `A web game based on a classic strategy guessing game Battleship.`,
		previews: [
			{
				url: battleshipLobby,
				description: "Battleship lobby",
				alt: "Battleship lobby screenshot",
				type: "image/png",
			},
			{
				url: battleshipGameboard,
				description: "Battleship gameboard",
				alt: "Battleship gameboard screenshot",
				type: "image/png",
			},
		],
		techStack: [techs.html, techs.css, techs.javascript, techs.webpack],
		links: [{ text: "Live", url: "https://adhisafdhol.github.io/battleship/" }],
		contribution: [],
	},
];

export default projects;
