---
title: Dynamic Hit Reactions in Unreal Engine 5, Part 2
description: Creating a data asset to determine where a hit has occurred.
tags: [unreal, gamedev]
date: 2023-09-09
---

<div className="flex justify-center">
<Image
  src="/images/hit_reaction_resized.PNG"
  width="624"
  height="351"
  alt="banner"
  className="mt-6 object-center rounded-lg"
/>
</div>

Last time, I showcased how to use Unreal's built-in physical animation systems to generate a simple hit reaction system. However, this approach had many drawbacks. It required a lot of tuning and often yielded unpredictable behavior, since the reaction depends heavily on the state of the system, such as where the receiving actor's idle animation positions the physics bodies.

<div className="flex justify-center">
<Image
  src="/images/hit_reaction_physical_torso.gif"
  width="600"
  height="338"
  alt="hit reaction physical result"
  className="mt-6 object-center rounded-lg"
/>
</div>
<em className="flex justify-center">Not great, maybe best saved for a Rock 'Em Sock 'Em Robots remake.</em>

Clearly, a system with tighter control is needed. For that we'll need authored reaction animations, which I bought here: [Boxing - MoCap Pack](https://www.unrealengine.com/marketplace/en-US/product/boxing-motion-capture-animations).


## Second Implementation: Play Reaction Montages Dynamically

### Setup
Code available [here.](https://github.com/rubenaryo/NakMuay)

There are roughly two things we need to know (at a minimum) when we want to play an animation

1. Where did you get hit?
2. How did you get hit? (In what direction?)

A left hook to the head wouldn't elicit the same reaction as a right kick to the leg, so these are the two basic pieces of information we need to actually play an animation.

### The Body Hit Section Map
First, we identify the lowest level element we can work with. In this case, it's the bone name that results from a given hit result (see Part 1). Since we already have a physics asset and bodies for the mannequin, running a sphere trace for an attack yields the bone name of the struck physics body on the receiving actor. This way we know whether we've struck the <i>neck_02</i> bone, for instance.

While it would be possible to build the system off of this, I find working with individual bones unwieldly and inflexible. For instance, this would later cause problems if we were to switch to a different skeleton or physics asset. What we really need is a unified way to determine an abstract "hit section", so I opted for a simple enum:
<br />
<details>
<summary>Show Code</summary>
<pre><code class="language-cpp">
/// Can map to several bones. A gameplay abstraction of where a hit can occur.
UENUM(BlueprintType, meta = (ScriptName = "HitSection"))
enum EHitSection
&#123;
    &emsp; HS_None,
    &emsp; HS_Abdominal,
    &emsp; HS_Head,
    &emsp; HS_LeftLeg,
    &emsp; HS_RightLeg,
    &emsp; HS_Count
&#125;;
</code></pre></details>

Next we'll want some way to map bones to these usable abstract enum values. This is a great opportunity to create a custom data asset.

#### Creating the Data Asset
I opted to put all of our necessary hit reaction tuning into a single data asset, defined per-actor type. There is only a single actor type, Fighter, in the game currently but this way there are less data assets to handle.

We'll want to define a child of <i>UDataAsset</i> to hold this information. Then we can populate instances of it in the Unreal Editor.

<br />
<details>
<summary>Show Code</summary>
<pre><code>
USTRUCT(BlueprintType)
struct FBoneNameArray
&#123;
    &emsp;&emsp;GENERATED_BODY()
    
    &emsp;&emsp;UPROPERTY(EditAnywhere, BlueprintReadOnly)
    &emsp;&emsp;TArray&lt;FName&gt; BoneNames;
&#125;;

UCLASS(Blueprintable, ClassGroup = Combat)
class UHitReactionMap : public UDataAsset
&#123;
&emsp;&emsp;...
    &emsp;&emsp;/// Maps a body's hit section with the bones it represents
    &emsp;&emsp;UPROPERTY(EditAnywhere, BlueprintReadOnly, meta = (DisplayName = "Hit Section to Bone Map", AllowPrivateAccess = "true"))
    &emsp;&emsp;TMap&lt;TEnumAsByte&lt;EHitSection&gt;&gt;, FBoneNameArray> HitSectionToBoneMap;

    &emsp;&emsp;/// Opposite map to HitSectionToBoneMap. For a given bone, returns its hit section. 
    &emsp;&emsp;UPROPERTY(VisibleAnywhere, BlueprintReadOnly, meta = (DisplayName = "Bone to Hit Section &emsp;Map (generated)", AllowPrivateAccess = "true"))
    &emsp;&emsp;TMap&lt;FName, TEnumAsByte&lt;EHitSection&gt;&gt; BoneToHitSectionMap;
    
    &emsp;&emsp;/// For a given hit section, returns the reactions that can play from tuned reference vectors.
    &emsp;&emsp;UPROPERTY(EditAnywhere, BlueprintReadOnly, meta = (DisplayName = "Hit Section to Reaction Map", AllowPrivateAccess = "true"))
    &emsp;&emsp;TMap&lt;TEnumAsByte&lt;EHitSection&gt;, FHitReactionReferenceArray&gt; HitSectionToReactionMap;
&#125;;
</code></pre>
</details>

Here I've opted for two bi-directional maps. A mutable "Hit Section -> Bone Name List", and a "Single Bone Name -> Hit Section" that is read only and generated from the first at load time. Since the one we really want to use is the latter, this is not strictly necessary.
However, it is much easier to tune and maintain the first style of map, and the second can be trivially generated from the first afterwards.

Now you can create an instance of it in the unreal editor and fill it out as you like. Here's an example:

<div className="flex justify-center">
<Image
  src="/images/hitsection_dataassetview.png"
  width="600"
  height="338"
  alt="asset view in editor"
  className="mt-6 object-center rounded-lg"
/>
</div>
<em className="flex justify-center">Asset View in the UE5 Editor</em>

#### Querying for a Hit Section
To ask your new data asset for a hit section, we can define the following utility function to query the second map:

<br />
<details>
<summary>Show Code</summary>
<pre><code class="language-cpp">
EHitSection UHitReactionMap::GetHitSectionFromBoneName(const FName& boneName)
&#123;
    &emsp;TEnumAsByte&lt;EHitSection&gt;* hitSectionResult = BoneToHitSectionMap.Find(boneName);
    &emsp;if (!hitSectionResult)
    &emsp;&emsp;    return EHitSection::HS_None;

    &emsp;return *hitSectionResult;
&#125;
</code></pre></details>

To get a reference to the data asset itself, I recommend holding it as a field on the actor/pawn blueprint and populating its default value in-editor. Now you can ask this asset for the EHitSection enum value.

### Next Steps
Next, we'll need an answer to our second requirement: <i>How did you get hit? (In what direction?)</i>

Answering this will involve further markup for both the attacks themselves and adding new fields to the data asset. Stay tuned for that in Part 3!
