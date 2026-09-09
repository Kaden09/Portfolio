import Silk from "@/shared/ui/Silk/Silk";
import styles from "./KillCode.module.scss"
import Title from "@/shared/ui/Typography/Title";
import Subtitle from '@/shared/ui/Typography/Subtitle';
import GitHubIcon from '@/shared/assets/icons/github.svg?react';
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function KillCode() {
	return (
		<div className={styles.wrapper}>
			<header>
				<Link className={styles.backButton} to="/">
					<ArrowLeft size={28} />
				</Link>
				<div className={styles.titleContainer}>
					<Title size="xl">KillCode</Title>
					<Subtitle>✦ How It All Works</Subtitle>
				</div>
			</header>
			<main>
				<div className={styles.inDevelopment}>
					<Title size="lg">
						This area is pending… mostly because I keep changing my mind. But I
						promise, it'll be epic. Soon. Now you can click on the link below.
					</Title>
					<a
						href="https://github.com/Kaden09/KillCode.git"
						target="_blank"
						rel="noopener noreferrer"
						className={styles['github-button']}>
						<GitHubIcon />
						<Title size="md" className={styles['text-short']}>
							This project on GitHub
						</Title>
					</a>
				</div>
			</main>
			<div className={styles.animatedBg}>
				<Silk
					speed={5}
					scale={1}
					color="#384fffff"
					noiseIntensity={1.5}
					rotation={0}
				/>
			</div>
		</div>
	);
}
