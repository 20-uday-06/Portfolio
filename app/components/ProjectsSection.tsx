import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Projects</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'Super-Resolution of MODIS Satellite Data Using Deep Learning',
							description: 'Developed a deep learning pipeline using MRU-Net to enhance MODIS Land Surface Temperature data from 1 km to 250 m resolution, optimized with MESH activation and platform-independent training.',
							metrics: {
								Model: 'MRU-Net',
								Resolution: '1km to 250m',
								Platform: 'Cross-platform',
							},
							techDetails: ['PyTorch Implementation', 'Custom MESH Activation', 'MODIS TIFF Data Processing', 'Windows & Linux Compatible'],
							image: '/modis.png',
						},
						{
							title: 'Market Segmentation AI Assistant using Fine-Tuned LLMs',
							description: 'Built an AI assistant that generates market segmentation tables using fine-tuned LLaMA 3.2 and Gemma 3 models, with a web-based interface.',
							metrics: {
								Models: 'LLaMA 3.2, Gemma 3',
								Data: 'MIT Market Segmentation PDF',
								UI: 'Next.js Web App',
							},
							techDetails: ['LLM Fine-Tuning', 'Custom Dataset Preparation', 'LangChain Pipeline', 'Next.js UI Integration'],
							image: '/fine_tunning.png',
						},
						{
							title: 'Trading Finance Assistant using Multi-Agent RAG Architecture',
							description: 'Designed a multi-agent financial assistant using LangChain, Pinecone, Whisper, and FastAPI microservices to deliver real-time market insights via both text and voice.',
							metrics: {
								Architecture: 'Multi-Agent RAG',
								TechStack: 'FastAPI, Docker, Streamlit, LangChain',
								Voice: 'Whisper TTS/STT',
							},
							techDetails: ['RAG Pipeline using Pinecone', 'FastAPI Microservices', 'Whisper Voice Integration', 'Dockerized Deployment'],
							image: '/RAG.png',
						},
						{
							title: 'Credit Card Default Prediction Using Classification and Risk-Based Techniques',
							description: 'Built a classifier using LightGBM and XGBoost to predict credit card defaults on an imbalanced dataset with advanced feature engineering and evaluation metrics.',
							metrics: {
								Accuracy: '94.79%',
								Precision: '97.06%',
								Recall: '92.39%',
							},
							techDetails: ['LightGBM & XGBoost', 'SMOTE for Imbalance', 'Feature Engineering', 'Model Evaluation (AUC-ROC, F1)'],
							image: '/Finance.png',
						},
						{
							title: 'ReImagine Hackathon Project (MERN Stack Web App)',
							description: 'Built and deployed a scalable, interactive web application using MERN stack technologies during the ReImagine Hackathon 2025.',
							metrics: {
								Frontend: 'Next.js, React',
								UI: 'Tailwind, Framer Motion',
								Hosted: 'Vercel',
							},
							techDetails: ['Next.js & React Development', 'Tailwind CSS Styling', 'Framer Motion Animations', 'Vercel Deployment'],
							image: '/apple.png',
							link: 'https://chintu-developers-reimagine-round2.vercel.app/',
						},
						{
							title: 'Valentine Proposal Website',
							description: 'Created a personalized, romantic Next.js website for a friend to propose to his girlfriend, with a smooth and charming user experience. (She rejected the proposal, but the website was a hit!)',
							metrics: {
								Frontend: 'Next.js, React',
								UI: 'Tailwind, Framer Motion',
								Theme: 'Valentine Special',
							},
							techDetails: ['Next.js Development', 'Custom Valentine Theme', 'Framer Motion Animations', 'Responsive Design'],
							image: '/valentine.png',
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									<div className="space-y-3">
										<h4 className="text-base sm:text-lg font-semibold">Project Details</h4>
										<div className="grid grid-cols-3 gap-2 sm:gap-4">
											{Object.entries(project.metrics).map(([key, value]) => (
												<div key={key} className="text-center">
													<div className="text-md font-bold text-blue-400">{value}</div>
													<div className="text-sm text-gray-400 capitalize">{key}</div>
												</div>
											))}
										</div>
									</div>

									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technical Implementation</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>

									{project.link && (
										<div className="mt-4">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-400 hover:underline"
											>
												🌐 View Live Project
											</a>
										</div>
									)}
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 1024px) 100vw, 50vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
