---
title: Dynamic Hit Reactions in Unreal Engine 5
description: Generating hit reactions using unreal's built-in physical animation systems.
tags: [unreal, gamedev]
date: 2023-08-12
---

<div className="flex justify-center">
<Image
  src="/images/banner.png"
  width="624"
  height="351"
  alt="banner"
  className="mt-6 object-center rounded-lg"
/>
</div>

Recently, I began a small-scope new project to create a combat system in UE5 based on Muay Thai, a personal passion of mine. I figured it'd be a great excuse to get more familiar with programming combat systems in general, something very different from <i>The Sims</i> that I'd love to work on professionally some day.

One of the most interesting problems I had to solve was that of hit reactions, characters playing content reactively to collision. As a combat simulation, getting this down is a hugely important part of the player experience, arguably even more so than your own playable character's animation, since it forms a crucial component of the visual feedback to a particular strike.

<div className="flex justify-center">
<Image
  src="/images/street_fighter_low_kick.gif"
  width="640"
  height="360"
  alt="low kick gif"
  className="mt-6 object-center rounded-lg"
/>
</div>
<em className="flex justify-center">We've come a long way from just shaking a sprite to indicate a hit.</em>

I felt that the journey I took to arrive at a workable solution was interesting enough to share. Let's start with my first attempt...

## First Implementation: Physical Animation
As a non-animator, I quickly hit a content wall when it came to trying to fuel this project. My hope was to create a physically based animation system that could handle all the hit reactions I needed procedurally.

Luckily, Unreal comes with a decently robust physical animation solution.

The rough game plan:
1. Use as much of Unreal's built-in <i>UPhysicalAnimationComponent</i> as possible.
2. Use the UE Mannequin Physics Asset
3. Tune different constraint and physical animation profiles for each type of strike received.

    * For instance, receiving a left hook punch only allows head rotation along the z (up) axis, up to a certain angle.
4. Set the profile on the dst (receiving) actor based on the strike landed by the src (attacking) actor.
5. Profit

### Setup
Code available [here.](https://github.com/rubenaryo/NakMuay)

I began by inheriting from <i>UPhysicalAnimationComponent</i> through a new child class: <i>UFighterPhysicalAnimComponent</i>, this component's job is to hold all actively blending hit reactions in a collection and tick down their blend weights to avoid popping.

It defines a few <i>BlueprintImplementableEvent</i> functions for operations like <i>OnGetHit</i>, <i>Tick</i>, <i>GetActiveHitBlendWeight</i>.

Unreal provides the very convenient <i>Sphere Trace By Channel</i>, which gives you information about the physics body a collision against as the bone name attached to the hit result. This is how you can define what physics body to apply an impulse to.
<br/><br/>
<em className="flex justify-center">Blueprint for initiating a hit from an impulse and impact point</em>
<p className="flex justify-center"><iframe src="https://blueprintue.com/render/qjj3jk5j/" height="360" width="640" scrolling="no" allowfullscreen></iframe></p>

### Results
There are several drawbacks which became apparent rapidly.

To start with, this approach requires a LOT of tuning to reach any level of success. Whether a physics body is enabled, what the constraints to its neighbors are, and what its mass is all have to be tuned, and this must be done for each attack's corresponding hit profile. 

Secondly, even once tuning is established it becomes very difficult to ensure consistent behavior in several tests. Wildly different results can occur depending on the receiving actor's idle animation and the attacking actor's overall orientation, since this greatly changes the relative position of the physics bodies. This makes the results wildly inconsistent.

Furthermore, there's no way the entirely procedural upper body movement could be consistent with the authored lower-body idle and movement animations. Once the movement system of the game becomes more fleshed out, this could very quickly go from workable to obsolete.
<br/><br/>
<em className="flex justify-center">So jittery!</em>
<div className="flex justify-center">
<Image
  src="/images/hit_reaction_physical_torso.gif"
  width="600"
  height="338"
  alt="hit reaction physical result"
  className="mt-6 object-center rounded-lg"
/>
</div>
It was clear from this result that this approach wasn't going to work, especially as more strikes and movement continued to be added to the project. However, not all of this work had to be discarded. The fact that I had a physics asset all set up would later prove to be very useful as a way to establish proper per-region collision detection. 

A solution that allowed for tighter control was desperately needed, one that could make use of nice, authored animations. Stay tuned for Part 2 where I outline what I came up with in more detail.