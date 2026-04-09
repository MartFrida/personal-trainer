import { Link } from "react-router-dom";

export const PrivacyPolicyPage = () => {
	return (
		<div className="min-h-screen bg-white text-zinc-900 px-6 py-12">
			<div className="max-w-4xl mx-auto">
				<div className="mb-10">
					<Link
						to="/"
						className="inline-block text-sm uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition"
					>
						← Back to homepage
					</Link>
				</div>

				<h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">
					Privacy Policy
				</h1>

				<p className="text-zinc-600 text-lg mb-10 leading-relaxed">
					At <span className="font-semibold">CIEPTIS</span>, we respect your privacy and are committed to protecting your personal data.
					This Privacy Policy explains how we collect, use and protect the information you share with us through our website, ads, forms, Messenger, Instagram or WhatsApp.
				</p>

				<div className="space-y-10 text-zinc-800 leading-8">
					<section>
						<h2 className="text-2xl font-semibold mb-3">1. Who we are</h2>
						<p>
							<span className="font-semibold">CIEPTIS</span><br />
							Barcelona, Spain<br />
							Email: <a href="mailto:cieptis.atencion@gmail.com" className="underline hover:text-zinc-600">cieptis.atencion@gmail.com</a><br />
							WhatsApp: <a href="https://wa.me/34613758331" className="underline hover:text-zinc-600" target="_blank" rel="noreferrer">+34 613 75 83 31</a>
												</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">2. What information we may collect</h2>
						<p>
							When you contact us through our website, social media, forms or ads, we may collect:
						</p>
						<ul className="list-disc pl-6 mt-3 space-y-2">
							<li>Name</li>
							<li>Phone number</li>
							<li>Email address (if provided)</li>
							<li>Training preferences</li>
							<li>Fitness or boxing goals</li>
							<li>Any message or information you choose to share with us</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">3. How we use your information</h2>
						<p>We use your information only to:</p>
						<ul className="list-disc pl-6 mt-3 space-y-2">
							<li>Respond to your enquiries</li>
							<li>Provide information about our services</li>
							<li>Recommend the most suitable training option for you</li>
							<li>Arrange bookings, sessions or follow-up communication</li>
							<li>Improve our communication and customer experience</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">4. How we protect your data</h2>
						<p>
							We take reasonable measures to protect your personal information and prevent unauthorised access, misuse or disclosure.
							Your data is handled with care and only used for legitimate communication related to our services.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">5. Sharing of information</h2>
						<p>
							We do <span className="font-semibold">not sell</span>, rent or trade your personal data.
							We only share information if necessary to operate our services, comply with legal obligations or communicate with you through the platforms you used to contact us.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">6. Data retention</h2>
						<p>
							We keep your information only for as long as necessary to respond to your request, provide services or maintain communication related to your interest in our training services.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">7. Your rights</h2>
						<p>You may request at any time:</p>
						<ul className="list-disc pl-6 mt-3 space-y-2">
							<li>Access to the data we hold about you</li>
							<li>Correction of inaccurate information</li>
							<li>Deletion of your personal data</li>
							<li>Withdrawal of consent for communication</li>
						</ul>
						<p className="mt-4">
							To do so, contact us at:{" "}
							<a href="mailto:cieptis.atencion@gmail.com" className="underline hover:text-zinc-600">
								cieptis.atencion@gmail.com
							</a>
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">8. Third-party platforms</h2>
						<p>
							If you contact us through Meta platforms (Facebook, Instagram, Messenger), WhatsApp or other third-party services,
							your information may also be processed according to their own privacy policies.
							We recommend reviewing those platforms if you want to know more about how they manage your data.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">9. Contact</h2>
						<p>
							If you have any questions about this Privacy Policy or how your data is handled, please contact us:
						</p>
						<p className="mt-3">
							Email: <a href="mailto:cieptis.atencion@gmail.com" className="underline hover:text-zinc-600">cieptis.atencion@gmail.com</a><br />
							WhatsApp: <a href="https://wa.me/34613758331" className="underline hover:text-zinc-600" target="_blank" rel="noreferrer">+34 613 75 83 31</a>
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-3">10. Updates to this policy</h2>
						<p>
							We may update this Privacy Policy from time to time to reflect legal, operational or service changes.
							Any updates will be published on this page.
						</p>
						<p className="mt-4 text-sm text-zinc-500">
							Last updated: April 2026
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};