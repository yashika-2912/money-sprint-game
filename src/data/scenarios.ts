export interface Scenario {
  id: number;
  situation: string;
  context: string;
  options: {
    text: string;
    impact: number;
    isCorrect: boolean;
    tip: string;
  }[];
}

export const scenarios: Scenario[] = [
  {
    id: 1,
    situation: "Surprise Bonus! 💸",
    context: "You just received an unexpected $500 bonus from work. What's your first move?",
    options: [
      {
        text: "Treat yourself to a shopping spree",
        impact: -300,
        isCorrect: false,
        tip: "Impulse spending can derail your financial goals. Consider saving at least 50% of unexpected income!"
      },
      {
        text: "Put 80% in savings, 20% for fun",
        impact: 400,
        isCorrect: true,
        tip: "Great balance! The 80/20 rule helps you save while still enjoying life."
      },
      {
        text: "Lend it all to a friend",
        impact: -200,
        isCorrect: false,
        tip: "While helping others is kind, mixing money with friendships can be risky. Set boundaries!"
      }
    ]
  },
  {
    id: 2,
    situation: "Coffee Dilemma ☕",
    context: "You spend $6 daily on fancy coffee. Your friend suggests making coffee at home.",
    options: [
      {
        text: "Keep buying - it's only $6!",
        impact: -180,
        isCorrect: false,
        tip: "$6/day = $180/month = $2,160/year! Small daily expenses add up fast."
      },
      {
        text: "Buy a coffee maker and brew at home",
        impact: 150,
        isCorrect: true,
        tip: "Smart move! A $50 coffee maker can save you over $2,000 annually."
      },
      {
        text: "Switch to $3 coffee instead",
        impact: 50,
        isCorrect: false,
        tip: "Better, but you're still spending $90/month. Home brewing saves even more!"
      }
    ]
  },
  {
    id: 3,
    situation: "Emergency Fund 🚨",
    context: "You have $1,000 saved. Your car suddenly needs $400 in repairs.",
    options: [
      {
        text: "Use your credit card and pay minimum",
        impact: -150,
        isCorrect: false,
        tip: "Credit card interest (15-25% APR) can turn $400 into $500+ if not paid quickly!"
      },
      {
        text: "Use emergency fund, then rebuild it",
        impact: 100,
        isCorrect: true,
        tip: "This is exactly what emergency funds are for! No interest, no debt. Just remember to rebuild it."
      },
      {
        text: "Ignore the problem for now",
        impact: -300,
        isCorrect: false,
        tip: "Delaying repairs often makes them more expensive. Address problems early!"
      }
    ]
  },
  {
    id: 4,
    situation: "Subscription Audit 📱",
    context: "You're paying $75/month for streaming services you rarely use.",
    options: [
      {
        text: "Keep them all - you might watch them!",
        impact: -75,
        isCorrect: false,
        tip: "Unused subscriptions are 'zombie expenses' - they drain your wallet silently."
      },
      {
        text: "Cancel unused ones, keep favorites",
        impact: 50,
        isCorrect: true,
        tip: "Excellent! Review subscriptions quarterly. $50/month saved = $600/year!"
      },
      {
        text: "Cancel everything",
        impact: 25,
        isCorrect: false,
        tip: "While frugal, balance is key. Keep what brings genuine value to your life."
      }
    ]
  },
  {
    id: 5,
    situation: "Paycheck Strategy 💰",
    context: "You just got paid $3,000. How do you handle it?",
    options: [
      {
        text: "Spend now, save what's left later",
        impact: -100,
        isCorrect: false,
        tip: "This approach rarely leaves anything for savings. Pay yourself first!"
      },
      {
        text: "Follow 50/30/20: needs, wants, savings",
        impact: 200,
        isCorrect: true,
        tip: "The 50/30/20 rule is a proven budgeting method. 50% needs, 30% wants, 20% savings!"
      },
      {
        text: "Save 100%, live extremely frugally",
        impact: 50,
        isCorrect: false,
        tip: "Unsustainable long-term. Balance saving with quality of life."
      }
    ]
  },
  {
    id: 6,
    situation: "Sale Alert! 🏷️",
    context: "A store has 70% off on items you don't need. It's such a great deal!",
    options: [
      {
        text: "Buy everything - it's 70% off!",
        impact: -200,
        isCorrect: false,
        tip: "70% off something you don't need is still 100% wasted money!"
      },
      {
        text: "Walk away and stick to your list",
        impact: 100,
        isCorrect: true,
        tip: "The best deal is not buying what you don't need. Stay focused on your goals!"
      },
      {
        text: "Buy just one thing as a treat",
        impact: -25,
        isCorrect: false,
        tip: "Small 'treats' add up. Budget for planned treats instead of impulse buys."
      }
    ]
  },
  {
    id: 7,
    situation: "Investment Opportunity 📈",
    context: "A coworker says you can 'double your money' with a crypto tip. Guaranteed!",
    options: [
      {
        text: "Invest your entire savings",
        impact: -500,
        isCorrect: false,
        tip: "If it sounds too good to be true, it probably is. Never invest more than you can afford to lose!"
      },
      {
        text: "Research first, maybe invest a small amount",
        impact: 50,
        isCorrect: true,
        tip: "Smart approach! Always research investments and only risk money you can afford to lose."
      },
      {
        text: "Borrow money to invest more",
        impact: -400,
        isCorrect: false,
        tip: "Never borrow to invest in high-risk assets. This can lead to devastating losses."
      }
    ]
  },
  {
    id: 8,
    situation: "Dining Decisions 🍕",
    context: "You've been ordering takeout 5 times a week ($15 each). Your grocery budget is untouched.",
    options: [
      {
        text: "Continue - cooking is too time-consuming",
        impact: -150,
        isCorrect: false,
        tip: "$75/week on takeout = $300/month! Meal prep can cut this by 70%."
      },
      {
        text: "Meal prep on weekends, limit takeout to once a week",
        impact: 200,
        isCorrect: true,
        tip: "Meal prepping saves money AND time during busy weekdays. Great choice!"
      },
      {
        text: "Only eat instant noodles",
        impact: 0,
        isCorrect: false,
        tip: "Saving money shouldn't sacrifice your health. Balance is key!"
      }
    ]
  }
];
