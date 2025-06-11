import React from 'react';

export const WebCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Tech Capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'AI & Machine Learning',
							icon: '🧠',
							features: ['Supervised & Unsupervised Learning', 'Regression & Classification', 'PCA & K-Means', 'Model Evaluation & Tuning'],
						},
						{
							title: 'Deep Learning',
							icon: '🤖',
							features: ['Transformers & LLMs', 'U-Net & MR-U-Net', 'GAN & SRGAN', 'LangChain & RAG'],
						},
						{
							title: 'Web Development',
							icon: '💻',
							features: ['React & Next.js', 'TypeScript & Tailwind CSS', 'Framer Motion', 'FastAPI'],
						},
						{
							title: 'APIs & Data Retrieval',
							icon: '🔗',
							features: ['REST APIs', 'Pinecone Vector DB', 'Custom Web Scrapers', 'RAG Pipelines'],
						},
						{
							title: 'DevOps & Deployment',
							icon: '🚀',
							features: ['Docker & Containerization', 'AWS EC2 & S3', 'FastAPI Deployment', 'Streamlit Apps'],
						},
						{
							title: 'Tools & Productivity',
							icon: '⚙️',
							features: ['Git & GitHub', 'Jupyter Notebooks', '127 WPM Typing Speed', 'Figma (UI Design)'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-400 group-hover:text-gray-300 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
