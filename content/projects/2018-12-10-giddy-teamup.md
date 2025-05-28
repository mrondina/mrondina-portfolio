---
title: "Giddy Teamup"
subtitle: "connecting creatives and makers"
summary: "A case study of the design and build of the Giddy Teamup mobile app."
client: ""
tools: "Illustrator, After Effects, Framer, Figma, LottieFiles"
date: 2019-06-30 00:00:00
image: "/images/teamup-banner.jpg"
---

## Overview

Giddy Teamup was a stand-alone iOS and android app that enabled browsing of a person's profile and a quick method of connecting on a project or idea. It was created as a proof of concept in anticipation of launching a more personalized experience for the Giddy community members.

## Centered on Connection

I designed teamup following inspiration from social and dating apps that focused solely on a person's profile and self-imagery. The shift for Teamup was the focus of a person's ideas, projects, and creative output in the profile. Instead of connecting for romantic reasons, creatives would connect for project collaborations. I wanted to facilitate the intersection of differing disciplines to foster new ideas and creative solutions.

<div class="gallery-box">
	<div class="gallery">
		<img src="/images/teamup_panel-1.png" loading="lazy">
		<img src="/images/teamup_panel-2.png" loading="lazy">
		<img src="/images/teamup_panel-3.png" loading="lazy">
		<img src="/images/teamup_panel-4.png" loading="lazy">
	</div>
</div>

Upon signup, the user was put into a flow that focused on their skills, interests, and active side projects. All these steps were designed to build a larger database of people, interests, skills, and needs that would allow teamup to eventually match people to those that could best help them with their projects.

<div class="gallery" data-columns="6">
	<img src="/images/Profile-add-bio.jpg">
	<img src="/images/Profile-Add-project.jpg">
	<img src="/images/Profile-project-detail.jpg">
	<img src="/images/Profile-skills.jpg">
	<img src="/images/Profile---knoll.jpg">
	<img src="/images/Profile---let's-go.jpg">
</div>

## Guiding Users Through Animation

The process of getting started on a new social app can be daunting. I wanted their to be a tutorial when someone was just starting, but wanted to avoid the large, full-screen walkthroughs that set the context, but feel disjointed from the app experience. I worked to create overlay animations that would play and then quickly get out of the way. The first of these was to show that the interactions were through gestures, rather than menus and selections.

<div class="gallery" data-columns="3">
	<img src="/images/teamup-swipe-anime.gif">
	<img src="/images/teamup-loading.gif">
	<img src="/images/teamup-load-image.gif">
</div>

The animations were design in Illustrator and then imported and animated in After Effects. With the [Lottie]() export plugin, I quickly had code-ready animations for the developers to implement using a simple JSON file. Once the developers and I got used to the workflow quirks of Lottie (such as timeline-based animation only), I started to incorporate more simple animations to enhance the feedback and experience of different aspects of the site.

## Texting Y'all

![](/images/teamup-message.gif)

Since the goal of teamup was to get introduced to other people, the core of the app was found in the texting application. Once a user found someone they felt were a good fit to join up with, an invitation was sent. Each person had the ability to review the request accept or reject it. Each request sent was put into a screen and marked as 'pending'. I put the user in full-control of what connections they accepted or rejected and also built flagging content controls to hide those people who may attempt to abuse the open connection system.

## Launch?

We launched Giddy teamup to the app stores late in 2018, but the project, unfortunately wasn't scoped to continue due to budgetary and other projects and assignments taking priority.
