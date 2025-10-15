import React, { useState } from "react";

export default function Home() {
  const [scene, setScene] = useState(0);
  const [ending, setEnding] = useState<string | null>(null);

  const scenes = [
    {
      title: "Welcome to UniqueQuest 👋",
      text: "You wake up onchain with only one goal — to prove you're the most unique being on Base.",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80",
      choices: ["Begin your quest"],
      next: [1],
    },
    {
      title: "The Fork in the Blockchain 🛣️",
      text: "Two paths appear before you: one glowing with Base blue, another shadowed by rugged vibes.",
      image:
        "https://images.unsplash.com/photo-1618477461855-363d5dc5a11d?auto=format&fit=crop&w=800&q=80",
      choices: ["Follow the Base light 💙", "Explore the Rugged path 😈"],
      next: [2, 3],
    },
    {
      title: "Base Believer 💫",
      text: "You cast your first post on farcaster — ‘gm Base fam’. Within minutes, 420 people like it.",
      image:
        "https://images.unsplash.com/photo-1618354691532-6c66f1cc7ed4?auto=format&fit=crop&w=800&q=80",
      choices: ["Drop an NFT for your fans 🪙", "Reply to all 420 comments"],
      next: [4, 5],
    },
    {
      title: "Rugged Realities 💀",
      text: "A mysterious project DMs you promising 10x returns. You…",
      image:
        "https://images.unsplash.com/photo-1627204608820-3f501b5e6609?auto=format&fit=crop&w=800&q=80",
      choices: ["Ape in 🧠", "Report the scam 😤"],
      next: [6, 7],
    },
    {
      title: "NFT Star 🌟",
      text: "You airdrop ‘Unique Moments #1’. It sells out instantly. You’re famous — and mildly insufferable.",
      image:
        "https://images.unsplash.com/photo-1602526216320-d1b1bf63d0cc?auto=format&fit=crop&w=800&q=80",
      choices: ["Celebrate!", "Vibe quietly"],
      next: ["win", "zen"],
    },
    {
      title: "Reply Guy Energy 💬",
      text: "After replying to 420 comments, your thumbs ache. You gain 2 followers and early arthritis.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
      choices: ["Keep going", "Take a break"],
      next: ["lose", 2],
    },
    {
      title: "Rugged Ape 🐒",
      text: "You aped in hard. The dev deleted the Discord. You now own the world’s most unique rug.",
      image:
        "https://images.unsplash.com/photo-1604908176997-3d9a9a1c55c0?auto=format&fit=crop&w=800&q=80",
      choices: ["Frame it 🖼️", "Cry onchain 😭"],
      next: ["rug", "lose"],
    },
    {
      title: "Hero of Base 🧱",
      text: "You exposed the scammer and got casted by @base. Base blue beams shoot from your fingers.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      choices: ["Mint your story", "Retire in glory"],
      next: ["win", "zen"],
    },
  ];

  const endings: Record<string, { title: string; text: string; image: string }> = {
    win: {
      title: "You Won the Chain! 🏆",
      text: "You’re officially certified Unique. Cast your victory far and wide.",
      image:
        "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    },
    lose: {
      title: "You Got Rugged 😭",
      text: "It happens to the best of us. Try again and reclaim your uniqueness!",
      image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=80",
    },
    rug: {
      title: "Legendary Rug Collector 🧶",
      text: "Your rug is so unique it gets featured in a Base museum.",
      image:
        "https://images.unsplash.com/photo-1520975698519-59c9e1a1b6b0?auto=format&fit=crop&w=800&q=80",
    },
    zen: {
      title: "Inner Peace 🌿",
      text: "You realize uniqueness isn’t found — it’s minted within.",
      image:
        "https://images.unsplash.com/photo-1524412529631-999815fca738?auto=format&fit=crop&w=800&q=80",
    },
  };

  const handleChoice = (choiceIndex: number) => {
    const next = scenes[scene].next[choiceIndex];
    if (typeof next === "string") {
      // random small chance to twist endings
      const twist = Math.random() < 0.2 ? "rug" : next;
      setEnding(twist);
    } else {
      setScene(next);
    }
  };

  const restart = () => {
    setScene(0);
    setEnding(null);
  };

  const data = ending ? endings[ending] : scenes[scene];

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "20px",
        background: "#f0f8ff",
        minHeight: "100vh",
      }}
    >
      <HeadMeta />
      <h1 style={{ fontSize: "1.5em" }}>{data.title}</h1>
      <img
        src={data.image}
        alt="scene"
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 12,
          margin: "20px auto",
        }}
      />
      <p>{data.text}</p>
      <div style={{ marginTop: 20 }}>
        {!ending
          ? data.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => handleChoice(i)}
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: 300,
                  margin: "10px auto",
                  padding: "10px",
                  borderRadius: 8,
                  border: "none",
                  background: "#0070f3",
                  color: "#fff",
                  fontSize: "1em",
                }}
              >
                {choice}
              </button>
            ))
          : (
            <>
              <button
                onClick={restart}
                style={{
                  background: "#0070f3",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "none",
                  fontSize: "1em",
                  marginRight: 10,
                }}
              >
                Play Again 🔁
              </button>
              <a
                href="https://warpcast.com/~/compose?text=I%20played%20UniqueQuest%20on%20Farcaster!%20Try%20it%20here:%20https://uniquequest.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#00acee",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: "1em",
                }}
              >
                Share on Farcaster 🚀
              </a>
            </>
          )}
      </div>
    </main>
  );
}

function HeadMeta() {
  return (
    <>
      <head>
        <title>UniqueQuest — A Farcaster Story Adventure</title>
        <meta name="description" content="Prove your uniqueness onchain in this Farcaster mini adventure." />
        <meta property="og:title" content="UniqueQuest — A Farcaster Story Adventure" />
        <meta property="og:description" content="Make choices, get rugged, or go viral. Your story awaits." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80" />

        {/* Farcaster Mini App tags */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="Play UniqueQuest 🎮" />
        <meta property="fc:frame:post_url" content="https://uniquequest.vercel.app" />
        <meta property="fc:app:name" content="UniqueQuest" />
        <meta property="fc:app:icon" content="https://images.unsplash.com/photo-1618477461855-363d5dc5a11d?auto=format&fit=crop&w=200&q=80" />
        <meta property="fc:app:url" content="https://uniquequest.vercel.app" />
      </head>
    </>
  );
}
