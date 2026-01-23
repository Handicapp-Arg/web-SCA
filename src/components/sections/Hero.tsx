import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
	const { t } = useLanguage();

	return (
		<section
			className="relative h-screen min-h-[600px] flex items-center justify-center bg-black overflow-hidden"
			aria-label="Ultra Premium Hero Section"
		>
			{/* Video Background */}
			<div className="absolute inset-0">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="absolute inset-0 w-full h-full object-cover"
				>
					<source src="https://res.cloudinary.com/dh2m9ychv/video/upload/v1769168951/videohandicapp_we6klr.mp4" type="video/mp4" />
				</video>
				{/* Overlays para mejor legibilidad del texto */}
				<div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black" />
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
				<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-black/80" />
			</div>

			{/* Content */}
			<div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-8">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
				>
					<span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/20 to-transparent border border-accent/40 rounded-full backdrop-blur-xl text-accent font-bold text-xs uppercase tracking-widest">
						<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
						{t('hero_title')}
					</span>
				</motion.div>

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1 }}
					className="font-display font-black uppercase leading-tight tracking-tight text-white text-4xl sm:text-5xl md:text-6xl mb-2"
				>
					{t('hero_title')}
				</motion.h1>

				{/* Description */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto"
				>
					{t('hero_subtitle')}
				</motion.p>

				{/* CTA Button */}
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="group relative px-8 py-4 bg-accent text-black font-black text-base uppercase tracking-wider rounded-full shadow-2xl shadow-accent/40 hover:shadow-accent/60 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent"
					onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
					aria-label={t('hero_cta')}
				>
					<span className="relative z-10 flex items-center justify-center gap-2">
						{t('hero_cta')}
						<i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-sm" />
					</span>
				</motion.button>
			</div>
		</section>
	);
};

