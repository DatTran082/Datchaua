gsap.registerPlugin(CustomEase, CustomWiggle);

CustomWiggle.create("xEase", { type: "uniform", wiggles: 9 });
CustomWiggle.create("xEase2", { type: "uniform", wiggles: 6 });

const tl = new TimelineMax({ delay: 2 });
tl
	.to(".human-one", {
		css: { rotate: "15deg" },
		ease: Quad.easeInOut,
		duration: 0.3
	})
	.to(".human-two", {
		css: { rotate: "-8deg" },
		ease: Quad.easeInOut,
		duration: 0.3
	})
	.to(".human-two", 0.5, { y: 2, ease: "xEase", delay: 0.2 })
	.to(".human-one", 0.4, { y: 2, ease: "xEase", delay: "-=0.8" })
	.add("giggle-finish", "+=0.5")
	.to(".human", {
		css: { rotate: "0" },
		ease: Quad.easeInOut,
		duration: 0.5,
		delay: 0.3
	})
	.to(
		".eyeball",
		{
			css: { translateX: "-100%" },
			ease: Quad.easeInOut,
			duration: 1
		},
		"giggle-finish+=1"
	)
	.to(
		".human-one",
		{
			css: { scale: 0.4, translateX: "-45px", translateY: "-109px" },
			ease: Quad.easeInOut,
			duration: 1.2
		},
		"giggle-finish+=.8"
	)
	.to(
		".human-two",
		{
			css: { scale: 0.4, translateX: "143px", translateY: "-19px" },
			ease: Quad.easeInOut,
			duration: 1.2
		},
		"giggle-finish+=.8"
	)
	.to(
		".word:nth-child(1) .char",
		{
			css: { scale: "1", opacity: 1, rotate: "0", translateX: 0, translateY: 0 },
			ease: Quad.easeInOut,
			stagger: 0.2,
			duration: 0.8
		},
		"giggle-finish+=.6"
	)
	.to(
		".word:nth-child(2) .char",
		{
			css: { scale: "1", opacity: 1, rotate: "0", translateX: 0, translateY: 0 },
			ease: Quad.easeInOut,
			stagger: 0.15,
			duration: 0.5
		},
		"giggle-finish+=.6"
	)
	.to(".hashtag span", {
		css: { scale: "1", opacity: 1, translateX: 0, translateY: 0 },
		ease: "sine.out",
		delay: 0.5,
		stagger: {
			amount: 1.3,
			each: 0.1
		}
	});
